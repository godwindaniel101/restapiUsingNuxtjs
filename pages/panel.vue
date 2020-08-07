<template>
  <div class="contianer-fx" style="padding:0;margin:0;height:100vh;overflow:hidden">
      <Panel />
  </div>
</template>

<script>
import Panel from '~/components/Authentication/User/Panel.vue'

export default {
  middleware:'auth',
  components: {
    Panel,
  }
}
</script>
<style scoped>
    /* @import '~/assets/css/main.css'; */
    </style>