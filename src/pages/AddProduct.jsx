import React, { useState, useEffect } from 'react';
import {
  addNewProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../firebase/firebaseServices';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { v4 as uuidv4 } from 'uuid';

const categoryOptions = [
  { value: '', label: 'Select Category' },
  { value: 'duvets', label: 'Duvets' },
  { value: 'bedding', label: 'Bedding' },
  { value: 'pillow', label: 'Pillow' },
  { value: 'mattress', label: 'Mattress' },
  { value: 'sheets', label: 'Sheets' },
];

// Define size options based on category
const sizeOptions = {
  duvets: ['Single', 'Double', 'Queen', 'King'],
  bedding: ['Twin', 'Full', 'Queen', 'King'],
  pillow: ['Standard', 'Queen', 'King'],
  mattress: ['Twin', 'Full', 'Queen', 'King', 'California King'],
  sheets: ['Twin', 'Full', 'Queen', 'King', 'California King'],
};

// Define color options
const colorOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Gray', 'Black', 'White'];

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    details: {
      material: '',
      dimensions: '',
      careInstructions: '',
      warranty: '',
    },
    variants: [], // Array of variant objects
  });
  const [images, setImages] = useState({
    primaryImage: null,
    additionalImages: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // State for existing products
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For editing

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        setProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Handle input changes for name, price, category, description
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested 'details' fields
    if (name.startsWith('details.')) {
      const detailField = name.split('.')[1];
      setProductData((prev) => ({
        ...prev,
        details: {
          ...prev.details,
          [detailField]: value,
        },
      }));
    } else {
      setProductData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Reset variants if category changes
    if (name === 'category') {
      setProductData((prev) => ({
        ...prev,
        variants: [],
      }));
    }
  };

  // Handle adding a new variant
  const handleAddVariant = () => {
    if (!productData.category) {
      alert('Please select a category before adding variants.');
      return;
    }

    setProductData((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        {
          id: uuidv4(),
          size: '',
          color: '',
          stock: 0,
        },
      ],
    }));
  };

  // Handle removing a variant
  const handleRemoveVariant = (variantId) => {
    setProductData((prev) => ({
      ...prev,
      variants: prev.variants.filter(variant => variant.id !== variantId),
    }));
  };

  // Handle variant change
  const handleVariantChange = (variantId, field, value) => {
    setProductData((prev) => ({
      ...prev,
      variants: prev.variants.map(variant =>
        variant.id === variantId ? { ...variant, [field]: value } : variant
      ),
    }));
  };

  // Handle primary image change
  const handlePrimaryImageChange = (e) => {
    if (e.target.files[0]) {
      setImages((prev) => ({
        ...prev,
        primaryImage: e.target.files[0],
      }));
    }
  };

  // Handle additional images change
  const handleAdditionalImagesChange = (e) => {
    if (e.target.files) {
      setImages((prev) => ({
        ...prev,
        additionalImages: Array.from(e.target.files),
      }));
    }
  };

  // Handle form submission for adding/editing product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validate variants
    if (productData.variants.length === 0) {
      setError('Please add at least one variant.');
      setLoading(false);
      return;
    }

    for (const variant of productData.variants) {
      if (!variant.size || !variant.color) {
        setError('All variants must have a size and a color.');
        setLoading(false);
        return;
      }
      if (variant.stock < 0) {
        setError('Stock for each variant cannot be negative.');
        setLoading(false);
        return;
      }
    }

    // Validate details
    const { material, dimensions, careInstructions, warranty } = productData.details;
    if (!material || !dimensions || !careInstructions || !warranty) {
      setError('All detail fields must be filled out.');
      setLoading(false);
      return;
    }

    try {
      if (selectedProduct) {
        // Update existing product
        const updatedData = {
          ...productData,
        };

        // If new images are uploaded, handle them
        if (images.primaryImage) {
          // TODO: Optionally, delete old primary image from storage
          // For simplicity, we're not handling deletion here
          const primaryImageUrl = await uploadImage(images.primaryImage);
          updatedData.primaryImage = primaryImageUrl;
        }

        if (images.additionalImages.length > 0) {
          // TODO: Optionally, delete old additional images from storage
          const additionalImageUrls = await uploadMultipleImages(images.additionalImages);
          updatedData.additionalImages = additionalImageUrls;
        }

        await updateProduct(selectedProduct.id, updatedData);
        setSuccess('Product updated successfully!');
        setSelectedProduct(null);
      } else {
        // Add new product
        const newProductId = await addNewProduct(productData, images.primaryImage, images.additionalImages);
        setSuccess('Product added successfully!');
      }

      // Reset form
      setProductData({
        name: '',
        price: '',
        category: '',
        description: '',
        details: {
          material: '',
          dimensions: '',
          careInstructions: '',
          warranty: '',
        },
        variants: [],
      });
      setImages({
        primaryImage: null,
        additionalImages: [],
      });

      // Refresh products list
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Utility function to upload a single image and return its URL
  const uploadImage = async (imageFile) => {
    try {
      const imageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (err) {
      console.error("Error uploading image:", err);
      throw err;
    }
  };

  // Utility function to upload multiple images and return their URLs
  const uploadMultipleImages = async (imageFiles) => {
    try {
      const uploadPromises = imageFiles.map(async (file) => uploadImage(file));
      const urls = await Promise.all(uploadPromises);
      return urls;
    } catch (err) {
      console.error("Error uploading multiple images:", err);
      throw err;
    }
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setProductData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      details: { ...product.details },
      variants: product.variants.map(variant => ({ ...variant, id: uuidv4() })),
    });
    setImages({
      primaryImage: null, // Reset images; new images can be uploaded if needed
      additionalImages: [],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle deleting a product
  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(productId);
      setSuccess('Product deleted successfully!');
      // Refresh products list
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    } catch (err) {
      console.error("Error deleting product:", err);
      setError('Failed to delete product. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
    <div className="container mx-auto px-4 py-8 pt-[100px]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

        {/* Success and Error Messages */}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Product Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedProduct ? 'Edit Product' : 'Add New Product'}
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter product name"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">Price (₹)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter product price"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            >
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter product description"
            />
          </div>

          {/* Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Product Details</h3>
            {/* Material */}
            <div className="mb-4">
              <label htmlFor="details.material" className="block text-gray-700">Material</label>
              <input
                type="text"
                id="details.material"
                name="details.material"
                value={productData.details.material}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter material"
              />
            </div>

            {/* Dimensions */}
            <div className="mb-4">
              <label htmlFor="details.dimensions" className="block text-gray-700">Dimensions</label>
              <input
                type="text"
                id="details.dimensions"
                name="details.dimensions"
                value={productData.details.dimensions}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter dimensions"
              />
            </div>

            {/* Care Instructions */}
            <div className="mb-4">
              <label htmlFor="details.careInstructions" className="block text-gray-700">Care Instructions</label>
              <textarea
                id="details.careInstructions"
                name="details.careInstructions"
                value={productData.details.careInstructions}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter care instructions"
              />
            </div>

            {/* Warranty */}
            <div className="mb-4">
              <label htmlFor="details.warranty" className="block text-gray-700">Warranty</label>
              <input
                type="text"
                id="details.warranty"
                name="details.warranty"
                value={productData.details.warranty}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter warranty information"
              />
            </div>
          </div>

          {/* Variants */}
          <div className="mb-6">
            <label className="block text-gray-700">Variants</label>
            {productData.variants.map((variant, index) => (
              <div key={variant.id} className="flex items-center space-x-4 mt-2">
                {/* Size Dropdown */}
                <select
                  value={variant.size}
                  onChange={(e) => handleVariantChange(variant.id, 'size', e.target.value)}
                  required
                  className="px-3 py-2 border rounded"
                >
                  <option value="">Select Size</option>
                  {productData.category && sizeOptions[productData.category].map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>

                {/* Color Dropdown */}
                <select
                  value={variant.color}
                  onChange={(e) => handleVariantChange(variant.id, 'color', e.target.value)}
                  required
                  className="px-3 py-2 border rounded"
                >
                  <option value="">Select Color</option>
                  {colorOptions.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>

                {/* Stock Input */}
                <input
                  type="number"
                  min="0"
                  value={variant.stock}
                  onChange={(e) => handleVariantChange(variant.id, 'stock', parseInt(e.target.value) || 0)}
                  required
                  className="w-24 px-3 py-2 border rounded"
                  placeholder="Stock"
                />

                {/* Remove Variant Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveVariant(variant.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Add Variant Button */}
            <button
              type="button"
              onClick={handleAddVariant}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Add Variant
            </button>
          </div>

          {/* Primary Image */}
          <div className="mb-4">
            <label className="block text-gray-700">Primary Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePrimaryImageChange}
              className="mt-1 block w-full"
              {...(selectedProduct ? {} : { required: true })}
            />
            {selectedProduct && !images.primaryImage && (
              <p className="text-gray-600 text-sm">Leave blank to keep existing image.</p>
            )}
          </div>

          {/* Additional Images */}
          <div className="mb-4">
            <label className="block text-gray-700">Additional Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalImagesChange}
              className="mt-1 block w-full"
            />
            {selectedProduct && images.additionalImages.length === 0 && (
              <p className="text-gray-600 text-sm">Leave blank to keep existing additional images.</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {selectedProduct ? (loading ? 'Updating...' : 'Update Product') : (loading ? 'Adding...' : 'Add Product')}
            </button>
            {selectedProduct && (
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  setProductData({
                    name: '',
                    price: '',
                    category: '',
                    description: '',
                    details: {
                      material: '',
                      dimensions: '',
                      careInstructions: '',
                      warranty: '',
                    },
                    variants: [],
                  });
                  setImages({
                    primaryImage: null,
                    additionalImages: [],
                  });
                }}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Existing Products List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Existing Products</h2>
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Image</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Price (₹)</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Variants</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} className="text-center">
                      <td className="py-2 px-4 border-b">
                        <img src={product.primaryImage || 'https://via.placeholder.com/64'} alt={product.name} className="w-16 h-16 object-cover rounded" />
                      </td>
                      <td className="py-2 px-4 border-b">{product.name}</td>
                      <td className="py-2 px-4 border-b">{product.price.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b capitalize">{product.category}</td>
                      <td className="py-2 px-4 border-b">
                        {product.variants && product.variants.length > 0 ? (
                          <ul className="text-left">
                            {product.variants.map(variant => (
                              <li key={variant.id}>
                                Size: {variant.size}, Color: {variant.color}, Stock: {variant.stock}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          'N/A'
                        )}
                      </td>
                      <td className="py-2 px-4 border-b space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default AddProduct;
