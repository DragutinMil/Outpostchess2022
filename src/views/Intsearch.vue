<template>
  <div class="profile">
    <SideBar />
    <div
      :class="{ 'right-profile': isActive, 'side-appear': clickside1 }"
    >
      <div />
      <div id="right-middle">
        <div style="padding-bottom: 2.5rem" />
        <div id="input-filter">
          <div id="filter_height">
            <img
              id="imgsearch"
              src="../assets/search_24px.png"
              alt=""
              @click="confirmsearch()"
            >
          </div>
          <input
            v-model="input_text"
            type="search"
            name=""
            class="intelegent-filter"
            placeholder="INTELEGENT FILTER"
            @keyup.enter="confirmsearch()"
          >
          <div
            :class="{
              'second-part': isActive,
              'second-part2': clickside1,
            }"
            @click="clickside()"
          >
            <div style="display: flex">
              <p id="category-text">
                Category
              </p>
              <img
                id="img-category"
                src="../assets/linije.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <!--DECLARATION-->
        <div class="search">
          <div
            class="search-header"
            style="padding-left: 8px"
          >
            No.
          </div>
          <div class="search-header">
            Name&Surname
          </div>
          <div class="search-header">
            Country
          </div>
          <div class="search-header">
            City
          </div>
          <div class="search-header">
            Age
          </div>
          <div class="search-header">
            Gender
          </div>
          <div class="search-header">
            Rating
          </div>
          <div class="search-header">
            Interested in
          </div>
          <div class="search-header">
            Title
          </div>
          <div
            class="search-header"
            style="padding-right: 0.5rem"
          >
            Club
          </div>
        </div>

        <!--SEARCH RESULTS -->
        <div v-if="searchresults">
          <div
            v-for="(usersrc, index) in usersearchreact.slice(0,100)"
            :key="usersrc.user_uuid"
            class="search"
          >
            <div class="search-res">
              {{ index + 1 }}
            </div>
            <div class="search-res start">
              <div class="initials">
                {{ usersrc.inicijali }}
              </div>
              <div v-if="user.user_uuid !== usersrc.user_uuid">
                <router-link
                  :user_uuid="usersrc.user_uuid"
                  :to="{
                    name: 'Publicprofile',
                    params: { id: usersrc.user_uuid },
                  }"
                >
                  {{ usersrc.name_first }} {{ usersrc.name_last }}
                </router-link>
              </div>
              <div v-if="user.user_uuid == usersrc.user_uuid" >
                <router-link
                    to="../profile"
                  >
                    {{ usersrc.name_first }} {{ usersrc.name_last }}
                  </router-link>
              </div>
            </div>
            <div class="search-res">
              {{ usersrc.federation }}
            </div>
            <div class="search-res">
              {{ usersrc.city }}
            </div>
            <div class="search-res">
              {{ usersrc.godine }}
            </div>
            <div class="search-res">
              {{ usersrc.sex }}
            </div>
            <div class="search-res">
              {{ usersrc.rating_standard }}
            </div>
            <div class="search-res">
              <div class="search-res3">
                <div
                  v-if="usersrc.open2new_eng_club == true"
                  class="inetrestedin"
                >
                  Club
                </div>
                <div
                  v-if="usersrc.open2new_eng_tournament == true"
                  class="inetrestedin"
                >
                  Tournament
                </div>
                <div
                  v-if="usersrc.open2new_eng_event == true"
                  class="inetrestedin"
                >
                  Event
                </div>
              </div>
            </div>
            <div class="search-res2">
              <div 
                v-for="titles in titule"
                :key="titles.titula_uuid"
              >
                <div  v-if="titles.titula_uuid == usersrc.titula_player">
                  {{ titles.titula_short_name }}
                </div>
                <div v-if="titles.titula_uuid == usersrc.titula_organizer">
                    IO&nbsp;&nbsp;
                  </div>
                   <div v-if="titles.titula_uuid == usersrc.titula_trainer">
                    {{ titles.titula_short_name }}&nbsp;&nbsp;
                  </div>
                  <div v-if="titles.titula_uuid == usersrc.titula_arbiter">
                    {{ titles.titula_short_name }}&nbsp;&nbsp;
                  </div>
              </div>
            </div>
            <div class="search-res">
              <div>{{ usersrc.club_name }}</div>
            </div>
          </div>
        </div>
        <!--ALL USERS -->
        <div v-else>
          <div
            v-for="(alluser, index) in usersearch.slice(0,50)"
            :key="alluser.user_uuid"
          >
            <div
              
              class="search"
            >
              <div class="search-res">
              {{ index + 1 }}
            </div>
              <div class="search-res start">
                <div class="initials">
                  {{ alluser.inicijali }}
                </div>
                <div v-if="user.user_uuid !== alluser.user_uuid">
                  <router-link
                    :user_uuid="alluser.user_uuid"
                    :token_id="user.user_uuid"
                    :to="{
                      name: 'Publicprofile',
                      params: { id: alluser.user_uuid },
                    }"
                  >
                    {{ alluser.name_first }} {{ alluser.name_last }}
                  </router-link>
                </div>
                <div v-if="user.user_uuid == alluser.user_uuid">
                  <router-link
                    to="../profile"
                  >
                    {{ alluser.name_first }} {{ alluser.name_last }}
                  </router-link>
                </div>
              </div>
              <div class="search-res">
                {{ alluser.federation }}
              </div>
              <div class="search-res">
                {{ alluser.city }}
              </div>
              <div class="search-res">
                {{ alluser.godine }}
              </div>
              <div class="search-res">
                {{ alluser.sex }}
              </div>
              <div class="search-res">
                {{ alluser.rating_standard }}
              </div>

              <div class="search-res3">
                <div
                  v-if="alluser.open2new_eng_club == true"
                  class="inetrestedin"
                >
                  Club
                </div>
                <div
                  v-if="alluser.open2new_eng_tournament == true"
                  class="inetrestedin"
                >
                  Tournament
                </div>
                <div
                  v-if="alluser.open2new_eng_event == true"
                  class="inetrestedin"
                >
                  Event
                </div>
              </div>
              <div class="search-res2">
                
                <div
                  v-for="titles in titule"
                  :key="titles.titula_uuid"
                >
                  <div v-if="titles.titula_uuid == alluser.titula_player">
                    {{ titles.titula_short_name }}&nbsp;&nbsp;
                  </div>
                  <div v-if="titles.titula_uuid == alluser.titula_organizer">
                    IO&nbsp;&nbsp;
                  </div>
                   <div v-if="titles.titula_uuid == alluser.titula_trainer">
                    {{ titles.titula_short_name }}&nbsp;&nbsp;
                  </div>
                  <div v-if="titles.titula_uuid == alluser.titula_arbiter">
                    {{ titles.titula_short_name }}&nbsp;&nbsp;
                  </div>
                </div>
              </div>
              <div class="search-res">
                <div>{{ alluser.club_name }}</div>
                <!--  <div v-if="alluser.organizer_current_event.event_name!=null"> {{alluser.organizer_current_event.event_name}}</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
      <!-- SIDE BAR -->
      <div
        v-if="clickside1"
        id="side-bar"
      >
        <div class="side-bar-filter">
          FILTER:
        </div>
        <hr>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clickage,
          }"
          @click="clickage = !clickage"
        >
          Age
        </div>
        <div
          v-if="clickage"
          class="clicksearch"
        >
          <input
            v-model="agefrom"
            class="sideinput"
            type="text"
            inputmode="numeric"
            placeholder="From"
            name=""
            @keyup.enter="confirmsearch()"
          >
          &nbsp;&nbsp; - &nbsp;&nbsp;
          <input
            v-model="ageto"
            class="sideinput"
            type="text"
            inputmode="numeric"
            placeholder="To"
            name=""
            @keyup.enter="confirmsearch()"
          >
        </div>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clickcountry,
          }"
          @click="clickcountry = !clickcountry"
        >
          Country
        </div>
        <div
          v-if="clickcountry"
          class="clicksearch"
        >
          <select
            id="select-css"
            v-model="country"
          >
            <option
              disabled
              value=""
            >
              Select country
            </option>
            <option
              v-for="fla in flags"
              :key="fla.code3"
              :value="fla.code3"
            >
              {{ fla.name }}
            </option>
          </select>
        </div>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clickrating,
          }"
          @click="clickrating = !clickrating"
        >
          Rating
        </div>
        <div
          v-if="clickrating"
          class="clicksearch"
        >
          <input
            v-model="ratingfrom"
            class="sideinput"
            type="text"
            inputmode="numeric"
            placeholder="From"
            name=""
            @keyup.enter="confirmsearch()"
          >
          &nbsp;&nbsp; - &nbsp;&nbsp;
          <input
            v-model="ratingto"
            class="sideinput"
            type="text"
            inputmode="numeric"
            placeholder="To"
            name=""
            @keyup.enter="confirmsearch()"
          >
        </div>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clickgender,
          }"
          @click="clickgender = !clickgender"
        >
          Gender
        </div>
        <div
          v-if="clickgender"
          class="clicksearch"
        >
          <div class="flex-center">
            <input
              v-model="sexon"
              type="radio"
              checked="sexon"
              name="gender"
              class="radiobutton"
              value="Male"
            >
            <p style="margin: 0; padding-right: 10px">
              Male
            </p>
            <input
              v-model="sexon"
              type="radio"
              checked="sexon"
              name="gender"
              class="radiobutton"
              value="Female"
            >
            <p style="margin: 0">
              Female
            </p>
          </div>
        </div>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clicktitle,
          }"
          @click="clicktitle = !clicktitle"
        >
          Title
        </div>
        <div
          v-if="clicktitle"
          class="clicksearch"
        >
          <div class="custom-select">
            <select
              v-model="titleselected"
              class="select-text"
            >
              <option value="">
                <p style="color: #ffffff">
                  Title search
                </p>
              </option>
              <option
                v-for="choosedtitle in titule"
                :key="choosedtitle.titula_uuid"
                :value="[choosedtitle.titula_uuid]"
              >
                {{ choosedtitle.titula_short_name }} -
                {{ choosedtitle.titula_full_name }}
              </option>
            </select>
          </div>
        </div>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clicktown,
          }"
          @click="clicktown = !clicktown"
        >
          Town
        </div>
        <div
          v-if="clicktown"
          class="clicksearch"
        >
          <input
            id=""
            v-model="searchtown"
            class="sideinput2"
            type="text"
            name=""
            placeholder="Enter town"
            @keyup.enter="confirmsearch()"
          >
        </div>
        <div
          :class="{
            'side-bar-filter': isActive,
            'side-bar-filterclick': clickinterested,
          }"
          @click="clickinterested = !clickinterested"
        >
          Interested in
        </div>
        <div
          v-if="clickinterested"
          class="clicksearch paddd"
        >
          <div id="search-interest">
            <div class="check_search-interest">
              <input
                v-model="interestedclub"
                type="checkbox"
                class="radiobutton"
              >
              <p style="margin: 0">
                Club
              </p>
            </div>
            <div class="check_search-interest">
              <input
                v-model="interestedtour"
                type="checkbox"
                class="radiobutton"
              >
              <p style="margin: 0">
                Tournamenr
              </p>
            </div>
            <div class="check_search-interest">
              <input
                v-model="interestedevent"
                type="checkbox"
                class="radiobutton"
              >
              <p style="margin: 0">
                Event
              </p>
            </div>
          </div>
        </div>
        <div class="flex center buttonsearch">
          <button
            class="middle2-buttons"
            type="button"
            @click="confirmsearch"
          >
            Search
          </button>
        </div>
      </div>
      <!--END SIDE BAR -->
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "Intsearch",
  components: {
    SideBar,
  },
  data() {
    return {
      isActive: true,
      clickside1: false,
      flags: [],
      alluser: "",
      usersearch: "",
      usersearchreact: "",
      clickage: "",
      clickcountry: "",
      clickrating: "",
      clickgender: "",
      clicktown: "",
      clickinterested: "",
      clicktitle: "",
      searchtown: "",
      titleselected: "",
      agefrom: "",
      ageto: "",
      ratingfrom: "",
      ratingto: "",
      city: "",
      sex: "",
      country: "",
      sexon: "",
      interested: "",
      interestedclub: "",
      interestedtour: "",
      interestedevent: "",
      searchresults: false,
      user: {
        titula_player_details: { titula_short_name: "", titula_uuid: "" },
        titula_player: "",
        user_uuid: "",
        titula_organizer_details: { titula_short_name: "" },
      },
      use: {
        titula_player_details: { titula_short_name: "", titula_uuid: "" },
        user_uuid: "",
        titula_player: "",
        titula_organizer_details: { titula_short_name: "" },
      },
      interestedin: "",
      input_text: "",
      textsearch: "",
      titule: [],
    };
  },
  mounted() {
    fetch("https://app.outpostchess.com/api/v2/titule", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => (this.titule = data));

    fetch("https://app.outpostchess.com/api/v2/countries", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => (this.flags = data))

    fetch(
      "https://app.outpostchess.com/api/v2/users_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          titule: this.titleselected,
          years_min: this.agefrom,
          years_max: this.ageto,
          rating_standard_min: this.ratingfrom,
          rating_standard_max: this.ratingto,
          city: this.searchtown,
          sex: this.sexon,
          open2new_eng_club: this.interestedclub,
          open2new_eng_tournament: this.interestedtour,
          open2new_eng_event: this.interestedevent,
          federation: this.country,
          search_text: this.input_text,
        }),
      })
    
      .then((response) => response.json())
      .then((data) => (this.usersearch = data));

    //.then(data => console.log(data)),

    fetch("https://app.outpostchess.com/api/v2/current_user_info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => (this.user = data));
    //.then(data => console.log('podaci',data))
  },

  methods: {
    confirmsearch: function () {
      this.searchresults = true;
      if (this.titleselected == "") {
        this.titleselected = [];
      }
      console.log(this.interestedclub);
      fetch("https://app.outpostchess.com/api/v2/users_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          titule: this.titleselected,
          years_min: this.agefrom,
          years_max: this.ageto,
          rating_standard_min: this.ratingfrom,
          rating_standard_max: this.ratingto,
          city: this.searchtown,
          sex: this.sexon,
          open2new_eng_club: this.interestedclub,
          open2new_eng_tournament: this.interestedtour,
          open2new_eng_event: this.interestedevent,
          federation: this.country,
          search_text: this.input_text,
        }),
      })
        .then((response) => response.json())
        .then((data) => (this.usersearchreact = data))
        .then((data) => console.log(data));
    },

    clickside: function () {
      this.clickside1 = !this.clickside1;
      if (this.clickside1 == false) {
        this.clickage == false,
          (this.clickcountry = false),
          (this.clickrating = false),
          (this.clickgender = false),
          (this.clicktown = false),
          (this.clickinterested = false),
          (this.clicktitle = false);
      }
    },
  },
};
</script>


