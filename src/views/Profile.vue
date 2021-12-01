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
                    <div v-if="clickside">
                        <input  type="file" id="photoupload" @change="onFileSelected" style="display:none">  
                       
                        <label for="photoupload" class="file-input"> </label> 
                        <p style="color:#C8A07D">{{photoinfo}}</p>
                    </div>
                <!--    <input  v-if="clickside" type="file"  id="fileUpload" @change={up} /> -->
                  <img v-else  id="profile-pic" :src='user.profile.file_url || "https://outpostchess.fra1.digitaloceanspaces.com/2bf139b2-7074-4fd4-8377-58efead41bf0.png"' alt="">
                </div>
                <div id="middle2-1" >
                    <div style="display:flex">
                        <input type="text" v-if="clickside" class="profile-name2" v-model="nf"   :placeholder=user.name_first>
                        <input type="text" v-if="clickside" class="profile-name2" v-model="nl"   :placeholder=user.name_last>
                        <p v-else  id="profile-name" >{{user.name_first}} {{user.name_last}}</p>
                    </div>
                    <div class="profile-info1" >
                        <div class="profile-info1-1">
                            <img src="../assets/Vector-1.svg" alt="" >  
                            <input type="text" v-if="clickside" class="profile-name2" style="margin-top:5px" v-model="town"   :placeholder=user.city>
                            <p v-else >{{user.city}}</p>
                        </div>
                        <input type="number" v-if="clickside" class="profile-name2" style="margin-top:5px;width:50px" v-model="birtyear"   :placeholder=user.birth_year>
                        <p v-else class="padd-text"> Age : {{user.godine}}</p>
                        <div class="radiouser flex-center" v-if="clickside"> 
                            <input  type="radio" checked="sexon" name="gender"  class="radiobutton" value="Male" v-model="sexon" ><p>Male</p>
                            <input type="radio"  checked="sexon"  name="gender"   class="radiobutton"  value="Female" v-model="sexon"  ><p>Female</p>
                        </div> 
                        <p class="padd-text" v-else style="color:#FFFFFF"> {{user.sex}} </p>
                    </div>
                    <div class="profile-info1-1">
                        <div v-if="clickside" id="pre-select" style='margin-bottom:10px;margin-right:30px;'>
                            <p >Federation:</p> 
                            <select v-model="selected"    id="select-css">     
                            <option disabled value="">Select</option>                           
                            <option  
                            v-for="fla in flags" :key="fla.code3"  :value="fla.code3"
                            >{{fla.name}}
                            </option>
                            </select>
                        </div>
                        <div  style="margin-bottom:10px" v-else>
                            <div >
                                <p  style="margin:0;padding-right:20px;">Federation: <span style="color:#C8A07D"> {{user.federation_details.name}} </span> </p>
                            </div>
                        </div>
                        <p  style="margin-bottom:10px;padding:0">Fide ID:</p>
                        <input type="number" v-if="clickside" class="profile-name2"  v-model="fideid"   :placeholder=user.fide_id>
                        <p v-else style="margin-bottom:10px;padding:0 0 0 10px;color:#C8A07D"    >{{user.fide_id}}</p>    
                    </div>
                </div>
                <div id="middle2-button-container">
                    <button class="middle2-buttons"  @click="clickside=!clickside"  type="button" >Edit Profile</button>
                    <button class="middle2-buttons" v-if="clickside"  @click="userpatch()"   type="button" >Confirm changes</button>
                </div>
            </div>
