<template>
  <div class="profile">
    <SideBar />
    <!--  RIGHT PROFILE -->
    <div class="right-profile">
      <div />  
      <div id="">
        <Searchpart />
        <!-- MID 2    -->             
        <div id="middle2">
          <div class="upload-pic">
            <div v-if="clickside">
              <input
                id="photoupload"
                type="file"
                style="display:none"
                @change="onFileSelected"
              >  
                       
              <label
                for="photoupload"
                class="file-input"
              /> 
              <p style="color:#C8A07D">
                {{ photoinfo }}
              </p>
            </div>
            <!--    <input  v-if="clickside" type="file"  id="fileUpload" @change={up} /> -->
            <img
              v-else
              id="profile-pic"
              :src="user.profile.file_url || 'https://outpostchess.fra1.digitaloceanspaces.com/2bf139b2-7074-4fd4-8377-58efead41bf0.png'"
              alt=""
            >
          </div>
          <div id="middle2-1">
            <div>
              <div
                v-if="clickside"
                style="display:flex"
              >
                <p>Name</p> <input
                  v-model="user.name_first"
                  type="text"
                  class="profile-name2"
                >
                <p>Lastname</p> <input
                  v-model="user.name_last"
                  type="text"
                  class="profile-name2"
                >
              </div>  
              <p
                v-else
                id="profile-name"
              >
                {{ user.name_first }} {{ user.name_last }}  
              </p>
            </div>
            <div class="profile-info1">
              <div class="profile-info1-1">
                <p
                  v-if="clickside"
                  class="flex-center"
                  style="padding-right:4px;"
                >
                  Town
                </p><input
                  v-if="clickside"
                  v-model="user.city"
                  type="text"
                  class="profile-name2"
                  style="margin-top:8px"
                >
                <div
                  v-else
                  class="profile-info1-1"
                >
                  <img
                    src="../assets/Vector-1.svg"
                    alt=""
                  > 
                  <p>{{ user.city }}</p>
                </div>
              </div>
              <p
                v-if="clickside"
                class="flex-center"
              >
                Birth year
              </p>
              <input
                v-if="clickside"
                v-model="user.birth_year"
                type="number"
                class="profile-name2"
                style="margin-top:8px;margin-left:5px;width:3.125rem"
              >
              <p
                v-else
                class="padd-text"
              >
                Age : {{ user.godine }}
              </p>
              <div
                v-if="clickside"
                class="radiouser flex-center"
              > 
                <input
                  v-model="sexon"
                  type="radio"
                  checked="sexon"
                  name="gender"
                  class="radiobutton"
                  value="Male"
                ><p>Male</p>
                <input
                  v-model="sexon"
                  type="radio"
                  checked="sexon"
                  name="gender"
                  class="radiobutton"
                  value="Female"
                ><p>Female</p>
              </div> 
              <p
                v-else
                class="padd-text"
                style="color:#FFFFFF"
              >
                {{ user.sex }}
              </p>
            </div>
            <div class="profile-info1-1">
              <div
                v-if="clickside"
                id="pre-select"
                style="margin-bottom:0.625rem;margin-right:1.875rem;"
              >
                <p>Federation:</p> 
                <select
                  id="select-css"
                  v-model="selected"
                >     
                  <option
                    disabled
                    value=""
                  >
                    Select
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
                v-else
                style="margin-bottom:0.625rem"
              >
                <div>
                  <p style="margin:0;padding-right:1.25rem;">
                    Federation:  <span style="color:#C8A07D"> {{ user.federation_details.name }} </span>
                  </p>
                </div>
              </div>
              <p style="margin-bottom:0.625rem;padding:0">
                Fide ID:
              </p>
              <input
                v-if="clickside"
                v-model="user.fide_id"
                type="number"
                class="profile-name2"
              >
              <p
                v-else
                style="margin-bottom:0.625rem;padding:0 0 0 0.625rem;color:#C8A07D"
              >
                {{ user.fide_id }}
              </p>    
            </div>
          </div>
          <div id="middle2-button-container">
            <button v-if="clickside"
              class="middle2-buttons"
              type="button"
              @click="clickside=!clickside"
            >
              Cancel
            </button>
            <button v-else
              class="middle2-buttons"
              type="button"
              @click="clickside=!clickside"
            >
              Edit Profile
            </button>
            <button
              v-if="clickside"
              class="middle2-buttons"
              type="button"
              @click="userpatch()"
            >
              Confirm changes
            </button>
          </div>
        </div>
        <!--END MID 2   -->     
        <!--MID 3 -->
        <div id="middle3">
          <div class="middle3-1">
            <div
              v-if="clickside && rolecolor1"
              class="middle3-1"
            > 
              <div
                v-for="titul1 in titule"
                :key="titul1.titula_uuid"
                class="flex-center"
              >
                <div
                  v-if="rolecolor1 &&titul1.rola==&quot;PLAYER&quot;"
                  class="flex-center"
                >
                  <input
                    v-model="picked"
                    type="radio"
                    :value="titul1.titula_uuid"
                    name="titlepick" 
                  >
                  <div>
                    <p class="left-check-text">
                      {{ titul1.titula_short_name }}
                    </p>
                  </div>
                </div>    
              </div>
              <p  class="remove_click" @click="remove_title('player')">
                    X
                  </p> 
                  <div>
                    <p class="left-check-text">
                      Remove title
                    </p>
                  </div>
            </div> 
            <div
              v-else-if="clickside && rolecolor2"
              class="middle3-1"
            />
