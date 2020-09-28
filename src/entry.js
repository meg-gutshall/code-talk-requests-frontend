import './assets/main.scss';
import 'bootstrap/dist/js/bootstrap';
import { DOMElements } from './services/domElements';
import { TopicRequest } from './models/topicRequest';
import { User } from './models/user';

const BASE_URL = "http://localhost:3000/api/v1/"
const REQS_URL = `${BASE_URL}topic_requests`
const LOGIN_URL = `${BASE_URL}login`

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.jwt_token === undefined) {
    showLoginForm()
  }
  // Isn't asynchronous -- need to have below wait until the user is logged in ALL the way
  fetchTopicRequests(REQS_URL);
});

// Show the login form
function showLoginForm() {
  DOMElements.loginForm;
  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', e => loginFormHandler(e));
}

// Transfer the form data on submittal
function loginFormHandler(e) {
  e.preventDefault();
  const emailInput = e.target.querySelector('#user-email').value;
  const passwordInput = e.target.querySelector('#user-password').value;
  loginAction(emailInput, passwordInput);
}

// Login
async function loginAction(email_address, password) {
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
  let token = store.get('jwt_token');
  if (!token) return false
}

// Redirect user depending on login status
async function autoRedirect() {
  const validLogin = await isLoggedIn();
  // Figure out what to put here for an SPA
  // https://zellwk.com/blog/frontend-login-system/
}

// Logout
function logout() {
  localStorage.removeItem('jwt_token');
  localStorage.removeItem('current_user');
}

function fetchTopicRequests(url) {
  const jwtGetFetchOptions = {
    method: 'GET',
    headers: {Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
  };
  fetch(url, jwtGetFetchOptions)
    .then(resp => resp.json())
    .then(topicRequests => topicRequests.data.forEach(topicRequest => {
      const newTopicRequest = new TopicRequest(topicRequest, topicRequest.attributes);
      DOMElements.userTopicRequestsContainer.innerHTML += newTopicRequest.renderTopicRequest();
    }))
  }
  
  function renderUserTopicRequests() {
    DOMElements.userTopicRequestsContainer.innerHTML += newTopicRequest.renderTopicRequest();
  }
  
  function renderAllOtherTopicRequests() {
    DOMElements.allOtherTopicRequestsContainer.innerHTML += newTopicRequest.renderTopicRequest();
  }