const REQS_URL = "http://localhost:3000/api/v1/requests"

document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded")
  fetchRequests()
});

function fetchRequests() {
  fetch(REQS_URL)
    .then(resp => resp.json())
    .then(reqs => console.log(reqs))
}