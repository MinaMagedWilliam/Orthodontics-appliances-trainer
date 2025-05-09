// Function to load study materials (embedded to avoid CORS issues)
async function loadStudyMaterials() {
  console.log('Loading embedded study materials...');
  
  // This is where you would normally fetch from ortho_data.json
  // But since we're having CORS issues with local files, we'll embed the data here
  const embeddedData = [
    {
      title: "removable appliances",
      content: "",
      image: "images/ortho_Page5_Image1.jpg"
      },
    {
      title: "hawley retainer",
      content: "Hawley retainer used for retention after orthodontic treatment",
      image: "images/ortho_Page6_Image1.jpg"
      },

     {
      title: "hawley retainer",
      content: "Hawley retainer used for retention after orthodontic treatment",
      image: "images/ortho_Page7_Image1.jpg"
      },

     {
      title: "hawley retainer",
      content: "Hawley retainer used for retention after orthodontic treatment",
      image: "images/ortho_Page7_Image2.jpg"
      },

     {
      title: "modified hawley retainer",
      content: "used for retention after orthodontic treatment in extracted cases",
      image: "images/ortho_Page8_Image1.jpg"
      },

     {
      title: "modified hawley retainer",
      content: "used for retention after orthodontic treatment in extracted cases",
      image: "images/ortho_Page8_Image2.jpg"
      },

     {
      title: "Active removable appliances with finger springs",
      content: "Indicated in cases of mid line diastema closure",
      image: "images/ortho_Page9_Image1.jpg"
      },
    {
      title: "Active removable appliance with Z – spring",
      content: "Produce labial movement of teeth indicated in cases of anterior cross bite",
      image: "images/ortho_Page10_Image1.jpg"
      },

     {
      title: "Active removable appliance with Z – spring",
      content: "Produce labial movement of teeth indicated in cases of anterior cross bite",
      image: "images/ortho_Page10_Image2.jpg"
      },

     {
      title: "Active removable appliances with T-spring",
      content: "Produce labial movement of teeth indicated in cases of cross bite",
      image: "images/ortho_Page11_Image1.jpg"
      },

     {
      title: "Bi directional expansion screws",
      content: "Active removable appliance with expansion screw with posterior bite plane ",
      image: "images/ortho_Page12_Image1.jpg"
      },

     {
      title: "Three directional expansion screws",
      content: "Active removable appliance with three way expansion screw ",
      image: "images/ortho_Page12_Image2.jpg"
      },

     {
      title: "Uni directional expansion screw",
      content: "Active removable appliance with expansion screw",
      image: "images/ortho_Page13_Image1.jpg"
      },
      {
        title: "expansion screw with posterior bite plane ",
        content: "",
        image: "images/ortho1.jpg"
        },

     {
      title: "Removable appliance with anterior bite plane",
      content: "Indicated in cases of anterior deep bite cases",
      image: "images/ortho_Page14_Image1.jpg"
      },

     {
      title: "Removable appliance with anterior bite plane",
      content: "",
      image: "images/ortho_Page15_Image1.jpg"
      },

     {
      title: "Removable appliance with posterior bite plane",
      content: "",
      image: "images/ortho_Page16_Image1.jpg"
      },

     {
      title: "Oral screen",
      content: "Habit breaking appliances",
      image: "images/ortho_Page18_Image1.jpg"
      },

     {
      title: "double Oral screen",
      content: "",
      image: "images/ortho_Page18_Image2.jpg"
      },
     {
      title: "oral screen",
      content: "Habit breaking appliances",
  
      image: "images/ortho_Page19_Image2.jpg"
      },

     {
      title: "Tongue guard & cribs",
      content: "habit breaking appliances",
      image: "images/ortho_Page21_Image1.jpg"
      },

     {
      title: "Tongue guard & cribs",
      content: "habit breaking appliances",
      image: "images/ortho_Page21_Image2.jpg"
      },

     {
      title: "Lib bumper",
      content: "Habit breaking appliances",
      image: "images/ortho_Page22_Image2.jpg"
      },

     {
      title: "fixed appliance",
      content: "",
      image: "images/ortho_Page24_Image1.jpg"
      },

     {
      title: "buttons",
      content: "fixed appliance",
      image: "images/ortho_Page25_Image1.jpg"
      },

     {
      title: "buttons",
      content: "fixed appliance",
      image: "images/ortho_Page25_Image2.jpg"
      },

     {
      title: "Brackets welded to bands",
      content: "",
      image: "images/ortho_Page26_Image1.jpg"
      },

     {
      title: "Brackets welded to bands",
      content: "",
      image: "images/ortho_Page26_Image2.jpg"
      },

     {
      title: "O-ties",
      content: "",
      image: "images/ortho_Page27_Image1.jpg"
      },

     {
      title: "ligature wire",
      content: "",
      image: "images/ortho_Page27_Image2.jpg"
      },

     {
      title: "O-ties",
      content: "",
      image: "images/ortho_Page27_Image3.jpg"
      },

     {
      title: "self ligating brackets",
      content: "",
      image: "images/ortho_Page28_Image1.jpg"
      },

     {
      title: "coil spring",
      content: "",
      image: "images/ortho_Page29_Image1.jpg"
      },

     {
      title: "coil spring",
      content: "",
      image: "images/ortho_Page29_Image2.jpg"
      },

     {
      title: "Class II elastics",
      content: "",
      image: "images/ortho_Page29_Image3.jpg"
      },

     {
      title: "Class III elastics",
      content: "",
      image: "images/ortho_Page29_Image4.jpg"
      },

     {
      title: "Lingual appliances",
      content: "",
      image: "images/ortho_Page30_Image1.jpg"
      },

     {
      title: "Plastic brackets",
      content: "",
      image: "images/ortho_Page31_Image1.jpg"
      },

     {
      title: "Plastic brackets",
      content: "",
      image: "images/ortho_Page31_Image2.jpg"
      },

     {
      title: "Ceramic brackets",
      content: "",
      image: "images/ortho_Page32_Image1.jpg"
      },

     {
      title: "Lingual arch Space maintainer",
      content: "",
      image: "images/ortho_Page34_Image1.jpg"
      },

     {
      title: "Lingual arch Space maintainer",
      content: "",
      image: "images/ortho_Page34_Image2.jpg"
      },

     {
      title: "Lingual arch Space maintainer ",
      content: "",
      image: "images/ortho_Page34_Image3.jpg"
      },

     {
      title: "Nance appliance",
      content: "",
      image: "images/ortho_Page35_Image1.jpg"
      },

     {
      title: "Nance appliance",
      content: "",
      image: "images/ortho_Page35_Image2.jpg"
      },

     {
      title: "Trans palatal arch (TPA)",
      content: "",
      image: "images/ortho_Page36_Image1.jpg"
      },

     {
      title: "Trans palatal arch (TPA)",
      content: "",
      image: "images/ortho_Page36_Image2.jpg"
      },

     {
      title: "Trans palatal arch (TPA)",
      content: "",
      image: "images/ortho_Page37_Image1.jpg"
      },

     {
      title: "Band and loop space maintainer",
      content: "",
      image: "images/ortho_Page38_Image1.jpg"
      },

     {
      title: "crown and loop space maintainer",
      content: "",
      image: "images/ortho_Page38_Image2.jpg"
      },

     {
      title: "distal shoe space maintainer",
      content: "",
      image: "images/ortho_Page39_Image1.jpg"
      },

     {
      title: "distal shoe space maintainer",
      content: "",
      image: "images/ortho_Page39_Image2.jpg"
      },

     {
      title: "Modified fixed partial denture",
      content: "",
      image: "images/ortho_Page40_Image1.jpg"
      },

     {
      title: "Training palatal plate with oblique wall",
      content: "",
      image: "images/ortho_Page42_Image1.jpg"
      },

     {
      title: "lower inclined bite plane",
      content: "Catlan\’s appliance (Lower Inclined Bite Plane)",
      image: "images/ortho_Page42_Image2.jpg"
      },

     {
      title: "oral screen",
      content: "",
      image: "images/ortho_Page42_Image3.jpg"
      },

     {
      title: "Activator appliance",
      content: "",
      image: "images/ortho_Page43_Image1.jpg"
      },

     {
      title: "activator appliance",
      content: "",
      image: "images/ortho_Page43_Image2.jpg"
      },

     {
      title: "frankel II",
      content: "",
      image: "images/ortho_Page44_Image1.jpg"
      },

     {
      title: "Frankel III",
      content: "",
      image: "images/ortho_Page44_Image2.jpg"
      },

     {
      title: "Anderson activator (monoblock)",
      content: "Indicated in cases of skeletal class II due to deficient mandible in growing patient with favorable growth pattern",
      image: "images/ortho_Page46_Image1.jpg"
      },

     {
      title: "Twin block",
      content: "Indicated in cases of skeletal class II due to deficient mandible in growing patient with favorable growth pattern",
      image: "images/ortho_Page47_Image1.jpg"
      },

     {
      title: "Twin block",
      content: "Indicated in cases of skeletal class II due to deficient mandible in growing patient with favorable growth pattern",
      image: "images/ortho_Page47_Image2.jpg"
      },
     {
      title: "frankel II",
      content: "Indicated in cases of skeletal class II due to deficient mandible in",
      image: "images/ortho_Page52_Image1.jpg"
      },

     {
      title: "frankel III",
      content: "Indicated in cases of skeletal class III due to deficient maxilla in growing patient.",
      image: "images/ortho_Page52_Image2.jpg"
      },
     {
      title: "head gear",
      content: "Indicated in cases of skeletal class II due to excess maxilla in growing patient",
      image: "images/ortho_Page56_Image1.jpg"
      },

     {
      title: "Face mask",
      content: "Indicated in cases of skeletal class III due to deficient maxilla in growing patient",
      image: "images/ortho_Page57_Image1.jpg"
      },

     {
      title: "face mask",
      content: "",
      image: "images/ortho_Page58_Image1.jpg"
      },

     {
      title: "chin cup",
      content: "Indicated in cases of skeletal class III due to excess mandible in growing patient",
      image: "images/ortho_Page59_Image1.jpg"
      },

     {
      title: "Bonded hyrax",
      content: "Indicated in cases of constricted maxilla (skeletal cross bite)",
      image: "images/ortho_Page60_Image1.jpg"
      },

     {
      title: "Banded hyrax",
      content: "Indicated in cases of constricted maxilla (skeletal cross bite)",
      image: "images/ortho_Page60_Image2.jpg"
      },
      {
       title: "quad helix",
       content: "Indicated in cases of constricted maxilla (skeletal cross bite)",
       image: "images/quadhelix.jpg"
       },
       {
        title: "Twin block",
        content: "",
        image: "images/twinblock.jpg"
        },
        {
         title: "Twin block",
         content: "",
         image: "images/twinblock2.jpg"
         },
        {
         title: "essix retainer",
         content: "",
         image: "images/essix retainer.jpg"
         },

     
  ];
  
  console.log('Successfully loaded embedded data:', embeddedData);
  return embeddedData;
}

