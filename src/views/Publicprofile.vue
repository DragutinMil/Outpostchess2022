<template>
  <div class="profile">
    <SideBar />
    <!--  RIGHT PROFILE -->
    <div class="right-profile">
      <div />  
      <div id="right-middle">
        <Searchpart  />
        <!-- MID 2 -->             
        <div id="middle2">
          <div class="upload-pic">
            <img
              v-if="user.profile.file_url==null" 
              id="profile-pic"
              src="https://outpostchess.fra1.digitaloceanspaces.com/2bf139b2-7074-4fd4-8377-58efead41bf0.png"
              alt=""
            >  
            <img
              v-else
              id="profile-pic"
              :src="user.profile.file_url"
              alt=""
            >
          </div>
          <div id="middle2-1">
            <div style="display:flex">
              <p id="profile-name">
                {{ user.name_first || "Name" }} {{ user.name_last || "Last name" }}
              </p>  
            </div>
            <div class="profile-info1">
              <div class="profile-info1-1">
                <img
                  src="../assets/Vector-1.svg"
                  alt=""
                >  
                <p>{{ user.city }}</p>
              </div>
              <p class="padd-text">
                Age : {{ user.godine }}
              </p>
              <p
                class="padd-text"
                style="color:#FFFFFF"
              >
                {{ user.sex }}
              </p>
            </div>
            <div class="profile-info1-1">
              <div style="margin-bottom:0.625rem">
                <div>
                  <p style="margin:0;padding-right:1.25rem;">
                    Federation: <span style="color:#C8A07D"> {{ user.federation_details.name }} </span>
                  </p>
                </div>
              </div>
              <p style="margin-bottom:0.625rem;padding:0">
                Fide ID:
              </p>
              <p style="margin-bottom:0.625rem;padding:0 0 0 0.625rem;color:#C8A07D">
                {{ user.fide_id }}
              </p>    
            </div>
          </div>
          <div id="middle2-button-container">
            <button
              class="middle2-buttons"
              type="button"
            >
              Message
            </button>
          
             
          <!--    <div  v-for="list in my_connection_list" :key="list.conn_uuid">
                <button 
                v-if="
                list.i_am_initiator==true &&  
                list.conn_status!==null &&  
                list.conn_target_uuid==user.user_uuid"
                  class="middle2-buttons"
                  type="button"
                  @click="disconnection_people"
                >
                  Disconnect
                </button>
                <button v-else-if="
                list.i_am_initiator==true &&  
                list.conn_status===null &&  
                list.conn_target_uuid==user.user_uuid" 
                class="middle2-buttons"
                type="button"
                @click="connection_people"
              >
                Connect
              </button>
              </div>
            -->
           
              
            
          </div>
        </div>
        <!--END MID 2 -->     
        <!--MID 3 -->
        <div id="middle3">
          <div class="middle3-1">
            <div class="middle3-1">
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
          <div class="middle3-1 ">
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
              @click="role_indicator(1)"
            >
              Player
            </div>
            <div
              v-if="user.rola.indexOf('CLUBADMIN') !==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor2}"
              @click="role_indicator(2)"
            >
              Club Admin
            </div> 
            <div
              v-if="user.rola.indexOf('ORGANIZER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor3}"
              @click="role_indicator(3)"
            >
              Organizer
            </div>
            <div
              v-if="user.rola.indexOf('ARBITER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor4}"
              @click="role_indicator(5)"
            >
              Arbiter
            </div>
            <div
              v-if="user.rola.indexOf('TRAINER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor5}"
              @click="role_indicator(4)"
            >
              Trainer
            </div>
            <div
              v-if="user.rola.indexOf('OTHER')!==-1"
              style="margin-left:2.25rem"
              :class="{'middle4-1':isActive,'rola-text':rolecolor6}"
              @click="role_indicator(6)"
            >
              Other
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
              <ChesscvPublic
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
            <div v-if="activePlayer && user.rola.indexOf('PLAYER')!==-1">
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <p class="middle5-text">
                    Current club:
                  </p>
                  <div>
                    <p
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
                  <p
                    class="gold"
                    style="margin-top:1.25rem;"
                  >
                    {{ user.current_leagues }}
                  </p>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <div style="height:4.0625rem;display:flex;position:relative">
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
                    disabled
                    :checked="user.current_playing_bool"
                    style="padding-left:3.4375rem;"
                  /> 
                  <div>
                    <p
                      v-if="user.current_playing_bool"
                      class="gold"
                      style="margin-top:1.875rem;"
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
                      src="../assets/player-form-unkown-icon.svg"
                      alt=""
                    >
                    <p style="margin:0;padding:0.5rem 0 0 0">
                      Unknown
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="middle5-right-grid"
                style="height:10.625rem;"
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
                      :class="{stikl1:user.open2new_eng_club===false}"
                    >
                      <p class="gold2">
                        Club
                      </p>
                      <img
                        class="engage-stikl"
                        src="../assets/stikla.png"
                        alt=""
                      >
                    </div>
                    <div
                      class="engage-grid stikl"
                      :class="{stikl1:user.open2new_eng_tournament===false }"
                    > 
                      <p class="gold2">
                        Tournaments
                      </p>
                      <img
                        class="engage-stikl "
                        src="../assets/stikla.png"
                        alt=""
                      >
                    </div> 
                    <div
                      class="engage-grid stikl"
                      :class="{stikl1:user.open2new_eng_event===false }"
                    > 
                      <p class="gold2">
                        Events
                      </p>
                      <img
                        class="engage-stikl"
                        src="../assets/stikla.png"
                        alt=""
                      >
                    </div>
                  </div>
                </div>
                <div class="mid5-padd flex-center">
                  <div>
                    <div
                      v-if="interested_no"
                      style="margin-bottom:0.625rem; "
                      class="borderbutton flex-center"
                    >
                      <p
                        style="font-size:0.75rem;"
                        @click="interested_player"
                      >
                        Interested in this Player
                      </p>
                    </div>
                    <div v-if="clicked_interested2">  
                      <div
                        v-for="listpla in my_interested_list"
                        :key="listpla.created_date"
                      >  
                        <div
                          v-if="listpla.target_uuid==user.user_uuid"
                          class="borderbutton flex-center"
                        >
                          <div style="font-size:0.75rem;">
                            <p @click="interested_player_del">
                              Remove from shortlist
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="clicked_interested"
                      style="margin-bottom:0.625rem; "
                      class="borderbutton flex-center"
                      @click="interested_player_del"
                    >
                      <p style="font-size:0.75rem;">
                        Remove from shortlist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="middle5-right-end">
                <p class="middle5-text">
                  Desired club compensation ( € )
                </p>

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
                                  :value="user.comp_per_game_from"
                                  class="mt-0 pt-0"
                                  hide-details
                                  single-line
                                  type="number"
                                  style="width: 0px"
                                />
                              </template>
                              <template v-slot:append>
                                <v-text-field
                                  :value="user.comp_per_game_to"
                                  class="mt-0 pt-0"
                                  hide-details
                                  single-line
                                  type="number"
                                  style="width: 0px"
                                />
                              </template>
                            </v-range-slider>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-container>  
                </v-app>
                <div class="slider">
                  <p>{{ user.comp_per_game_from }}  </p><p style="padding-left:3.125rem">
                    {{ user.comp_per_game_to }}
                  </p>
                </div>  
              </div>
            </div>
