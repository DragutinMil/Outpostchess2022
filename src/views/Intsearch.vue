<template>
   <div class="profile">
      <SideBar />
       <div  v-bind:class="{'right-profile':isActive,'side-appear':clickside1}">
          <div></div>
          <div id="right-middle">
            <div style="padding-bottom:40px">
            </div>
            <div id="input-filter">
              <input type="search" @keyup.enter="confirmsearch()" v-model="input_text" name="" class="intelegent-filter" placeholder="INTELEGENT FILTER">
              <div v-bind:class="{'second-part':isActive,'second-part2':clickside1}" @click="clickside()"  > 
                <div style="display:flex;"  ><p id="category-text"  >Category</p>  <img   id="img-category" src="../assets/linije.png" alt=""></div>  
              </div>
            </div>
 <!--DECLARATION-->           
            <div class="search">
              <div  class="search-header" style="padding-left:8px;">No.</div>
              <div class="search-header">Name&Surname</div>
              <div class="search-header">Country</div>
              <div class="search-header">City</div>
              <div class="search-header">Age</div>
              <div class="search-header">Gender</div>
              <div class="search-header">Rating </div>
              <div class="search-header">Interested in</div>
              <div class="search-header">Title</div>
              <div class="search-header" style="padding-right:8px;">Club/Event</div>
            </div>