// Current item index
let currentIndex = 0;
let studyMaterials = []; // Will be populated from JSON

// Function to display current study item
function displayStudyItem(index) {
  const studyContainer = document.getElementById('study-container');
  const item = studyMaterials[index];
  
  // Create HTML for the study item
  const html = `
    <div class="study-item">
      <h2>${item.title}</h2>
      <div class="study-content">
        <p>${item.content}</p>
        ${item.image ? `<img src="${item.image}" alt="${item.title}" />` : ''}
      </div>
    </div>
  `;
  
  studyContainer.innerHTML = html;
}

// Function to update navigation button states
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === studyMaterials.length - 1;
}

// Event listeners for navigation buttons
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayStudyItem(currentIndex);
    updateNavigationButtons();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentIndex < studyMaterials.length - 1) {
    currentIndex++;
    displayStudyItem(currentIndex);
    updateNavigationButtons();
  }
});

// Initialize the study container with the first item when page loads
window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded, initializing study mode...');
  // Show loading state
  document.getElementById('study-container').innerHTML = '<div class="loading">Loading study materials...</div>';
  
  try {
    // Fetch study materials
    studyMaterials = await loadStudyMaterials();
    
    console.log(`Loaded ${studyMaterials.length} study materials`);
    
    if (studyMaterials.length > 0) {
      displayStudyItem(currentIndex);
      // Enable or disable navigation buttons based on available items
      updateNavigationButtons();
    } else {
      document.getElementById('study-container').innerHTML = '<p>No study materials available. Please check ortho_data.json file.</p>';
    }
  } catch (error) {
    console.error('Failed to initialize study mode:', error);
    document.getElementById('study-container').innerHTML = 
      `<p>Error loading study materials. See console for details.</p>
       <p>Error: ${error.message}</p>`;
  }
});

