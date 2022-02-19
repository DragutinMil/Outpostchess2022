<template>
    <div class="profile">
        <SideBar />
<!--  RIGHT PROFILE -->
    <div  class="right-profile">
        <div>  </div>  
        <div id="right-middle">
             <Searchpart />
<!-- MID 2 -->             
             <div  id="middle2">
                <div class="upload-pic" >
                   <img v-if="user.profile.file_url==null"  id="profile-pic" src="https://outpostchess.fra1.digitaloceanspaces.com/2bf139b2-7074-4fd4-8377-58efead41bf0.png" alt="">  
                  <img v-else  id="profile-pic" :src='user.profile.file_url' alt="">
                </div>
                <div id="middle2-1" >
                    <div style="display:flex">
                         <p  id="profile-name" >{{user.name_first || "Name"}} {{user.name_last || "Last name"}}</p>
                    </div>
                    <div class="profile-info1" >
                        <div class="profile-info1-1">
                            <img src="../assets/Vector-1.svg" alt="" >  
                             <p  >{{user.city}}</p>
                        </div>
                          <p class="padd-text"> Age : {{user.godine}}</p>
                         <p class="padd-text"  style="color:#FFFFFF"> {{user.sex}} </p>
                    </div>
                    <div class="profile-info1-1">
                           <div  style="margin-bottom:10px" >
                            <div >
                                <p  style="margin:0;padding-right:20px;">Federation: <span style="color:#C8A07D"> {{user.federation_details.name}} </span> </p>
                            </div>
                        </div>
                        <p  style="margin-bottom:10px;padding:0">Fide ID:</p>
                         <p  style="margin-bottom:10px;padding:0 0 0 10px;color:#C8A07D"    >{{user.fide_id}}</p>    
                    </div>
                </div>
                <div id="middle2-button-container">
                    <button class="middle2-buttons" @click="disconnection_people"      type="button" >Message</button>
                    <button class="middle2-buttons" @click="connection_people"     type="button" >Connect</button>
                </div>
            </div>
<!--END MID 2 -->     
<!--MID 3 -->
            <div id="middle3">
                <div class="middle3-1">
                      
                    <div  class="middle3-1"  >
                        <p style="color:#6F7381" >Title:</p>
                        <div style="display:flex" >
                            <div  v-if="user.titula_player!==null && this.user.rola.indexOf('PLAYER')!==-1" class="titles">{{user.titula_player_details.titula_short_name}} <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->  </div>
                           <div v-if="user.titula_organizer!==null && this.user.rola.indexOf('ORGANIZER')!==-1 " >
                            <div  class="titles">{{user.titula_organizer_details.titula_short_name}} <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->  </div>
                           </div>
                        </div>
                    </div> 
                </div>
                <div  class="middle3-1 ">
                    <p style="color:#6F7381">Rating:</p>
                    <div class="ratings"><p  class="text-ratings ">Standard:</p>{{user.rating_standard}}  </div>
                    <div class="ratings"><p class="text-ratings">Rapid:</p>{{user.rating_rapid}} </div>
                    <div class="ratings"><p class="text-ratings">Blitz:</p>{{user.rating_blitz}} </div>
                </div>
            </div>