<!--END MID 2 -->     
<!--MID 3 -->
            <div id="middle3">
                <div class="middle3-1">
                    <div v-if='clickside && rolecolor1'  class="middle3-1"> 
                        <div  v-for="titul1 in titule" :key="titul1.titula_uuid"  class="flex-center" >
                            <div v-if='rolecolor1 &&titul1.rola=="PLAYER"'  class="flex-center" >
                                <input @change="selected_title" type="radio" 
                                :value='titul1.titula_uuid'  name="titlepick" v-model='picked' 
                                >
                                <div><p class="left-check-text">{{titul1.titula_short_name}}</p></div>
                            </div>    
                        </div>
                    </div> 
                    <div v-else-if='clickside && rolecolor2'  class="middle3-1"  > </div>
                      <div v-else-if='clickside && rolecolor3'  class="middle3-1"  >
                      <div    class="flex-center" style="display:flex">
                            <div v-if='rolecolor3'  class="flex-center" style="display:flex">
                                <input @change="selected_title"  type="radio"  value='FIO'   v-model='pickedorg'   >
                                <div><p class="left-check-text">FIO</p></div>
                                <!--:checked='user.titule_details[3].is_checked' :checked='user.titule_details[3].is_checked'      -->
                            </div>    
                        </div>
                    </div> 
                    <div v-else class="middle3-1"  >
                        <p style="color:#6F7381" >Title:</p>
                        <div  v-for="titul in titule" :key="titul.titula_uuid" >
                            <div  v-if="titul.is_checked===true" class="titles">{{titul.titula_short_name}} <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->  </div>
                            
                        </div>
                    </div>  
                </div>
                <div v-if="clickside" class="middle3-1 ">
                    <p style="color:#6F7381">Rating:</p>
                    <div class="ratings"><p  class="text-ratings ">Standard:</p><input type="number"  class="rating-patch"  v-model="standard"   :placeholder=user.rating_standard> </div>
                    <div class="ratings"><p class="text-ratings">Rapid:</p><input type="number"  class="rating-patch"  v-model="rapid"   :placeholder=user.rating_rapid> </div>
                    <div class="ratings"><p class="text-ratings">Blitz:</p><input type="number"  class="rating-patch"  v-model="blitz"   :placeholder=user.rating_blitz>  </div>
                             
                </div>
                <div v-else class="middle3-1 ">
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
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('CLUBADMIN') !==-1" v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor2}"  @click="rolecol2()" >Club</div> 
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('ORGANIZER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor3}" @click="rolecol3()" >Organizer</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('ARBITER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor4}" @click="rolecol4()" >Arbiter</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('TRAINER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor5}" @click="rolecol5()" >Trainer</div>
                    <div style="margin-left:35px" v-if="this.user.rola.indexOf('OTHER')!==-1"  v-bind:class="{'middle4-1':isActive,'rola-text':rolecolor6}" @click="rolecol6()" >Other</div>
                   <!-- <div style="display:flex" v-if="clickside">
                        <select v-model="selectedrole" id="select-css"  >
                            <option disabled value="">Add/Remove</option>
                            <option value="player">Player</option>
                            <option value="clubadmin">Clubadmin</option>
                            <option value="organizer">Organizer</option>
                            <option value="arbiter">Arbiter</option>
                            <option value="trainer">Trainer</option>
                            <option value="other">Other</option>
                        </select>
                        <div @click="addrole()" class="add-remove">+</div> 
                        <div @click="removerole()" class="add-remove">-</div>
                    </div> -->
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
                        <Chesscv     :user="user" :key="user.user_uuid"   />
                    </div>
                    <div v-if="clickActive3">
                        <Calendar     :user="user" :key="user.user_uuid"   />
                    </div>
                </div>
                <div >