<!-- END PLAYER PART  --> 
<!-- CLUB PART  -->            
            <div v-else-if="activeClub && user.rola.indexOf('CLUB')!==-1">
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <p class="middle5-text">
                    My club name:
                  </p>
                  <div>
                    <p
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
                  <p
                    class="gold"
                    style="margin-top:1.25rem;"
                  >
                    {{ user.club_current_league }}
                  </p>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div class="mid5-padd">
                  <div style="height:4.0625rem;display:flex;position:relative">
                    <p class="middle5-text">
                      My team is currently active:
                    </p>
                    <img
                      v-if="user.club_current_playing_bool"
                      id="plava-kugla"
                      src="../assets/plavakugla.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <b-form-checkbox
                      switch
                      disabled
                      :checked="user.club_current_playing_bool"
                      style="padding-left:3.4375rem;"
                    /> 
                  </div>
                  <div>
                    <p
                      v-if="user.club_current_playing_bool"
                      class="gold"
                      style="margin-top:2.25rem;"
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
                      disabled
                      :checked="user.club_looking_for_new_player"
                    />                  
                  </div>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div class="mid5-padd flex-center">
                  <div class="borderbutton flex-center">
                    <img
                      src="../assets/createevent2.png"
                      alt=""
                    >
                    <p>Create an event</p>
                  </div>
                </div>    
                <div class="mid5-padd flex-center">
                  <div>
                    <div
                      style="margin-bottom:0.625rem; "
                      class="borderbutton flex-center"
                    >
                      <p
                        style="font-size:0.75rem;"
                        @click="interested_club"
                      >
                        Interested in this Club
                      </p>
                    </div>
                    <div v-if="clicked_interested4">  
                      <div
                        v-for="listclub in my_intclub_list"
                        :key="listclub.created_date"
                      >  
                        <div
                          v-if="listclub.target_uuid==user.user_uuid"
                          class="borderbutton flex-center"
                        >
                          <div style="font-size:0.75rem;">
                            <p @click="interested_club_del">
                              Remove from shortlist
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="clicked_interested3"
                      style="margin-bottom:0.625rem; "
                      class="borderbutton flex-center"
                      @click="interested_club_del"
                    >
                      <p style="font-size:0.75rem;">
                        Remove from shortlist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="middle5-right-grid">
                <div
                  class="mid5-padd flex-center"
                  style="height:10.625rem"
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
            <div v-if="activeOrg && user.rola.indexOf('ORGANIZER')!==-1">
              <div id="middle5-right-startorg">
                <p class="middle5-text">
                  My Event is currently active:
                </p>
                <div class="mid5-padd">
                  <div style="height:4.0625rem;display:flex;position:relative;">
                    <div v-if="user.organizer_current_event!=null">
                      <img
                        v-if="user.organizer_current_event.event_name!=null"
                        id="plava-kugla2"
                        src="../assets/plavakugla.png"
                        alt=""
                      >
                    </div>
                  </div>
               <!--   <v-app class="vuetify-switch2"> 
                    <v-container class="switch-container">
                      <v-switch 
                        v-model="switch5"
                        disabled
                        color="#C8A07D"
                      />
                    </v-container>  
                  </v-app>-->
                  <div>
                    <div v-if="user.organizer_current_event!=null">
                      <p
                        v-if="user.organizer_current_event.event_name!=null"
                        class="gold"
                        style="margin-top:2.25rem;padding-left:6px"
                      >
                        {{ user.organizer_current_event.event_name }}
                      </p>
                    </div>
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
                        disabled
                        :checked="user.organizer_looking_for_new_participants"
                      />                  
                    </div>
                  </div>
                </div>
                        
                <div class="mid5-padd flex-center">
                  <div
                    class="borderbutton flex-center"
                    @click="interested_event"
                  >
                    <p style="text-align:center;font-size:0.75rem">
                      Interested in this Organizer
                    </p>
                  </div>               
                </div>
              </div>
              <div
                class="mid5-padd listevent"
                style="padding:0.625rem; "
              >
                <p class="middle5-text">
                  My events:
                </p>
                <div
                  v-for="(event,index) in events"
                  :key="event.event_uuid"
                >
                  <div
                    v-if="event.organiser_uuid==user.user_uuid"
                    style="display:flex"
                  >
                    <p style="padding-right:0.5rem;margin-left:1.25rem">
                      {{ index+1 }}.
                    </p>   
                    <p class="gold-event">
                      {{ event.event_name }}
                    </p>
                  </div>  
                </div>  
              </div>
            </div>
