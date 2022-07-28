<template>
    <div class="parent">
        <SideBar />
        <div class="main-div">
            <div class="chat">
                <ChatInnerHeader :user_id="storage_id" :dataProp="storage_id" />
                <div class="user-details">
                    <div class="first-div">
                        <p class="details-title">Title:</p>
                        <div
                            v-if="chat_user.titula_player !== null && chat_user.rola.indexOf('PLAYER') !== -1"
                            class="pill pill-small"
                        >
                            {{ chat_user.titula_player_details.titula_short_name }}
                        </div>

                        <div
                            v-if="chat_user.titula_organizer !== null && chat_user.rola.indexOf('ORGANIZER') !== -1"
                            class="pill pill-small"
                        >
                            IO 
                        </div>
                        <div
                            v-if="chat_user.titula_trainer !== null && chat_user.rola.indexOf('TRAINER') !== -1"
                            class="pill pill-small"
                        >
                            {{ chat_user.titula_trainer_details.titula_short_name }}
                        </div>
                        <div
                            v-if="chat_user.titula_arbiter !== null && chat_user.rola.indexOf('ARBITER') !== -1"
                            class="pill pill-small"
                        >
                            {{ chat_user.titula_arbiter_details.titula_short_name }}
                        </div>
                    </div>
                    <div class="second-div">
                        <p class="details-title">Rating :</p>
                        <div class="pill pill-long">
                            <p style="min-width: 7rem"><span>Standard:</span> {{ chat_user.rating_standard }}</p>
                        </div>
                        <div class="pill pill-long">
                            <p><span>Rapid :</span> {{ chat_user.rating_rapid }}</p>
                        </div>
                        <div class="pill pill-long">
                            <p><span>Blitz :</span> {{ chat_user.rating_blitz }}</p>
                        </div>
                    </div>
                </div>

                <div  class="chat-overflow" ref="messagesContainer">
                   
                        <div   v-for="message in inner_messages"  :key="message.msg_id">
                            <OneMessage
                                v-if="message.from_obj.user_uuid == storage_id"
                                :user="chat_user"
                                :message="message"
                            />
                            <OneMessage v-else message-type="sent" :user="chat_user" :message="message"  />
                            <!--  
                          <OneMessage :message-type="received" />-->
                        </div>
                    
                    
                      
                </div>
            <!--      <div v-else class="chat-overflow" ref="messagesContainer">
                    <div v-for="message in inner_messages2"  :key="message.msg_id">
                        <OneMessage
                            v-if="message.from_obj.user_uuid == storage_id"
                            :user="chat_user"
                            :message="message"
                        />
                        <OneMessage v-else message-type="sent" :user="chat_user" :message="message"  />
                        
               <OneMessage :message-type="received" />
                    </div>
                </div>-->
            </div>
            <SendMessage />
        </div>
        <ChatInnerContact :user="chat_user" @update-cart="updateCart" />
    </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import ChatInnerHeader from "@/components/Chatroom/ChatInnerHeader";
import ChatInnerContact from "@/components/Chatroom/ChatInnerContact";
import OneMessage from "@/components/Chatroom/OneMessage";
import SendMessage from "@/components/Chatroom/SendMessage";

