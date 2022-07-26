<template>
    <div class="header">
        <div class="left">
            <div class="upload-pic">
                <img
                    v-if="user.profile.file_url == null"
                    id="profile-pic"
                    src="https://outpostchess.fra1.digitaloceanspaces.com/2bf139b2-7074-4fd4-8377-58efead41bf0.png"
                    alt=""
                />
                <img v-else id="profile-pic" :src="user.profile.file_url" alt="" />
            </div>
            <div class="left-text">
                <h3 class="user-name">{{ user.name_first }} {{ user.name_last }}</h3>
                <div class="user-row-one">
                    <div class="location">
                        <img src="../../assets/location-icon.svg" alt="location icon" />
                        <p>{{ user.city }}</p>
                    </div>
                    <div class="user-age">
                        <p>{{ user.godine }} Years old</p>
                    </div>
                    <div class="gender">
                        <p>{{ user.sex }}</p>
                    </div>
                </div>
                <div class="user-row-two">
                    <div class="federation">
                        <p>Federation: {{ user.federation }}</p>
                        <!--     <img :src=user.federation_details.flag alt="flag" /> -->
                    </div>
                    <div class="fide-id">
                        <p>Fide ID :</p>
                        <p>{{ user.fide_id }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <button>Connect</button>
            <img src="../../assets/envelope-with-a-plus.svg" alt="new message icon" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatInnerHeader",
    props: ["dataProp", "user_id"],
    data() {
        return {
            user: { profile: { file_url: "" }, storage_id: "" },
        };
    },
    mounted() {
        (this.storage_id = window.location.href.split("/").pop()),
            fetch(process.env.VUE_APP_URL + `/public_user_info/${this.storage_id} `, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(data => (this.user = data));
        // .then(data => console.log('user_dataHeader',data));
    },
    watch: {
        dataProp() {
            this.changeData();
        },
    },

    methods: {
        changeData() {
            fetch(process.env.VUE_APP_URL + `/public_user_info/${this.user_id} `, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(data => (this.user = data));
            // .then(data => console.log('user_data',data));
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

p {
    color: #6f7381;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.158rem;
}

.header {
    display: flex;
    justify-content: space-between;
    padding-left: 5.063rem;
    padding-right: 4.875rem;
    background-color: #202122;
    width: 100%;
    height: 10.75rem;
    margin-top: 2.875rem;
    align-items: center;
    position: relative;
}

.left {
    display: flex;
    flex-direction: row;
}

.avatar-big {
    width: 5.625rem;
    height: 5.625rem;
    background-color: #6f7381;
    border-radius: 100%;
    margin-right: 1.141rem;
}
.upload-pic {
    padding-right: 1.875rem;
}
#profile-pic {
    border-radius: 50%;
    height: 7.875rem;
    width: 7.875rem;
    object-fit: cover;
}

.left-text {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.user-row-one {
    display: flex;
    margin-bottom: 0.625rem;
}

.user-name {
    color: white;
    font-weight: 700;
    line-height: 1.984rem;
    margin-bottom: 0.375rem;
}

.location,
.user-age,
.gender,
.federation,
.fide-id {
    margin-right: 1.75rem;
}

.location {
    display: flex;
    align-items: center;
}

.user-row-two {
    display: flex;
}

.federation,
.fide-id {
    display: flex;
}

.federation p,
.fide-id p {
    margin-right: 0.625rem;
}

.fide-id p:last-child {
    color: #c8a07d;
}

.right img {
    position: absolute;
    top: 1.375rem;
    right: 1.813rem;
}

.right button {
    width: 8.161rem;
    height: 2.875rem;
    color: white;
    line-height: 2.125rem;
    border: solid #5c5e64 1px;
}

@media screen and (max-width: 1440px) {
    .header {
        padding-left: 3.5rem;
    }
}

@media screen and (max-width: 640px) {
    .header {
        background-color: unset;
        justify-content: center;
    }

    .right {
        display: none;
    }

    .left {
        flex-direction: column;
        align-items: center;
    }

    .avatar-big {
        margin-right: 0;
        margin-bottom: 1.5rem;
    }

    .left-text {
        align-items: center;
    }

    .user-name {
        margin-bottom: 1.25rem;
    }
}

@media screen and (max-width: 375px) {
    .header {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .fide-id {
        margin-right: 0;
    }
}
</style>