<!--TRAINER -->
            <div
              v-if="activeTre && user.rola.indexOf('TRAINER')!==-1"
            >
              <div id="middle5-right-startorg" style="background-color: #11C6D1">
                <div class="middle5-text w700">
                    <p >Price per lesson</p> 
                </div>
                <div class="middle5-text w700" id="trainer-price-number">
                   <p v-if="price_entered">${{user.trainer_price_lesson}} /1h</p>
                </div>
              </div>
              <div class="middle5-right-grid" >
                <div class="mid5-padd " style="padding-top:2rem" >
                  <p class="middle5-text"  >
                    Looking for new students?
                  </p>
                  <div>
                    <div class="switch-style" style="padding-left:1.125rem;padding-top:0.75rem">
                      <b-form-checkbox
                        disabled
                        switch
                        :checked="user.trainer_looking_for_new_player"
                      
                      />                  
                    </div>
                  </div>
                </div>
               
                <div class="mid5-padd flex-center">
                  <div
                    class="borderbutton flex-center"
                    style="border: 1px solid #C8A07D;"
                  >
                 
                    <p >EASY PAY</p>
                  </div>
                </div>
                <!--      <div class="mid5-padd flex-center">
                                <div class="borderbutton flex-center">
                                    <p style="text-align:center">Interested in this Organizer</p>
                                </div>               
                            </div>    -->
              </div>
              <div class="middle5-right-grid" style="margin:0">
                <div class="mid5-padd">
                   <div class="middle5-text">
                    <p>Students</p> 
                   </div>
                   <div>
                     <div  class="middle5-text2" style="display:flex" v-for="(student,index) in user.trainer_list_of_students" :key="student">
                      <p style="color:#FFC796">{{index+1}}.</p>
                      <div class=" flex_space" style="padding-left:0.375rem">
                        {{student}}
                      </div>  
                      
                   </div>  
                   </div>

                </div>



                <div class="mid5-padd flex-center"
                  >
                  <div>
                    <div
                          v-if="interested_no_trainer"
                          style="margin-bottom:0.625rem; "
                          class="borderbutton flex-center"
                        >
                          <p
                            style="font-size:0.75rem;"
                            @click="interested_trainer"
                          >
                            Interested in this Trainer
                          </p>
                    </div>
                    <div v-if="clicked_interested_trainer2">  
                          <div
                            v-for="listpla in my_int_trainer_list"
                            :key="listpla.created_date"
                          >  
                            <div
                              v-if="listpla.target_uuid==user.user_uuid"
                              class="borderbutton flex-center"
                            >
                              <div style="font-size:0.75rem;">
                                <p @click="interested_trainer_del">
                                  Remove from shortlist
                                </p>
                              </div>
                            </div>
                          </div>
                    </div>
                      <div
                        v-if="clicked_interested_trainer"
                        style="margin-bottom:0.625rem; "
                        class="borderbutton flex-center"
                        @click="interested_trainer_del"
                      >
                        <p style="font-size:0.75rem;">
                          Remove from shortlist
                        </p>
                  </div>
                </div>  
                </div>
                <!--      <div class="mid5-padd flex-center">
                                <div class="borderbutton flex-center">
                                    <p style="text-align:center">Interested in this Organizer</p>
                                </div>               
                            </div>    -->
              </div>
            
               

            </div>
