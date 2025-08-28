// Initialize quizzes
let myQuizzes = JSON.parse(localStorage.getItem('myQuizzes')) || [];
let globalQuizzes = JSON.parse(localStorage.getItem('globalQuizzes')) || [];

// Create Quiz
function createQuiz() {
  const title = document.getElementById('quizTitle').value;
  const question = document.getElementById('quizQuestion').value;
  const answer = document.getElementById('quizAnswer').value;

  if (!title || !question || !answer) return alert("All fields are required!");

  const quiz = { title, question, answer };
  myQuizzes.push(quiz);
  globalQuizzes.push(quiz); // Push to global quizzes
  localStorage.setItem('myQuizzes', JSON.stringify(myQuizzes));
  localStorage.setItem('globalQuizzes', JSON.stringify(globalQuizzes));
  displayMyQuizzes();
  alert("Quiz saved!");
}

// Display My Quizzes
function displayMyQuizzes() {
  const container = document.getElementById('myQuizzes');
  if (!container) return;
  container.innerHTML = '';
  myQuizzes.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<h4>${q.title}</h4><p>${q.question}</p><p>Answer: ${q.answer}</p>`;
    container.appendChild(div);
  });
}

// Display Global Quizzes
function displayGlobalQuizzes() {
  const container = document.getElementById('globalQuizzes');
  if (!container) return;
  container.innerHTML = '';
  globalQuizzes.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<h4>${q.title}</h4><p>${q.question}</p>`;
    const btn = document.createElement('button');
    btn.innerText = "Show Answer";
    btn.onclick = () => alert(`Answer: ${q.answer}`);
    div.appendChild(btn);
    container.appendChild(div);
  });
}

let profile = JSON.parse(localStorage.getItem('profile')) || {};

function loadProfile() {
  if(profile.username) document.getElementById('profile-username').innerText = profile.username;
  if(profile.bio) document.getElementById('profile-bio').value = profile.bio;
}

function saveProfile() {
  const username = document.getElementById('profile-username').innerText.trim();
  const bio = document.getElementById('profile-bio').value.trim();
  profile.username = username || "Your Name";
  profile.bio = bio || "";
  localStorage.setItem('profile', JSON.stringify(profile));
  alert("Profile saved!");
}

// Initialize
loadProfile();


// Load quizzes on page load
displayMyQuizzes();
displayGlobalQuizzes();
