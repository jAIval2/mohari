# E-Commerce Storefront

Welcome to the ***Mohari***, a dynamic and user-friendly online shopping platform built with React and Firebase. This application provides a seamless shopping experience, allowing users to browse products, manage their cart, and complete purchases with real-time stock updates ensuring accurate product availability.

## Table of Contents
- [User Journey](#user-journey)
- [Features](#features)
- [Unique Qualities](#unique-qualities)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [License](#license)

## User Journey

1. **Browsing Products:**
   - Users land on the homepage featuring a diverse range of products.
   - They can navigate through various categories or use the search functionality to find specific items.

2. **Viewing Product Details:**
   - Clicking on a product redirects users to the **Product Details** page.
   - Here, users can view high-resolution images, detailed descriptions, available sizes and colors, and read customer reviews.

3. **Selecting Variants:**
   - Users can select their preferred size and color based on available stock.
   - The interface dynamically updates available options to prevent selection of out-of-stock variants.

4. **Managing Cart:**
   - Users add desired products to their cart.
   - The cart updates in real-time, reflecting current stock levels and allowing quantity adjustments.
   - Users receive immediate feedback upon adding items to the cart.

5. **Checkout Process:**
   - Proceeding to checkout, users provide shipping information and select a payment method.
   - Upon order placement, stock levels are atomically decremented to maintain inventory accuracy.
   - Users receive order confirmations and can track their order status.

6. **Real-Time Updates:**
   - The platform listens for real-time updates to product stock, ensuring users always see the most current availability.
   - Any changes in inventory are instantly reflected across the user interface.

## Features

- **Dynamic Product Catalog:**
  - Comprehensive listing of products with detailed information and multiple variants (size, color).

- **Real-Time Stock Management:**
  - Utilizes Firestore's `onSnapshot` for live updates on product availability.

- **Shopping Cart:**
  - Persistent cart using `localStorage`, allowing users to manage their selections seamlessly.

- **User Authentication:**
  - Secure user registration and login system to manage orders and personal information.

- **Order Processing:**
  - Robust order placement system with atomic transactions to ensure stock integrity.

- **Responsive Design:**
  - Mobile-friendly layout ensuring optimal user experience across all devices.

- **User Reviews:**
  - Feature-rich reviews section where users can read and submit product feedback.

- **Error Handling & Notifications:**
  - Enhanced user feedback mechanisms using toast notifications for actions and errors.

## Unique Qualities

- **Atomic Stock Transactions:**
  - Leveraging Firestore transactions to prevent race conditions, ensuring accurate stock levels even during high traffic.

- **Real-Time Inventory Synchronization:**
  - Immediate reflection of stock changes across the platform, enhancing user trust and reducing purchase errors.

- **Adaptive UI Components:**
  - Intelligent UI elements that adjust available options based on real-time data, improving user interaction and satisfaction.

- **Comprehensive Error Handling:**
  - Graceful handling of potential issues with informative feedback, ensuring a smooth user experience.

- **Scalable Architecture:**
  - Built with scalability in mind, allowing easy addition of new features and handling increasing user loads efficiently.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/) – A JavaScript library for building user interfaces.
  - [React Router](https://reactrouter.com/) – For routing and navigation.
  - [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.

- **Backend & Database:**
  - [Firebase Firestore](https://firebase.google.com/docs/firestore) – Real-time NoSQL database for managing products, orders, and user data.
  - [Firebase Authentication](https://firebase.google.com/docs/auth) – For secure user authentication.

- **State Management:**
  - [React Context API](https://reactjs.org/docs/context.html) – For managing global state like the shopping cart.

- **Others:**
  - [PropTypes](https://www.npmjs.com/package/prop-types) – For type-checking React props.
  - [React Toastify](https://fkhadra.github.io/react-toastify/) – For elegant toast notifications.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **Yarn** package manager
- **Firebase Account** with Firestore and Authentication enabled

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/e-commerce-storefront.git
   cd e-commerce-storefront
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Firebase:**
   - Create a `.env` file in the root directory.
   - Add your Firebase project configurations:
     ```
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     ```

4. **Run the Application:**
   ```bash
   npm start
   # or
   yarn start
   ```
   - The app will be available at `http://localhost:3000`.

## License

This project is licensed under the [MIT License](LICENSE).

---
