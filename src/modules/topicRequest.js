class TopicRequest {
  constructor(topicRequestData) {
    this.id = topicRequestData.id
    this.topic = topicRequestData.attributes.topic;
    this.module = topicRequestData.attributes.module;
    this.description = topicRequestData.attributes.description;
    this.student_id = topicRequestData.attributes.student_id;
    TopicRequest.all.push(this);
  }

  renderTopicRequest() {
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

TopicRequest.all = [];

export {TopicRequest};