<!--PLAYER PART -->      
                <div v-if="activeplayer">
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <p class="middle5-text">Current club:</p>
                            <div>
                                <input type="text" v-if="clickside" class="inputcurplay" v-model="curclub"   :placeholder=user.current_clubs>
                                <p v-else class="gold" style="margin-top:20px;"  >{{user.current_clubs}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text">Current league:</p>
                            <input type="text" v-if="clickside" class="inputcurplay" v-model="curleague"   :placeholder=user.current_leagues>
                            <p v-else class="gold" style="margin-top:20px;"  >{{user.current_leagues}}</p>
                                           
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <div style="height:65px;display:flex">
                                <p class="middle5-text" >Currently active:</p>
                                <img v-if="this.user.current_playing_bool" id="plava-kugla" src="../assets/plavakugla.png" alt="">
                            </div>
                                <b-form-checkbox switch
                                @change="activeplayercur"
                                :checked="user.current_playing_bool" 
                                style="padding-left:55px;"
                                ></b-form-checkbox> 
                            <div>
                                <input type="text" style="margin-top:28px;" v-if="this.user.current_playing_bool && user.current_playing=='' || clickside " class="inputcurplay" v-model="curplay"  :placeholder=user.current_playing>
                                <p v-else-if="this.user.current_playing_bool" class="gold" style="margin-top:30px;"   >{{user.current_playing}}</p>
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
                            <p class="middle5-text" style="margin-bottom:10px">Open to new engagements</p>
                         
                            <div>
                                <div  class="engage-grid stikl" :class="{stikl1:this.user.open2new_eng_club===false || this.engageclub===false}">
                                    <p class="gold2" >Club  </p>
                                    <img  class="engage-stikl" @click="clubinterested"  src="../assets/stikla.png" alt="" >
                                </div>
                                <div class="engage-grid stikl" :class="{stikl1:this.user.open2new_eng_tournament===false ||  this.engagetournament===false}" > 
                                    <p class="gold2">Tournaments</p>
                                    <img class="engage-stikl " @click="tourinterested" src="../assets/stikla.png" alt="" >
                                </div> 
                                <div class="engage-grid stikl" :class="{stikl1:this.user.open2new_eng_event===false ||  this.engageevent===false}"> 
                                    <p class="gold2">Events</p>
                                    <img class="engage-stikl" @click="eventinterested"  src="../assets/stikla.png" alt="" >
                                </div>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text"></p>
                        </div>
                    </div>
                    <div id="middle5-right-end" @click="changed_compensation=true">
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
                                                        :value='rangeclub[0]'
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 0px"
                                                        @change="$set(rangeclub, 0, $event) "
                                                    ></v-text-field>
                                                    </template>
                                                    <template v-slot:append >
                                                    <v-text-field
                                                        :value='rangeclub[1]'
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 0px"
                                                        @change="$set(rangeclub, 1, $event)"
                                                    ></v-text-field>
                                                </template>
                                                </v-range-slider>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                </v-card>
                            </v-container>  
                        </v-app> 
                        <div class="slider"  v-if="changed_compensation"> 
                            <p >{{rangeclub[0]}} </p><p class="slider-text"></p> <p >{{rangeclub[1]}} </p>
                        </div> 
                        <div class="slider" v-else >
                            <p >{{user.comp_per_game_from}}  </p><p style="padding-left:50px" >{{user.comp_per_game_to}} </p>
                        </div>   
                        
                        <button class="button-range" v-if="changed_compensation"  @click="compensation()"     type="button" >Change value</button>
                    </div>
                    
                </div>
<!-- END PLAYER PART  --> 
 <!-- CLUB PART  -->            
                <div  v-if="activeclub">
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <p class="middle5-text">My club name:</p>
                            <div>
                                <input type="text" v-if="clickside" class="inputcurplay" v-model="curclubname1"   :placeholder=user.club_name>
                                <p v-else class="gold" style="margin-top:20px;"  >{{user.club_name}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text">Current league:</p>
                            <input type="text" v-if="clickside" class="inputcurplay" v-model="curleagueclub1"   :placeholder=user.club_current_league>
                            <p v-else class="gold" style="margin-top:20px;"  >{{user.club_current_league}}</p>
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd">
                            <div style="height:65px;display:flex">
                                <p class="middle5-text">My team is currently active:</p>
                                <img v-if="switch3" id="plava-kugla" src="../assets/plavakugla.png" alt="">
                            </div>
                           
                                    <b-form-checkbox switch
                                    @change="activeclubcur"
                                    :checked="user.club_current_playing_bool" 
                                    style="padding-left:55px;"
                                    ></b-form-checkbox> 
                           <!--  <v-app class="vuetify-switch"> 
                                <v-container class="switch-container"   >  
                                    <v-switch 
                                    v-model="switch3"
                                    color="#C8A07D"
                                    ></v-switch>
                                </v-container>  
                            </v-app> -->
                            <div>
                                <input type="text" style="margin-top:42px;" v-if="user.club_current_playing_bool && user.club_current_playing=='' || clickside " class="inputcurplay" v-model="curplayclub1"  :placeholder=user.club_current_playing>
                                <p v-if="user.club_current_playing_bool" class="gold" style="margin-top:35px;"   >{{user.club_current_playing}}</p>
                            </div>
                        </div>
                        <div class="mid5-padd">
                            <p class="middle5-text" style="padding-bottom:30px;">Looking for new player:</p>
                            <div class="switch-style">
                                <b-form-checkbox switch
                                @change="lookpla"
                                :checked="user.club_looking_for_new_player"
                                ></b-form-checkbox>                  
                            </div>
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd flex-center">
                            <div @click="createevent=!createevent" class="borderbutton flex-center">
                                <img src="../assets/createevent2.png" alt="">
                                <p>Create an event</p>
                            </div>
                        </div>    
                        <div class="mid5-padd flex-center">
                           
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
                <div  v-if="activeorg">
                    <div id="middle5-right-startorg">
                        <p class="middle5-text">My Event is currently active:</p>
                         <div class="mid5-padd">
                            <div style="height:65px;display:flex">
                                <img v-if="switch5" id="plava-kugla2" src="../assets/plavakugla.png" alt="">
                            </div>
                             <v-app class="vuetify-switch2"> 
                                 <v-container class="switch-container"   >
                                    <v-switch 
                                    v-model="switch5"
                                    color="#C8A07D"
                                    ></v-switch>
                                </v-container>  
                            </v-app>
                            <div>
                                <input type="text" style="margin-top:42px;" v-if="clickside " class="inputcurplay" v-model="curevent"  :placeholder=user.organizer_current_event>
                                <p v-else-if="switch5" class="gold" style="margin-top:35px;padding-left:6px"   >{{user.organizer_current_event}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="middle5-right-grid">
                        <div class="mid5-padd flex-center" >
                            <p class="middle5-text" >Looking for new participants?"</p>
                            <div>
                                <div class="switch-style">
                                    <b-form-checkbox switch
                                    @change="lookpart"
                                    :checked="user.organizer_looking_for_new_participants"
                                    ></b-form-checkbox>                  
                                </div>
                            </div>
                        </div>
                        <div class="mid5-padd flex-center">
                            <div class="borderbutton flex-center">
                                <img src="../assets/createevent2.png" alt="">
                                <p>Create an event</p>
                            </div>
                        </div>
              <!--      <div class="mid5-padd flex-center">
                            <div class="borderbutton flex-center">
                                <p style="text-align:center">Interested in this Organizer</p>
                            </div>               
                        </div>    -->
                    </div>
                     <div id="middle5-right-startorg" >
                            <div class="mid5-padd events" >
                                <div style="height:65px;">
                                    <p class="middle5-text" >My events:</p>
                                    <div class="list-events">
                                        <p class="gold-event" >Event name:</p>
                                        <p></p>
                                    </div>
                                    <div class="list-events">
                                            <p class="gold-event" >Date:</p>
                                            <p></p>
                                    </div>
                                </div>
                                <div id="list-event">
                                    <div class="dropdown">
                                        <button class="dropbtn">Events</button>
                                        <div class="dropdown-content" >
                                            <p >No events yet</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <input type="text" style="margin-top:42px;" v-if="switch1 && user.current_playing=='' || clickside " class="inputcurplay" v-model="curplay"  :placeholder=user.current_playing>
                                    <p v-else-if="switch1" class="gold" style="margin-top:35px;"   >{{user.current_playing}}</p>
                                </div>
                            </div>
                       
                    </div>
                   
                    
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
import Chesscv from '../components/Chesscv.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Profile',
  components: {
    SideBar,
    Searchpart,
    ChessDiary,
    Chesscv,
    Calendar
  },
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
         clickside:false,
         rapid:'',
         standard:'',
         blitz:'',
         curclub:"",
         curleague:"",
         curplay:"",
         curevent:"",
         town:"",
         fideid:"",
         engageclub:function(){return this.user.open2new_eng_club},
         engageevent:function(){return this.user.open2new_eng_event},
         engagetournament:function(){return this.user.open2new_eng_tournament},
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
         switch1:'',
         switch2:'',
         titule:[],
         min: 0,
         max: 5000,
         user:{rola:[],
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
               current_playing_bool:'',
               club_current_playing_bool:'',
               organizer_looking_for_new_participants:'',
          
         },
         rangeclub:[350,2000],
         sexon:'',
         picked:'',
         pickedorg:'',
         switch3:'',
         switch5:'',
         photoinfo:'',
         changed_compensation:false,
         createevent:''
         
         
         

      }
},
   
//------------------------------MOUNTED-------------------------------//

mounted(){

  fetch('https://app.outpostchess.com/api/v2/current_user_info', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
  }, fetch('https://app.outpostchess.com/api/v2/countries', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization":`Bearer ${localStorage.getItem('token')}`
            }
            })
            .then(response => response.json())
            .then(data => this.flags=data)
            //.then(data => console.log(data))
)
.then(response => response.json())
.then(data => this.user=data)
.then(data => console.log('podaci',data))  

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
             
},

