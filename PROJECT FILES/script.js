// script.js

// Get elements
const startBtn = document.getElementById('start-btn');
const categoryMenu = document.getElementById('category-menu');
const desktopLaptopBtn = document.getElementById('desktop-laptop-btn');
const customPcBuildBtn = document.getElementById('custom-pc-build-btn');
const contactBtn = document.getElementById('contact-btn');

// Add event listeners
startBtn.addEventListener('click', () => {
  categoryMenu.style.display = 'block';
});

desktopLaptopBtn.addEventListener('click', () => {
  window.location.href = 'desktop-laptop-service.html';
});

customPcBuildBtn.addEventListener('click', () => {
  window.location.href = 'custom-pc-build.html';
});

contactBtn.addEventListener('click', () => {
  window.location.href = 'contact.html';
});

// Chat bot functionality
const chatBot = document.getElementById('chat-bot');
const chatBotInput = document.getElementById('chat-bot-input');
const chatBotResponse = document.getElementById('chat-bot-response');

chatBotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userInput = chatBotInput.value;
    chatBotResponse.innerHTML = `You: ${userInput}`;
    chatBotResponse.innerHTML += `<br>Bot: I'm not sure I understand. Can you please rephrase?`;
    chatBotInput.value = '';
  }
});

// Form validation
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const contactForm = document.getElementById('contact-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === '' || password === '') {
    alert('Please fill in all fields');
  } else {
    // Login logic here
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match');
  } else {
    // Register logic here
  }
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    // Contact logic here
  }
});