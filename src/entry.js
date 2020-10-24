import './assets/main.scss';
import 'bootstrap/dist/js/bootstrap';
import { DOMElements } from './services/domElements';
import { TopicRequest } from './models/topicRequest';
import { User } from './models/user';

const BASE_URL = "http://localhost:3000/api/v1/"
const REQS_URL = `${BASE_URL}topic_requests`
const LOGIN_URL = `${BASE_URL}login`

document.addEventListener('DOMContentLoaded', () => {
  // PSEUDOCODE
  // Check to see if user is logged in
    // if yes, show topic requests
    // if no, show login form

  autoRedirect();
  // Isn't asynchronous -- need to wait until the user is logged in ALL the way to render the topic requests
});

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

// Redirect user depending on login status
async function autoRedirect() {
  const validLogin = await isLoggedIn();
  if (validLogin) {
    renderTopicRequests(REQS_URL);
  } else {
    showLoginForm();
  }
}

// Logout
function logoutAction() {
  localStorage.removeItem('jwt_token');
  localStorage.removeItem('current_user');
}

// Display topic requests
// Topic requests are separated by current user and all other users
// This occurs after successful login
function renderTopicRequests(REQS_URL) {
  let current_user = localStorage.getItem('current_user');

  async function fetchTopicRequests(url) {
    const jwtGetFetchOptions = {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
    };  
    const resp = await fetch(url, jwtGetFetchOptions);
    const topicRequests = await resp.json();
    let allRequests = await topicRequests.data.forEach(topicRequest => {
      const newTopicRequest = new TopicRequest(topicRequest, topicRequest.attributes);
      console.log("fetchTopicRequests -> newTopicRequest", newTopicRequest)
      if (newTopicRequest.codepanionId == parseInt(current_user)) {
        renderUserTopicRequests(newTopicRequest);
      } else {
        renderAllOtherTopicRequests(newTopicRequest);
      }
    })
    console.log("document", document)
    return allRequests;
  }

  DOMElements.userRow;
  let userRow = document.getElementById('user-row')
  DOMElements.allOtherRow;
  let allOtherRow = document.getElementById('all-other-row')

  function renderUserTopicRequests(newTopicRequest) {
    let userCol = newTopicRequest.createTopicRequestCard();
    console.log("renderUserTopicRequests -> userCol", userCol)
    userRow.innerHTML += userCol;
    console.log("renderUserTopicRequests -> userRow", userRow)
    console.log("The current user's topic requests should have been rendered.");
  }
  
  function renderAllOtherTopicRequests(newTopicRequest) {
    let allOtherCol = newTopicRequest.createTopicRequestCard();
    console.log("renderAllOtherTopicRequests -> allOtherCol", allOtherCol)
    allOtherRow.innerHTML += allOtherCol;
    console.log("renderAllOtherTopicRequests -> allOtherRow", allOtherRow)
    console.log("All other user's topic requests should have been rendered.");
  }
  

  // ? Call async/await functions to create DOM elements here?
  fetchTopicRequests(REQS_URL);
}

