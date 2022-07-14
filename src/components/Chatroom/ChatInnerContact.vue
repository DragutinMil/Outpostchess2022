<template>
  <div class="contact">
    <p class="header">CONTACTS</p>
    <div class="divider"></div>
    <div class="search">
      <input
          type="search"
          name=""
          class="search-profile"
          placeholder="Go to search..."
      >
    </div>
    <div class="divider"></div>
    <div class="one-contact">
      <div class="user-profile-avatar">
        BR
      </div>
      <div class="user-name">
        <p> Brodie Richards</p>
      </div>
      <div class="user-country">
        <p>Serbia</p>
      </div>
      <img src="../../assets/unopened-message-icon.svg" alt="unopened message icon">
    </div>
    <div class="divider"></div>
    <div class="one-contact">
      <div class="user-profile-avatar">
        BR
      </div>
      <div class="user-name">
        <p> Brodie Richards</p>
      </div>
      <div class="user-country">
        <p>Serbia</p>
      </div>
      <img src="../../assets/unopened-message-icon.svg" alt="unopened message icon">
    </div>
    <div class="divider"></div>
    <div class="one-contact">
      <div class="user-profile-avatar">
        BR
      </div>
      <div class="user-name">
        <p> Brodie Richards</p>
      </div>
      <div class="user-country">
        <p>Serbia</p>
      </div>
      <img src="../../assets/unopened-message-icon.svg" alt="unopened message icon">
    </div>
    <div class="divider"></div>
    <div class="one-contact">
      <div class="user-profile-avatar">
        BR
      </div>
      <div class="user-name">
        <p> Brodie Richards</p>
      </div>
      <div class="user-country">
        <p>Serbia</p>
      </div>
      <img src="../../assets/unopened-message-icon.svg" alt="unopened message icon">
    </div>
    <div class="divider"></div>
    <div class="one-contact">
      <div class="user-profile-avatar">
        BR
      </div>
      <div class="user-name">
        <p> Brodie Richards</p>
      </div>
      <div class="user-country">
        <p>Serbia</p>
      </div>
      <img src="../../assets/unopened-message-icon.svg" alt="unopened message icon">
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "ChatInnerContact"
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

p {
  font-size: 0.875rem;
  line-height: 1.158rem;
}

.search-profile {
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 1.25rem;
  background-color: #1B1C1D;
  display: flex;
  height: 2.0625rem;
  background-image: url('../../assets/search_24px.png');
  background-repeat: no-repeat;
  background-position-x: 1.375rem;
  background-position-y: 0.375rem;
  padding-left: 3.75rem;
  font-size: 0.875rem;
  color: #C7C9D0;
  cursor: pointer;
  width: 16.875rem;
}

.contact {
  width: 23.188rem;
  background-color: #202122;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.header {
  color: #6F7381;
  margin-top: 3rem;
  margin-left: 3.5rem;
  padding-bottom: 2.438rem;
  width: fit-content;
}

.divider {
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
}

.search {
  margin-top: 2.188rem;
  margin-left: 1.75rem;
  margin-bottom: 2.188rem;
}

.user-profile-avatar {
  width: 2.75rem;
  height: 2.75rem;
  color: rgba(255, 255, 255, 0.7);;
  background-color: #6F7381;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.one-contact {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-block: 3.75rem;
}

.one-contact p {
  color: white;
}
@media screen and (max-width: 1440px) {
  .contact{
    width: 27rem;
  }
}
</style>
