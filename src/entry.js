import './main.scss';
import { TopicRequest} from './models/topicRequest';
import { DOMElements } from './services/domElements';

const REQS_URL = "http://localhost:3000/api/v1/topic_requests"

document.addEventListener('DOMContentLoaded', () => {
  console.log("Loaded!!")

  fetchTopicRequests()
});

function fetchTopicRequests() {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(topicRequests => topicRequests.data.forEach(topicRequestData => {
      const newTopicRequest = new TopicRequest(topicRequestData);
      DOMElements.topicRequestIndexContainer.innerHTML += newTopicRequest.renderTopicRequest();
    }))
}