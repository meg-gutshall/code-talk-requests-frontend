import DOMElements from './domElements';
import { LOGIN_URL, autoRedirect } from '../entry';

// Show the login form
function showLoginForm() {
  DOMElements.loginForm;
  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', e => loginFormHandler(e));
}

// Transfer the form data on submittal
async function loginFormHandler(e) {
  e.preventDefault();
  const emailInput = e.target.querySelector('#user-email').value;
  const passwordInput = e.target.querySelector('#user-password').value;
  await login(emailInput, passwordInput);
  autoRedirect();
  // Check here for CORRECT login credentials by calling autoRedirect again
}

// Auth help article
// https://zellwk.com/blog/frontend-login-system/

// Login
async function login(email_address, password) {
  const newLoginSubmission = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ user: { email_address, password }})
  };
  const loginResponse = await fetch(LOGIN_URL, newLoginSubmission);
  const userData = await loginResponse.json();
  localStorage.setItem('jwt_token', userData.jwt);
  localStorage.setItem('current_user', userData.user.data.id);
  DOMElements.mainBody.innerHTML = "";
}

// Check if user is logged in
async function isLoggedIn() {
  let token = localStorage.getItem('jwt_token');
  if (!token) {
    return false
  } else {
    return true
  }
}

function renderLogoutButton() {
  DOMElements.createLogoutButton();
  let logoutButton = document.getElementById('logoutButton');
  logoutButton.addEventListener('click', e => logout(e));
}

// Logout
function logout() {
  localStorage.clear();
  autoRedirect();
  DOMElements.removeNavMenuButtons();
}

export { isLoggedIn, showLoginForm, renderLogoutButton };