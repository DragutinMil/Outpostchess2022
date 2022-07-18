<template>
  <div>
    <div class="profile">
      <SideBar/>
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
            <div class="header-list-mobile">
              Inbox
            </div>
          </div>
          <OneChat/>
        </div>
      </div>
      <!-- RIGHT -->
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Searchpart from '../components/Searchpart.vue'
import OneChat from "../components/Chatroom/OneChat";

export default {
  name: 'Chatroom',
  components: {
    OneChat,
    SideBar,
    Searchpart
  },
  data() {
    return {}
  },
  mounted() {
    fetch('https://api.outpostchess.com/api/v2/titule', {
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


    fetch('https://api.outpostchess.com/api/v2/current_user_info', {
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
  display: flex;
  /*display: grid;*/
  /*grid-template-columns: 259px auto;*/
  height: 100vh;

}

#searchpart-chat {
  margin: auto;
  width: 92%;
}

/* CENTER */
.container-center {
  background-color: #171819;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .container-center {
    width: 100%;
  }

  /*.profile {*/
  /*  grid-template-columns: 100%;*/
  /*}*/
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

.header-list-mobile {
  display: none;
  color: white;
  font-weight: 500;
}

@media screen and (max-width: 640px) {
  .center_list_header {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding-left: 2.547rem;
  }

  .header_list {
    display: none;
  }

  .header-list-mobile {
    display: block;
  }

  .search-filter {
    display: none;
  }
}

/* RIGHT */
/*@media only screen and (max-width: 1440px) {*/

/*  .profile {*/
/*    display: grid;*/
/*    font-size: 0.875rem;*/
/*  }*/
/*}*/
</style>