<!--END TRAINER-->
<!--ARBITER-->            
            <div
              v-if="activeArb && user.rola.indexOf('ARBITER')!==-1" >
              <div id="middle5-right-startorg">
                <p class="middle5-text">
                  My Event is currently active:
                </p>
                <div class="mid5-padd">
                  <div style="height:4rem;display:flex;padding-left:80%;position: relative;">
                 <img
                      v-if="user.arbiter_currently_active"
                      id="plava-kugla2"
                      src="../assets/plavakugla.png"
                      alt=""
                    >
                    </div>
                  <b-form-checkbox
                    switch
                    disabled
                    :checked="user.arbiter_currently_active"
                    style="padding-left:3.0375rem;padding-bottom: 1rem;"
                  />  
                  <!--      <v-app class="vuetify-switch2"> 
                                    <v-container class="switch-container"   >
                                        <v-switch 
                                        value=switch5
                                        color="#C8A07D"
                                        ></v-switch>
                                    </v-container>  
                                </v-app> -->
                 <div>
                   
                     <div v-if="user.arbiter_currently_active==true" style="padding-left:0.625rem;color: #FFC796;" >
                       {{user.arbiter_current_event_name}}
                     </div>
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
                        disabled
                        :checked="user.arbiter_looking_for_new_eng"
                      />                  
                    </div>
                  </div>
                </div>





                <div class="mid5-padd flex-center"
                  >
                  <div>
                    <div
                          v-if="interested_no_arbiter"
                          style="margin-bottom:0.625rem; "
                          class="borderbutton flex-center"
                        >
                          <p
                            style="font-size:0.75rem;"
                            @click="interested_arbiter"
                          >
                            Interested in this Arbiter
                          </p>
                    </div>
                    <div v-if="clicked_interested_arbiter2">  
                          <div
                            v-for="listpla in my_int_arbiter_list"
                            :key="listpla.created_date"
                          >  
                            <div
                              v-if="listpla.target_uuid==user.user_uuid"
                              class="borderbutton flex-center"
                            >
                              <div style="font-size:0.75rem;">
                                <p @click="interested_trainer_del">
                                  Remove from shortlist
                                </p>
                              </div>
                            </div>
                          </div>
                    </div>
                      <div
                        v-if="clicked_interested_arbiter"
                        style="margin-bottom:0.625rem; "
                        class="borderbutton flex-center"
                        @click="interested_arbiter_del"
                      >
                        <p style="font-size:0.75rem;">
                          Remove from shortlist
                        </p>
                  </div>
                </div>  
                </div>





                
              </div>
              <div id="middle5-right-startorg" style="margin:0">
                
              </div> 

            </div>
