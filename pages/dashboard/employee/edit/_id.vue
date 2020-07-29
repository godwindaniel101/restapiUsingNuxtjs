<template>
<div class="outter">
  <div class="preloader" v-show="preloader">
    <div class="image_wrap">
      <img src="~assets/images/preloader.gif" />
    </div>           
  </div>
  <employeeform :formRecord="form" :triggerEdit="true" v-show="!preloader" />
</div>
  
</template>
<script>
import Employeeform from "~/components/EmployeeComponent/employeeForm.vue";
export default {
  data() {
    return {
      form: {},
      preloader: true
    };
  },
  components: {
    Employeeform
  },
  methods: {
    async getEmployeeRecord() {
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getEmployeeRecord/" + id)
          .then(({ data }) => {
            this.form = data;
            this.preloader = false;
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getEmployeeRecord();
  }
};
</script>