//--------------UPDATED----------------------//


updated() {

   
   if(this.user.rola.indexOf('PLAYER')==-1){
     this.activeplayer=false 
     this.activeclub=true
    }
    

},

//--------------METHODS----------------------//

methods:{
    
    lookpla:function(){
            this.user.club_looking_for_new_player=!this.user.club_looking_for_new_player
       fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              club_looking_for_new_player:this.user.club_looking_for_new_player
                
            })
        },
               )   
            .then(response => response.json())
            .then(data => console.log(data))
            
            },
   lookpart:function(){
       
            this.user.organizer_looking_for_new_participants=!this.user.organizer_looking_for_new_participants
       fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              organizer_looking_for_new_participants:this.user.organizer_looking_for_new_participants
                
            })
        },
               )   
            .then(response => response.json())
            .then(data => console.log(data))
            console.log(this.organizer_looking_for_new_participants)
    },

      activeplayercur: function(){
          
            this.user.current_playing_bool=!this.user.current_playing_bool 
            console.log(this.user.current_playing_bool )
           fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              current_playing_bool:this.user.current_playing_bool 
                
            })
        },
               )   
            .then(response => response.json())
            .then(data => console.log(data))
            
      },
      activeclubcur: function(){
            this.user.club_current_playing_bool=!this.user.club_current_playing_bool
             fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              club_current_playing_bool:this.user.club_current_playing_bool
                
            })
        },
               )   
            .then(response => response.json())
            .then(data => console.log(data))
            console.log(this.current_playing_bool)
      },

      compensation:function(){
       fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              comp_per_game_from:this.rangeclub[0],
              comp_per_game_to:this.rangeclub[1],  
            })
          },
               )   
           .then(response => response.json())
           .then(data => console.log(data))    
         },        
   
 //   selectedRole: function(titule){
  //    this.selectedTitel = titule;
  //  },
   clubinterested:function(){
       this.engageclub=!this.engageclub;
       this.user.open2new_eng_club=!this.open2new_eng_club;
         fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              open2new_eng_club:this.engageclub
              } )
})
        .then(response => response.json())
            .then(data => console.log(data)) 
           
      },
   eventinterested:function(){
       this.engageevent=!this.engageevent;
       this.user.open2new_eng_event=!this.open2new_eng_event;
         fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              open2new_eng_event:this.engageevent,
              } )
})
        .then(response => response.json())
            .then(data => console.log(data)) 
           
      },
   tourinterested:function(){
       this.engagetournament=!this.engagetournament;
       this.user.open2new_eng_tournament=!this.open2new_eng_tournament;
         fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              open2new_eng_tournament:this.engagetournament 
             
              } )
})
        .then(response => response.json())
            .then(data => console.log(data)) 
           
      },

   cvdairycal1: function(){
      this.clickActive1=true;
      this.clickActive2=false;
      this.clickActive3=false;
      
    } ,
     cvdairycal2: function(){
      this.clickActive1=false;
      this.clickActive2=true;
      this.clickActive3=false;
    } ,
    cvdairycal3: function(){
      this.clickActive1=false;
      this.clickActive2=false;
      this.clickActive3=true;
    } ,
    rolecol1:function(){
       
      this.activeplayer=true;  
      this.activeclub=false;
      this.activeorg=false;
      this.rolecolor1=true;
      this.rolecolor2=false;
      this.rolecolor3=false; 
      this.rolecolor4=false;  
      this.rolecolor5=false;  
      this.rolecolor6=false;   
    },
    rolecol2:function(){
      this.activeclub=true;
      this.activeplayer=false;   
      this.activeorg=false; 
      this.rolecolor1=false;
      this.rolecolor2=true;
      this.rolecolor3=false; 
      this.rolecolor4=false;  
      this.rolecolor5=false;  
      this.rolecolor6=false;   
    },
    rolecol3:function(){
      this.rolecolor1=false;
      this.rolecolor2=false;
      this.rolecolor3=true; 
      this.rolecolor4=false;  
      this.rolecolor5=false;  
      this.rolecolor6=false;  
      this.activeorg=true; 
      this.activeplayer=false; 
      this.activeclub=false;
    },
    rolecol4:function(){
      this.rolecolor1=false;
      this.rolecolor2=false;
      this.rolecolor3=false; 
      this.rolecolor4=true;  
      this.rolecolor5=false;  
      this.rolecolor6=false;   
    },
    rolecol5:function(){
      this.rolecolor1=false;
      this.rolecolor2=false;
      this.rolecolor3=false; 
      this.rolecolor4=false;  
      this.rolecolor5=true;  
      this.rolecolor6=false;   
    },
    rolecol6:function(){
      this.rolecolor1=false;
      this.rolecolor2=false;
      this.rolecolor3=false; 
      this.rolecolor4=false;  
      this.rolecolor5=false;  
      this.rolecolor6=true;   
      
    },
 //--------------USER PATCH----------------------// 

