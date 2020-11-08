import './assets/main.scss';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';
import DOMElements from './services/domElements';
import TopicRequest from './models/topicRequest';
import { isLoggedIn, showLoginForm, renderLogoutButton } from './services/authorization';

const BASE_URL = "http://localhost:3000/api/v1/"
const REQS_URL = `${BASE_URL}topic_requests`
const LOGIN_URL = `${BASE_URL}login`

document.addEventListener('DOMContentLoaded', () => {
  autoRedirect();
});

// Redirect user depending on login status
async function autoRedirect() {
  const validLogin = await isLoggedIn();
  if (validLogin) {
    renderTopicRequests(REQS_URL);
    addNewTopicRequestButton();
    renderLogoutButton();
  } else {
    showLoginForm();
  }
}

// Display topic requests
// Topic requests are separated by current user and all other users
// This occurs after successful login
function renderTopicRequests(REQS_URL) {
  let current_user = localStorage.getItem('current_user');
  DOMElements.userRow;
  DOMElements.allOtherRow;

  async function fetchTopicRequests(url) {
    const jwtGetFetchOptions = {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
    };  
    const resp = await fetch(url, jwtGetFetchOptions);
    const topicRequests = await resp.json();
    let allRequests = await topicRequests.data.forEach(topicRequest => {
      const newTopicRequest = new TopicRequest(topicRequest, topicRequest.attributes);
      if (newTopicRequest.codepanionId == parseInt(current_user)) {
        renderUserTopicRequests(newTopicRequest);
      } else {
        renderAllOtherTopicRequests(newTopicRequest);
      }
    })
    return allRequests;
  }
  
  function renderUserTopicRequests(newTopicRequest) {
    let userRow = document.getElementById('user-row');
    let userCol = newTopicRequest.createTopicRequestCard();
    userRow.innerHTML += userCol;
  }
  
  function renderAllOtherTopicRequests(newTopicRequest) {
    let allOtherRow = document.getElementById('all-other-row');
    let allOtherCol = newTopicRequest.createTopicRequestCard();
    allOtherRow.innerHTML += allOtherCol;
  }
  
  fetchTopicRequests(REQS_URL);
}

// Add 'New Topic Request' button
function addNewTopicRequestButton() {
  let current_user = localStorage.getItem('current_user');

  function renderNewTopicRequestButton() {
    DOMElements.modalButton;
    DOMElements.topicRequestModal;
    // Await the creation of the above elements to submit
    let newTopicRequestForm = document.getElementById('newTopicRequestForm');
    newTopicRequestForm.addEventListener('submit', e => newTopicRequestFormHandler(e));
  }
  
  function newTopicRequestFormHandler(e) {
    const ideaInput = e.target.querySelector('#newTopicRequestIdea').value;
    const descriptionInput = e.target.querySelector('#newTopicRequestDescription').value;
    const upvotes = 0;
    const codepanionId = parseInt(current_user);
    postNewTopicRequest(ideaInput, descriptionInput, upvotes, codepanionId);
    // Use below instead of e.preventDefault() since my form is in a modal and I want to close it upon completion.
    return false;
  }

  function postNewTopicRequest(idea, description, upvotes, codepanion_id) {
    const newTopicRequestSubmission = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ topic_request: { idea, description, upvotes, codepanion_id }})
    };
    fetch(REQS_URL, newTopicRequestSubmission)
      .then(resp => resp.json())
      .then(function(postedTopicRequest) {
        const newTopicRequest = new TopicRequest(postedTopicRequest.topic_request.data, postedTopicRequest.topic_request.data.attributes);
        
        // renderUserTopicRequests()
        let userRow = document.getElementById('user-row');
        let userCol = newTopicRequest.createTopicRequestCard();
        userRow.innerHTML += userCol;
      })
  }

  renderNewTopicRequestButton();
}

export { LOGIN_URL, autoRedirect };