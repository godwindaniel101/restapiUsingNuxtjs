<template>
  <projectform :formRecord="form" :triggerEdit="true"  />
</template>
<script>
import Projectform from '~/components/FormsComponent/projectForm.vue'
export default {
  data() {
    return {
      form: {},
    };
  },
  components: {
    Projectform
  },
  methods: {
    async getProjectRecord() {
      this.$nuxt.$emit("changPreloader", true);
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getProjectRecord/" + id)
          .then(({ data }) => {
            this.form = data;
            this.$nuxt.$emit("changPreloader", false);
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getProjectRecord();
  }
};
</script>