<!--SEARCH RESULTS -->
            <div  v-if="searchresults   " >
              <div class="search" v-for="(usersrc,index) in usersearchreact" :key="usersrc.user_uuid">
                
                  <div class="search-res">{{index + 1}}</div>
                  <div class="search-res start " >
                    <div class="initials">{{usersrc.inicijali}}</div>
                    <div><a href="#">{{usersrc.name_first}} {{usersrc.name_last}}</a></div>
                  </div>
                  <div class="search-res">{{usersrc.federation}}</div>
                  <div class="search-res">{{usersrc.city}}</div>
                  <div class="search-res">{{usersrc.godine}}</div>
                  <div class="search-res">{{usersrc.sex}} </div>
                  <div class="search-res">{{usersrc.rating_standard}}</div>
                  <div class="search-res">
                    <div   class="search-res3">
                      <div class="inetrestedin" v-if="usersrc.open2new_eng_club==true">Club</div>
                      <div class="inetrestedin" v-if="usersrc.open2new_eng_tournament==true">Tournament</div>
                      <div class="inetrestedin" v-if="usersrc.open2new_eng_event==true">Event</div>
                    </div>
                  </div>
                  <div class="search-res2">
                    <div v-for="titles in usersrc.titule" :key="titles" style="padding:6px">
                      <div v-for="use in user.titule_details" :key="use.user_uuid" >
                        <div  v-if="titles==use.titula_uuid" >
                            {{use.titula_short_name}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="search-res"  >
                      <div>{{usersrc.club_name}} </div>
                      <div> {{usersrc.organizer_current_event}}</div> 
                  </div>
                
              </div>
            </div >
<!--ALL USERS -->
            <div v-else>
              <div  v-for="alluser in usersearch" :key="alluser.user_uuid">
                <div class="search" v-if="alluser.name_first!=null " >
                  <div  class="search-res"></div>
                  <div class="search-res start " >
                    <div class="initials">{{alluser.inicijali}}</div>
                    <div ><router-link :user_uuid='alluser.user_uuid'   :to="{ name:'Publicprofile',params:{ id:alluser.user_uuid}}">{{alluser.name_first}} {{alluser.name_last }} </router-link></div>  
                    
                  </div>
                  <div class="search-res">{{alluser.federation}}</div>
                  <div class="search-res">{{alluser.city}}</div>
                  <div class="search-res">{{alluser.godine}}</div>
                  <div class="search-res">{{alluser.sex}}</div>
                  <div class="search-res">{{alluser.rating_standard}}</div>

                  <div   class="search-res3">
                    <div class="inetrestedin" v-if="alluser.open2new_eng_club==true">Club</div>
                    <div class="inetrestedin" v-if="alluser.open2new_eng_tournament==true">Tournament</div>
                    <div class="inetrestedin" v-if="alluser.open2new_eng_event==true">Event</div>
                  </div>
                  <div class="search-res2">
                    <div v-for="titles in alluser.titule" :key="titles"  style="padding:6px" >
                      <div  v-for="use in user.titule_details" :key="use.user_uuid" >
                        <div  v-if="titles==use.titula_uuid" >
                            {{use.titula_short_name}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="search-res"  >
                      <div>{{alluser.club_name}} </div>
                      <div> {{alluser.organizer_current_event}}</div> 
                  </div>
                </div>
              </div >
            </div>
          </div>
          <div></div>
<!-- SIDE BAR -->         
          <div v-if="clickside1" id="side-bar">
            <div  class="side-bar-filter">FILTER:</div>
                <hr>
                <div @click="clickage=!clickage" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clickage}" >Age</div>
                <div v-if="clickage" class="clicksearch">
                    <input @keyup.enter="confirmsearch()" v-model="agefrom"  class="sideinput"  type="text" inputmode="numeric" placeholder="From" name="" id=""> 
                     &nbsp;&nbsp; - &nbsp;&nbsp;  
                    <input @keyup.enter="confirmsearch()" v-model="ageto" class="sideinput" type="text" inputmode="numeric" placeholder="To" name="" id="">
                </div>
                <div @click="clickcountry=!clickcountry" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clickcountry}">Country</div>
                <div v-if="clickcountry" class="clicksearch">
                    <select v-model="country"    id="select-css">     
                        <option disabled value="">Select country</option>                           
                        <option  
                        v-for="fla in flags" :key="fla.code3"  :value="fla.code3"
                        >{{fla.name}}
                        </option>
                    </select>
                </div>
                <div @click="clickrating=!clickrating" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clickrating}">Rating</div>
                <div v-if="clickrating" class="clicksearch">
                   <input @keyup.enter="confirmsearch()" v-model="ratingfrom" class="sideinput"  type="text" inputmode="numeric" placeholder="From" name="" id="">
                   &nbsp;&nbsp; - &nbsp;&nbsp; 
                   <input @keyup.enter="confirmsearch()" v-model="ratingto" class="sideinput" type="text" inputmode="numeric" placeholder="To" name="" id="">
                </div>
                <div @click="clickgender=!clickgender" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clickgender}" >Gender</div>
                <div v-if="clickgender" class="clicksearch ">
                    <div class="flex-center"> 
                      <input  type="radio" checked="sexon" name="gender"  class="radiobutton" value="Male" v-model="sexon" ><p style="margin:0;padding-right:10px;">Male</p>
                      <input type="radio"  checked="sexon"  name="gender"   class="radiobutton"  value="Female" v-model="sexon"  ><p style="margin:0">Female</p> 
                    </div> 
                </div>
                <div @click="clicktitle=!clicktitle" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clicktitle}">Title</div>
                <div v-if="clicktitle" class="clicksearch">
                  <div class="custom-select" >
                    <select v-model="titleselected" class="select-text">
                      <option  value=""><p style="color:#FFFFFF;">Title search</p></option>
                      <option v-for="choosedtitle in titule" :key="choosedtitle.titula_uuid" :value=[choosedtitle.titula_uuid]>{{choosedtitle.titula_short_name}} - {{choosedtitle.titula_full_name}} </option>
                    </select>
                  </div>
                </div>
                <div @click="clicktown=!clicktown" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clicktown}" >Town</div>
                <div v-if="clicktown" class="clicksearch">
                  <input @keyup.enter="confirmsearch()" v-model="searchtown"  class="sideinput2"   type="text" name="" id="" placeholder="Enter town">
                </div>
                <div @click="clickinterested=!clickinterested" v-bind:class="{'side-bar-filter':isActive,'side-bar-filterclick':clickinterested}">Interested in</div>
                <div v-if="clickinterested" class="clicksearch  paddd">
                  <div id="search-interest">
                    <div class="check_search-interest"> 
                      <input  type="checkbox"   class="radiobutton "  v-model='interestedclub' ><p style="margin:0">Club</p>
                    </div>
                    <div class="check_search-interest">
                      <input type="checkbox"    class="radiobutton"   v-model='interestedtour'  ><p style="margin:0">Tournamenr</p> 
                    </div>
                    <div class="check_search-interest">
                      <input type="checkbox"    class="radiobutton"   v-model='interestedevent'  ><p style="margin:0">Event</p> 
                    </div> 
                  </div>
                </div>
                <div class="flex center buttonsearch">
                    <button class="middle2-buttons" @click="confirmsearch"   type="button">Search</button>
                </div>
            </div>
