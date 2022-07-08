<template>
  <div>
    <div class="profile">
      <div>
        <SideBar/>
      </div>

      <!-- CENTER -->
      <div class="container-center">
        <div id="searchpart-chat">
          <Searchpart/>
        </div>
        <div id="input-filter">
          <input
              type="search"
              name=""
              class="search-filter"
              placeholder="Search"
          >
        </div>
        <!-- CENTER/LIST -->
        <div id="center_list">
          <div class="center_list_header">
            <div class="header_list">
              Name & Surname
            </div>
            <div class="header_list">
              Messages
            </div>
            <div class="header_list">
              Times
            </div>
            <div class="header_list">
              Invitation
            </div>
          </div>
          <div class="one-chat message-not-seen">
            <img class="new-message-icon" src="../assets/koverta-new.svg" alt="new message">
            <div class="divider"></div>
            <div class="user-profile-avatar">BR</div>
            <p class="user-name">Brodie Richards</p>
            <p class="short-message">Hi there, Brodie
              My name is Melissa from...</p>
            <p class="message-time">9 : 30 PM</p>
            <img src="../assets/invitation-icon.svg" alt="invitation icon">
          </div>
          <div class="one-chat">
            <img class="new-message-icon" src="../assets/koverta-new.svg" alt="new message">
            <div class="divider"></div>
            <div class="user-profile-avatar">BR</div>
            <p class="user-name">Brodie Richards</p>
            <p class="short-message">Hi there, Brodie
              My name is Melissa from...</p>
            <p class="message-time">9 : 30 PM</p>
            <img src="../assets/invitation-icon.svg" alt="invitation icon">
          </div>
          <div class="one-chat">
            <img class="new-message-icon" src="../assets/koverta-new.svg" alt="new message">
            <div class="divider"></div>
            <div class="user-profile-avatar">BR</div>
            <p class="user-name">Brodie Richards</p>
            <p class="short-message">Hi there, Brodie
              My name is Melissa from...</p>
            <p class="message-time">9 : 30 PM</p>
            <img src="../assets/invitation-icon.svg" alt="invitation icon">
          </div>
          <div class="one-chat">
            <img class="new-message-icon" src="../assets/koverta-new.svg" alt="new message">
            <div class="divider"></div>
            <div class="user-profile-avatar">BR</div>
            <p class="user-name">Brodie Richards</p>
            <p class="short-message">Hi there, Brodie
              My name is Melissa from...</p>
            <p class="message-time">9 : 30 PM</p>
            <img src="../assets/invitation-icon.svg" alt="invitation icon">
          </div>
          <div class="one-chat">
            <img class="new-message-icon" src="../assets/koverta-new.svg" alt="new message">
            <div class="divider"></div>
            <div class="user-profile-avatar">BR</div>
            <p class="user-name">Brodie Richards</p>
            <p class="short-message">Hi there, Brodie
              My name is Melissa from...</p>
            <p class="message-time">9 : 30 PM</p>
            <img src="../assets/invitation-icon.svg" alt="invitation icon">
          </div>
        </div>
      </div>
      <!-- RIGHT -->

    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Searchpart from '../components/Searchpart.vue'

export default {
  name: 'Chatroom',
  components: {
    SideBar,
    Searchpart
  },
  data() {
    return {}
  },
  mounted() {
    fetch('https://app.outpostchess.com/api/v2/titule', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('token')}`
          }
        },
    )
        .then(response => response.json())
        .then(data => this.titule = data)
//.then(data => console.log('titule',data))


    fetch('https://app.outpostchess.com/api/v2/current_user_info', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('token')}`
          }
        },
    )

        .then(response => response.json())
        .then(data => this.user = data)
//.then(data => console.log('podaci',data))

  },


  methods: {},

}
</script>


<style scoped>
a {
  color: #FFFFFF;
}

hr {
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  margin: 2.5rem auto 2.5rem auto;
}

.profile {
  display: grid;
  grid-template-columns: 259px auto;


}

#searchpart-chat {
  margin: auto;
  width: 92%;
}

/* CENTER */
.container-center {
  background-color: #171819;
}

@media screen and (max-width: 768px) {
  .container-center {
    width: 100%;
  }

  .profile {
    grid-template-columns: 100%;
  }
}

.search-filter {

  border: 0.5px solid rgba(111, 115, 129, 0.5);
  box-sizing: border-box;
  border-radius: 26px;
  display: flex;
  justify-content: flex-start;
  height: 2.625rem;
  background-image: url(../assets/search_24px.png);
  background-repeat: no-repeat;
  background-position-x: 1.375rem;
  background-position-y: 0.875rem;
  padding-left: 60px;
  font-size: 0.875rem;
  color: #FFFFFF;
  cursor: pointer;
  width: 78%;
  margin: 2rem 4%;
}

#notify {
  display: flex;
  padding-top: 1.75rem;
  width: 92%;
  margin: auto;
  justify-content: flex-end
}

#middle1-img {
  height: 1.5625rem;
}

#a-middle {
  border-radius: 50%;
  height: 2.8125rem;
  width: 2.8125rem;
  background-color: #202122;
  display: flex;
  justify-content: center;
  align-items: center;
}

#a-middle:hover {
  opacity: 0.8;
}

.center_list_header {
  width: 92%;
  background-color: #202122;
  display: grid;
  grid-template-columns: 29% 25% 21% 25%;
  height: 4.25rem;
  margin: auto;
}

.header_list {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF
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

/* RIGHT */


@media only screen and (max-width: 1500px) and (min-width: 500px) {

  .profile {
    display: grid;
    font-size: 0.875rem;
  }

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

  @media only screen and (max-width: 1440px) {
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
}
</style>
