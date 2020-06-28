import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// PROJECT CODE BELOW -- DO NOT DELETE

const REQS_URL = "http://localhost:3000/api/v1/requests"
const MODULES = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

document.addEventListener('DOMContentLoaded', () => {
  console.log("Locked and loaded!!")
  fetchRequests()
});

function fetchRequests() {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(requests => console.log("fetchRequests -> requests", requests))
}