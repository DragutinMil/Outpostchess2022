<template>
    <div class="contact">
        <p class="header">CONTACTS</p>
        <div class="divider"></div>
        <div class="search">
            <input type="search" name="" class="search-profile" placeholder="Go to search..." />
        </div>
        
            <div v-for="message_contact in chat_inner_contact_list" :key="message_contact.conv_uuid">
               <div @click="changeChat(message_contact.user_uuid)">
                <div class="divider"></div>
                <div class="one-contact">
                    <div class="user-profile-avatar">{{message_contact.from_obj.initials}}</div>
                    <div class="user-name">
                        <p>{{message_contact.from_obj.name_first}} {{message_contact.from_obj.name_last}}</p>
                    </div>
                    <div class="user-country">
                        <!--<p>{{user.federation}}</p>  -->
                    </div>
                    <img src="../../assets/unopened-message-icon.svg" alt="unopened message icon" />
                </div>
              </div> 
            </div>
        
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
    name: "ChatInnerContact",
    props:['user'],
    data() {
        return {
            chat_inner_contact_list:[],
        };
    },
    mounted() {
    //    this.storage_id= window.location.href.split("/").pop();
        fetch(process.env.VUE_APP_URL + "/message", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(response => response.json())
            .then(data => (this.chat_inner_contact_list = data))
    },
    methods:{
          changeChat:function(e){
            if(e!== window.location.href.split("/").pop()){
            this.$router.push( `/chatinner/${e}`)}
            this.$emit('update-cart',e)
            
          }}
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

p {
    font-size: 0.875rem;
    line-height: 1.158rem;
}

.search-profile {
    border: 1px solid #393939;
    box-sizing: border-box;
    border-radius: 1.25rem;
    background-color: #1b1c1d;
    display: flex;
    height: 2.0625rem;
    background-image: url("../../assets/search_24px.png");
    background-repeat: no-repeat;
    background-position-x: 1.375rem;
    background-position-y: 0.375rem;
    padding-left: 3.75rem;
    font-size: 0.875rem;
    color: #c7c9d0;
    cursor: pointer;
    width: 16.875rem;
}

.contact {
    width: 23.188rem;
    background-color: #202122;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}

.header {
    color: #6f7381;
    margin-top: 3rem;
    margin-left: 3.5rem;
    padding-bottom: 2.438rem;
    width: fit-content;
}

.divider {
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.2);
}

.search {
    margin-top: 2.188rem;
    margin-left: 1.75rem;
    margin-bottom: 2.188rem;
}

.user-profile-avatar {
    width: 2.75rem;
    height: 2.75rem;
    color: rgba(255, 255, 255, 0.7);
    background-color: #6f7381;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.one-contact {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-block: 1.75rem;
    cursor:pointer;
}

.one-contact p {
    color: white;
}

@media screen and (max-width: 1440px) {
    .contact {
        width: 23rem;
    }
}

@media screen and (max-width: 1280px) {
    .contact {
        display: none;
    }
}
</style>
