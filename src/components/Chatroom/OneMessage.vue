<template>
    <div>
        <div class="message" :class="[messageType === 'sent' && 'sent']">
            <!--:class="[messageType === 'sent' && 'sent'] "-->
            <div>
                <div class="top">
                    <div class="left">
                        <div class="user-avatar" :class="[messageType === 'sent' && 'my-avatar']">
                            {{ message.from_obj.name_first.charAt(0) }} {{ message.from_obj.name_last.charAt(0) }}
                        </div>
                        <!--:class="[messageType === 'sent' && 'my-avatar']"-->
                        <p class="receiver-name">{{message.from_obj.name_first}} {{ message.from_obj.name_last }}</p>
                    </div>
                    <div class="message-time" :class="[messageType === 'sent' ? 'time-sent' : 'time-received']">
                        <!--:class="[messageType === 'sent' ? 'time-sent' : 'time-received']"-->

                        <p class="day_part" v-if="Number(message.created_date.slice(11, 13)) + 2 > 12">
                            {{ Number(message.created_date.slice(11, 13)) + 2 }}
                            {{ message.created_date.slice(14, 16) }} PM  
                        </p>
                        <p class="day_part" v-else>
                            {{ Number(message.created_date.slice(11, 13)) + 2 }}:
                            {{ message.created_date.slice(14, 16) }} AM 
                        </p>
                    </div>
                </div>
                <div class="bottom">
                    <p>{{ message.msg_text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OneMessage",
    props: {
        user: [],
        messageType: {
            type: String,
            // required: true,
        },
        message: [],
    },
    data() {
        return {
            storage_id: "",
            first_initial: "",
            second_initisal: "",
            am_pm_hours: false,
        };
    },
     created() {
        this.$socket.on("tb_notification", this.receiveMessage);
     }
     
     
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.message {
    margin-block: 0.688rem;
    background-color: #202122;
    padding: 0.625rem 1.375rem 1.875rem 1.313rem;
}

.sent {
    background-color: #202122;
    width: 41.813rem;
    margin-left: auto;
}

.time-sent {
    color: white !important;
}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left {
    display: flex;
    align-items: center;
}

.user-avatar {
    width: 2.375rem;
    height: 2.375rem;
    background-color: #6f7381;
    border-radius: 100%;
    margin-right: 1.438rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.receiver-name {
    font-weight: 700;
    font-size: 1rem;
    color: white;
}

.message-time {
    color: #6f7381;
}

.bottom {
    color: white;
    text-align: start;
    width: 32.563rem;
    margin-top: 0.875rem;
    margin-left: 4rem;
}

.bottom p {
    width: 32.563rem;
}

@media screen and (max-width: 640px) {
    .message {
        background-color: unset;
        width: 25.333rem;
    }

    .message .bottom {
        width: 100%;
    }

    .message .bottom p {
        width: 21.417rem;
        margin-right: 0;
    }
}

@media screen and (max-width: 425px) {
    .my-avatar {
        display: none;
    }

    .message {
        margin-block: 1rem;
        padding-bottom: 1rem;
    }

    .message .bottom p {
        width: 15.417rem;
        margin-right: 0;
    }

    .top {
        flex-direction: column;
        align-items: start;
    }

    .sent {
        padding-right: 0;
        width: 23rem;
    }

    .my-top,
    .time-received {
        margin-left: 4rem;
    }
}

@media screen and (max-width: 320px) {
    .message .bottom p {
        width: 13.417rem;
    }
}
</style>
