<template>
  <div class="send-message">
    <form>
      <textarea placeholder="Write a message..." class="input"/>
      <img
          class="arrow-up"
          src="../../assets/arrow-up.svg"
          alt="expand icon">
    </form>
    <div>
      <div class="bottom">
        <router-link to="/chatroom">
          <div class="left">
            <img src="../../assets/envelope.svg" alt="back to the inbox icon">
            <p>Back to inbox</p>
          </div>
        </router-link>
        <div class="right">
          <button>Send <img src="../../assets/send.svg" alt="send message"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendMessage"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.send-message {
  width: 100%;
  position: relative;
}

.input {
  width: 100%;
  height: 7.875rem;
  resize: none;
  padding-top: 1rem;
  padding-left: 0.25rem;
  background-color: #171819;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;
}

.arrow-up {
  position: absolute;
  top: 2.188rem;
  right: 1.938rem;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.left p {
  font-weight: 500;
  font-size: 0.875rem;
  margin-left: 0.563rem;
  color: #6F7381;
}

.right button {
  background-color: #6F7381;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding-left: 1.563rem;
  padding-right: 0.938rem;
  padding-block: 0.2rem;
  color: white;
}

.right button img {
  margin-left: 0.969rem;
}
</style>