<style scoped>
a {
  color: #ffffff;
}
hr {
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  margin: 2.5rem auto 2.5rem auto;
}
.profile {
  display: grid;
  grid-template-columns: 16.25rem auto;
  width: 100%;
}

.right-profile {
  display: grid;
  grid-template-columns: 8% 84% 8% 0%;
  background-color: #1b1c1d;
}

.side-appear {
  display: grid;
  grid-template-columns: 1% 78% 1% 20%;
  transition-timing-function: ease-in;
  transition: 1.5s;
}
#filter_height {
  height: 3rem;
  border-left: 0.5px solid rgba(111, 115, 129, 0.5);
  border-top: 0.5px solid rgba(111, 115, 129, 0.5);
  border-bottom: 0.5px solid rgba(111, 115, 129, 0.5);
  box-sizing: border-box;
  border-radius: 1.625rem 0 0 1.625rem;
}
#imgsearch {
  /* border: 0.5px solid rgba(111, 115, 129, 0.5);*/
  height: 2.1875rem;
  padding-top: 1rem;
  padding-left: 1rem;
  cursor: pointer;
}
.intelegent-filter {
  border-top: 0.5px solid rgba(111, 115, 129, 0.5);
  border-bottom: 0.5px solid rgba(111, 115, 129, 0.5);
  box-sizing: border-box;
  background-color: #1b1c1d;
  display: flex;
  height: 3rem;
  padding-left: 1.875rem;
  font-size: 0.875rem;
  color: #ffffff;

  width: 85%;
}
#input-filter {
  display: flex;
  margin-bottom: 1.25rem;
}
.second-part {
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.5px solid rgba(111, 115, 129, 0.5);
  height: 3rem;
  padding-left: 1.25rem;
  border-radius: 0 1.625rem 1.625rem 0;
  width: 15%;
  color: #6f7381;
  cursor: pointer;
}
.second-part2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid rgba(111, 115, 129, 0.5);
  height: 3rem;
  padding-left: 1.25rem;
  border-radius: 0 1.625rem 1.625rem 0;
  width: 15%;
  color: #ffffff;
  cursor: pointer;
  background-color: #c8a07d;
}
#second-part:hover {
  opacity: 0.7;
}
#img-category {
  height: 1rem;
  padding: 0 0 0 1rem;
  margin: auto;
}
#category-text {
  margin: auto;
}

