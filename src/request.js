class Request {
  constructor(requestData) {
    this.topic = requestData.topic;
    this.module = requestData.module;
    this.description = requestData.description;
    this.student_id = requestData.student_id;
  }

  renderRequest(request) {
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

Request.allRequests = [];