<!-- ORGANIZER CHOOSE  -->
            <div
              v-else-if="clickside && rolecolor3"
              class="middle3-1"
            >
              <div
                class="flex-center"
                style="display:flex"
              >
                <div
                  v-if="rolecolor3"
                  class="flex-center"
                  style="display:flex"
                >
                  <input
                    v-model="pickedorg"
                    type="radio"
                    value="5fb356b6-1ee2-11ec-a733-0d4e300cf032"
                  >
                  <div>
                    <p class="left-check-text">
                      IO
                    </p>
                  </div>
                  
                 <!--   <input
                    @click="remove_title()"
                    v-model="pickedorg"
                    type="radio"
                    value="arbiter"
                  >-->
                   <p  class="remove_click" @click="remove_title('organizer')">
                    X
                  </p> 
                  <div>
                    <p class="left-check-text">
                      Remove title
                    </p>
                  </div>
                  <!--:checked='user.titule_details[3].is_checked' :checked='user.titule_details[3].is_checked'      -->
                </div>    
              </div>
            </div>

  <!--ARBITER CHOOSE-->
            <div
              v-else-if="clickside && rolecolor4"
              class="middle3-1"
            > 
              <div
                v-for="titul1 in titule"
                :key="titul1.titula_uuid"
                class="flex-center"
              >
                <div
                  v-if="rolecolor4 &&titul1.rola==&quot;ARBITER&quot;"
                  class="flex-center"
                >
                  <input
                    v-model="pickedarb"
                    type="radio"
                    :value="titul1.titula_uuid"
                    name="titlepick" 
                  >
                  <div>
                    <p class="left-check-text">
                      {{ titul1.titula_short_name }}
                    </p>
                  </div>
                </div>    
              </div>
              <p  class="remove_click" @click="remove_title('arbiter')">
                    X
                  </p> 
                  <div>
                    <p class="left-check-text">
                      Remove title
                    </p>
                  </div>
            </div>
  <!--TRAINER CHOOSE-->
            <div
              v-else-if="clickside && rolecolor5"
              class="middle3-1"
            > 
              <div
                v-for="titul1 in titule"
                :key="titul1.titula_uuid"
                class="flex-center"
              >
                <div
                  v-if="rolecolor5 &&titul1.rola==&quot;TRAINER&quot;"
                  class="flex-center"
                >
                  <input
                    v-model="pickedtre"
                    type="radio"
                    :value="titul1.titula_uuid"
                    name="titlepick" 
                  >
                  <div>
                    <p class="left-check-text">
                      {{ titul1.titula_short_name }}
                    </p>
                  </div>
                </div>    
              </div>
              <p  class="remove_click" @click="remove_title('trainer')">
                    X
                  </p> 
                  <div>
                    <p class="left-check-text">
                      Remove title
                    </p>
                  </div>
            </div>
          
