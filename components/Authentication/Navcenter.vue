<template>
        <div class="dashcenter">
            <div class="dashcenter_head">
                  <div class="head_toggle_icon" @click="foldAction">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                </div>
                <div class="head_info">

                
                <div class="head_text">
                        <p @click="logoutUser"> {{user}}</p>
                </div>
                <div class="head_pic">

                </div>
                </div>
                </div>
                <div class="dashcenter_body">
                        <NuxtChild  />
                </div>
        </div>
</template>
<script lang="ts">
export default ({
        methods:{
                logoutUser(){
                        this.$nuxt.$emit('logout-user');
                },
                foldAction(){
                       this.$nuxt.$emit('fold-nav'); 
                }
        },
        
})
</script>