import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TopicRequest} from './models/topicRequest';
import { DOMElements } from './services/domElements';

const REQS_URL = "http://localhost:3000/api/v1/topic_requests"
const MODS = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

document.addEventListener('DOMContentLoaded', () => {
  console.log("Loaded!!")

  fetchTopicRequests()
});

function fetchTopicRequests() {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(topicRequests => topicRequests.data.forEach(topicRequestData => {
      const newTopicRequest = new TopicRequest(topicRequestData);
      DOMElements.topicIndex.innerHTML += newTopicRequest.renderTopicRequest();
    }))
}