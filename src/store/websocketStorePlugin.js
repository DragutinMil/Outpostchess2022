// websocketStorePlugin.js
export default function createWebSocketPlugin (socket) {
    return store => {
      store.$socket = socket
      socket.on('message', payload => store.dispatch('receiveMessage', payload))
    }
  }