<!--END ARBITER -->
          </div>
        </div>
      </div>    
      <div />
    </div> 
<!--END ROLE -->









    <!--END  RIGHT PROFILE -->
  </div>
</template>
 
<script>
import SideBar from '../components/SideBar.vue'
import Searchpart from '../components/Searchpart.vue'
import ChessDiary from '../components/ChessDiary.vue'
import ChesscvPublic from '../components/ChesscvPublic.vue'
import Calendar from '../components/Calendar.vue'
//import Notification from '../utils/notification.js'

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
         activePlayer:true,
         activeClub:false,
         activeOrg:false,
         activeArb:false,
         activeTre:false,
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
         my_int_trainer_list:[],
         my_int_arbiter_list:[],
         listpla:{target_uuid:''},
         clicked_interested:false,
         clicked_interested2:true,
         clicked_interested4:true,
         clicked_interested3:false,
         clicked_interested_trainer:false,
         clicked_interested_trainer2:true,
         clicked_interested_arbiter:false,
         clicked_interested_arbiter2:true,
         interested_no:true,
         interested_no_trainer:true,
         interested_no_arbiter:true,
         notif_arr : [],
         connected:false,
         my_connection_list:[],
         price_entered:true
         
         
      }
},
   
//------------------------------MOUNTED-------------------------------//