<!--END TRAINER  -->            
            <div
              v-else
              class="middle3-1"
            >
              <p style="color:#6F7381">
                Title:
              </p>
              <div style="display:flex">
                <div
                  v-if="user.titula_player!==null && this.user.rola.indexOf('PLAYER')!==-1"
                  class="titles"
                >
                  {{ user.titula_player_details.titula_short_name }} <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->
                </div>
                      
                <div
                  v-if="user.titula_organizer!==null && this.user.rola.indexOf('ORGANIZER')!==-1 "
                  class="titles"
                >
                  IO <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->  
                </div>
                 <div
                  v-if="user.titula_trainer!==null && this.user.rola.indexOf('TRAINER')!==-1"
                  class="titles"
                >
                  {{ user.titula_trainer_details.titula_short_name }} <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->
                </div>
                <div
                  v-if="user.titula_arbiter!==null && this.user.rola.indexOf('ARBITER')!==-1"
                  class="titles"
                >
                  {{ user.titula_arbiter_details.titula_short_name }} <!-- <img class="title-arrow" src="../assets/arrow_down.png" alt="">  -->
                </div>
              </div>
            </div>  
          </div>
          <div
            v-if="clickside"
            class="middle3-1 "
          >
            <p style="color:#6F7381">
              Rating:
            </p>
            <div class="ratings">
              <p class="text-ratings ">
                Standard:
              </p>
              <input
                v-model="user.rating_standard"
                type="number"
                class="rating-patch"
              > 
            </div>
            <div class="ratings">
              <p class="text-ratings">
                Rapid:
              </p>
              <input
                v-model="user.rating_rapid"
                type="number"
                class="rating-patch"
              > 
            </div>
            <div class="ratings">
              <p class="text-ratings">
                Blitz:
              </p>
              <input
                v-model="user.rating_blitz"
                type="number"
                class="rating-patch"
              >  
            </div>    
          </div>
          <div
            v-else
            class="middle3-1 "
          >
            <p style="color:#6F7381">
              Rating:
            </p>
            <div class="ratings">
              <p class="text-ratings ">
                Standard:
              </p>{{ user.rating_standard }}
            </div>
            <div class="ratings">
              <p class="text-ratings">
                Rapid:
              </p>{{ user.rating_rapid }}
            </div>
            <div class="ratings">
              <p class="text-ratings">
                Blitz:
              </p>{{ user.rating_blitz }}
            </div>
          </div>
        </div>
        <!--MIDDLE 4 -->
        <div id="middle4">
          <div
            class="middle3-1"
            style="justify-content:space-evenly "
          >
            <p
              :class="{'middle4-1':isActive,'ratingsi':clickActive1,}"
              @click="cvdairycal1()"
            >
              CHESS CV
            </p>
            <p
              :class="{'middle4-1':isActive,'ratingsi':clickActive2,}"
              @click="cvdairycal2()"
            >
              CHESS DIARY
            </p>  
            <p
              :class="{'middle4-1':isActive,'ratingsi':clickActive3,}"
              @click="cvdairycal3()"
            >
              CALENDAR
            </p>
          </div>
          <div class="middle3-1">
            <div
              v-if="user.rola.indexOf('PLAYER')!==-1"
              style="margin-left:1.5625rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor1}"
              @click="rolecol1"
            >
              Player
            </div>
            <div
              v-if="user.rola.indexOf('CLUBADMIN') !==-1"
              style="margin-left:2.25rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap; "
              :class="{'middle4-1':isActive,'rola-text':rolecolor2}"
              @click="rolecol2"
            >
              Club Admin
            </div> 
            <div
              v-if="user.rola.indexOf('ORGANIZER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor3}"
              @click="rolecol3"
            >
              Organizer
            </div>
            <div
              v-if="user.rola.indexOf('ARBITER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor4}"
              @click="rolecol4"
            >
              Arbiter
            </div>
            <div
              v-if="user.rola.indexOf('TRAINER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor5}"
              @click="rolecol5"
            >
              Trainer
            </div>
            <div
              v-if="user.rola.indexOf('OTHER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor6}"
              @click="rolecol6"
            >
              Other
            </div>
            <div
              v-if="clickside"
              style="display:flex"
            >
              <select
                id="select-css"
                v-model="selectedrole"
                @change="addrole"
              >
                <option
                  disabled
                  value=""
                >
                  Add/Remove
                </option>
                <option value="PLAYER">
                  Player
                </option>
                <option value="CLUBADMIN">
                  Clubadmin
                </option>
                <option value="ORGANIZER">
                  Organizer
                </option>
                <option value="ARBITER">
                  Arbiter
                </option>
                <option value="TRAINER">
                  Trainer
                </option>
                <option value="OTHER">
                  Other
                </option>
              </select>
            </div> 
          </div>
        </div>
        <!--END MIDDLE 4 -->
        <!--MIDDLE 5 -->
        <div id="middle5">
          <div class="middle5-left"> 
            <div v-if="clickActive2">
              <ChessDiary
                :key="user.user_uuid"
                :user="user"
              />
            </div>
            <div v-if="clickActive1">
              <Chesscv
                :key="user.user_uuid"
                :user="user"
              />
            </div>
            <div v-if="clickActive3">
              <Calendar
                :key="user.user_uuid"
                :user="user"
              />
            </div>
          </div>
          <div>
            <!--PLAYER PART -->      
            <div v-if="activeplayer && user.rola.indexOf('PLAYER')!==-1">
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <p class="middle5-text">
                    Current club:
                  </p>
                  <div>
                    <input
                      v-if="clickside"
                      v-model="user.current_clubs"
                      type="text"
                      class="inputcurplay"
                    >
                    <p
                      v-else
                      class="gold"
                      style="margin-top:1.25rem;"
                    >
                      {{ user.current_clubs }}
                    </p>
                  </div>
                </div>
                <div class="mid5-padd">
                  <p class="middle5-text">
                    Current league:
                  </p>
                  <input
                    v-if="clickside"
                    v-model="user.current_leagues"
                    type="text"
                    class="inputcurplay"
                  >
                  <p
                    v-else
                    class="gold"
                    style="margin-top:1.25rem;"
                  >
                    {{ user.current_leagues }}
                  </p>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <div style="height:4rem;display:flex">
                    <p class="middle5-text">
                      Currently active:
                    </p>
                    <img
                      v-if="user.current_playing_bool"
                      id="plava-kugla"
                      src="../assets/plavakugla.png"
                      alt=""
                    >
                  </div>
                  <b-form-checkbox
                    switch
                    :checked="user.current_playing_bool"
                    style="padding-left:3.4375rem;" 
                    @change="activeplayercur"
                  /> 
                  <div>
                    <input
                      v-if="user.current_playing_bool && user.current_playing=='' || clickside "
                      v-model="user.current_playing"
                      type="text"
                      style="margin-top:28px;font-size:0.75rem"
                      class="inputcurplay"
                    >
                    <p
                      v-else-if="user.current_playing_bool"
                      class="gold"
                      style="margin-top:1rem;font-size:0.75rem;"
                    >
                      {{ user.current_playing }}
                    </p>
                  </div>
                </div>
                <div class="mid5-padd">
                  <p class="middle5-text">
                    Player form:
                  </p>
                  <div id="form-middle5">
                    <img
                      style="height:1.5625rem"
                      src="../assets/form.svg"
                      alt=""
                    >
                    <p style="margin:0;padding:8px 0 0 0">
                      Unknown
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="middle5-right-grid2"
                style="min-height:170px;"
              >
                <div
                  class="mid5-padd"
                  style="padding:0 0 0 0.625rem"
                >
                  <p
                    class="middle5-text"
                    style="margin-bottom:0.625rem"
                  >
                    Open to new engagements
                  </p>
                            
                  <div>
                    <div
                      class="engage-grid stikl"
                      :class="{stikl1:user.open2new_eng_club===false || engageclub===false}"
                    >
                      <p class="gold2">
                        Club
                      </p>
                      <img
                        class="engage-stikl"
                        src="../assets/stikla.png"
                        alt=""
                        @click="clubinterested"
                      >
                    </div>
                    <div
                      class="engage-grid stikl"
                      :class="{stikl1:user.open2new_eng_tournament===false || engagetournament===false}"
                    > 
                      <p class="gold2">
                        Tournaments
                      </p>
                      <img
                        class="engage-stikl "
                        src="../assets/stikla.png"
                        alt=""
                        @click="tourinterested"
                      >
                    </div> 
                    <div
                      class="engage-grid stikl"
                      :class="{stikl1:user.open2new_eng_event===false || engageevent===false}"
                    > 
                      <p class="gold2">
                        Events
                      </p>
                      <img
                        class="engage-stikl"
                        src="../assets/stikla.png"
                        alt=""
                        @click="eventinterested"
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="mid5-padd"
                  style="padding:0 0 0 0.625rem"
                >
                  <p
                    class="middle5-text"
                    style="margin-bottom:0.625rem"
                  >
                    My interested in shortlist:
                  </p>
                  <p
                    v-for="listpla in my_interested_list"
                    :key="listpla.target_uuid"
                    class="gold2"
                  >
                    <router-link
                      class="link"
                      :to="{ name:'Publicprofile',params:{ id:listpla.target_uuid}}"
                    > 
                      - {{ listpla.target_object.name_first }} {{ listpla.target_object.name_last }} 
                    </router-link>
                  </p>  
                  <p
                    v-for="listclub in my_intclub_list"
                    :key="listclub.target_uuid"
                    class="gold2"
                  >
                    <router-link
                      class="link"
                      :to="{ name:'Publicprofile',params:{ id:listclub.target_uuid}}"
                    > 
                      - {{ listclub.target_object.name_first }} {{ listclub.target_object.name_last }}, club:{{ listclub.target_object.club_name }} 
                    </router-link>
                  </p> 
                </div>
              </div>
              <div id="middle5-right-end">
                <p class="middle5-text">
                  Desired club compensation ( € )
                </p>
                <div @click="changed_compensation=true">
                  <v-app class="vuetify-switch"> 
                    <v-container class="switch-container">  
                      <v-card
                        flat
                        color="transparent"
                      >
                        <v-subheader />
                        <v-card-text>
                          <v-row>
                            <v-col class="px-4">
                              <v-range-slider
                                v-model="rangeclub"
                                :max="max"
                                :min="min"
                                hide-details
                                class="align-center"
                              >
                                <template v-slot:prepend>
                                  <v-text-field
                                    :value="rangeclub[0]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 0px"
                                    @change="$set(rangeclub, 0, $event) "
                                  />
                                </template>
                                <template v-slot:append>
                                  <v-text-field
                                    :value="rangeclub[1]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 0px"
                                    @change="$set(rangeclub, 1, $event)"
                                  />
                                </template>
                              </v-range-slider>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-container>  
                  </v-app>
                </div> 
                <div
                  v-if="changed_compensation"
                  class="slider"
                > 
                  <p>{{ rangeclub[0] }} </p><p class="slider-text" /> <p>{{ rangeclub[1] }} </p>
                </div> 
                <div
                  v-else
                  class="slider"
                >
                  <p>{{ user.comp_per_game_from }}  </p><p style="padding-left:3.125rem">
                    {{ user.comp_per_game_to }}
                  </p>
                </div>   
                <div v-if="changed_compensation">
                  <button
                    class="button-range"
                    type="button"
                    @click="compensation"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <!-- END PLAYER PART  --> 
            <!-- CLUB PART  -->            
            <div v-else-if="activeclub && user.rola.indexOf('CLUB')!==-1">
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <p class="middle5-text">
                    My club name:
                  </p>
                  <div>
                    <input
                      v-if="clickside"
                      v-model="user.club_name"
                      type="text"
                      class="inputcurplay"
                    >
                    <p
                      v-else
                      class="gold"
                      style="margin-top:1.25rem;"
                    >
                      {{ user.club_name }}
                    </p>
                  </div>
                </div>
                <div class="mid5-padd">
                  <p class="middle5-text">
                    Current league:
                  </p>
                  <input
                    v-if="clickside"
                    v-model="user.club_current_league"
                    type="text"
                    class="inputcurplay"
                  >
                  <p
                    v-else
                    class="gold"
                    style="margin-top:1.25rem;"
                  >
                    {{ user.club_current_league }}
                  </p>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <div style="height:4rem;display:flex">
                    <p class="middle5-text">
                      My team is currently active:
                    </p>
                    <img
                      v-if="switch3"
                      id="plava-kugla"
                      src="../assets/plavakugla.png"
                      alt=""
                    >
                  </div>
                            
                  <b-form-checkbox
                    switch
                    :checked="user.club_current_playing_bool"
                    style="padding-left:3.4375rem;" 
                    @change="activeclubcur"
                  /> 
                  <!--  <v-app class="vuetify-switch"> 
                                    <v-container class="switch-container"   >  
                                        <v-switch 
                                        v-model="switch3"
                                        color="#C8A07D"
                                        ></v-switch>
                                    </v-container>  
                                </v-app> -->
                  <div>
                    <input
                      v-if="user.club_current_playing_bool && user.club_current_playing=='' || clickside "
                      v-model="user.club_current_playing"
                      type="text"
                      style="margin-top:42px;"
                      class="inputcurplay"
                    >
                    <p
                      v-if="user.club_current_playing_bool"
                      class="gold"
                      style="margin-top:1.5625rem;"
                    >
                      {{ user.club_current_playing }}
                    </p>
                  </div>
                </div>
                <div class="mid5-padd">
                  <p
                    class="middle5-text"
                    style="padding-bottom:1.875rem;"
                  >
                    Looking for new player:
                  </p>
                  <div class="switch-style">
                    <b-form-checkbox
                      switch
                      :checked="user.club_looking_for_new_player"
                      @change="lookpla"
                    />                  
                  </div>
                </div>
              </div>
              <div class="middle5-right-grid2">
                <div class="mid5-padd flex-center">
                  <div class="borderbutton flex-center">
                    <img
                      src="../assets/createevent2.png"
                      alt=""
                    >
                    <p>Create an event</p>
                  </div>
                </div>    
                <div
                  class="mid5-padd"
                  style="padding:0 0 0 0.625rem"
                >
                  <p
                    class="middle5-text"
                    style="margin-bottom:0.625rem"
                  >
                    My interested in shortlist:
                  </p>
                  <p
                    v-for="listpla in my_interested_list"
                    :key="listpla.target_uuid"
                    class="gold2"
                  >
                    <router-link
                      class="link"
                      :to="{ name:'Publicprofile',params:{ id:listpla.target_uuid}}"
                    > 
                      - {{ listpla.target_object.name_first }} {{ listpla.target_object.name_last }} 
                    </router-link>
                  </p>  
                  <p
                    v-for="listclub in my_intclub_list"
                    :key="listclub.target_uuid"
                    class="gold2"
                  >
                    <router-link
                      class="link"
                      :to="{ name:'Publicprofile',params:{ id:listclub.target_uuid}}"
                    > 
                      - {{ listclub.target_object.name_first }} {{ listclub.target_object.name_last }}, club:{{ listclub.target_object.club }} 
                    </router-link>
                  </p> 
                </div>
              </div>
              <div class="middle5-right-grid">
                <div
                  class="mid5-padd flex-center"
                  style="height:170px"
                >
                  <div class="borderbutton flex-center">
                    <img
                      src="../assets/myclubpage.png"
                      alt=""
                    >
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
            <div v-else-if="activeorg && this.user.rola.indexOf('ORGANIZER')!==-1">
              <div id="middle5-right-startorg">
                <p class="middle5-text">
                  My Event is currently active:
                </p>
                <div class="mid5-padd">
                  <div style="height:4rem;display:flex">
                    <img
                      v-if="user.organizer_current_event!=null"
                      id="plava-kugla2"
                      src="../assets/plavakugla.png"
                      alt=""
                    >
                  </div>
                  <!--      <v-app class="vuetify-switch2"> 
                                    <v-container class="switch-container"   >
                                        <v-switch 
                                        value=switch5
                                        color="#C8A07D"
                                        ></v-switch>
                                    </v-container>  
                                </v-app> -->
                  <div
                    v-if="user.organizer_current_event!=null"
                    class="gold"
                    style="padding-left:6px;"
                  >
                    <p v-if="user.organizer_current_event">
                      {{ user.organizer_current_event.event_name }}
                    </p>
                    <p v-if="user.organizer_current_event">
                      From {{ user.organizer_current_event.event_date_from }} to {{ user.organizer_current_event.event_date_to }}
                    </p> 
                    <p v-if="user.organizer_current_event">
                      {{ user.organizer_current_event.event_description }}
                    </p>  
                  </div>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div class="mid5-padd flex-center">
                  <p class="middle5-text">
                    Looking for new participants?"
                  </p>
                  <div>
                    <div class="switch-style">
                      <b-form-checkbox
                        switch
                        :checked="user.organizer_looking_for_new_participants"
                        @change="lookpart"
                      />                  
                    </div>
                  </div>
                </div>
                <div class="mid5-padd flex-center">
                  <div
                    class="borderbutton flex-center"
                    @click="newevent=!newevent"
                  >
                    <img
                      src="../assets/createevent2.png"
                      alt=""
                    >
                    <p>Create an event</p>
                  </div>
                </div>
                <!--      <div class="mid5-padd flex-center">
                                <div class="borderbutton flex-center">
                                    <p style="text-align:center">Interested in this Organizer</p>
                                </div>               
                            </div>    -->
              </div>
              <div id="middle5-right-startorg">
                <div
                  v-if="newevent"
                  style="display:flex"
                >
                  <div style="height:4rem;">
                    <p class="middle5-text">
                      My new event:
                    </p>
                    <div class="list-events">
                      <p class="gold-event">
                        Enter name:
                      </p>
                      <input
                        v-model="new_event_name"
                        type="text"
                        required
                        class="profile-name2 line2"
                      >
                    </div>
                    <div class="list-events">
                      <p class="gold-event">
                        Date from:
                      </p>
                      <p>
                        <input
                          v-model="new_event_from"
                          type="date"
                          class="profile-name2 line2"
                        >
                      </p>
                    </div>
                    <div class="list-events">
                      <p class="gold-event">
                        Date to:
                      </p>
                      <p>
                        <input
                          v-model="new_event_to"
                          type="date"
                          class="profile-name2 line2"
                        >
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      class="middle2-buttons"
                      style="margin-left:40%"
                      type="submit"
                      @click="post_event"
                    >
                      Create
                    </button>
                  </div>
                </div>
                <div
                  v-else
                  class="mid5-padd listevent"
                  style="background-color: #202122;padding:0.625rem;"
                >
                  <p class="middle5-text">
                    My events:
                  </p>
                  <div
                    v-for="(event,index) in events"
                    :key="event.event_uuid"
                    style="display:flex"
                  >
                    <p
                      v-if="event.organiser_uuid=user.user_uuid"
                      style="padding-right:8px ;margin-left:0.9375rem"
                    >
                      {{ index+1 }}.
                    </p>   
                    <p
                      style="cursor:pointer"
                      class="gold-event"
                    >
                      {{ event.event_name }}
                    </p> <p
                      style="cursor:pointer"
                      @click="delete_event(event)"
                    >
                      x
                    </p> 
                  </div>  
                </div>
              </div>
            </div>
