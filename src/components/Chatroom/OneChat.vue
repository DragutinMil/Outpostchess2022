<template>
    <router-link :to="{ name: 'ChatInner', params: { id: contact_list.user_uuid } }">
        <div>
            <div class="one-chat" :class="[messageType === 'seen' ? '' : 'message-not-seen']">
                <img class="new-message-icon" src="../../assets/koverta-new.svg" alt="new message" />
                <div class="divider" />
                <div class="user-profile-avatar">{{ contact_list.from_obj.initials }} </div>
                <p class="user-name">{{ contact_list.from_obj.name_first }} {{ contact_list.from_obj.name_last }}</p>
                <p class="short-message">{{ message_result }}</p>
                <div class="message-time">
                    <!--          {{ contact_list.last_message_date.slice(8, 10) }}.{{ contact_list.last_message_date.slice(5, 7) }}.{{
                                        contact_list.last_message_date.slice(0, 4)
                                    }}. -->
                    {{ this.hour }}:{{ this.minute }}
                    <p class="day_part" v-if="am_pm_hours">PM </p>
                    <p class="day_part" v-else>AM</p>
                </div>

                <img class="invitation-icon" src="../../assets/invitation-icon.svg" alt="invitation icon" />
                <div class="short-message-mobile">
                    <p class="short-message">{{ contact_list.last_message }}</p>
                </div>
            </div>
            <!--      <div class="one-chat">-->
            <!--        <img-->
            <!--            class="new-message-icon"-->
            <!--            src="../../assets/koverta-new.svg"-->
            <!--            alt="new message"-->
            <!--        >-->
            <!--        <div class="divider"/>-->
            <!--        <div class="user-profile-avatar">-->
            <!--          BR-->
            <!--        </div>-->
            <!--        <p class="user-name">-->
            <!--          Brodie Richards-->
            <!--        </p>-->
            <!--        <p class="short-message">-->
            <!--          Hi there, Brodie-->
            <!--          My name is Melissa from...-->
            <!--        </p>-->
            <!--        <p class="message-time">-->
            <!--          9 : 30 PM-->
            <!--        </p>-->
            <!--        <img class="invitation-icon"-->
            <!--             src="../../assets/invitation-icon.svg"-->
            <!--             alt="invitation icon"-->
            <!--        >-->
            <!--      </div>-->
        </div>
    </router-link>
</template>

<script>
export default {
    name: "OneChat",
    props: ["contact_list", "messageType"],
    // props: {
    //     messageType: {
    //         type: String,
    //         required: true,
    //     },
    //},
    data() {
        return {
            hour: "",
            minute: "",
            am_pm_hours: false,
            message_result: "",
        };
    },
    mounted() {
        // this.hour = Number(this.contact_list.last_message_date.slice(11, 13)) + 2;
        this.hour = this.contact_list.last_message_date.slice(11, 13);
        this.minute = this.contact_list.last_message_date.slice(14, 16);
        if (this.hour > 12 && this.hour > 21) {
            this.hour = this.hour - 12;
            this.am_pm_hours = true;
        } else if (this.hour > 12 && this.hour < 22) {
            this.hour = 0 + (this.hour - 12).toString();
            this.am_pm_hours = true;
        }

        if (this.contact_list.last_message.length > 39) {
            this.message_result = this.contact_list.last_message.substring(0, 39) + "...";
        } else {
            this.message_result = this.contact_list.last_message;
        }
    },
       
};
</script>

<style scoped>
a {
    text-decoration: none;
}

.one-chat {
    cursor: pointer;
    display: flex;
    width: 92%;
    height: 3.75rem;
    margin-inline: auto;
    align-items: center;
    background-color: #202122;
    margin-block: 1.875rem;
}

.message-not-seen {
    background-color: #c8a07d;
}

.new-message-icon {
    margin-left: 1.875rem;
}

.divider {
    height: 1.563rem;
    width: 1px;
    background-color: white;
    margin-left: 2.188rem;
    margin-right: 2.75rem;
}

.user-profile-avatar {
    width: 2.75rem;
    height: 2.75rem;
    color: rgba(255, 255, 255, 0.7);
    background-color: #513c2a;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3.75rem;
}