selected_title:function(){
     /*    switch(this.picked){
              case this.picked=='WCM':
               this.WCM=true
               break;
               case this.picked=='CM':
               this.CM=true
               break; case this.picked=='WFM':
               this.WFM=true
               break;
                case this.picked=='FM':
               this.FM=true
               break;
                case this.picked=='WIM':
               this.WIM=true
               break;
                case this.picked=='IM':
               this.IM=true
               break;
               case this.picked=='GM':
               this.GM=true
               break;
               case this.picked=='WGM':
               this.WGM=true
               break;
               case this.picked=='FIO':
               this.FIO=true
               break;
            }*/
       /*     if( this.picked=='WCM'){this.WCM=true}
            if(this.picked=='CM'){this.CM=true}
            if(this.picked=='WFM'){this.WFM=true}
            if(this.picked=='FM'){this.FM=true}
            if(this.picked=='WIM'){this.WIM=true}
            if(this.picked=='IM'){this.IM=true}
            if(this.picked=='GM'){this.GM=true}
            if(this.picked=='WGM'){this.WGM=true}
            if(this.pickedorg=='FIO'){this.FIO=true}
            if(this.user.titule_details[3].is_checked && this.rolecolor3==false){ this.FIO=true}
          // if(this.user.titule_details[3].is_checked && this.rolecolor3==true && this.pickedorg==false){ this.FIO=false}          
           //  if(this.WCM==false && this.CM==false && this.WFM==false && this.FM==false &&
           //    this.WIM==false && this.IM==false &&this.GM==false && this.WGM==false ){   
             //   if(this.user.titule_details[4].is_checked==true){ this.WCM=true}
             //   else if(this.user.titule_details[5].is_checked==true){ this.CM=true } 
              //  else if(this.user.titule_details[6].is_checked==true){ this.WFM=true}
             //   else if(this.user.titule_details[7].is_checked==true){ this.FM=true}
            /*    else if(this.user.titule_details[8].is_checked==true){ this.WIM=true}
                else if(this.user.titule_details[9].is_checked==true){ this.IM=true}
                else if(this.user.titule_details[10].is_checked==true){this.GM=true}
                else if(this.user.titule_details[11].is_checked==true){this.WGM=true}       */
        // } 
},
//USER PATCH
userpatch:function(){
        
          console.log(this.picked)
          fetch('https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              name_last:this.nl ,
              name_first:this.nf,
              fide_id:this.fideid,  
              rating_standard:this.standard, 
              rating_rapid:this.rapid, 
              rating_blitz:this.blitz,  
              current_clubs:this.curclub,
              current_playing:this.curplay,
              current_leagues:this.curleague,  
              city:this.town,
              federation:this.selected,
              sex:this.sexon,
              birth_year:this.birtyear,
              club_name:this.curclubname1,
              club_current_league:this.curleagueclub1,
              club_current_playing:this.curplayclub1,
              about_me:this.about,
              organizer_current_event:this.curevent,
      //        titula_player_details: [{
   // titula_uuid: "91f90e7e-1ec7-11ec-a733-0d4e300cf032",
    
      //        }],
           
            })
        },
               )   
            .then(response => response.json())
            .then(data => console.log(data)) 
            .then(this.$router.go());
            },

