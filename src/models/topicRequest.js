class TopicRequest {
  constructor(topicRequestData) {
    this.id = topicRequestData.id
    this.topic = topicRequestData.attributes.topic;
    this.module = topicRequestData.attributes.module;
    this.description = topicRequestData.attributes.description;
    this.upvotes = topicRequestData.attributes.upvotes;
    this.student_id = topicRequestData.attributes.student_id;
    TopicRequest.all.push(this);
  }

  renderTopicRequest() {
    return `
      <div class="col mb-4">
        <div class="card" data-id=${this.id}>
          <div class="card-body">
            <h3 class="card-title">${this.topic}</h3>
            <p class="card-subtitle"><small class="text-muted">${this.module}</small></p>
            <p class="card-text">${this.description}</p>
          </div>
          <div class="card-body text-right">
          <p class="card-text"><a href="#" class="card-link">^</a> ${this.upvotes}</p>
          </div>
        </div>
      </div>
    `
  }

  // Add code to scope to each module in the topic_request index page

  static findTopicRequest(id) {
    return this.all.find((topicRequest) => topicRequest.id === id)
  }

  static updateTopicRequest(topicRequestData) {
    const topicRequest = this.findTopicRequest(topicRequestData.id);
    topicRequest.topic = topicRequestData.topic;
    topicRequest.module = topicRequestData.module;
    topicRequest.description = topicRequestData.description;
    topicRequest.upvotes = topicRequestData.upvotes;
    topicRequest.student_id = topicRequestData.student_id;
    return topicRequest;
  }

}

TopicRequest.all = [];

export { TopicRequest };