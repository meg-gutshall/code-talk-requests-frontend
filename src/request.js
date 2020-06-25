class Request {
  constructor(requestData) {
    this.topic = requestData.topic;
    this.module = requestData.module;
    this.description = requestData.description;
    this.student_id = requestData.student_id;
  }


}

Request.allRequests = [];