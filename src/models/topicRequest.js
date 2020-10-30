class TopicRequest {
  constructor(topicRequest, topicRequestAttributes) {
    this.id = topicRequest.id;
    this.idea = topicRequestAttributes.idea;
    this.description = topicRequestAttributes.description;
    this.upvotes = topicRequestAttributes.upvotes;
    this.codepanionId = topicRequestAttributes.codepanion_id;
    TopicRequest.all.push(this);
  }

  createTopicRequestCard() {
    return `
      <div class="col my-3">
        <div class="card h-100" data-id=${this.id}>
          <div class="card-body">
            <h3 class="card-title">${this.idea}</h3>
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

  static updateTopicRequest(updatedTopicRequest) {
    const topicRequest = this.findTopicRequest(updatedTopicRequest.id);
    topicRequest.idea = updatedTopicRequestAttributes.idea;
    topicRequest.description = updatedTopicRequestAttributes.description;
    topicRequest.upvotes = updatedTopicRequestAttributes.upvotes;
    topicRequest.codepanionId = updatedTopicRequestAttributes.codepanion_id;
    return topicRequest;
  }

}

TopicRequest.all = [];

export { TopicRequest };