<!--MIDDLE 4 -->
            <div id="middle4">
                <div class="middle3-1" style="justify-content:space-evenly ">
                     <p  v-bind:class="{'middle4-1':isActive,'ratingsi':clickActive1,}" @click="cvdairycal1()" > CHESS CV</p>
                     <p v-bind:class="{'middle4-1':isActive,'ratingsi':clickActive2,}" @click="cvdairycal2()" >CHESS DIARY</p>  
                    <p v-bind:class="{'middle4-1':isActive,'ratingsi':clickActive3,}" @click="cvdairycal3()"  >CALENDAR</p>
                </div>
                <div class="middle3-1" >
                    <div style="margin-left:25px" v-if="user.rola.indexOf('PLAYER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor1}" @click="rolecol1()"  >Player</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('CLUBADMIN') !==-1" v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor2}"  @click="rolecol2()" >Club Admin</div> 
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('ORGANIZER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor3}" @click="rolecol3()" >Organizer</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('ARBITER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor4}" @click="rolecol4()" >Arbiter</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('TRAINER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor5}" @click="rolecol5()" >Trainer</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('OTHER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor6}" @click="rolecol6()" >Other</div>
                  
                </div>
            </div>
<!--END MIDDLE 4 -->
<!--MIDDLE 5 -->
            <div id="middle5">
                <div  class="middle5-left" > 
                    <div v-if="clickActive2">
                        <ChessDiary     :user="user" :key="user.user_uuid"   />
                    </div>
                    <div v-if="clickActive1">
                        <ChesscvPublic     :user="user" :key="user.user_uuid"   />
                    </div>
                    <div v-if="clickActive3">
                        <Calendar     :user="user" :key="user.user_uuid"   />
                    </div>
                </div>
                <div >
<!--PLAYER PART -->      
                <div v-if="activeplayer && this.user.rola.indexOf('PLAYER')!==-1">
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <p class="middle5-text">Current club:</p>
                            <div>
                                <p  class="gold" style="margin-top:20px;"  >{{user.current_clubs}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text">Current league:</p>
                            <p  class="gold" style="margin-top:20px;"  >{{user.current_leagues}}</p>
                                           
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <div style="height:65px;display:flex">
                                <p class="middle5-text" >Currently active:</p>
                                <img v-if="this.user.current_playing_bool" id="plava-kugla" src="../assets/plavakugla.png" alt="">
                            </div>
                                <b-form-checkbox switch
                                disabled
                                :checked="this.user.current_playing_bool"
                                style="padding-left:55px;"
                                ></b-form-checkbox> 
                            <div>
                                <p v-if="this.user.current_playing_bool" class="gold" style="margin-top:30px;">{{user.current_playing}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text">Player form:</p>
                            <div id="form-middle5">
                                <img style="height:25px" src="../assets/form.svg" alt="" >
                                    <p style="margin:0;padding:8px 0 0 0">Unknown</p>
                            </div>
                        </div>
                    </div>
                    <div class="middle5-right-grid" style="height:170px;">
                        <div class="mid5-padd" style="padding:0 0 0 10px">
                            <p class="middle5-text" style="margin-bottom:10px">Open to new engagements  </p>
                   
                            <div>
                                <div  class="engage-grid stikl" :class="{stikl1:this.user.open2new_eng_club===false}">
                                    <p class="gold2" >Club  </p>
                                    <img  class="engage-stikl"   src="../assets/stikla.png" alt="" >
                                </div>
                                <div class="engage-grid stikl" :class="{stikl1:this.user.open2new_eng_tournament===false }" > 
                                    <p class="gold2">Tournaments</p>
                                    <img class="engage-stikl "  src="../assets/stikla.png" alt="" >
                                </div> 
                                <div class="engage-grid stikl" :class="{stikl1:this.user.open2new_eng_event===false }"> 
                                    <p class="gold2">Events</p>
                                    <img class="engage-stikl"   src="../assets/stikla.png" alt="" >
                                </div>
                            </div>
                        </div>
                         <div  class="mid5-padd flex-center">
                             <div>
                                <div v-if="interested_no" style="margin-bottom:10px; "   class="borderbutton flex-center">
                                    <p  @click="interested_player" style="font-size:12px;">Interested in this Player</p>
                                </div>
                                <div v-if="clicked_interested2">  
                                    <div  v-for="listpla in my_interested_list" :key="listpla.created_date"  >  
                                        <div  v-if="listpla.target_uuid==user.user_uuid" class="borderbutton flex-center">
                                            <div style="font-size:12px;" >
                                            <p   @click="interested_player_del">Remove from shortlist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div @click="interested_player_del" v-if="clicked_interested" style="margin-bottom:10px; "   class="borderbutton flex-center">
                                    <p  style="font-size:12px;">Remove from shortlist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="middle5-right-end" >
                        <p class="middle5-text" >Desired club compensation ( € )</p>

                          <v-app class="vuetify-switch"> 
                            <v-container class="switch-container"   >  
                                <v-card
                                flat
                                color="transparent"
                                >
                                    <v-subheader></v-subheader>
                                        <v-card-text >
                                            <v-row >
                                                <v-col class="px-4"  >
                                                <v-range-slider
                                                    v-model="rangeclub"
                                                    :max="max"
                                                    :min="min"
                                                    hide-details
                                                    class="align-center"
                                                >
                                                    <template v-slot:prepend>
                                                    <v-text-field
                                                        :value=user.comp_per_game_from
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 0px"
                                                    ></v-text-field>
                                                    </template>
                                                    <template v-slot:append >
                                                    <v-text-field
                                                        :value=user.comp_per_game_to
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 0px"
                                                    ></v-text-field>
                                                </template>
                                                </v-range-slider>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                </v-card>
                            </v-container>  
                        </v-app>
                        <div class="slider"  >
                            <p >{{user.comp_per_game_from}}  </p><p style="padding-left:50px" >{{user.comp_per_game_to}} </p>
                        </div>  
                    </div>
                </div>
<!-- END PLAYER PART  --> 
 <!-- CLUB PART  -->            
                <div  v-else-if="activeclub && this.user.rola.indexOf('CLUB')!==-1">
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <p class="middle5-text">My club name:</p>
                            <div>
                                <p  class="gold" style="margin-top:20px;"  >{{user.club_name}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text">Current league:</p>
                           <p  class="gold" style="margin-top:20px;"  >{{user.club_current_league}}</p>
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <div style="height:65px;display:flex">
                                <p class="middle5-text">My team is currently active:</p>
                                <img v-if="this.user.club_current_playing_bool" id="plava-kugla" src="../assets/plavakugla.png" alt="">
                            </div>
                            <div>
                                <b-form-checkbox switch
                                    disabled
                                    :checked=user.club_current_playing_bool
                                    style="padding-left:55px;"
                                ></b-form-checkbox> 
                            </div>
                            <div>
                                 <p v-if="user.club_current_playing_bool" class="gold" style="margin-top:35px;"   >{{user.club_current_playing}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text" style="padding-bottom:30px;">Looking for new player:</p>
                            <div class="switch-style">
                                <b-form-checkbox switch
                                disabled
                                :checked=user.club_looking_for_new_player
                                ></b-form-checkbox>                  
                            </div>
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd flex-center">
                            <div  class="borderbutton flex-center">
                                <img src="../assets/createevent2.png" alt="">
                                <p>Create an event</p>
                            </div>
                        </div>    
                        <div class="mid5-padd flex-center">
                             <div>
                                <div style="margin-bottom:10px; "   class="borderbutton flex-center">
                                    <p  @click="interested_club" style="font-size:12px;">Interested in this Club</p>
                                </div>
                                <div v-if="clicked_interested4">  
                                    <div  v-for="listclub in my_intclub_list" :key="listclub.created_date"  >  
                                        <div  v-if="listclub.target_uuid==user.user_uuid" class="borderbutton flex-center">
                                            <div style="font-size:12px;" >
                                            <p   @click="interested_club_del">Remove from shortlist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div @click="interested_club_del" v-if="clicked_interested3" style="margin-bottom:10px; "   class="borderbutton flex-center">
                                    <p  style="font-size:12px;">Remove from shortlist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="middle5-right-grid" >
                        <div class="mid5-padd flex-center" style="height:170px">
                             <div class="borderbutton flex-center">
                                <img src="../assets/myclubpage.png" alt="">
                                <p>My club page</p>
                             </div>
                        </div>
                        <div class="mid5-padd flex-center">
                            <div class="borderbutton flex-center">
                                 <p>Create Club page</p>
                            </div>
                        </div>
                    </div>
                </div>
<!--END CLUB PART  -->
<!-- ORGANIZER PART  -->            
                <div  v-if="activeorg && this.user.rola.indexOf('ORGANIZER')!==-1">
                    <div id="middle5-right-startorg">
                        <p class="middle5-text">My Event is currently active:</p>
                         <div class="mid5-padd">
                            <div style="height:65px;display:flex">
                                <img v-if="user.organizer_current_event.event_name!=null" id="plava-kugla2" src="../assets/plavakugla.png" alt="">
                            </div>
                             <v-app class="vuetify-switch2"> 
                                 <v-container class="switch-container"   >
                                    <v-switch 
                                    v-model="switch5"
                                    disabled
                                    color="#C8A07D"
                                    ></v-switch>
                                </v-container>  
                            </v-app>
                            <div>
                                 <p v-if="user.organizer_current_event.event_name!=null" class="gold" style="margin-top:35px;padding-left:6px"   >{{user.organizer_current_event}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd flex-center" >
                            <p class="middle5-text" >Looking for new participants?"</p>
                            <div>
                                <div class="switch-style">
                                    <b-form-checkbox switch
                                    disabled
                                    :checked="user.organizer_looking_for_new_participants"
                                    ></b-form-checkbox>                  
                                </div>
                            </div>
                        </div>
                        
                         <div class="mid5-padd flex-center">
                            <div @click="interested_event" class="borderbutton flex-center">
                                <p style="text-align:center">Interested in this Organizer</p>
                            </div>               
                        </div>               
                        
             
                    </div>
                     <div  class="mid5-padd listevent" style="padding:10px; ">
                        <p class="middle5-text" >My events:</p>
                        <div  v-for="(event,index) in events" :key="event.event_uuid">
                            <div style="display:flex" v-if="event.organiser_uuid==user.user_uuid">
                                <p  style="padding-right:8px;margin-left:20px">{{index+1}}. </p>   
                                <p class="gold-event"> {{event.event_name}}</p>
                            </div>  
                        </div>  
                    </div>
                </div>
                 <div  v-if="activetre && this.user.rola.indexOf('TRAINER')!==-1" style="opacity:0.5">
                        <p class="rotate">Coming soon!</p>
                         <img style="width:100%" src="../assets/coach1.jpg" alt="">  
                    </div>
                    <div  v-if="activearb && this.user.rola.indexOf('ARBITER')!==-1" style="opacity:0.5">
                        <p class="rotate">Coming soon!</p>
                        <img style="width:100%" src="../assets/arbiter.jpg" alt=""> 
                    </div>
                </div>
            </div>
        </div>    
        <div></div>
    </div>  
<!--END  RIGHT PROFILE -->
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Searchpart from '../components/Searchpart.vue'
import ChessDiary from '../components/ChessDiary.vue'
import ChesscvPublic from '../components/ChesscvPublic.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Profile',
  components: {
    SideBar,
    Searchpart,
    ChessDiary,
    ChesscvPublic,
    Calendar
  },
  props:['user_uuid','id'],
//  props:{
  //    id_user:String
  //    },
  data () {
      return {
         isActive:true,
         clickActive1:true,
         clickActive2:'',
         clickActive3:'', 
         nl:"",
         nf:"",      
         use:'',
         isActive2: true,
         rapid:'',
         standard:'',
         blitz:'',
         curclub:"",
         curleague:"",
         curplay:"",
         curevent:"",
         town:"",
         fideid:"",
         curclubname1:'',
         curleagueclub1:'',
         curplayclub1:'',
         birtyear:'',
         about:'',
         flags:[],
         fla:'',
         selected:'',
         selectedrole:'',
         selectedFile:null,
         formData:"",
         newFormData: '',
         userroles:"",
         rolecolor1:true,
         rolecolor2:false,
         rolecolor3:false,
         rolecolor4:false,
         rolecolor5:false,
         rolecolor6:false,
         activeplayer:true,
         activeclub:false,
         activeorg:false,
         activearb:false,
         activetre:false,
         switch1:'',
         switch2:'',
         min: 0,
         max: 3000,
         user:{rola:[],
               user_uuid:'',
               federation_details:{},
               rola_array:[],
               comp_per_game_from:'',
               comp_per_game_to:'',
               profile:[],
               cv:{},
               open2new_eng_club:'',
               open2new_eng_event:'',
               open2new_eng_tournament:'' ,
               club_looking_for_new_player:'',
               organizer_looking_for_new_participants:''
         },
         rangeclub:[350,1850],
         sexon:'',
         picked:'',
         pickedorg:'',
         switch3:'',
         switch5:'',
         createevent:'',
         idt:'',
         my_interested_list:[],
         my_intclub_list:[],
         listpla:{target_uuid:''},
         clicked_interested:false,
         clicked_interested2:true,
         clicked_interested4:true,
         clicked_interested3:false,
         interested_no:true
         
         
      }
},
   
//------------------------------MOUNTED-------------------------------//



mounted(){
   fetch('https://app.outpostchess.com/api/v2/organiser_events', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.events=data)
        //.then(data => console.log('events',data))       
            

  fetch( `https://app.outpostchess.com/api/v2/public_user_info/${this.idt} `, {
  method:'GET',
  headers: {
    'Content-Type': 'application/json'
  }
  }, 
)
.then(response => response.json())
.then(data => this.user=data)
.then(data => console.log('public',data))  

 fetch('https://app.outpostchess.com/api/v2/current_user_info', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
},        
)

.then(response => response.json())
.then(data => this.userinitiator=data)
//.then(data => console.log('initiator',data)) 
fetch('https://app.outpostchess.com/api/v2/interested_in_player', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_interested_list=data)   
       // .then(data => console.log('my_list',data))

fetch('https://app.outpostchess.com/api/v2/interested_in_club', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_intclub_list=data)   
        .then(data => console.log('my_clublist',data))      
},



//--------------METHODS----------------------//
 created() {
            this.idt = this.$route.params.id;
           
        },

methods:{
    
    interested_club:function(){
          this.clicked_interested4=false;
          this.clicked_interested3=true;
           fetch(`https://app.outpostchess.com/api/v2/interested_in_club/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            }).then(() => {
           // window.location.reload();
        })
    },
    interested_player:function(){
           this.interested_no=false;
           this.clicked_interested=true;
           this.clicked_interested2=false;
           fetch(`https://app.outpostchess.com/api/v2/interested_in_player/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            }).then(() => {
                this.intpla_switch=true
           // window.location.reload();
        })
    },
    interested_event:function(){
           fetch(`https://app.outpostchess.com/api/v2/interested_in_event/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            }).then(() => {
           // window.location.reload();
        })
    },
     interested_club_del:function(){
          this.clicked_interested4=false;
          this.clicked_interested3=false;
           fetch(`https://app.outpostchess.com/api/v2/interested_in_club/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            }).then(() => {
           // window.location.reload();
        })
    },
    interested_player_del:function(){
           this.interested_no=true;
           this.clicked_interested=false;
           this.clicked_interested2=false;
           fetch(`https://app.outpostchess.com/api/v2/interested_in_player/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            }).then(() => {
           // window.location.reload();
        })
    },
    interested_event_del:function(){
           fetch(`https://app.outpostchess.com/api/v2/interested_in_event/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            }).then(() => {
           // window.location.reload();
        })
    },

    cvdairycal1: function(){

      this.clickActive1=true; this.clickActive2=false;  this.clickActive3=false;
      
    } ,
     cvdairycal2: function(){
      this.clickActive1=false;  this.clickActive2=true;  this.clickActive3=false;
    } ,
    cvdairycal3: function(){
      this.clickActive1=false;this.clickActive2=false;  this.clickActive3=true;
    } ,
    rolecol1:function(){
      
      this.activeplayer=true;this.activeclub=false; this.activeorg=false; 
      this.activetre=false;  this.activearb=false;
      this.rolecolor1=true; this.rolecolor2=false;this.rolecolor3=false;
      this.rolecolor4=false;this.rolecolor5=false;this.rolecolor6=false;   
    },
    rolecol2:function(){
      this.activeclub=true; this.activeplayer=false;this.activeorg=false;
      this.activetre=false;  this.activearb=false;
      this.rolecolor1=false; this.rolecolor2=true; this.rolecolor3=false; 
      this.rolecolor4=false;   this.rolecolor5=false; this.rolecolor6=false;   
    },
    rolecol3:function(){
      this.rolecolor1=false;  this.rolecolor2=false; this.rolecolor3=true;  
      this.rolecolor4=false;  this.rolecolor5=false; this.rolecolor6=false;  
      this.activeorg=true;   this.activeplayer=false; this.activeclub=false; 
      this.activetre=false; this.activearb=false;
    },
    rolecol4:function(){
      this.activeorg=false;   this.activeplayer=false; this.activeclub=false;  
      this.activetre=false;    this.activearb=true;
      this.rolecolor1=false; this.rolecolor2=false; this.rolecolor3=false;   
      this.rolecolor4=true; this.rolecolor5=false; this.rolecolor6=false;   
    },
    rolecol5:function(){
      this.activeorg=false;this.activeplayer=false;   this.activeclub=false;  
      this.activetre=true;  this.activearb=false;
      this.rolecolor1=false;  this.rolecolor2=false;  this.rolecolor3=false;  
      this.rolecolor4=false; this.rolecolor5=true;  this.rolecolor6=false;   
    },
    rolecol6:function(){
      this.rolecolor1=false; this.rolecolor2=false;   this.rolecolor3=false;   
      this.rolecolor4=false;  this.rolecolor5=false;   this.rolecolor6=true; 
    },

    connection_people:function(){
    fetch( ` https://app.outpostchess.com/api/v2/connection_initiate/${this.idt} `, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
                body:null
            })
            
            .catch(error => {
            console.error(error)
            }) 
     },
     disconnection_people:function(){
    fetch( ` https://app.outpostchess.com/api/v2/connection_initiator_delete/${this.idt} `, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
            })
            
            .catch(error => {
            console.error(error)
            }) 
     }

  }
}
 </script>