// For Test Mode
if (window.location.pathname.includes('test.html')) {
  loadXrayData().then(data => {
    const container = document.getElementById('test-container');
    const randomItem = data[Math.floor(Math.random() * data.length)];
    
    container.innerHTML = `
      <img src="images/${randomItem.image}" alt="slide">
      <input type="text" id="diagnosisInput" placeholder="Enter your diagnosis">
      <button onclick="checkAnswer('${randomItem.diagnosis}')">Submit</button>
      <p id="result"></p>
    `;
  });
}

function checkAnswer(correctDiagnosis) {
  const userInput = document.getElementById('diagnosisInput').value.trim().toLowerCase();
  const correct = correctDiagnosis.trim().toLowerCase();
  const result = document.getElementById('result');
  
  if (userInput === correct) {
    result.textContent = '✅ Correct!';
    result.style.color = 'green';
  } else {
    result.textContent = `❌ Wrong. Correct: ${correctDiagnosis}`;
    result.style.color = 'red';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const testContainer = document.getElementById('test-container');
  
  if (testContainer) {
    // Display loading message
    testContainer.innerHTML = '<p>Loading data...</p>';
    
    // Fetch data from JSONPlaceholder API (example public API)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Display the fetched data
        let html = '<h2>Fetched Data</h2>';
        html += '<ul class="user-list">';
        
        data.forEach(user => {
          html += `
            <li class="user-item">
              <h3>${user.name}</h3>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Website:</strong> ${user.website}</p>
            </li>
          `;
        });
        
        html += '</ul>';
        html += '<button id="refresh-btn">Refresh Data</button>';
        
        testContainer.innerHTML = html;
        
        // Add refresh functionality
        document.getElementById('refresh-btn').addEventListener('click', function() {
          location.reload();
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        testContainer.innerHTML = `
          <div class="error-message">
            <h2>Error Loading Data</h2>
            <p>${error.message}</p>
            <button id="retry-btn">Retry</button>
          </div>
        `;
        
        document.getElementById('retry-btn').addEventListener('click', function() {
          location.reload();
        });
      });
  }
});

