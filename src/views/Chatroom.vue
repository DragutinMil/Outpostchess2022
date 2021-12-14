<template>
   <div class="profile">
      <div><SideBar /></div>
<!-- CENTER -->
      <div class="container-center">
        <div id="notify">
          <a  id="a-middle"> <img   src="../assets/notification_important_24px@2x.png" alt="" id="middle1-img"></a>
        </div>
        <div id="input-filter">
          <input type="search"  name="" class="search-filter" placeholder="Search">
        </div>
<!-- CENTER/LIST -->
        <div id="center_list">
          <div class="center_list_header">
            <div class="header_list">Name & Surname</div>
            <div class="header_list">Messages</div>
            <div class="header_list">Time</div>
            <div class="header_list">Invitation</div>
          </div>
          <div class="center_list_header connect">
            <div style="display:flex">
              <div class="initials"> LK </div><p class="flex-center p_text" >Name  Lastname </p>
            </div>
            <div >
              <div class="flex-center p_text" > Message-  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nulla. </div>
            </div>
            <div >
              <div class="flex-center p_text" > 9 : 30 PM </div>
            </div>
            <div >
              <div class="flex-center p_text" > <img src="../assets/message_new.png" alt="" ></div>
            </div>
          </div>
          <div class="center_list_header connect">
            <div style="display:flex">
              <div class="initials"> GM </div><p class="flex-center p_text" >Name  Lastname </p>
            </div>
            <div >
              <div class="flex-center p_text" > Message-  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nulla. </div>
            </div>
            <div >
              <div class="flex-center p_text" > 9 : 30 PM </div>
            </div>
            <div >
              <div class="flex-center p_text" > <img src="../assets/message_read.png" alt="" ></div>
            </div>
          </div>
        </div>

      </div>
 <!-- RIGHT -->     
      <div class="container-right">

      </div>
         
    </div>
</template>

<script>


import SideBar from '../components/SideBar.vue'
export default {
  name: 'chatroom',
  components: {
    SideBar
  },
  data () {
      return {
                                      
      }
},
mounted(){
  fetch('https://app.outpostchess.com/api/v2/titule', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
},        
)
.then(response => response.json())
.then(data => this.titule=data)
.then(data => console.log('titule',data))
  
 
 fetch('https://app.outpostchess.com/api/v2/current_user_info', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
},        
)

.then(response => response.json())
.then(data => this.user=data)
.then(data => console.log('podaci',data))

},


methods:{
 
  
  
},

}
</script>


<style scoped>
a{
  color:#FFFFFF;
}
hr{
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  margin:40px auto 40px auto;
}
.profile {
    display:grid;
    grid-template-columns: 17% 65% 18%;
    
}  
/* CENTER */
.container-center {
 background-color:#171819;
}
.input-filter {
   width:92%;
}
.search-filter{
     
      border: 0.5px solid rgba(111, 115, 129, 0.5);
      box-sizing: border-box;
      border-radius: 26px;
      display:flex;
      justify-content: flex-start;
      height: 42px;
      background-image: url(../assets/search_24px.png);
      background-repeat:no-repeat;
      background-position-x: 22px;
      background-position-y: 14px;
      padding-left:60px;
      font-size: 14px;
      color:#FFFFFF;
      cursor:pointer;
      width:78%;
      margin:32px 4%;
    }   
#notify{
  display: flex;
  padding-top:28px;
  width:92%;
  margin:auto;
  justify-content:flex-end
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

.center_list_header{
  width:92%;
  background-color:#202122 ;
  display:grid;
  grid-template-columns: 29% 25% 21% 25%;
  height: 68px;
  margin:auto;
}
.header_list{
  display: flex;
  justify-content: center;
  align-items: center;
  color:#FFFFFF
}
.connect{
  margin-top:22px;
  height: 56px;
  margin-bottom:22px;
    align-items: center;
}
.initials{
    border:1px ; 
    margin: 0 0 0 8%;
    background-color: rgba(255, 255, 255, 0.7);
    width:35px;
    height: 35px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    }
.p_text{
  color:rgba(111, 115, 129, 1);
  margin:auto;
   overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* after 3 line show ... */
    -webkit-box-orient: vertical;
}



/* RIGHT */
.container-right{
background-color:#202122;
}



@media only screen and (max-width: 1500px) and (min-width: 500px) {

.profile {
    display:grid;
    grid-template-columns: 17% 65% 18%;
    font-size:14px;
}  



}
</style>