<style scoped>
a:hover {
            text-decoration: none;
        }
hr{
    border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%
}
.profile{
    display:grid;
    grid-template-columns: 259px auto;
}  

.right-profile{
    background-color:  #171819;
    display:grid;
    grid-template-columns: 8% 84% 8% 0%;
    background-color: #1B1C1D;
}

#side-bar{
  height: 100%;
  width: 100%;
  background-color:#202122;
  color:#FFFFFF;
  padding:70px 10px 50px 10px;
  font-size: 14px;
}

.left-sidetext{
    padding-left:15px;
    cursor: pointer;
}

.diffcol{
    color:rgba(199, 201, 208, 0.2);
}
/*--------------------------Check-------------------------------------- */
 .grid-check{
    display:grid;
    grid-template-columns: auto 85% ;
   
  }
.left-check-text{
      text-align:left;
      padding-right:15px;
      padding-left:5px;
      color:#C8A07D;
    }
   
/*--------------------------MIDLE1-------------------------------------- */


/*--------------------------MIDLE2-------------------------------------- */
#middle2{
    height: 140px;
    background-color: #202122;
    display: grid;
    padding:8px 15px 8px 25px;
    grid-template-columns: 15% 60% 25%;
    color:#6F7381;
    margin-top:10px;
}
.profile-info1{
    display: flex;
}
.profile-info1-1{
    display: flex;
    margin:0;
    padding:0;
    
   
}
.profile-info1-1>img{
     padding-right:7px;
     padding-bottom: 16px;
}
.upload-pic{
    padding-right:30px;
    
}
#profile-pic{
    border-radius: 50%;
    height: 126px;
    object-fit: contain;
}
.photo-input{
    width:55px;
    cursor: pointer;
}


