const questionBank = [];

function addQuestion(category, prompt, options, answerIndex) {
  questionBank.push({ category, prompt, options, answerIndex });
}

for (let i = 1; i <= 20; i += 1) {
  const a = 6 + i;
  const b = 4 + (i % 6);

  if (i % 4 === 0) {
    const sum = a + b;
    addQuestion("Math", `What is ${a} + ${b}?`, [String(sum), String(sum + 2), String(sum - 1), String(sum + 5)], 0);
  } else if (i % 4 === 1) {
    const diff = a - b;
    addQuestion("Math", `What is ${a} - ${b}?`, [String(diff), String(diff + 3), String(diff - 2), String(diff + 7)], 0);
  } else if (i % 4 === 2) {
    const product = a * b;
    addQuestion("Math", `What is ${a} × ${b}?`, [String(product), String(product + 4), String(product - 3), String(product + 10)], 0);
  } else {
    const quotient = Math.floor(a / b);
    addQuestion("Math", `What is ${a} ÷ ${b}?`, [String(quotient), String(quotient + 2), String(quotient - 1), String(quotient + 6)], 0);
  }
}

const gkQuestions = [
  ["What is the capital of France?", ["Paris", "Rome", "Berlin", "Madrid"], 0],
  ["Which planet is known as the Red Planet?", ["Mars", "Venus", "Mercury", "Jupiter"], 0],
  ["How many continents are there?", ["7", "5", "6", "8"], 0],
  ["Who is the author of 'Hamlet'?", ["William Shakespeare", "Jane Austen", "George Orwell", "Charles Dickens"], 0],
  ["What is the largest ocean on Earth?", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], 0],
  ["What is the national animal of India?", ["Tiger", "Elephant", "Lion", "Camel"], 0],
  ["Which country is famous for the pyramids?", ["Egypt", "Greece", "Italy", "Mexico"], 0],
  ["What is the chemical symbol for water?", ["H2O", "CO2", "NaCl", "O2"], 0],
  ["Which is the longest river in the world?", ["Nile", "Amazon", "Yangtze", "Mississippi"], 0],
  ["What is the currency of Japan?", ["Yen", "Won", "Rupee", "Dollar"], 0],
  ["Which instrument has 88 keys?", ["Piano", "Guitar", "Violin", "Drum"], 0],
  ["What is the powerhouse of the cell?", ["Mitochondria", "Nucleus", "Ribosome", "Cell wall"], 0],
  ["How many days are in a leap year?", ["366", "365", "364", "360"], 0],
  ["Which gas do plants absorb from the atmosphere?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 0],
  ["Who was the first man to step on the moon?", ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], 0],
  ["What is the capital of Australia?", ["Canberra", "Sydney", "Melbourne", "Perth"], 0],
  ["Which language has the most native speakers?", ["Mandarin Chinese", "English", "Spanish", "Hindi"], 0],
  ["Which desert is the largest hot desert?", ["Sahara", "Arabian", "Kalahari", "Gobi"], 0],
  ["What is the smallest planet in our solar system?", ["Mercury", "Mars", "Venus", "Pluto"], 0],
  ["Which country gifted the Statue of Liberty to the USA?", ["France", "England", "Germany", "Italy"], 0],
  ["What do bees produce?", ["Honey", "Milk", "Silk", "Wax"], 0],
  ["Which ocean lies on the east coast of India?", ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Pacific Ocean"], 0],
  ["What is the capital of Canada?", ["Ottawa", "Toronto", "Vancouver", "Montreal"], 0],
  ["Which planet is called the Morning Star?", ["Venus", "Mars", "Mercury", "Saturn"], 0],
  ["How many bones does an adult human have?", ["206", "208", "210", "204"], 0],
  ["Which organ pumps blood in the human body?", ["Heart", "Liver", "Lungs", "Kidney"], 0],
  ["What is the speed of light?", ["Approximately 300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], 0],
  ["Who invented the telephone?", ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"], 0],
  ["What does HTML stand for?", ["HyperText Markup Language", "High Transfer Machine Language", "Hyperlink Text Media Language", "Home Tool Markup Language"], 0],
  ["Which bird can fly backward?", ["Hummingbird", "Eagle", "Owl", "Sparrow"], 0],
  ["What is the capital of South Africa?", ["Pretoria", "Cape Town", "Johannesburg", "Durban"], 0],
  ["Which country is known as the Land of the Rising Sun?", ["Japan", "China", "Korea", "Thailand"], 0],
  ["What is the largest mammal?", ["Blue whale", "Elephant", "Giraffe", "Whale shark"], 0],
  ["Which month has 28 days?", ["All months", "February", "January", "April"], 0],
  ["What is the capital of Brazil?", ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"], 0],
  ["Which element is represented by the symbol Fe?", ["Iron", "Gold", "Silver", "Copper"], 0],
  ["What is the primary language spoken in Egypt?", ["Arabic", "English", "French", "Persian"], 0],
  ["Which is the hottest continent?", ["Africa", "Asia", "Australia", "Antarctica"], 0],
  ["What is the capital of Italy?", ["Rome", "Milan", "Florence", "Naples"], 0],
  ["Who painted the Mona Lisa?", ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], 0],
];

for (const [prompt, options, answerIndex] of gkQuestions) {
  addQuestion("GK", prompt, options, answerIndex);
}

const grammarQuestions = [
  ["Choose the correct sentence.", ["She go to school daily.", "She goes to school daily.", "She going to school daily.", "She gone to school daily."], 1],
  ["Which word is a pronoun?", ["Run", "He", "Happy", "Quickly"], 1],
  ["Choose the correct verb: They ___ playing football.", ["is", "are", "am", "be"], 1],
  ["What is the plural of 'child'?", ["Childs", "Children", "Childes", "Childer"], 1],
  ["Which word is an adjective?", ["Quickly", "Beautiful", "Run", "Yesterday"], 1],
  ["Complete the sentence: I ___ my homework yesterday.", ["do", "did", "done", "does"], 1],
  ["Choose the correct punctuation: I have a pen ___", [".", ",", "!", "?"], 1],
  ["Which sentence is correct?", ["He don't know the answer.", "He doesn't know the answer.", "He didn't knew the answer.", "He not know the answer."], 1],
  ["What is the opposite of 'happy'?", ["Sad", "Joyful", "Bright", "Cheerful"], 0],
  ["Choose the correct article: ___ apple a day keeps the doctor away.", ["A", "An", "The", "No article"], 1],
  ["Which word is a conjunction?", ["And", "Blue", "Cat", "Slowly"], 0],
  ["Complete the sentence: We ___ to the park last Sunday.", ["go", "went", "gone", "going"], 1],
  ["Which is a proper noun?", ["London", "City", "River", "Book"], 0],
  ["Choose the correct form: She ___ a singer.", ["am", "is", "are", "be"], 1],
  ["What is the past tense of 'eat'?", ["Ate", "Eaten", "Eating", "Eats"], 0],
  ["Choose the correct sentence.", ["My friend are nice.", "My friend is nice.", "My friend were nice.", "My friend be nice."], 1],
  ["Which word is an adverb?", ["Beautiful", "Quickly", "Table", "House"], 1],
  ["Complete the sentence: There is ___ milk in the bottle.", ["many", "much", "some", "few"], 2],
  ["Choose the correct spelling.", ["Recieve", "Receive", "Receeve", "Receve"], 1],
  ["What is the superlative form of 'big'?", ["Biggest", "Bigger", "More big", "Big"], 0],
  ["Choose the correct sentence.", ["I am going to school yesterday.", "I went to school yesterday.", "I will go to school yesterday.", "I go to school yesterday."], 1],
  ["What is the opposite of 'strong'?", ["Weak", "Powerful", "Tall", "Fast"], 0],
  ["Complete the sentence: She has ___ books on the shelf.", ["many", "much", "little", "less"], 0],
  ["Which word is a noun?", ["Jump", "House", "Run", "Brightly"], 1],
  ["Choose the correct sentence.", ["I has a new bicycle.", "I have a new bicycle.", "I having a new bicycle.", "I had a new bicycle."], 1],
  ["What is the comparative form of 'good'?", ["Better", "Best", "Gooder", "More good"], 0],
  ["Choose the correct preposition: The cat is ___ the table.", ["in", "on", "at", "under"], 1],
  ["Fill in the blank: The sun ___ in the east.", ["rise", "rises", "rising", "rose"], 1],
  ["What is the plural of 'mouse'?", ["Mouses", "Mice", "Mouse", "Mices"], 1],
  ["Choose the correct sentence.", ["We was happy.", "We were happy.", "We is happy.", "We be happy."], 1],
  ["Which word is a verb?", ["Book", "Jump", "Beautiful", "Carefully"], 1],
  ["Complete the sentence: She ___ a letter now.", ["writes", "is writing", "wrote", "write"], 1],
  ["Choose the correct sentence.", ["The dog barks loudly.", "The dog bark loudly.", "The dog barking loudly.", "The dog barked loudly."], 0],
  ["What is the feminine form of 'actor'?", ["Actress", "Actoress", "Actoress", "Actrix"], 0],
  ["Which word is a synonym of 'big'?", ["Large", "Small", "Tiny", "Little"], 0],
  ["Complete the sentence: I have lived here ___ 2019.", ["since", "for", "from", "by"], 0],
  ["Choose the correct sentence.", ["He can sings well.", "He can sing well.", "He can sang well.", "He can singing well."], 1],
  ["What is the opposite of 'always'?", ["Never", "Often", "Sometimes", "Daily"], 0],
  ["Choose the correct spelling.", ["Seperated", "Separated", "Seperatd", "Separeted"], 1],
  ["Complete the sentence: The teacher asked ___ to be quiet.", ["us", "we", "our", "ours"], 0],
];

for (const [prompt, options, answerIndex] of grammarQuestions) {
  addQuestion("English Grammar", prompt, options, answerIndex);
}

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

let currentQuestions = [];
let hasSubmitted = false;

const questionsContainer = document.getElementById("questions");
const quizForm = document.getElementById("quizForm");
const batchInfo = document.getElementById("batchInfo");
const resultCard = document.getElementById("result");
const reloadBtn = document.getElementById("reloadBtn");

function setQuizLocked(isLocked) {
  const radios = quizForm.querySelectorAll('input[type="radio"]');
  const submitButton = quizForm.querySelector('button[type="submit"]');

  radios.forEach((radio) => {
    radio.disabled = isLocked;
  });

  if (submitButton) {
    submitButton.disabled = isLocked;
  }
}

function loadQuestions() {
  const shuffled = shuffle(questionBank);
  currentQuestions = shuffled.slice(0, 10);
  renderQuestions();
  resultCard.hidden = true;
  quizForm.reset();
  hasSubmitted = false;
  setQuizLocked(false);
  batchInfo.textContent = `Loaded 10 questions from a total of ${questionBank.length} questions.`;
}

function renderQuestions() {
  questionsContainer.innerHTML = "";
  currentQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.innerHTML = `
      <h3>${index + 1}. ${question.prompt}</h3>
      <div class="options">
        ${question.options
          .map(
            (option, optionIndex) => `
              <label class="option">
                <input type="radio" name="q${index}" value="${optionIndex}" />
                <span>${option}</span>
              </label>
            `
          )
          .join("")}
      </div>
    `;
    questionsContainer.appendChild(card);
  });
}

function displayResults(score) {
  const review = currentQuestions.map((question, index) => {
    const selectedInput = quizForm.querySelector(`input[name="q${index}"]:checked`);
    const selectedValue = selectedInput ? Number(selectedInput.value) : -1;
    const isCorrect = selectedValue === question.answerIndex;
    const selectedAnswer = selectedValue >= 0 ? question.options[selectedValue] : "No answer selected";
    const correctAnswer = question.options[question.answerIndex];

    return `<li>${question.prompt} <span class="${isCorrect ? "correct" : "wrong"}">${isCorrect ? "Correct" : `Incorrect. Correct answer: <strong>${correctAnswer}</strong>. Your answer: <strong>${selectedAnswer}</strong>`}</span></li>`;
  });

  resultCard.hidden = false;
  resultCard.innerHTML = `
    <h2>Quiz Result</h2>
    <p>You scored <strong>${score}</strong> out of <strong>${currentQuestions.length}</strong>.</p>
    <p>Your answers are locked after submission.</p>
    <ol>${review.join("")}</ol>
  `;
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (hasSubmitted) {
    return;
  }

  hasSubmitted = true;
  setQuizLocked(true);

  let score = 0;
  currentQuestions.forEach((question, index) => {
    const selectedInput = quizForm.querySelector(`input[name="q${index}"]:checked`);
    const selectedValue = selectedInput ? Number(selectedInput.value) : -1;
    if (selectedValue === question.answerIndex) {
      score += 1;
    }
  });
  displayResults(score);
});

reloadBtn.addEventListener("click", loadQuestions);

loadQuestions();