.search {
  display: grid;
  grid-template-columns: 4% 23% 7% 10% 6% 8% 8% 12% 12% 10%;
  background-color: #202122;
  height: 3.25rem;
  margin: 1.25rem 0 1.25rem 0;
  color: #ffffff;
  align-items: center;
}
.search-res {
  background-color: #202122;
  margin: auto;
}
.search-res2 {
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}
.start {
  display: flex;
  width: 100%;
  align-items: center;
}
.initials {
  border: 1px;
  margin: 0 10% 0 10%;
  background-color: rgba(255, 255, 255, 0.7);
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-res3 {
  display: block;
}
.inetrestedin {
  font-size: 0.75rem;
  color: rgba(17, 198, 209, 1);
}

.search-header {
  font-size: 0.875rem;
  background-color: #202122;
}

/*SEARCH BAR */

#side-bar {
  height: 100%;
  width: 100%;
  background-color: #202122;
  color: #6f7381;
  font-weight: 500;
  text-align: left;
  padding: 2.5rem 0 2.5rem 0;
}

.side-bar-filter {
  padding: 1rem 1.25rem 1rem 1.25rem;
}
.side-bar-filter:hover {
  color: #ffffff;
  cursor: pointer;
}
.clicksearch {
  height: 1.25rem;
  display: flex;
  font-size: 0.75rem;
  color: #ffffff;
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
}
.sideinput {
  color: #ffffff;
  width: 3.125rem;
  padding: 0 0.375rem 0 0.375rem;
  border-bottom: 0.5px solid #ffffff;
}
.sideinput2 {
  color: #ffffff;
  width: 6.25rem;
  border-bottom: 0.5px solid #ffffff;
}