#profile-name{
   font-weight: 700;
   font-style: normal;
   font-weight: bold;
   color: #C8A07D;
   display: flex;
   height: 20px;
   margin-bottom:15px;
   
}
.profile-name2{
   color: #FFFFFF;
   display: flex;
   height: 20px;
   margin-bottom:15px;
   border-bottom: 1px solid #5C5E64;
   margin-right: 5px;
   padding-left:10px;
   font-size:14px
}
.rating-patch{
   color: #FFFFFF;
   display: flex;
   height: 20px;
   border-bottom: 1px solid #5C5E64;
   width: 35px;
   font-size:14px;

}
.file-input::before {
  content: 'Upload Photo';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color:#FFFFFF;
  margin-top:30px;
}

#middle2-1{
    padding-left:40px;
    padding-top:14px ;
}
.padd-text{
    padding-left:17px;
}
#middle2-flag{
    height: 30px;
    padding: 0 30px 0 10px;
    
}
#middle2-flag:hover{
    cursor: pointer;
    
}
.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 14px;
  width: 130px;
  height: 46px;
  margin-right: 15px;;
  margin-top:50px;
   
}
.middle2-buttons:hover{
    opacity: 0.7;
}
#middle2-button-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

/*--------------------------MIDDLE3-------------------------------------- */
#middle3{
display:grid;
grid-template-columns: 58% 42%;
height: 80px;
}
::placeholder{
    color:#C7C9D0;
    font-weight: 300;
    font-size: 14px;
}
.titles{
    cursor: pointer;
    outline: #C8A07D solid 2px;
    border-radius: 20px;
    width:82px;
    height: 31px;
    margin-left:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF;
    font-size: 14px;
}
.middle3-1{
    display:flex;
    align-items: center;
}
.ratings{
    border-radius: 20px;
    width:120px;
    height: 31px;
    margin-left:10px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF; 
    font-size: 14px;
    outline: #C8A07D solid 2px;
}
.ratingsi{
    background: #C8A07D;
    border-radius: 20px;
    width:120px;
    height: 31px;
    margin-left:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF !important; 
    font-size: 14px;
    
}
.rola-text{
    background: #C8A07D;
    border-radius: 20px;
    width:80px;
    height: 31px;
    margin-left:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF !important; 
    font-size: 14px;
    font-weight: 500;
}

