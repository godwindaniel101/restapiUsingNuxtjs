<template>
<div class="outter">
  <div class="preloader" v-show="preloader">
    <div class="image_wrap">
      <img src="~assets/images/preloader.gif" />
    </div>           
  </div>
  <projectform :formRecord="form" :triggerEdit="true" v-show="!preloader" />
</div>
  
</template>
<script>
import Projectform from '~/components/ProjectComponent/projectForm.vue'
export default {
  data() {
    return {
      form: {},
      preloader: true
    };
  },
  components: {
    Projectform
  },
  methods: {
    async getProjectRecord() {
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getProjectRecord/" + id)
          .then(({ data }) => {
            this.form = data;
            this.preloader = false;
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getProjectRecord();
  }
};
</script>