export default {
    name: "ChatInner",
    components: { SendMessage, OneMessage, ChatInnerContact, ChatInnerHeader, SideBar },
    props: ["user_uuid"],
    data() {
        return {
            chat_user: { rola: [] },
            storage_id: "",
            inner_messages: "",
            messageType: {
                type: String,
                required: true,

            },
        };
    },
    watch: {
       inner_messages2(){
        this.inner_messages=[ ...this.inner_messages,this.$store.state.message]
        console.log("opasno",this.inner_messages)
       }
       
         
       
    },
    created() {
        //console.log("store",this.$store.state.message_arr.length)
       // console.log("store",this.$store.state.message_arr)
        this.storage_id = window.location.href.split("/").pop();
        fetch(process.env.VUE_APP_URL + `/public_user_info/${this.storage_id} `, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => (this.chat_user = data));
        // .then(data => console.log('user_data',data));

        fetch(process.env.VUE_APP_URL + `/message/${this.storage_id} `, {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then(response => response.json())
            .then(data => (this.inner_messages = data))
            .then(data => console.log("messages", data))
    },
    mounted() {
        this.scrollToEnd();
        
        this.storage_id=window.location.href.split("/").pop();
        this.$store.dispatch("getMessage",this.storage_id);
     
    },
    updated() {
        this.scrollToEnd();
    },

    

    methods: { 
        receiveMessage(payload) {
            this.$store.commit("receiveMessage", payload);
        },
        scrollToEnd() {
            var content = this.$refs.messagesContainer;
            content.scrollTop = content.scrollHeight;
           // console.log("konzola",this.$store.state.message_arr)
        },
        
        updateCart(e) {
            this.storage_id = e;
            fetch(process.env.VUE_APP_URL + `/public_user_info/${this.storage_id} `, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(data => (this.chat_user = data));
            // .then(data => console.log('user_data',data));

            fetch(process.env.VUE_APP_URL + `/message/${this.storage_id} `, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then(response => response.json())
                .then(data => (this.inner_messages = data))
                .then(data => console.log("messages", data))
                
        }, 
        
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.parent {
    display: flex;
    background-color: #171819;
    justify-content: space-between;
    overflow-y: clip;
    height: 100vh;
}

.main-div {
    width: 61rem;
    margin-left: auto;
    margin-right: auto;
}

.chat {
    height: 80vh;
}

.user-details {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 2.938rem;
    margin-top: 2.438rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-details div {
    display: flex;
    align-items: center;
}

.details-title {
    font-size: 1rem;
    color: #6f7381;
    font-weight: 500;
    margin-right: 2rem;
}

.pill {
    color: white;
    padding: 0.438rem 0.75rem;
    border: 1px solid #c8a07d;
    border-radius: 20px;
    margin-right: 0.875rem;
    width: 8.5rem;
    display: flex;
    justify-content: center;
}

.pill-long span {
    color: #c8a07d;
}

.pill-small {
    width: 4.25rem !important;
    display: flex;
    justify-content: center;
}
.chat-overflow {
    overflow-y: scroll;
    height: 47vh;
}

@media screen and (max-width: 1440px) {
    .main-div {
        width: 60rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    .pill {
        width: 8.571rem;
    }

    .chat {
        height: 78vh;
    }

    .details-title {
        margin-right: 0.5rem;
    }
}

@media screen and (max-width: 1366px) {
    .chat {
        height: 75vh;
    }

    .details-title {
        margin-right: 0.5rem;
    }

    .pill-small {
        width: 3.25rem;
    }
}

@media screen and (max-width: 1280px) {
    .parent {
        justify-content: space-around;
    }

    .main-div {
        width: 60rem;
        margin-left: 1rem;
    }
}

@media screen and (max-width: 1024px) {
    .main-div {
        width: 65rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .parent {
        justify-content: center;
    }
}

@media screen and (max-width: 768px) {
    .main-div {
        margin-right: 1rem;
    }

    .pill {
        width: 10rem;
    }
}

@media screen and (max-width: 640px) {
    .main-div {
        width: 56rem;
    }

    .user-details {
        overflow-x: scroll;
        margin-top: 3.438rem;
    }

    .user-details div {
        width: max-content;
    }

    .details-title {
        flex: 0 0 5rem;
    }

    .chat {
        width: 100%;
        overflow-x: hidden;
        height: 84vh;
    }

    .pill {
        width: 10rem;
    }

    .pill-small {
        width: 3.25rem;
        flex: 0 0 3.25rem;
    }

    .pill-long {
        display: flex;
        justify-content: center;
        width: 9rem;
        flex: 0 0 9rem;
    }
}

@media screen and (max-width: 425px) {
    .main-div {
        width: 100%;
        margin-left: 0;
    }

    .user-details {
        width: auto;
    }

    .second-div {
        padding-right: 3rem;
        margin-right: 3rem;
    }
}
</style>