mounted(){
   this.$store.dispatch('getNotification');
   fetch('https://api.outpostchess.com/api/v2/organiser_events', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.events=data)
        //.then(data => console.log('events',data))       
            

  fetch( `https://api.outpostchess.com/api/v2/public_user_info/${this.idt} `, {
  method:'GET',
  headers: {
    'Content-Type': 'application/json'
  }
  }, 
)
.then(response => response.json())
.then(data => this.user=data)
//.then(data => console.log('public',data))  

 fetch('https://api.outpostchess.com/api/v2/current_user_info', {
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
fetch('https://api.outpostchess.com/api/v2/interested_in_player', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_interested_list=data)   
       // .then(data => console.log('my_list',data))

fetch('https://api.outpostchess.com/api/v2/interested_in_arbiter', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_int_arbiter_list=data)  
        .then(data => console.log('my_int_arbiter_list',data))  

fetch('https://api.outpostchess.com/api/v2/interested_in_trainer', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_int_trainer_list=data)  
        .then(data => console.log('my_int_trainer_list',data))  

fetch('https://api.outpostchess.com/api/v2/interested_in_club', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_intclub_list=data)   
     //   .then(data => console.log('my_clublist',data))      
fetch('https://api.outpostchess.com/api/v2/connection_list',{
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
                },		
               
            })
        .then(response => response.json())
        .then(data => this.my_connection_list=data)   
       .then(data => console.log('my_connection_list',data))      

},



//--------------METHODS----------------------//
 created() {
            this.$socket.on( 'tb_notification' , this.receiveNotif )
            this.idt = this.$route.params.id;
            
        },

methods:{
   
   receiveNotif(payload){
              //console.log('received a notif', payload)
              //this.notif_arr=[payload,...this.notif_arr]
              //console.log(this.$store.state.counter)
              this.$store.commit('receiveNotif',payload)
         
        }  ,

   /*INTERESTED CLUB*/       

    interested_club_del(){
        this.clicked_interested4=false;
        this.clicked_interested3=false;
         fetch(`https://api.outpostchess.com/api/v2/interested_in_club/${this.idt} `, {
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
    interested_club(){
        this.clicked_interested4=false;
        this.clicked_interested3=true;
          fetch(`https://api.outpostchess.com/api/v2/interested_in_club/${this.idt} `, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                           "authorization":`Bearer ${localStorage.getItem('token')}`
                      },
                  }).then(() => {
                 // window.location.reload();
              })
    },
  /* INTERESTED PLAYER */

    interested_player(){
           this.interested_no=false;
           this.clicked_interested=true;
           this.clicked_interested2=false;
           fetch(`https://api.outpostchess.com/api/v2/interested_in_player/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
         
            
           
    },
     interested_player_del:function(){
           this.interested_no=true;
           this.clicked_interested=false;
           this.clicked_interested2=false;
           fetch(`https://api.outpostchess.com/api/v2/interested_in_player/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
            
    },
   /* INTERESTED ARBITER*/

    interested_arbiter(){
           this.interested_no_arbiter=false;
           this.clicked_interested_arbiter=true;
           this.clicked_interested_arbiter2=false;
           fetch(`https://api.outpostchess.com/api/v2/interested_in_arbiter/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
         
            
           
    },
     interested_arbiter_del:function(){
           this.interested_no_arbiter=true;
           this.clicked_interested_arbiter=false;
           this.clicked_interested_arbiter2=false;
           fetch(`https://api.outpostchess.com/api/v2/interested_in_arbiter/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
            
    },

    /* INTERESTED TRAINER */
    interested_trainer(){
           this.interested_no_trainer=false;
           this.clicked_interested_trainer=true;
           this.clicked_interested_trainer2=false;
           fetch(`https://api.outpostchess.com/api/v2/interested_in_trainer/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
         
            
           
    },
     interested_trainer_del:function(){
           this.interested_no_trainer=true;
           this.clicked_interested_trainer=false;
           this.clicked_interested_trainer2=false;
           fetch(`https://api.outpostchess.com/api/v2/interested_in_trainer/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
            
    },
  /* INTERESTED EVENT */

    interested_event:function(){
           fetch(`https://api.outpostchess.com/api/v2/interested_in_event/${this.idt} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
    },
   
    interested_event_del:function(){
           fetch(`https://api.outpostchess.com/api/v2/interested_in_event/${this.idt} `, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "authorization":`Bearer ${localStorage.getItem('token')}`
                },
            })
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
     role_indicator:function(rola){
      this.activePlayer=false;this.activeClub=false; this.activeOrg=false; 
      this.activeTre=false;  this.activeArb=false;this.activeOth=false;
      this.rolecolor1=false; this.rolecolor2=false;this.rolecolor3=false;
      this.rolecolor4=false;this.rolecolor5=false;this.rolecolor6=false; 
      switch(rola){
        case 1: this.activePlayer=true;this.rolecolor1=true;break
        case 2: this.activeClub=true;this.rolecolor2=true;break
        case 3: this.activeOrg=true;this.rolecolor3=true;break
        case 4: this.activeTre=true;this.rolecolor5=true;break
        case 5: this.activeArb=true;this.rolecolor4=true;break
        case 6: this.activeOth=true;this.rolecolor6=true;break
      }
    },
    

    connection_people:function(){
      
      this.connected=true
      console.log(this.connected)
    fetch( ` https://api.outpostchess.com/api/v2/connection_initiate/${this.idt} `, {
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
       this.connected=false
    fetch( ` https://api.outpostchess.com/api/v2/connection_initiator_delete/${this.idt} `, {
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
    grid-template-columns: 16.1875rem auto;
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
  padding:4.375rem 0.625rem 3.125rem 0.625rem;
  font-size: 0.875em;
}




   
/*--------------------------MIDLE1-------------------------------------- */


/*--------------------------MIDLE2-------------------------------------- */
#middle2{
    height: 8.75rem;
    background-color: #202122;
    display: grid;
    padding:0.5rem 1rem 0.5rem 1.5625rem;
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
   margin-bottom:1rem;
}

#middle2-1{
    padding-left:2.5rem;
    padding-top:0.875em ;
}
.padd-text{
    padding-left:1rem;
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
  font-size: 0.875em;
  width: 8.125rem;
  height: 2.875rem;
  margin-right: 1rem;;
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
    font-size: 0.875em;
}
.titles{
    cursor: pointer;
    outline: #C8A07D solid 1px;
    border-radius: 1.25rem;
    width:5.375rem;
    height: 2rem;
    margin-left:1.25rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF;
    font-size: 0.875em;
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
    font-size: 0.875em;
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
    font-size: 0.875em;
    
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
    font-size: 0.875em;
    font-weight: 500;
}

.text-ratings{
    color:#C8A07D;
    padding-right:0.625rem
}
/*--------------------------MIDDLE4-------------------------------------- */
#middle4{
    height: 4rem;
  
     background-color: #202122;
     display:grid;
     grid-template-columns: 55% 45%;
}
.middle4-1  {
   color:#6F7381;
   padding:0 0.625rem 0 0.625rem;
   font-size:0.875em;
}
.middle4-1:hover{
    cursor: pointer;
    text-decoration: none;
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
 
 .mid5-padd{
     padding:0.625rem;
     background-color:#202122;
     }

#list-event{
   padding-left:5%;
   padding-top:1rem;
}

 
.engage-grid{
    display:grid;
    grid-template-columns: 70% 30%;
}
.engage-stikl{
    height: 0.875em;
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
    font-size: 0.875em;
    margin-top:10%;
    padding-left:1.25rem;
}
.gold2{
    color:#C8A07D;
    font-size: 0.875em;
    padding-left:1.25rem;
}
.middle5-text{
    padding:1rem 0 5px  1.25rem;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.3125rem;
    letter-spacing: 0.03rem;
}
#form-middle5{
    color:#c8a07d;
    text-align: center;
    padding-top:1.875rem;
}

.switch-style{
    padding-left:1rem;
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

/**side-right */


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
    font-size: 0.875em;
    background-color:  #202122;
}



/* CLUB */
.vuetify-switch{
    height: 0px;
    position:relative;
    bottom:4.0625rem;
    left:0.625rem;  
}

.switch-container{
    padding-left: 1.25rem ;
    margin:0;
}
.borderbutton{
    width: 12rem;
    height: 2.75rem;
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
    font-size:0.875em;
    padding:0 5px 0 5px
}
.slider{
    display:flex;
    margin: auto;
    width:11.25rem
}
.slider>p{
    text-align: center;
}
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
    position:absolute;
    height: 8.25em;
    top:-5.1rem;
    right:-2.8rem
}
#plava-kugla{
   position: absolute;
   top:-1.7rem;
   right:-1.9rem;
}
.vuetify-switch2{
    height: 0px;
    position:relative;
    bottom:3.4375rem;
    right:1rem;
}
.gold-event{
   color:#C8A07D;
   padding-right:4px;
}
/*ARBITER */
.rotate{transform: rotate(-45deg);
    position:relative;
    top:18.75rem;
    font-size:1.625rem;
    font-weight: 600;
    letter-spacing: 1rem;}

/*DROPDOWN */
/*.dropbtn {
  background-color: #202122;
  color: white;
  padding: 0.5rem 1.25rem;
  font-size: 0.875em;
  border: 0.5px solid #5C5E64;
  box-sizing: border-box;
  margin-left:1.25rem;
  margin-top:0.625rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #202122;
  min-width: 10rem;
  box-shadow: 0px 0.5rem 1rem 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content p {
  color: white;
  padding: 0.625rem 0.625rem;
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

/* TRAINER*/

#trainer-library{
  width: 14rem;
}
#trainer-price-number{
  padding-top:4rem;
  font-size: 2.25rem;
}
.w700{
  font-weight: 700;
}

@media only screen and (max-width: 1500px) and (min-width: 500px) {
.right-profile{
    display:grid;
    grid-template-columns: 3% 94% 3%;
 
}
.profile{
    display:grid;
    grid-template-columns: 12.5rem auto;
    font-size:0.875em;
}  

}
</style>