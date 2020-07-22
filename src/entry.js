import './assets/main.scss';
import 'bootstrap/dist/js/bootstrap';
import { DOMElements } from './services/domElements';
import { TopicRequest } from './models/topicRequest';
import { User } from './models/user';

const BASE_URL = "http://localhost:3000/api/v1/"
const REQS_URL = `${BASE_URL}topic_requests`
const LOGIN_URL = `${BASE_URL}login`

document.addEventListener('DOMContentLoaded', () => {
  console.log("Loaded!!")
  
  DOMElements.loginForm;
  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', e => loginFormHandler(e));
});

function fetchTopicRequests(url) {
  const jwtGetFetchOptions = {
    method: 'GET',
    headers: {Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
  };
  fetch(url, jwtGetFetchOptions)
    .then(resp => resp.json())
    .then(topicRequests => topicRequests.data.forEach(topicRequestData => {
      const newTopicRequest = new TopicRequest(topicRequestData);
      DOMElements.topicRequestIndexContainer.innerHTML += newTopicRequest.renderTopicRequest();
    }))
}

function loginFormHandler(e) {
  e.preventDefault();
  const emailInput = e.target.querySelector('#user-email').value;
  const passwordInput = e.target.querySelector('#user-password').value;
  loginFormFetch(emailInput, passwordInput);
}

function loginFormFetch(email_address, password) {
  const newLoginSubmission = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ user: { email_address, password }})
  };
  fetch(LOGIN_URL, newLoginSubmission)
  .then(response => response.json())
  .then(userData => {
    localStorage.setItem('jwt_token', userData.jwt)
    DOMElements.mainBody.innerHTML = "";
    fetchTopicRequests(REQS_URL);
  })
}