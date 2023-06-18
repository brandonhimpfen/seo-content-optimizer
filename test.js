// test.js

const { calculateKeywordDensity, calculateReadability } = require('./index');

// Example usage
const text = 'The rapid advancement of technology has revolutionized various aspects of our lives, and the field of education is no exception. In today\'s digital age, universities are embracing innovative approaches to teaching and learning. Online learning platforms have gained popularity, providing students with flexible schedules and access to a vast array of educational resources. Furthermore, emerging technologies such as artificial intelligence and virtual reality are being integrated into educational practices, enhancing student engagement and improving learning outcomes. As universities adapt to this evolving landscape, they are also addressing the importance of critical thinking, creativity, and problem-solving skills in preparing students for the complexities of the modern world. With interdisciplinary research becoming increasingly prevalent, universities are fostering collaborations across departments and encouraging students to explore diverse fields of study. This multidisciplinary approach promotes a holistic understanding of complex issues and prepares graduates to tackle real-world challenges. As the educational landscape continues to evolve, universities remain at the forefront of knowledge dissemination, shaping the next generation of thinkers, innovators, and leaders.';
const keyword = 'learning';
const density = calculateKeywordDensity(text, keyword);
const readability = calculateReadability(text);

console.log('Keyword Density:', density);
console.log('Readability Score:', readability);
