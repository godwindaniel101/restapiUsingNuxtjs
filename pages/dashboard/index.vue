<template>
  <index />
</template>
<script>
import Index from '~/components/Authentication/Admin/Index.vue'
export default {
  middleware:'dashboard',
  components:{
    Index
  }
}
</script>