//END USER PATCH

    onFileSelected:function(event){
     this.selectedFile=event.target.files[0]
     this.photoinfo='Photo uploaded. Confirm changes!'
     
     this.formData = new FormData(),
           this.formData.append('file' , this.selectedFile),
            this.formData.append('fileCategory' , 'PROFILE' ),
    fetch('https://app.outpostchess.com/api/v2/fileupload', {
               method: 'POST',
                        headers: {//'Content-Type': 'application/x-www-form-urlencoded',
                        "Authorization":`Bearer ${localStorage.getItem('token')}`
                       },		
                   body: this.formData
               })
    .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
               .catch(error => {
                    console.error(error)
                })
},



addrole:function(){
    fetch('https://app.outpostchess.com/api/v2/user_rola_add', {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },		
        body: JSON.stringify({ rola:this.selectedrole })
      })
      .catch(error => {
        console.error(error)
      }) 
    },
removerole:function(){
    fetch('https://app.outpostchess.com/api/v2/user_rola_remove', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
                body: JSON.stringify( { 
                rola:this.selectedrole
                })
            })
            .catch(error => {
            console.error(error)
            }) 
            //  .then(this.$router.go());
    },
   
  //fghfhfghfg
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
 .mid5-padd{
     padding:10px;
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
    height: 205px;
    background-color: #202122;
    margin-bottom:10px;
    text-align:left;
    padding:10px
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

.profile{
    display:grid;
    grid-template-columns: 200px auto;
    font-size:14px;
}  

}
</style>