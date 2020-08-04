<template>
<div class="outter">
  <div class="preloader" v-show="preloader">
    <div class="image_wrap">
      <img src="~assets/images/preloader.gif" />
    </div>           
  </div>
  <taskform :formRecord="form" :triggerEdit="true" v-show="!preloader" />
</div>
  
</template>
<script>
import taskform from '~/components/FormsComponent/taskForm.vue'
export default {
  data() {
    return {
      form: {},
      preloader: true
    };
  },
  components: {
    taskform
  },
  methods: {
    async getTaskRecord() {
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getTaskRecord/" + id)
          .then(({ data }) => {
            this.form = data;
            console.log(data);
            this.preloader = false;
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getTaskRecord();
  }
};
</script>
