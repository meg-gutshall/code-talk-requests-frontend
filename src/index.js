import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TopicRequest} from './modules/topicRequest';

const REQS_URL = "http://localhost:3000/api/v1/requests"
const MODULES = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

document.addEventListener('DOMContentLoaded', () => {
  console.log("Locked and loaded!!")
  const listing = document.getElementById('main');

  fetchTopicRequests(listing)
});

function fetchTopicRequests(listing) {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(topicRequests => topicRequests.data.forEach(topicRequestData => {
      const newTopicRequest = new TopicRequest(topicRequestData);
      listing.innerHTML += newTopicRequest.renderTopicRequest();
    }))
}