<template>
  <div>
    <div class="profile">
      <div>
        <SideBar />
      </div>

      <!-- CENTER -->
      <div class="container-center">
        <div />
        <div>
            <Searchpart  />
            <!-- CENTER/LIST -->
            <div id="center_list ">
              <div class="center_list_header ">
                  <div class="header_list underline">
                  Name & Surname
                  </div>
                  <div class="header_list underline">
                  Notification
                  </div>
                  <div class="header_list underline">
                  Time
                  </div>
              </div>
            </div>
            <div v-if='all'>
              <div  id="center_list" v-for="allnotif in not_all" :key="allnotif.n_id">
                <div class="center_list_header">
                    <div class="header_list">
                    {{allnotif.name_first}} {{allnotif.name_last}}
                    </div>
                    <div class="flex-center">
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_player'">
                      Interested in
                      </div>
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_player_cancel'">
                      No more interested in
                      </div>
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_club'">
                      Interested in club
                      </div>
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_club_cancel'">
                      No more interested in club
                      </div>
                    </div>
                    <div class="header_list" >
                      {{allnotif.created_date.slice(2,4)}}.{{allnotif.created_date.slice(5,7)}}.{{allnotif.created_date.slice(0,4)}}.  
                      -  {{allnotif.created_date.slice(11,13)}}:{{allnotif.created_date.slice(14,16)}}
                    </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div id="center_list" v-for="allnotif in not_all.slice(0,20)" :key="allnotif.n_id">
                <div class="center_list_header">
                    <div class="header_list">
                    {{allnotif.name_first}} {{allnotif.name_last}}
                    </div>
                    <div class="flex-center">
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_player'">
                      Interested in
                      </div>
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_player_cancel'">
                      No more interested in
                      </div>
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_club'">
                      Interested in club
                      </div>
                      <div class="header_list " v-if="allnotif.n_type=='interested_in_club_cancel'">
                      No more interested in club
                      </div>
                    </div>
                    <div class="header_list" >
                      {{allnotif.created_date.slice(8,10)}}.{{allnotif.created_date.slice(5,7)}}.{{allnotif.created_date.slice(0,4)}}.  
                      -  {{allnotif.created_date.slice(11,13)}}:{{allnotif.created_date.slice(14,16)}}
                    </div>
                </div>
              </div>
            </div>
            <p v-if="all" class="p_more" @click="see_all">less...</p>
            <p v-else class="p_more" @click="see_all">more...</p>
        </div>
        <!--END  CENTER/LIST -->
        <div />
      </div>
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
  data () {
      return {
         not_all:[],
         all:false
      }
},

mounted(){
 
 fetch(process.env.VUE_APP_URL+'/notifications_all', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
},        
)
.then(response => response.json())
.then(data => this.not_all=data)
.then(data => console.log('notifikacije',data))
},

methods:{
  see_all(){
        this.all=!this.all
  }
},

}
</script>


<style scoped>

.p_more{
  color:#FFFFFF;
  text-align: left;
  cursor: pointer;
}
a{
  color:#FFFFFF;
}
.underline{
  color:#C8A07D !important
}
.profile {
    display:grid;
    grid-template-columns: 17% 83%;
    
}  
/* CENTER */
.container-center {
 background-color:#171819;
 display:grid; 
 grid-template-columns: 8% 84% 8%; 
}

.center_list_header{
  background-color:#202122 ;
  display:grid;
  grid-template-columns: 33% 33% 23%;
  height: 3.25rem;
  margin-bottom: 1.5625rem;
  
}
.header_list{
  display: flex;
  justify-content: center;
  align-items: center;
  color:#FFFFFF
}

@media only screen and (max-width: 1500px) and (min-width: 500px) {

.profile {
    display:grid;
    grid-template-columns: 17% 83%;
    font-size:0.875rem;
} 
}
</style>