.text-ratings{
    color:#C8A07D;
    padding-right:10px
}
/*--------------------------MIDDLE4-------------------------------------- */
#middle4{
    height: 63px;
  
     background-color: #202122;
     display:grid;
     grid-template-columns: 55% 45%;
}
.middle4-1  {
   color:#6F7381;
   padding:0 10px 0 10px;
   font-size:14px;
}
.middle4-1:hover{
    cursor: pointer;
    text-decoration: none;
}
.add-remove{
    color:#FFFFFF;
    padding-left:5px;
    font-size: 20px;
    cursor: pointer;
    
}
/*--------------------------MIDDLE5-------------------------------------- */

#middle5{
    display:grid;
    grid-template-columns: 54.5% 44.5%;
    gap:1%;   
    height: auto;
    margin:1% 0 30px 0;
    color:#FFFFFF;
 
}

.middle5-right-grid{
    display:grid; 
    grid-template-columns: 49% 49%;
    gap:2%;
    height:160px;
    margin-bottom: 2%;
    text-align: left;
  
   
 }
 .middle5-right-grid2{
    display:grid; 
    grid-template-columns: 48% 48%;
    gap:2%;
    min-height:160px;
    margin-bottom: 2%;
    text-align: left;
    background-color:#202122 ;
 }
 .mid5-padd{
     padding:10px;
     background-color:#202122;
     }
