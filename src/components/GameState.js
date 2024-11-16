class GameState {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = {};
    }

    // Method to get the current state
    getState() {
        return this.state;
    }

    // Method to set the state and notify listeners
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notifyAll();
    }

    // Method to subscribe to state changes
    subscribe(key, callback) {
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(callback);
    }

    // Method to unsubscribe from state changes
    unsubscribe(key, callback) {
        if (this.listeners[key]) {
            this.listeners[key] = this.listeners[key].filter(cb => cb !== callback);
        }
    }

    // Notify all listeners of state changes
    notifyAll() {
        for (let key in this.listeners) {
            const newValue = this.state[key];
            this.listeners[key].forEach(callback => callback(newValue));
        }
    }
}

export { GameState };
