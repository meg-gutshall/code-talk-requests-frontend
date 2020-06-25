import bootstrap from 'bootstrap';

const REQS_URL = "http://localhost:3000/api/v1/requests"
const MODULES = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded")
  fetchRequests()
});

function fetchRequests() {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(requests => console.log("fetchRequests -> requests", requests))
}