<!--END SIDE BAR -->      
      </div>   
    </div>
</template>

<script>


import SideBar from '../components/SideBar.vue'
export default {
  name: 'Intsearch',
  components: {
    SideBar
  },
  data () {
      return {
         isActive: true,
         clickside1:false,
         flags:[],
         alluser:'',
         usersearch:'',
         usersearchreact:'',
         clickage:'',
         clickcountry:'',
         clickrating:'',
         clickgender:'',
         clicktown:'',
         clickinterested:'',
         clicktitle:'',
         searchtown:'',
         titleselected:'',
         agefrom:'',
         ageto:'',
         ratingfrom:'',
         ratingto:'',
         city:'',
         sex:'',
         country:'',
         sexon:'',
         interested:'',
         interestedclub:'',
         interestedtour:'',
         interestedevent:'',
         searchresults:false,
         user:{titule_details:{ titula_uuid:'',
                                titula_short_name:'',
              open2new_eng_club:Boolean
                                             }},
         use:[{titule_details:{ titula_uuid:'',
                                titula_short_name:''               
                                             }}],
        interestedin:'' ,
        input_text:'',
        textsearch:''                               
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
  
  fetch('https://app.outpostchess.com/api/v2/users_search', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
}, 
fetch('https://app.outpostchess.com/api/v2/countries', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization":`Bearer ${localStorage.getItem('token')}`
            }
            })
            .then(response => response.json())
            .then(data => this.flags=data)
            .then(data => console.log('countries',data))
            
)
.then(response => response.json())
.then(data => this.usersearch=data)
//.then(data => console.log(data)),
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
 
  confirmsearch:function(){
    this.searchresults=true;
    if (this.titleselected==""){
      this.titleselected=[]
   }
   console.log(this.interestedclub);
    fetch('https://app.outpostchess.com/api/v2/users_search', {
        method:'POST',
        headers: {'Content-Type': 'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify( { 
        titule:this.titleselected,
        years_min:this.agefrom,
        years_max:this.ageto,
        rating_standard_min:this.ratingfrom,
        rating_standard_max:this.ratingto,
        city:this.searchtown,
        sex:this.sexon,
        open2new_eng_club:this.interestedclub,
        open2new_eng_tournament:this.interestedtour,
        open2new_eng_event:this.interestedevent,
        federation:this.country,
        search_text:this.input_text,
 } )
})
  .then(response => response.json())
  .then(data => this.usersearchreact=data)
  .then(data => console.log(data));
  
  },

  clickside:function(){
     this.clickside1=!this.clickside1
     if(this.clickside1==false){
         this.clickage==false,
         this.clickcountry=false,
         this.clickrating=false,
         this.clickgender=false,
         this.clicktown=false,
         this.clickinterested=false,
         this.clicktitle=false

         console.log(this.usersearchreact.open2new_eng_club);
  console.log(this.usersearchreact.open2new_eng_tournament);
  console.log(this.usersearchreact.open2new_eng_event);
  console.log(this.interestedclub)
   }
  },
  
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
.profile{
    display:grid;
    grid-template-columns: 259px auto;
    width: 100%;
}  


.right-profile{
    
    display:grid;
    grid-template-columns: 8% 84% 8% 0%;
    background-color: #1B1C1D;
} 

