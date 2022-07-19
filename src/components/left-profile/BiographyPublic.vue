<template>
    <div class="chesscv">
        <div id="about-me">
            <div id="about-edit">
                <p style="padding-right: 0.625rem">About Me</p>
            </div>
            <div>
                <p style="white-space: pre-line" :class="{ 'about-text3': editable, 'about-text': isActive }">
                    {{ user.about_me }}
                </p>
            </div>
            <div>
                <button v-if="editable" class="middle2-buttons" type="button" @click="editconfirm">
                    Confirm changes
                </button>
                <button v-if="editable" class="middle2-buttons" type="button" @click="editable = !editable">
                    Cancel
                </button>
            </div>
            <!--    <input  type="text" class="about-text" v-if="editable"   v-model="aboutme"   placeholder='about me'>
        <p v-else class="about-text">tekst  {{user.about_me}} </p>-->
            <hr />
            <div>
                <p>My CV:</p>
                <div>
                    <p id="opencv" @click="newopenwindow()">
                        {{ user.cv.file_name }}
                    </p>
                    <input id="fileUpload" type="file" style="display: none" title="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Chesscv",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isActive: true,
            editable: false,
        };
    },
    methods: {
        newopenwindow: function () {
            window.open(this.user.cv.file_url);
        },
    },
};
</script>

<style>
hr {
    border: 0.5px solid rgba(199, 201, 208, 0.2);
    width: 80%;
}
.chesscv {
    display: block;
    align-items: left;
    text-align: left;
    margin: 1.875rem;
}

.about-me {
    padding-top: 1.875rem;
}
#about-edit {
    display: flex;
}
a {
    color: #c8a07d;
}
i:hover {
    opacity: 0.7;
}
.about-text {
    color: #6f7381;
    margin-right: 1.25rem;
}

.about-text3 {
    color: #6f7381;
    margin-right: 1.25rem;
    background-color: rgba(27, 28, 29, 1);
    padding: 0.625rem;
    border-radius: 5px;
}

.file-input::before {
    content: "Upload CV file";
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
}
.file-input:hover::before {
    opacity: 0.7;
}
.file-input::-webkit-file-upload-button {
    visibility: hidden;
}
#opencv {
    color: #6f7381;
}
#opencv:hover {
    cursor: pointer;
    color: #ffffff;
    text-decoration: underline;
}

.middle2-buttons {
    border: 0.5px solid #5c5e64;
    box-sizing: border-box;
    background-color: #202122;
    color: #ffffff;
    font-size: 0.75rem;
    width: 11.25rem;
    height: 1.5rem;
    margin: 0 1.25rem 2.25em 0;
}
.fontawesome {
    color: #c8a07d;
    cursor: pointer;
}

.middle2-buttons:hover {
    opacity: 0.7;
}
</style>