.events{
    display:grid;
    grid-template-columns: 70% 30% ;
}
#list-event{
   padding-left:5%;
   padding-top:15px;
}
 .title-arrow{
    padding-left:8px
}    
 
.engage-grid{
    display:grid;
    grid-template-columns: 70% 30%;
}
.engage-stikl{
    height: 14px;
    cursor: pointer;

}
.stikl1{
    opacity:0.3
}

 p{
     margin-bottom:0;
 }
.middle5-right-grid>div{
    background-color: #202122;
}
.middle5-left{
    background-color: #202122;
}
#middle5-right-end{
    height: 153px;
    background-color: #202122;
}
.gold{
    color:#C8A07D;
    font-size: 14px;
    margin-top:10%;
    padding-left:20px;
}
.gold2{
    color:#C8A07D;
    font-size: 14px;
    padding-left:20px;
}
.middle5-text{
    padding:15px 0 5px  20px;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.15px;
}
#form-middle5{
    color:#F2358D;
    text-align: center;
    padding-top:30px;
}
.inputcurplay{
    margin-top:36px;
    margin-left:20px;
    padding-left:5px;
    border-bottom: 1px solid #5C5E64;
    color:#FFFFFF;
}
.switch-style{
    padding-left:15px;
}

.slider{
    display:flex;
    width:100%

}
.slider>p{
    width:38px;
    display:flex;
    margin:auto;
    text-align: center;
}
.njslider-text

