<template>
  <inprogress />
</template>
<script>
import Inprogress from '~/components/Authentication/Progress.vue'
export default {
  components:{
    Inprogress
  },
  mounted(){
    this.$nuxt.$emit("changPreloader", false);
  }
}
</script>