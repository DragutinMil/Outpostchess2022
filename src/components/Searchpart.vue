<template>
    <div id="middle1">
        <input type="search" name="" class="search-profile" placeholder="Go to search..." @click="go_to_search" />
        <div>
            <p v-if="$store.state.counterNot != ''" id="notification_counter" class="flex-center">
                {{ $store.state.counterNot }}
            </p>
            <p />
        </div>
        <div class="dropdown-notification">
            <a id="a-middle">
                <img
                    id="middle1-img"
                    src="../assets/notification_important_24px@2x.png"
                    alt=""
                    @click="see_notification"
            /></a>
            <div v-if="drop_not" class="dropdown-content">
                <notif-list v-for="notif in notif_arr" :key="notif.n_id" :notif="notif" />
                <a class="see_notifications" @click="All_notifications">See all notifications </a>
            </div>
        </div>
        <p style="color: white; padding-left: 1.25rem">
            <!--  {{ $store.state.notif_arr }} -->
        </p>
    </div>
</template>

<script>
import NotifList from "./NotifList.vue";

export default {
    name: "Searchpart",
    components: { NotifList },
    props: [],
    data() {
        return {
            lastId: null,
            drop_not: false,
            text_interest: "",
        };
    },
    computed: {
        notif_arr() {
            return this.$store.state.notif_arr;
        },
    },

    mounted() {
        this.$store.dispatch("getNotification");
    },
    created() {
        this.$socket.on("tb_notification", this.receiveNotif);
    },

    methods: {
        All_notifications: function () {
            this.$router.push("../notifications");
        },
        receiveNotif(payload) {
            //console.log('received a notif', payload)
            //this.notif_arr=[payload,...this.notif_arr]
            //console.log(this.notif_arr)
            console.log(payload);
            this.$store.commit("receiveNotif", payload);
        },
        go_to_search: function () {
            this.$router.push("../intsearch");
        },
        see_notification() {
            this.drop_not = !this.drop_not;
            if (this.$store.state.notif_arr != "") {
                this.lastId = this.$store.state.notif_arr[0].n_id;
                this.$store.commit("seen_notification");
                console.log(this.$store.state.notif_arr);
                fetch(`https://app.outpostchess.com/api/v2/notification_last_read_set/${this.lastId} `, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
            }
        },
    },
};
</script>

<style>
a {
    cursor: pointer;
}

.search-profile {
    border: 1px solid #393939;
    box-sizing: border-box;
    border-radius: 1.25rem;
    background-color: #1b1c1d;
    display: flex;
    height: 2.0625rem;
    background-image: url(../assets/search_24px.png);
    background-repeat: no-repeat;
    background-position-x: 1.375rem;
    background-position-y: 0.375rem;
    padding-left: 3.75rem;
    font-size: 0.875rem;
    color: #c7c9d0;
    cursor: pointer;
    width: 16.875rem;
}

#middle1 {
    display: grid;
    grid-template-columns: 90% 5% 5%;
    margin-top: 3.125rem;
}

#middle1-img {
    height: 1.5625rem;
}

#a-middle {
    border-radius: 50%;
    height: 2.8125rem;
    width: 2.8125rem;
    background-color: #202122;
    display: flex;
    justify-content: center;
    align-items: center;
}

#a-middle:hover {
    opacity: 0.8;
}

#notification_counter {
    color: white;
    position: relative;
    left: 3.125rem;
    border: 1px solid #11c6d1;
    border-radius: 3.125rem;
    background-color: #11c6d1;
    height: 1.25rem;
    width: 1.25rem;
    z-index: 10;
}

.dropdown-content a:hover {
    background: #2c3e50;
    color: white;
}

.dropdown-notification {
    position: relative;
    display: block;
}

.dropdown-content {
    text-decoration: none;
    position: absolute;
    display: block;
    z-index: 1;
    float: left;
    right: 1.5625rem;
    width: 18.75rem;
    border: 1px solid #ffffff;
}

.dropdown-content a {
    display: block;
    float: left;
    color: white;
    padding: 0 0.9375rem;
    line-height: 1.875rem;
    font-size: 0.875rem;
    background: #202122;
    transition: 0.5s;
    width: 100%;
    text-align: left;
}

.see_notifications {
    color: #ffffff;
    cursor: pointer;
}

@media screen and (max-width: 640px) {
    #middle1 {
        display: none;
    }
}
</style>