/**side-right */

.edit-input{
    border-bottom: 1px solid #5C5E64;
    color:#FFFFFF;
}
.radiouser{
    display:flex;
    padding-left:100px;
    width:60px;
    padding-right:10px;
}
.radiobutton{
    margin:auto  15px auto 10px ;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.grid-check{
    padding-bottom: 15px;
    font-size:18px;
    transform: scale(0.7);
    transform-origin: left;
  }

#check-engagements{
    width:100%;
    margin-right:auto;
    padding:0 0 0 0;
}

#pre-select{
    display:flex;
}
#select-css{
    color:#FFFFFF;
    background-color: #202122;
    width:75px;
    border-radius: 3px;
    margin-left:25px;
    outline:0px;
    border: none;
    cursor: pointer;
    font-size: 12px;
}
#select-css2{
    color:#FFFFFF !important;
    width:140px;
    border-radius: 3px;
    margin-left:25px;
    outline:0px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background-color:  #202122;
}

.switch-engage{
    margin-left:10px;
}

/* RADIO */
.radio-titule{
   display:flex;
   font-size: 14px;;
}

/* CLUB */
.vuetify-switch{
    height: 0px;
    position:relative;
    bottom:65px;
    left:10px;  
}

.switch-container{
    padding-left: 20px ;
    margin:0;
}
.borderbutton{
    width: 170px;
    height: 44px;
    border: 1px solid #2E2E2E;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: center;
}
.borderbutton:hover{
    opacity:0.7;
    cursor: pointer;
}
.borderbutton>p{
    font-size:14px;
    padding:0 5px 0 5px
}
.slider{
    display:flex;
    margin: auto;
    width:180px
}
.slider>p{
    text-align: center;
}
/*ORGANIZER*/
#middle5-right-startorg{
    min-height: 205px;
    background-color: #202122;
    margin-bottom:10px;
    text-align:left;
    padding:10px
}
.listevent{
    min-height: 205px;
}

