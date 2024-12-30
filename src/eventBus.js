// eventBus.js

class EventBus {
    constructor() {
      this.events = {};
    }
  
    // Subscribe to an event
    subscribe(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Publish an event to all subscribers
    publish(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((listener) => listener(data));
      }
    }
  
    // Unsubscribe from an event
    unsubscribe(event, listener) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter((l) => l !== listener);
      }
    }
  }
  
  export default new EventBus();
  