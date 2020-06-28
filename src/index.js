import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './request.js';

// PROJECT CODE BELOW -- DO NOT DELETE

class Request {
  constructor(requestData) {
    this.topic = requestData.attributes.topic;
    this.module = requestData.attributes.module;
    this.description = requestData.attributes.description;
    this.student_id = requestData.attributes.student_id;
    Request.all.push(this);
  }

  renderRequest() {
    return `
      <div class="card-body">
        <h3 class="card-title">${this.topic}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${this.module}</h4>
        <p class="card-text">${this.description}</p>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
      </div>
    `
  }

}

Request.all = [];

//-- Figure out how to import class code above --//

const REQS_URL = "http://localhost:3000/api/v1/requests"
const MODULES = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

document.addEventListener('DOMContentLoaded', () => {
  console.log("Locked and loaded!!")
  const listing = document.getElementById('main');

  fetchRequests(listing)
});

function fetchRequests(listing) {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(requests => requests.data.forEach(requestData => {
      const newRequest = new Request(requestData);
      listing.innerHTML += newRequest.renderRequest();
    }))
}