<!-- Trainer -->
            <div
              v-else-if="activetre && user.rola.indexOf('TRAINER')!==-1"
              style="opacity:0.5"
            >
              <p class="rotate">
                Coming soon!
              </p>
              <img
                style="width:100%"
                src="../assets/coach1.jpg"
                alt=""
              >  
            </div>



<!-- Arbiter -->
            <div v-else-if="activearb && this.user.rola.indexOf('ARBITER')!==-1">
              <div id="middle5-right-startorg">
                <p class="middle5-text">
                  My Event is currently active:
                </p>
                <div class="mid5-padd">
                  <div style="height:4rem;display:flex">
                    <img
                      v-if="user.arbiter_current_event!=null"
                      id="plava-kugla2"
                      src="../assets/plavakugla.png"
                      alt=""
                    >
                  </div>
                  <!--      <v-app class="vuetify-switch2"> 
                                    <v-container class="switch-container"   >
                                        <v-switch 
                                        value=switch5
                                        color="#C8A07D"
                                        ></v-switch>
                                    </v-container>  
                                </v-app> -->
                 <div>
                   <input
                      v-if="user.current_event!==''"
                      v-model="user.current_event"
                      type="text"
                      class="inputcurplay"
                    >
                     <input
                      v-else
                    
                      placeholder="123-45-678"
                      type="text"
                      class="inputcurplay"
                    >
                 </div>
                </div>
              </div>   
              <div class="middle5-right-grid">
                <div class="mid5-padd flex-center">
                  <p class="middle5-text">
                    Looking for new engagement?"
                  </p>
                  <div>
                    <div class="switch-style">
                      <b-form-checkbox
                        switch
                        :checked="user.arbiter_looking_for_new_engagement"
                        @change="lookpart"
                      />                  
                    </div>
                  </div>
                </div>
                <div class="mid5-padd flex-center">
                  <div
                    class="borderbutton flex-center"
                    @click="newevent=!newevent"
                  >
                    <img
                      src="../assets/createevent2.png"
                      alt=""
                    >
                    <p>Create an event</p>
                  </div>
                </div>  
                 <!--      <div class="mid5-padd flex-center">
                                <div class="borderbutton flex-center">
                                    <p style="text-align:center">Interested in this Organizer</p>
                                </div>               
                            </div>    -->
              
              </div>
              <div id="middle5-right-startorg">
                <div
                  v-if="newevent"
                  style="display:flex"
                >
                  <div style="height:4rem;">
                    <p class="middle5-text">
                      My new event:
                    </p>
                    <div class="list-events">
                      <p class="gold-event">
                        Enter name:
                      </p>
                      <input
                        v-model="new_event_name"
                        type="text"
                        required
                        class="profile-name2 line2"
                      >
                    </div>
                    <div class="list-events">
                      <p class="gold-event">
                        Date from:
                      </p>
                      <p>
                        <input
                          v-model="new_event_from"
                          type="date"
                          class="profile-name2 line2"
                        >
                      </p>
                    </div>
                    <div class="list-events">
                      <p class="gold-event">
                        Date to:
                      </p>
                      <p>
                        <input
                          v-model="new_event_to"
                          type="date"
                          class="profile-name2 line2"
                        >
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      class="middle2-buttons"
                      style="margin-left:40%"
                      type="submit"
                      @click="post_event"
                    >
                      Create
                    </button>
                  </div>
                </div>
                <div
                  v-else
                  class="mid5-padd listevent"
                  style="background-color: #202122;padding:0.625rem;"
                >
                  <p class="middle5-text">
                    My events:
                  </p>
                  <div
                    v-for="(event,index) in events"
                    :key="event.event_uuid"
                    style="display:flex"
                  >
                    <p
                      v-if="event.organiser_uuid=user.user_uuid"
                      style="padding-right:8px ;margin-left:0.9375rem"
                    >
                      {{ index+1 }}.
                    </p>   
                    <p
                      style="cursor:pointer"
                      class="gold-event"
                    >
                      {{ event.event_name }}
                    </p> <p
                      style="cursor:pointer"
                      @click="delete_event(event)"
                    >
                      x
                    </p> 
                  </div>  
                </div>
              </div> 
            </div>  