#plava-kugla2{
    height: 100px;
    padding-left:80%;
   
}
#plava-kugla{
   position: relative;
   left:10%
}
.vuetify-switch2{
    height: 0px;
    position:relative;
    bottom:55px;
    right:15px;
}
.list-events{
    display: flex;
    padding-left:20px
}
.list-events>p{
font-size:12px
}
.gold-event{
   color:#C8A07D;
   padding-right:4px;
}
/*ARBITER */
.rotate{transform: rotate(-45deg);
position:relative;
top:300px;
    font-size:26px;
    font-weight: 600;
    letter-spacing: 15px;}

/*DROPDOWN */
.dropbtn {
  background-color: #202122;
  color: white;
  padding: 8px 20px;
  font-size: 14px;
  border: 0.5px solid #5C5E64;
  box-sizing: border-box;
  margin-left:20px;
  margin-top:10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #202122;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content p {
  color: white;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
}
.dropdown-content p:hover {background-color: #5C5E64;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {opacity:0.3}

.switch1 {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch1 input {display:none;}

/* The slider */
.slider1 {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider1:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider1 {
  background-color: #2196F3;
}

input:focus + .slider1 {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider1:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider1.round {
  border-radius: 34px;
}
.slider1.round:before {
  border-radius: 50%;
}
.button-range{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 14px;
  width: 110px;
  height: 32px;
  margin-right: 15px;
  margin-top:45px;
  
}
.button-range:hover{
opacity: 0.7;
cursor: pointer;
}
@media only screen and (max-width: 1500px) and (min-width: 500px) {
.right-profile{
    display:grid;
    grid-template-columns: 3% 94% 3%;
 
}
.profile{
    display:grid;
    grid-template-columns: 200px auto;
    font-size:14px;
}  

}
</style>