// Function to initialize test mode
function initializeTestMode() {
  const testContainer = document.getElementById('test-container');
  
  if (testContainer) {
    console.log('Initializing test mode...');
    testContainer.innerHTML = '<p>Loading test materials...</p>';
    
    loadStudyMaterials()
      .then(data => {
        testContainer.innerHTML = '';
        startQuiz(data, testContainer);
      })
      .catch(error => {
        console.error('Error loading test materials:', error);
        testContainer.innerHTML = `
          <div class="error-message">
            <h2>Error Loading Test Materials</h2>
            <p>${error.message}</p>
            <button id="retry-btn">Retry</button>
          </div>
        `;
        
        document.getElementById('retry-btn').addEventListener('click', function() {
          initializeTestMode();
        });
      });
  }
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy to avoid modifying the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

// Function to start the quiz
function startQuiz(data, container) {
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Shuffle the data to randomize question order
  const shuffledData = shuffleArray(data);
  const totalQuestions = shuffledData.length;
  
  function showQuestion(index) {
    const item = shuffledData[index];
    
    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-progress">Question ${index + 1} of ${totalQuestions} | Score: ${score}</div>
        <div class="quiz-image">
          <img src="${item.image}" alt="Slide image" onerror="this.src='images/placeholder.png'">
        </div>
        <div class="quiz-form">
          <label for="answer-input">What is the title/diagnosis of this image?</label>
          <input type="text" id="answer-input" placeholder="Type your answer here" autocomplete="off">
          <button id="submit-answer">Submit Answer</button>
        </div>
        <div id="feedback" class="quiz-feedback"></div>
      </div>
    `;
    
    // Focus on the input field
    setTimeout(() => {
      const input = document.getElementById('answer-input');
      if (input) input.focus();
    }, 100);
    
    // Handle form submission
    document.getElementById('submit-answer').addEventListener('click', checkUserAnswer);
    document.getElementById('answer-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') checkUserAnswer();
    });
    
    function checkUserAnswer() {
      const userAnswer = document.getElementById('answer-input').value.trim();
      const correctAnswer = item.title.trim();
      const feedback = document.getElementById('feedback');
      
      // Immediately handle empty or very short answers as incorrect
      if (!userAnswer || userAnswer.length < 3) {
        feedback.innerHTML = `
          <div class="incorrect">
            <h3>❌ Incorrect</h3>
            <p>${!userAnswer ? "You didn't provide an answer." : "Your answer is too short."}</p>
            <p>The correct answer is: ${correctAnswer}</p>
          </div>
        `;
      } else {
        // Make answer checking more lenient - user doesn't need to write the full title
        const userWords = userAnswer.toLowerCase().split(/\s+/);
        const correctWords = correctAnswer.toLowerCase().split(/\s+/);
        
        // Check if user has typed significant keywords from the title
        let keywordsMatched = 0;
        for (const userWord of userWords) {
          if (userWord.length < 3) continue; // Skip very short words
          
          for (const correctWord of correctWords) {
            if (correctWord.length < 3) continue; // Skip very short words
            
            // Make similarity threshold proportional to word length for short words
            const minWordLength = Math.min(userWord.length, correctWord.length);
            const similarityThreshold = minWordLength <= 3 ? 0.9 : 0.7;
            
            // Check if words are similar enough (handles spelling mistakes)
            if (calculateSimilarity(userWord, correctWord) > similarityThreshold) {
              keywordsMatched++;
              break;
            }
          }
        }
        
        // Require more substantial matching for correct answer
        const keywordThreshold = Math.min(2, Math.floor(correctWords.length / 2));
        const overallSimilarity = calculateSimilarity(userAnswer.toLowerCase(), correctAnswer.toLowerCase());
        
        // More strict checks for short answers
        const isCorrect = userAnswer.length >= 3 && (
          (keywordsMatched >= keywordThreshold) || 
          (overallSimilarity >= (userAnswer.length < 5 ? 0.8 : 0.6))
        );
        
        if (isCorrect) {
          score++;
          feedback.innerHTML = `
            <div class="correct">
              <h3>✅ Correct!</h3>
              <p>The full answer is: ${correctAnswer}</p>
            </div>
          `;
        } else {
          feedback.innerHTML = `
            <div class="incorrect">
              <h3>❌ Incorrect</h3>
              <p>The correct answer is: ${correctAnswer}</p>
              <p>Your answer was: ${userAnswer}</p>
            </div>
          `;
        }
      }
      
      // Add next button
      feedback.innerHTML += `
        <button id="next-question" class="next-btn">
          ${currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
        </button>
      `;
      
      document.getElementById('next-question').addEventListener('click', function() {
        if (currentQuestionIndex < totalQuestions - 1) {
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        } else {
          showResults();
        }
      });
      
      // Disable input and submit button
      document.getElementById('answer-input').disabled = true;
      document.getElementById('submit-answer').disabled = true;
    }
  }
  
  function showResults() {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    container.innerHTML = `
      <div class="quiz-results">
        <h2>Quiz Completed!</h2>
        <p>Your score: ${score} out of ${totalQuestions} (${percentage}%)</p>
        <div class="results-feedback">
          ${percentage >= 80 ? 
            '<p>Excellent! You have great knowledge of these Slides.</p>' : 
            percentage >= 60 ? 
            '<p>Good job! Keep studying to improve.</p>' : 
            '<p>You might need more practice with these Slides.</p>'}
        </div>
        <button id="restart-quiz">Restart Quiz</button>
      </div>
    `;
    
    document.getElementById('restart-quiz').addEventListener('click', function() {
      currentQuestionIndex = 0;
      score = 0;
      showQuestion(currentQuestionIndex);
    });
  }
  
  // Start with the first question
  showQuestion(currentQuestionIndex);
}

// Function to calculate text similarity (Levenshtein distance based)
function calculateSimilarity(str1, str2) {
  // If either string is empty, return 0
  if (!str1.length || !str2.length) return 0;
  
  // If the strings are identical, return 1
  if (str1 === str2) return 1;
  
  // Create a matrix of distances
  const matrix = Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0));
  
  // Initialize first row and column
  for (let i = 0; i <= str1.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= str2.length; j++) matrix[0][j] = j;
  
  // Fill the matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  
  // Calculate the maximum possible distance
  const maxDistance = Math.max(str1.length, str2.length);
  // Calculate normalized similarity (1 - normalized distance)
  return 1 - (matrix[str1.length][str2.length] / maxDistance);
}

// Initialize test mode if we're on the test page
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('test-container')) {
    initializeTestMode();
  }
});
