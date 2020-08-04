<template>
  <todoForm :triggerHome="true"/>
</template>
<script>
import todoForm from '~/components/FormsComponent/todoForm.vue'
export default {
components:{
  todoForm
}
}
</script>