<!-- Other -->
            <div
              v-else-if="activeoth && user.rola.indexOf('OTHER')!==-1"
              style="opacity:0.5"
            >
              <p class="rotate">
                Coming soon!
              </p>
              <img
                style="width:100%"
                src="../assets/arbiter.jpg"
                alt=""
              > 
            </div>

          </div>
        </div>
      </div>    
      <div />
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
         use:'',
         isActive2: true,
         clickside:false,
         engageclub:function(){return this.user.open2new_eng_club},
         engageevent:function(){return this.user.open2new_eng_event},
         engagetournament:function(){return this.user.open2new_eng_tournament},
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
         activeclub:true,
         activeorg:true,
         activearb:true,
         activetre:true,
         activeoth:true,
         switch1:'',
         switch2:'',
         titule:[],
         titul1:{titula_uuid:''},
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
               name_first:'',
               name_last:'',
               city:'',
               birth_year:'',
               fide_id:'',
               rating_standard:'',
               rating_blitz:'',
               rating_rapid:'',
               current_clubs:'',
               current_leagues:'',
               current_playing:'',
               club_name:'',
               club_current_playing:'',
               club_current_league:'',
               organizer_current_event:{event_name:''},

         },
         rangeclub:[350,2000],
         sexon:'',
         picked:'',
         pickedorg:'',
         pickedtre:'',
         pickedarb:'',
         switch3:'',
         photoinfo:'',
         changed_compensation:false,
         createevent:'',
         newevent:false,
         new_event_name:'',
         new_event_description:'',
         new_event_from:'',
         new_event_to:'',
         events:[],
       //  event:[],
         event_list:false,
         my_interested_list:[],
         my_intclub_list:[],
         title_remove:''

      }
},
   
