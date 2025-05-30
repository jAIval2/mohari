// List of emojis and their corresponding emotions for the challenge
const emojis = [
  { emoji: "😀", emotion: "happy" },
  { emoji: "😢", emotion: "sad" },
  { emoji: "😡", emotion: "angry" },
  { emoji: "😱", emotion: "scared" },
  { emoji: "😲", emotion: "surprised" },
  { emoji: "🤔", emotion: "thinking" },
  { emoji: "😍", emotion: "love" },
  { emoji: "🤢", emotion: "disgusted" },
  { emoji: "😴", emotion: "sleepy" },
  { emoji: "😊", emotion: "content" },
  { emoji: "🙄", emotion: "annoyed" },
  { emoji: "😬", emotion: "nervous" },
  { emoji: "🥺", emotion: "pleading" },
  { emoji: "😎", emotion: "cool" },
  { emoji: "🤩", emotion: "excited" },
  { emoji: "😤", emotion: "frustrated" },
  { emoji: "😂", emotion: "laughing" },
  { emoji: "😭", emotion: "crying" },
  { emoji: "😮‍💨", emotion: "relieved" },
  { emoji: "🫤", emotion: "unimpressed" },
];

// Function to get random emojis for the challenge
export const getRandomEmojis = (count = 3) => {
  const shuffled = [...emojis].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to get a random emoji that doesn't match the emotion (for distractors)
export const getRandomDistractorEmoji = (emotion) => {
  const filtered = emojis.filter(e => e.emotion !== emotion);
  return filtered[Math.floor(Math.random() * filtered.length)];
};

// Function to generate an emoji challenge
export const generateChallenge = (numberOfChallenges = 3) => {
  const challenges = [];
  
  for (let i = 0; i < numberOfChallenges; i++) {
    // Get a random emoji for the challenge
    const targetEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Get 3 random distractors (different emotions)
    const distractors = [];
    while (distractors.length < 3) {
      const distractor = getRandomDistractorEmoji(targetEmoji.emotion);
      // Avoid duplicates
      if (!distractors.some(d => d.emotion === distractor.emotion)) {
        distractors.push(distractor);
      }
    }
    
    // Create the challenge options by combining target with distractors and shuffling
    const options = [targetEmoji, ...distractors].sort(() => 0.5 - Math.random());
    
    challenges.push({
      targetEmoji,
      options,
    });
  }
  
  return challenges;
};

// Function to validate emoji challenge responses
export const validateEmotionChallenge = (userAnswers, challenges) => {
  let correctAnswers = 0;
  
  for (let i = 0; i < challenges.length; i++) {
    if (userAnswers[i] === challenges[i].targetEmoji.emotion) {
      correctAnswers++;
    }
  }
  
  // Pass if at least 2 out of 3 are correct (66% success rate)
  return correctAnswers >= 2;
};

export default emojis;