.side-bar-filterclick {
  color: #ffffff;
}

/*SELECT*/
select {
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #202122;
}
.custom-select {
  position: relative;
  background-color: #202122;
  color: #ffffff;
  border: none;
  font-size: 0.875rem;
  padding: 0;
}
.select-text {
  color: #ffffff;
  cursor: pointer;
}

#select-css {
  color: #ffffff;
  background-color: #202122;
  width: 5rem;
  border-radius: 3px;
  outline: 0px;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
}

/*BUTTON*/
.middle2-buttons {
  border: 0.5px solid #5c5e64;
  box-sizing: border-box;
  background-color: #202122;
  color: #ffffff;
  font-size: 0.875rem;
  width: 8.125rem;
  height: 4.375rem;
  margin-right: 1rem;
  margin-left: 1rem;
}
.middle2-buttons:hover {
  opacity: 0.7;
}
.buttonsearch {
  margin-top: 1.25rem;
}

/*RADIO BUTTONS */
.radiobutton {
  margin: auto 5px auto 0;
}
.radiobutton > p {
  padding-right: 0.5rem;
}
.check_search-interest {
  display: flex;
}
#search-interest {
  width: 100%;
}

@media only screen and (max-width: 1500px) and (min-width: 500px) {
  .profile {
    display: grid;
    grid-template-columns: 12.5rem auto;
    font-size: 0.875rem;
  }

  .right-profile {
    background-color: #171819;
    display: grid;
    grid-template-columns: 4% 92% 4%;
    background-color: #1b1c1d;
  }
  .side-appear {
    display: grid;
    grid-template-columns: 2% 80% 2% 16%;
    transition-timing-function: ease-in;
    transition: 1.5s;
  }
}
</style>