//------------------------------MOUNTED-------------------------------//

mounted(){
/* USER INFO */  
fetch('https://app.outpostchess.com/api/v2/current_user_info', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  }
  },        fetch('https://app.outpostchess.com/api/v2/countries', {
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

/* TITLES */ 
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
//.then(data => console.log('titule',data))

     
/* EVENTS */    
fetch('https://app.outpostchess.com/api/v2/organiser_events', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.events=data)
      //  .then(data => console.log('events',data))   
      
/* INTERESTED IN PLAYER */      
fetch('https://app.outpostchess.com/api/v2/interested_in_player', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_interested_list=data)   
        //.then(data => console.log('my_list',data))

/* INTERESTED IN CLUB */ 
fetch('https://app.outpostchess.com/api/v2/interested_in_club', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_intclub_list=data)   
      //  .then(data => console.log('my_clublist',data))           
},


//---------------------------------------------METHODS----------------------------------------------//
created () {
    // fetch the data when the view is created and the data is
    // already being observed
    //this.refresh()
  },
methods:{
    remove_title: function(erase){
          this.title_remove=(erase)
         fetch(`https://app.outpostchess.com/api/v2/current_user_titule/${this.title_remove}`, {
            method:'DELETE',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
         })
            .then(response =>(window.location.reload(response)))
          
    },
    delete_event:function(eve){
            console.log(eve.event_uuid);
           fetch(`https://app.outpostchess.com/api/v2/organiser_event/${eve.event_uuid}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:null
})       .then(() => {
            window.location.reload();
        })
    
    // .then(this.$router.go()) 
    },
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
          //  console.log(this.organizer_looking_for_new_participants)
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
           // console.log(this.current_playing_bool)
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
      this.activetre=false;  this.activearb=false;this.activeoth=false;
      this.rolecolor1=true; this.rolecolor2=false;this.rolecolor3=false;
      this.rolecolor4=false;this.rolecolor5=false;this.rolecolor6=false;   
    },
    rolecol2:function(){
      this.activeclub=true; this.activeplayer=false;this.activeorg=false;
      this.activetre=false;  this.activearb=false;this.activeoth=false;
      this.rolecolor1=false; this.rolecolor2=true; this.rolecolor3=false; 
      this.rolecolor4=false;   this.rolecolor5=false; this.rolecolor6=false;   
    },
    rolecol3:function(){
      this.rolecolor1=false;  this.rolecolor2=false; this.rolecolor3=true;  
      this.rolecolor4=false;  this.rolecolor5=false; this.rolecolor6=false;  
      this.activeorg=true;   this.activeplayer=false; this.activeclub=false; 
      this.activetre=false; this.activearb=false;this.activeoth=false;
    },
    rolecol4:function(){
      this.activeorg=false;   this.activeplayer=false; this.activeclub=false;  
      this.activetre=false;    this.activearb=true;
      this.rolecolor1=false; this.rolecolor2=false; this.rolecolor3=false;   
      this.rolecolor4=true; this.rolecolor5=false; this.rolecolor6=false;   
    },
    rolecol5:function(){
      this.activeorg=false;this.activeplayer=false;   this.activeclub=false;  
      this.activetre=true;  this.activearb=false;  this.activeoth=false;
      this.rolecolor1=false;  this.rolecolor2=false;  this.rolecolor3=false;  
      this.rolecolor4=false; this.rolecolor5=true;  this.rolecolor6=false;   
    },
    rolecol6:function(){
      this.rolecolor1=false; this.rolecolor2=false;   this.rolecolor3=false;   
      this.rolecolor4=false;  this.rolecolor5=false;   this.rolecolor6=true;   
      this.activeorg=false;   this.activeplayer=false; this.activeclub=false;  
      this.activetre=false;    this.activearb=false; this.activeoth=true;
    },
 //--------------USER PATCH----------------------// 

//async created() {
  // await this.userpatch()
   
  
//},

//USER PATCH
userpatch : async function()  {
          
          //this.clickside=false;

             fetch( 'https://app.outpostchess.com/api/v2/current_user_info', {
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( { 
              titula_player:this.picked,
              titula_organizer:this.pickedorg,
              titula_trainer:this.pickedtre,
              titula_arbiter:this.pickedarb,
              name_last:this.user.name_last ,
              name_first:this.user.name_first,
              fide_id:this.user.fide_id,  
              rating_standard:this.user.rating_standard, 
              rating_rapid:this.user.rating_rapid, 
              rating_blitz:this.user.rating_blitz,  
              current_clubs:this.user.current_clubs,
              current_playing:this.user.current_playing,
              current_leagues:this.user.current_leagues,  
              city:this.user.city,
              federation:this.selected,
              sex:this.sexon,
              birth_year:this.user.birth_year,
              club_name:this.user.club_name,
              club_current_league:this.user.club_current_league,
              club_current_playing:this.user.club_current_playing,
              organizer_current_event:this.user.organizer_current_event,
             
            
            })
      
         
        },
        
               )   
            .then(response =>  response.json())
            .then(data => console.log(data)) 
            .then(response =>{if(this.picked !== '' || this.pickedorg !== '' || this.pickedtre || this.pickedarb || this.photoinfo !== '' || this.selectedrole !== '' ){
            window.location.reload(response)    }
             })
       
        
            },
            
       //refresh:function(){
      //  window.location.reload();
     // } ,     

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
          console.log(this.selectedrole)   
          console.log(this.user.rola.indexOf(this.selectedrole))   
    if(this.user.rola.indexOf(this.selectedrole)==-1){
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
      }else {
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
           }
    },


post_event:function(){
    this.newevent=false;
    fetch('https://app.outpostchess.com/api/v2/organiser_event', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
                body: JSON.stringify( { 
                event_name:this.new_event_name,
                event_date_from:this.new_event_from,
                event_date_to:this.new_event_to,
                })
            })
            .catch(error => {
            console.error(error)
            }) .then(() => {
            window.location.reload();
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
    grid-template-columns: 16.25rem auto;
}  

.right-profile{
    background-color:  #171819;
    display:grid;
    grid-template-columns: 8% 84% 8%;
    background-color: #1B1C1D;
}

#side-bar{
  height: 100%;
  width: 100%;
  background-color:#202122;
  color:#FFFFFF;
  padding:4.375rem 0.625rem 3.125rem 0.625rem;
  font-size: 0.875rem;
}

.left-sidetext{
    padding-left:0.9375rem;
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
      padding-right:0.9375rem;
      padding-left:5px;
      color:#C8A07D;
      font-size: 0.875rem;

    }
   
/*--------------------------MIDLE1-------------------------------------- */


/*--------------------------MIDLE2-------------------------------------- */
#middle2{
    height: 8.75rem;
    background-color: #202122;
    display: grid;
    padding:8px 0.9375rem 8px 1.5625rem;
    grid-template-columns: 15% 60% 25%;
    color:#6F7381;
    margin-top:0.625rem;
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
     padding-bottom: 1rem;
}
.upload-pic{
    padding-right:1.875rem;
    
}
#profile-pic{
    border-radius: 50%;
    height: 7.875rem;
    object-fit: contain;
}
.photo-input{
    width:3.4375rem;
    cursor: pointer;
}


#profile-name{
   font-weight: 700;
   font-style: normal;
   font-weight: bold;
   color: #C8A07D;
   display: flex;
   height: 1.25rem;
   margin-bottom:0.9375rem;
   
}
.profile-name2{
   color: #FFFFFF;
   display: flex;
   height: 1.25rem;
   margin-bottom:0.9375rem;
   border-bottom: 1px solid #5C5E64;
   margin-right: 5px;
   padding-left:5px;
   font-size:0.875rem;
   width:6.25em
}
.rating-patch{
   color: #FFFFFF;
   display: flex;
   height: 1.25rem;
   border-bottom: 1px solid #5C5E64;
   width: 2.25rem;
   font-size:0.875rem;

}
.file-input::before {
  content: 'Upload Photo';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 0.5rem;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  color:#FFFFFF;
  margin-top:1.875rem;
}

#middle2-1{
    padding-left:2.5rem;
    padding-top:0.875rem ;
}
.padd-text{
    padding-left:1.625em;
}
#middle2-flag{
    height: 1.875rem;
    padding: 0 1.875rem 0 0.625rem;
    
}
#middle2-flag:hover{
    cursor: pointer;
    
}
.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 0.875rem;
  width: 11.875rem;
  height: 2.875rem;
  margin-right: 0.9375rem;;
  margin-top:3.125rem;
   
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
height: 5rem;
}
::placeholder{
    color:#C7C9D0;
    font-weight: 300;
    font-size: 0.875rem;
}
.titles{
    cursor: pointer;
    outline: #C8A07D solid 2px;
    border-radius: 1.25rem;
    width:5.125rem;
    height: 2rem;
    margin-left:1.25rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF;
    font-size: 0.875rem;
}
.remove_click{
   color:#FFFFFF;
   cursor: pointer;
}
.middle3-1{
    display:flex;
    align-items: center;
}
.ratings{
    border-radius: 1.25rem;
    width:7.5rem;
    height: 2rem;
    margin-left:0.625rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF; 
    font-size: 0.875rem;
    outline: #C8A07D solid 2px;
}
.ratingsi{
    background: #C8A07D;
    border-radius: 1.25rem;
    width:7.5rem;
    height: 2rem;
    margin-left:1.25rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF !important; 
    font-size: 0.875rem;
    
}
.rola-text{
    background: #C8A07D;
    border-radius: 1.25rem;
    width:5rem;
    height: 2rem;
    margin-left:1.25rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF !important; 
    font-size: 0.875rem;
    font-weight: 500;
}

.text-ratings{
    color:#C8A07D;
    padding-right:0.625rem
}
/*--------------------------MIDDLE4-------------------------------------- */
#middle4{
     height: 3.875rem;
     background-color: #202122;
     display:grid;
     grid-template-columns: 55% 45%;
}
.middle4-1  {
   color:#6F7381;
   padding:0 0.625rem 0 0.625rem;
   font-size:0.875rem;
}
.middle4-1:hover{
    cursor: pointer;
    text-decoration: none;
}
.add-remove{
    color:#FFFFFF;
    padding-left:5px;
    font-size: 1.25rem;
    cursor: pointer;
    
}
/*--------------------------MIDDLE5-------------------------------------- */

#middle5{
    display:grid;
    grid-template-columns: 54.5% 44.5%;
    gap:1%;   
    height: auto;
    margin:1% 0 1.875rem 0;
    color:#FFFFFF;
 
}

.middle5-right-grid{
    display:grid; 
    grid-template-columns: 49% 49%;
    gap:2%;
    height:10rem;
    margin-bottom: 2%;
    text-align: left;
  
   
 }
 .middle5-right-grid2{
    display:grid; 
    grid-template-columns: 48% 48%;
    gap:2%;
    min-height:10rem;
    margin-bottom: 2%;
    text-align: left;
    background-color:#202122 ;
 }
 .mid5-padd{
     padding:0.625rem;
     }
#list-event{
   padding-left:5%;
   padding-top:0.9375rem;
}
 .title-arrow{
    padding-left:0.5rem;
}    
 
.engage-grid{
    display:grid;
    grid-template-columns: 70% 30%;
}
.engage-stikl{
    height: 0.875rem;
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
    height: 9.5625rem;
    background-color: #202122;
}
.gold{
    color:#C8A07D;
    font-size: 0.875rem;
    margin-top:10%;
    padding-left:1.25rem;
}
.gold2{
    color:#C8A07D;
    font-size: 0.875rem;
    padding-left:1.25rem;
}

.middle5-text{
    padding:0.9375rem 0 5px  1.25rem;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.01rem;
}
#form-middle5{
    color:#F2358D;
    text-align: center;
    padding-top:1.875rem;
}
.inputcurplay{
    margin-top:2em;
    margin-left:1.25rem;
    padding-left:5px;
    border-bottom: 1px solid #5C5E64;
    color:#FFFFFF;
}
.switch-style{
    padding-left:0.9375rem;
}

.slider{
    display:flex;
    width:100%

}
.slider>p{
    width:2.375rem;
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
    padding-left:6.25em;
    width:3.75rem;
    padding-right:0.625rem;
}
.radiobutton{
    margin:auto  0.9375rem auto 0.625rem ;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.grid-check{
    padding-bottom: 0.9375rem;
    font-size:1.125rem;
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
    width:4.75rem;
    border-radius: 3px;
    margin-left:1.5625rem;
    outline:0px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
}
#select-css2{
    color:#FFFFFF !important;
    width:8.75rem;
    border-radius: 3px;
    margin-left:1.5625rem;
    outline:0px;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    background-color:  #202122;
}

.switch-engage{
    margin-left:0.625rem;
}

/* RADIO */
.radio-titule{
   display:flex;
   font-size: 0.875rem;;
}

/* CLUB */
.link:hover{
    color:#C8A07D;
    opacity: 0.8;
}
.vuetify-switch{
    height: 0px;
    position:relative;
    bottom:4rem;
    left:0.625rem;  
}

.switch-container{
    padding-left: 1.25rem ;
    margin:0;
}
.borderbutton{
    width: 10.625rem;
    height: 2.75rem;
    border: 1px solid #2E2E2E;
    box-sizing: border-box;
    border-radius: 6px;
}
.borderbutton:hover{
    opacity:0.7;
    cursor: pointer;
}
.borderbutton>p{
    font-size:0.875rem;
    padding:0 5px 0 5px
}


.slider{
    display:flex;
    margin: auto;
    width:15rem
}
.slider>p{
    text-align: center;
}
/*ARBITER*/
.rotate{transform: rotate(-45deg);
position:relative;
top:18.75rem;
    font-size:1.625rem;
    font-weight: 600;
    letter-spacing: 0.9375rem;}
/*ORGANIZER*/
#middle5-right-startorg{
    min-height: 12.8125rem;
    background-color: #202122;
    margin-bottom:0.625rem;
    text-align:left;
    padding:0.625rem
}
.listevent{
    min-height: 12.8125rem;
}
#plava-kugla2{
    height: 6.25em;
    padding-left:80%;
   
}
.line2{
    width:9.375rem;
}

#plava-kugla{
   position: relative;
   left:10%
}
/*.vuetify-switch2{
    height: 0px;
    position:relative;
    bottom:3.4375rem;
    right:0.9375rem;
}*/
.list-events{
    display: flex;
    padding-left:1.25rem
}
.list-events>p{
font-size:0.75rem
}
.gold-event{
   color:#C8A07D;
   padding-right:4px;
}



.switch1 {
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 2.125rem;
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
  height: 1.625rem;
  width: 1.625rem;
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
  -webkit-transform: translateX(1.625rem);
  -ms-transform: translateX(1.625rem);
  transform: translateX(1.625rem);
}

/* Rounded sliders */
.slider1.round {
  border-radius: 2.125rem;
}

.slider1.round:before {
  border-radius: 50%;
}

.button-range{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 0.875rem;
  width: 10.625rem;
  height: 2rem;
  margin-right: 0.9375rem;
  margin-top:3.125rem;
}
.button-range:hover{
opacity: 0.7;
cursor: pointer;
}







@media only screen and (max-width: 1500px)  {

.right-profile{
    display:grid;
    grid-template-columns: 3% 94% 3%;
 
}
.profile{
    display:grid;
    grid-template-columns: 12.5rem auto;
    font-size:0.875rem;
}  

}
</style>