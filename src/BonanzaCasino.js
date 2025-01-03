import { EventEmitter } from 'events'; // ES module import

class BonanzaCasino{
    constructor() {
        this.events = new EventEmitter();
      }

      // Method to subscribe to an event
      subscribe(event, listener) {
        this.events.on(event, listener);  // Subscribe to an event
        // this.remove(event, listener);
      }
       // Method to remove an event listener
      remove(event, listener) {
        this.events.removeListener(event, listener); // Remove the event listener
      }
      // Method to publish an event
      publish(event, data) {
        return this.events.emit(event, data); // Publish the event
      }
}
const casino =  new BonanzaCasino();
export default casino;// Export the instance using module.exports