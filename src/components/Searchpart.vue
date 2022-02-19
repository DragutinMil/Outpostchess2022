<template>
  <div id="middle1">
    <input
      type="search"
      name=""
      class="search-profile"
      placeholder="Go to search..."
      @click="go_to_search"
    >
    <div >
<!--<p class="flex-center" id="notification_counter" v-if="$store.state.counterNot!=''" >
      {{ $store.state.counterNot }}  
    </p> -->
    <p   >
 
    </p>     
    </div>
    <div class="dropdown-notification">
      <a id="a-middle"> <img 
         @click="see_notificationSSSSS " 
        id="middle1-img"
        src="../assets/notification_important_24px@2x.png"
        alt=""
      ></a>
      <div class="dropdown-content" v-if="drop_not"   >
        <notif-list  v-for="notif in notif_arr" :key="notif.n_id" :notif="notif" />
        <a class="see_notifications" @click="All_notifications"  >See all notifications </a>
        
      </div>
        
      
    </div> 
    <p style="color:white;padding-left:20px;">
      
     <!--  {{ $store.state.notif_arr }} -->
    </p>
  </div>
</template>

<script>
import NotifList from './NotifList.vue';
 export default {
  components: { NotifList },
  name: 'Searchpart',
  props:[],
  data(){
    return{
       lastId:null,
       drop_not:false,
       text_interest:''
    }
  },
   
  mounted(){
    this.$store.dispatch('getNotification');
  },
  created() {
            this.$socket.on( 'tb_notification' , this.receiveNotif )
        },
  computed:{
    notif_arr(){
      return this.$store.state.notif_arr
    },
    
  },
  
  methods:{
       All_notifications:function(){
         this.$router.push('../notifications')
       },
       receiveNotif(payload){
              //console.log('received a notif', payload)
              //this.notif_arr=[payload,...this.notif_arr]
              //console.log(this.notif_arr)
              console.log(payload)
              this.$store.commit('receiveNotif',payload)
         
        }  ,
      go_to_search:function(){
        this.$router.push('../intsearch');
      },
      see_notification(){
        this.drop_not = !this.drop_not;
        if(this.$store.state.notif_arr != ''){
         this.lastId=this.$store.state.notif_arr[0].n_id
         this.$store.commit('seen_notification')
         console.log(this.$store.state.notif_arr)
         /* fetch( `https://app.outpostchess.com/api/v2/notification_last_read_set/${this.lastId} `, {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
             },
           }, 
           
         )*/
        
      }
    }
  }
}
</script>

<style>



.search-profile{
      border: 1px solid #393939;
      box-sizing: border-box;
      border-radius: 20px;
      background-color:#1B1C1D ;
      display:flex;
      height: 33px;
      background-image: url(../assets/search_24px.png);
      background-repeat:no-repeat;
      background-position-x: 22px;
      background-position-y: 6px;
      padding-left:60px;
      font-size: 14px;
      color:#C7C9D0;
      cursor:pointer;
      width:270px;
    }
#middle1{
    display:grid;
    grid-template-columns: 90% 5% 5%;
    margin-top:50px;
}
#middle1-img{
   height: 25px;
}
#a-middle{
    border-radius: 50% ;
    height: 45px;
    width: 45px;
    background-color: #202122;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
#a-middle:hover{
    opacity: 0.8;
}
#notification_counter{
   color:white;
   position:relative;
   left:50px;
   border:1px solid #11C6D1;
   border-radius: 50px;
   background-color: #11C6D1;
   height: 20px;
   width: 20px;
   z-index: 10;
}

.dropdown-content a:hover{
  background: #2c3e50;
  color:white
}
.dropdown-notification{
  position: relative;
  display: block;
}


.dropdown-content{
  text-decoration: none;
  position: absolute;
  display: block;
  z-index: 1;
  float:left;
  right:25px;
  width: 300px;
  border: 1px solid #FFFFFF;
}
.dropdown-content a{
  display: block;
  float: left;
  color: white;
  padding: 0 15px;
  line-height: 30px;
  font-size: 14px;
  background: #202122;
  transition: .5s;
  width: 100%;
  text-align: left;
}
.see_notifications{
  color:#FFFFFF;
  cursor: pointer;
} 


</style>