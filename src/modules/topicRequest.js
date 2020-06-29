class TopicRequest {
  constructor(topicRequestData) {
    this.id = topicRequestData.id
    this.topic = topicRequestData.attributes.topic;
    this.module = topicRequestData.attributes.module;
    this.description = topicRequestData.attributes.description;
    this.student_id = topicRequestData.attributes.student_id;
    TopicRequest.all.push(this);
  }

  static findTopicRequest(id) {
    return this.all.find((topicRequest) => topicRequest.id === id)
  }

  static updateTopicRequest(topicRequestData) {
    const topicRequest = this.findTopicRequest(topicRequestData.id);
    topicRequest.topic = topicRequestData.topic;
    topicRequest.module = topicRequestData.module;
    topicRequest.description = topicRequestData.description;
    topicRequest.student_id = topicRequestData.student_id;
    return topicRequest;
  }

  renderTopicRequest() {
    return `
      <div class="card" data-id=${this.id}>
        <div class="card-body">
          <h3 class="card-title">${this.topic}</h3>
          <h4 class="card-subtitle mb-2 text-muted">${this.module}</h4>
          <p class="card-text">${this.description}</p>
        </div>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>
    `
  }

}

TopicRequest.all = [];

export {TopicRequest};