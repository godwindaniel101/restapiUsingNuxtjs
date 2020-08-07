<template>
  <div class="dashcenter">
    <div class="dashcenter_head">
     
      <div class="mobile_control">
        <div class="mobile_control_icon">
          <svg
            @click="foldAction"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-align-justified"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>
       <div class="abeg"></div>
      <div class="head_info">
        <div class="head_text">
          <span @click="logoutUser">{{ user ? user.name : "" }}</span>
        </div>
        <div class="head_pic">
          <img src="~assets/images/default.png" alt="" class="">
        </div>
      </div>
    </div>

    <div class="dashcenter_body">
      <div class="preloader" v-if="preloader">
        <div class="preloader_image">
          <img src="~assets/images/preloaderx.gif" />
        </div>
      </div>
      <NuxtChild />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      preloader: true
    };
  },
  methods: {
    logoutUser() {
      this.$nuxt.$emit("logout-user");
    },
    foldAction() {
      this.$nuxt.$emit("fold-nav");
    },
    changepreloader(status) {
      this.preloader = status;
    }
  },
  created() {
    this.$nuxt.$on("changPreloader", status => {
      this.changepreloader(status);
    });
  }
};
</script>
