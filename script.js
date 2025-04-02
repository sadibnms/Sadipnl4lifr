// Open Login Modal
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');

const closeLogin = document.querySelector('#login-modal .close');
const closeSignup = document.querySelector('#signup-modal .close');

// Open modals when buttons are clicked
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

// Close modals when the close button is clicked
closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

closeSignup.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

// Close modals if clicked outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
});