<template>
  <router-link to="/ChatInner">
    <div>
      <div class="one-chat message-not-seen">
        <img
            class="new-message-icon"
            src="../../assets/koverta-new.svg"
            alt="new message"
        >
        <div class="divider"/>
        <div class="user-profile-avatar">
          BR
        </div>
        <p class="user-name">
          Brodie Richards
        </p>
        <p class="short-message">
          Hi there, Brodie
          My name is Melissa from...
        </p>
        <p class="message-time">
          9 : 30 PM
        </p>
        <img
            class="invitation-icon"
            src="../../assets/invitation-icon.svg"
            alt="invitation icon"
        >
        <div class="short-message-mobile">
          <p class="short-message ">
            Hi there, Brodie
            My name is Melissa from...
          </p>
        </div>
      </div>
      <div class="one-chat">
        <img
            class="new-message-icon"
            src="../../assets/koverta-new.svg"
            alt="new message"
        >
        <div class="divider"/>
        <div class="user-profile-avatar">
          BR
        </div>
        <p class="user-name">
          Brodie Richards
        </p>
        <p class="short-message">
          Hi there, Brodie
          My name is Melissa from...
        </p>
        <p class="message-time">
          9 : 30 PM
        </p>
        <img class="invitation-icon"
             src="../../assets/invitation-icon.svg"
             alt="invitation icon"
        >
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "OneChat",

  props: {},
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.one-chat {
  cursor: pointer;
  display: flex;
  width: 92%;
  height: 3.75rem;
  margin-inline: auto;
  align-items: center;
  background-color: #202122;
  margin-block: 1.875rem;
}

.message-not-seen {
  background-color: #C8A07D;
}

.new-message-icon {
  margin-left: 1.875rem;
}

.divider {
  height: 1.563rem;
  width: 1px;
  background-color: white;
  margin-left: 2.188rem;
  margin-right: 6.75rem;
}

.user-profile-avatar {
  width: 2.75rem;
  height: 2.75rem;
  color: rgba(255, 255, 255, 0.7);;
  background-color: #513C2A;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.75rem;
}

.user-name, .short-message, .message-time {
  margin-bottom: 0;
  font-family: "Red Hat Display", sans-serif;
  font-weight: bold;
  color: white;
}

.user-name {
  margin-right: 11rem;
}

.short-message {
  width: 10.938rem;
  text-align: start;
  margin-right: 12rem;
}

.message-time {
  margin-right: 18.5rem;
}

.short-message-mobile {
  display: none;
}

@media only screen and (max-width: 1440px) {
  .divider {
    margin-right: 2.75rem;
  }

  .user-profile-avatar {
    width: 3rem;
    max-height: 4.75rem;
    margin-right: 3rem;
  }

  .user-name {
    margin-right: 4.4rem;
    width: 9rem;
  }

  .short-message {
    width: 13.938rem;
    margin-right: 3.5rem;
  }

  .message-time {
    margin-right: 13rem;
  }

  .user-name {
    margin-right: 3rem;
  }

  .short-message {
    margin-right: 2.5rem;
  }
}

@media only screen and (max-width: 1336px) {
  .user-name {
    margin-right: 1.5rem;
  }

  .short-message {
    margin-right: 1rem;
  }

  .user-profile-avatar {
    margin-right: 2rem;
  }

  .message-time {
    margin-right: 11rem;
  }
}

@media only screen and (max-width: 1280px) {
  .user-name {
    width: 7.5rem;
  }

  .short-message {
    margin-right: 0.5rem;
  }

  .message-time {
    margin-right: 10rem;
  }
}

@media only screen and (max-width: 1024px) {
  .divider {
    margin-right: 0.75rem;
    margin-left: 1.18rem;
  }

  .user-profile-avatar {
    width: 3rem;
    margin-right: 1rem;
  }

  .user-name {
    text-align: start;
    margin-right: 2rem;
    width: 5rem;
  }

  .short-message {
    margin-right: 1rem;
    width: 10rem;
  }

  .message-time {
    margin-right: 7rem;
  }
}

@media only screen and (max-width: 640px) {
  .new-message-icon, .divider {
    display: none;
  }

  .one-chat {
    width: 100%;
    flex-wrap: wrap;
    height: 7.25rem;
    padding-top: 0.625rem;
    padding-bottom: 1.153rem;
    justify-content: center;
  }

  .user-profile-avatar {
    /*margin-left: 1.922rem;*/
    margin-right: 1.341rem;
  }

  .user-name {
    width: 8rem;
  }

  .short-message {
    display: none;
  }

  .short-message-mobile {
    display: block;
    margin-right: 12rem;
    padding-bottom: 1.153rem;
  }

  .short-message-mobile .short-message {
    display: block;
  }

  .invitation-icon {
    margin-right: 5rem;
  }
}

@media only screen and (max-width: 425px) {

  .user-profile-avatar {
    margin-right: 1.341rem;
  }

  .short-message-mobile {
    margin-right: 1rem;
  }

  .invitation-icon {
    margin-right: 1rem;
  }

  .user-name {
    margin-right: 0;
  }

  .message-time {
    margin-right: 3rem;
  }
}

@media only screen and (max-width: 375px) {

  .user-profile-avatar {
    margin-right: 0.5rem;
  }

  .short-message-mobile {
    margin-right: 3rem;
  }

  .invitation-icon {
    margin-right: 2rem;
  }

  .user-name {
    margin-right: 0;
  }

  .message-time {
    margin-right: 2rem;
  }
}

@media only screen and (max-width: 320px) {

  .user-profile-avatar {
    display: none;
  }

  .short-message-mobile {
    margin-right: 6rem;
    margin-top: 1rem;
  }

  .invitation-icon {
    margin-right: 2rem;
  }

  .message-time {
    margin-right: 2rem;
  }
}

</style>
