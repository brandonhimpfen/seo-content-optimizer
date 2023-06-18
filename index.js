// index.js

// Function to calculate keyword density
function calculateKeywordDensity(text, keyword) {
  const wordCount = text.split(' ').length;
  const keywordCount = countKeywordOccurrences(text, keyword);
  const density = (keywordCount / wordCount) * 100;
  return density.toFixed(2);
}

// Helper function to count keyword occurrences
function countKeywordOccurrences(text, keyword) {
  const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Function to calculate readability score
function calculateReadability(text) {
  const textReadability = require('text-readability');
  const score = textReadability.fleschKincaidGrade(text);
  return score.toFixed(2);
}

// Export the functions for use in other modules
module.exports = {
  calculateKeywordDensity,
  calculateReadability,
};