.user-name {
    font-weight: 600;
    margin: auto 0;
    text-align: left;
    width: 20rem;
}

.message-time {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    font-family: "Red Hat Display", sans-serif;
    font-weight: bold;
    color: white;
    width: 4rem;
}

.short-message {
    text-align: left !important;
    margin: 0;
    padding: 0;
    width: 10.938rem;
    margin-right: 14rem;
    font-weight: 600;
}

.message-time {
    margin-right: 18.5rem;
}

.short-message-mobile {
    display: none;
}
.day_part {
    margin: auto;
    padding-left: 0.75rem;
    width: 1.5rem;
}

@media screen and (max-width: 1680px) {
    .divider {
        margin-right: 5rem;
    }

    .user-name {
        width: 9rem;
        margin-right: 6rem;
    }

    .short-message {
        margin-right: 9rem;
    }

    .message-time {
        margin-right: 15.5rem;
    }
}

@media only screen and (max-width: 1440px) {
    .divider {
        margin-right: 3.75rem;
    }

    .user-profile-avatar {
        width: 3rem;
        max-height: 4.75rem;
        margin-right: 3rem;
    }

    .user-name {
        margin-right: 7rem;
        width: 9rem;
    }

    .short-message {
        width: 13.938rem;
        margin-right: 5.5rem;
    }

    .message-time {
        margin-right: 14rem;
    }
}

@media only screen and (max-width: 1366px) {
    .user-name {
        margin-right: 6rem;
    }

    .short-message {
        margin-right: 4.5rem;
    }

    .user-profile-avatar {
        margin-right: 2rem;
    }

    .message-time {
        margin-right: 13rem;
    }
}

@media only screen and (max-width: 1280px) {
    .divider {
        margin-right: 2.75rem;
    }

    .user-name {
        width: 7.5rem;
        margin-right: 5.5rem;
    }

    .short-message {
        margin-right: 3rem;
    }

    .message-time {
        margin-right: 12rem;
    }
}

@media only screen and (max-width: 1024px) {
    .user-name {
        margin-right: 5rem;
    }

    .short-message {
        margin-right: 2.5rem;
    }

    .message-time {
        margin-right: 11.5rem;
    }
}

@media only screen and (max-width: 768px) {
    .user-name {
        margin-right: 0;
        width: 9rem;
    }

    .short-message {
        margin-right: 2.5rem;
    }

    .message-time {
        margin-right: 11.5rem;
    }
}

@media only screen and (max-width: 640px) {
    .new-message-icon,
    .divider {
        display: none;
    }

    .one-chat {
        width: 100%;
        flex-wrap: wrap;
        height: 7.25rem;
        padding-top: 0.625rem;
        padding-bottom: 1.153rem;
        justify-content: center;
    }

    .user-profile-avatar {
        margin-right: 1.341rem;
    }

    .user-name {
        width: 8rem;
    }

    .short-message {
        display: none;
    }

    .short-message-mobile {
        display: block;
        margin-right: 12rem;
        padding-bottom: 1.153rem;
    }

    .short-message-mobile .short-message {
        display: block;
        margin-right: 0;
    }

    .invitation-icon {
        margin-right: 5rem;
    }
}

@media only screen and (max-width: 425px) {
    .user-profile-avatar {
        margin-right: 1.341rem;
    }

    .short-message-mobile {
        margin-right: 1rem;
    }

    .invitation-icon {
        margin-right: 1rem;
    }

    .user-name {
        margin-right: 0;
    }

    .message-time {
        margin-right: 3rem;
    }
}

@media only screen and (max-width: 375px) {
    .user-profile-avatar {
        margin-right: 0.5rem;
    }

    .short-message-mobile {
        margin-right: 3rem;
    }

    .invitation-icon {
        margin-right: 2rem;
    }

    .user-name {
        margin-right: 0;
    }

    .message-time {
        margin-right: 2rem;
    }
}

@media only screen and (max-width: 320px) {
    .user-profile-avatar {
        display: none;
    }

    .short-message-mobile {
        margin-right: 4rem;
        margin-top: 1rem;
    }

    .invitation-icon {
        margin-right: 2rem;
    }

    .message-time {
        margin-right: 2rem;
    }
}
</style>
