class TopicRequest {
  constructor(topicRequestData) {
    this.id = topicRequestData.id
    this.topic = topicRequestData.attributes.topic;
    this.description = topicRequestData.attributes.description;
    this.upvotes = topicRequestData.attributes.upvotes;
    this.codepanionId = topicRequestData.attributes.codepanion_id;
    TopicRequest.all.push(this);
  }

  renderTopicRequest() {
    return `
      <div class="col mb-4">
        <div class="card" data-id=${this.id}>
          <div class="card-body">
            <h3 class="card-title">${this.topic}</h3>
            <p class="card-text">${this.description}</p>
          </div>
          <div class="card-body text-right">
          <p class="card-text"><a href="#" class="card-link">^</a> ${this.upvotes}</p>
          </div>
        </div>
      </div>
    `
  }

  static findTopicRequest(id) {
    return this.all.find((topicRequest) => topicRequest.id === id)
  }

  static updateTopicRequest(topicRequestData) {
    const topicRequest = this.findTopicRequest(topicRequestData.id);
    topicRequest.topic = topicRequestData.attributes.topic;
    topicRequest.description = topicRequestData.attributes.description;
    topicRequest.upvotes = topicRequestData.attributes.upvotes;
    topicRequest.codepanionId = topicRequestData.attributes.codepanion_id;
    return topicRequest;
  }

}

TopicRequest.all = [];

export { TopicRequest };