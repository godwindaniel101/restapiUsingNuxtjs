<template>

  <employeeform :formRecord="form" :triggerEdit="true" v-show="!preloader" />

</template>
<script>
import Employeeform from "~/components/FormsComponent/employeeForm.vue";
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
      this.$nuxt.$emit("changPreloader", true);
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getEmployeeRecord/" + id)
          .then(({ data }) => {
            this.form = data;
            this.preloader = false;
            this.$nuxt.$emit("changPreloader", false);
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getEmployeeRecord();
  }
};
</script>
