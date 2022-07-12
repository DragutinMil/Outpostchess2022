<template>
  <div class="header">
    <div class="left">
      <div class="avatar-big"></div>
      <div class="left-text">
        <h3 class="user-name">Brodie Richards</h3>
        <div class="user-row-one">
          <div class="location">
            <img
                src="../../assets/location-icon.svg"
                alt="location icon">
            <p>Chicago</p>
          </div>
          <div class="user-age">
            <p>28 Years old</p>
          </div>
          <div class="gender">
            <p>Male</p>
          </div>
        </div>
        <div class="user-row-two">
          <div class="federation">
            <p>Federation: </p>
            <img
                src="../../assets/serbian-flag.svg"
                alt="Serbian flag"/>
          </div>
          <div class="fide-id">
            <p>Fide ID :</p>
            <p>942553</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <button>
        Connect
      </button>
      <img src="../../assets/envelope-with-a-plus.svg" alt="new message icon">
    </div>

  </div>
</template>

<script>
export default {
  name: "ChatInnerHeader"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  color: #6F7381;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.158rem;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-left: 5.063rem;
  padding-right: 4.875rem;
  background-color: #202122;
  width: 61rem;
  height: 10.75rem;
  margin-top: 2.875rem;
  align-items: center;
  position: relative;
}

.left {
  display: flex;
  flex-direction: row;
}

.avatar-big {
  width: 5.625rem;
  height: 5.625rem;
  background-color: #6F7381;
  border-radius: 100%;
  margin-right: 1.141rem;
}

.left-text {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.user-row-one {
  display: flex;
  margin-bottom: 0.625rem;
}

.user-name {
  color: white;
  font-weight: 700;
  line-height: 1.984rem;
  margin-bottom: 0.375rem;
}

.location, .user-age, .gender, .federation, .fide-id {
  margin-right: 1.75rem;
}

.location {
  display: flex;
  align-items: center;
}

.user-row-two {
  display: flex;
}

.federation, .fide-id {
  display: flex;
}

.federation p, .fide-id p {
  margin-right: 0.625rem;
}

.fide-id p:last-child {
  color: #C8A07D;
}

.right img {
  position: absolute;
  top: 1.375rem;
  right: 1.813rem;
}

.right button {
  width: 8.161rem;
  height: 2.875rem;
  color: white;
  line-height: 2.125rem;
  border: solid #5C5E64 1px;
}
</style>