.side-appear{
  display:grid;
  grid-template-columns: 1% 78% 1% 20%;
  transition-timing-function: ease-in;
  transition: 1.5s;
}
.intelegent-filter{
      
      border: 0.5px solid rgba(111, 115, 129, 0.5);
      box-sizing: border-box;
      border-radius: 26px 0 0 26px;
      background-color:#1B1C1D ;
      display:flex;
      height: 48px;
      background-image: url(../assets/search_24px.png);
      background-repeat:no-repeat;
      background-position-x: 22px;
      background-position-y: 14px;
      padding-left:60px;
      font-size: 14px;
      color:#FFFFFF;
      cursor:pointer;
      width:85%;
    }   
    #input-filter{
      display:flex;
      margin-bottom:20px;
    }
    .second-part{
       display:flex;
      justify-content: center;
      align-items: center;
     
      border: 0.5px solid rgba(111, 115, 129, 0.5);
      height: 48px;
      padding-left:20px;
      border-radius: 0 26px 26px 0;
      width:15%; 
      color:#6F7381;
      cursor:pointer;
    }
    .second-part2{
      display:flex;
      justify-content: center;
      align-items: center;
      border: 0.5px solid rgba(111, 115, 129, 0.5);
      height: 48px;
      padding-left:20px;
      border-radius: 0 26px 26px 0;
      width:15%; 
      color:#FFFFFF;
      cursor:pointer;
      background-color: #C8A07D;
    }
     #second-part:hover{
       opacity: 0.7;
     }
    #img-category{
      height: 15px;
      padding:0 0 0 15px; 
      margin:auto;
     
    }
    #category-text{
      margin:auto;
    }
    
    .search{
      display:grid;
      grid-template-columns:4% 24% 8% 8% 6% 8% 8% 12% 12% 10%;
      background-color:#202122;
      height: 52px;
      margin:20px 0 20px 0;
      color:#FFFFFF;
      align-items: center;

    }
    .search-res{
      background-color:#202122;
      margin:auto
    }
    .search-res2{
       display:flex;
       width: 100%;
       margin:auto;
       align-items: center;
       justify-content: center;
       font-size: 12px;
    }
    .start{
       display:flex;
       width:100%;
       align-items: center;
       
    }
    .initials{
    border:1px ; 
    margin: 0 10% 0 10%;
    background-color: rgba(255, 255, 255, 0.7);
    width:35px;
    height: 35px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    }
    .search-res3{
      display:block;
    }
   .inetrestedin{
      font-size:12px;
      color:rgba(17, 198, 209, 1)
   }

    .search-header{
      font-size: 14px;
      background-color:#202122;
    }

/*SEARCH BAR */

#side-bar{
  height: 100%;
  width: 100%;
  background-color:#202122;
  color:#6F7381;
  font-weight: 500;
  text-align: left;
  padding:40px 0 40px 0;
}
 
.side-bar-filter{
  padding:15px 20px 15px 20px;
}
.side-bar-filter:hover{
  color:#FFFFFF;
  cursor: pointer;
}
.clicksearch{
  height:20px; 
  display:flex;
  font-size: 12px;
  color:#FFFFFF;
  padding-left:20px;
  margin-bottom: 20px;
 
}
.sideinput{
    color:#FFFFFF;
    width: 50px;
    padding:0 6px 0 6px;
    border-bottom:0.5px solid #FFFFFF;
}
.sideinput2{
    color:#FFFFFF;
    width: 100px;
    border-bottom:0.5px solid #FFFFFF;
}

.side-bar-filterclick{
  color:#FFFFFF;
}

/*SELECT*/
select{
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
  color:#FFFFFF;
  border:none;
  font-size: 14px;
  padding:0;
  
}
.select-text{
  color:#FFFFFF;
  cursor: pointer;
}

#select-css{
    color:#FFFFFF;
    background-color: #202122;
    width:80px;
    border-radius: 3px;
    outline:0px;
    border: none;
    cursor: pointer;
    font-size: 12px;
}

/*BUTTON*/
.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 14px;
  width: 130px;
  height: 46px;
  margin-right: 15px;
  margin-left:15px;
}
.middle2-buttons:hover{
    opacity: 0.7;
}
.buttonsearch{
  margin-top: 120px;
}

/*RADIO BUTTONS */
.radiobutton{
    margin:auto  5px auto 0 ;
}
.radiobutton>p{
  padding-right: 8px;
}
.check_search-interest{
   display:flex;
}
#search-interest{
  width: 100%;
  
}



@media only screen and (max-width: 1500px) and (min-width: 500px) {

.profile{
    display:grid;
    grid-template-columns: 200px auto;
    font-size:14px;
}  

.right-profile{
   background-color:  #171819;
   display:grid;
    grid-template-columns: 4% 92% 4%;
    background-color: #1B1C1D;
}
.side-appear{
  display:grid;
  grid-template-columns: 2% 80% 2% 16%;
  transition-timing-function: ease-in;
  transition: 1.5s;
}

}
</style>