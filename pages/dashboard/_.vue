<template>
<div class="unknown_wrapper">
<div class="unknown">
        <!-- <img src="~assets/images/404.jpg" alt="" class=""> -->
        <div class="unknown_btn">
              <span
                class="_form_btn b_green"
                placeholder="Create"
              >Go Back To Safety</span>
        </div>
</div>    
</div>
</template>
<script>
export default {
    mounted(){
        this.$nuxt.$emit("changPreloader", false)
    }
}
</script>