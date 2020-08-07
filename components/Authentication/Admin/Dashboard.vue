<template>
  
    <div class="dasboard_container">
        <div class="dashboard_sidecontent">
            <navside />
        </div>
         <div class="dashboard_mobilecontent" :class="foldMode ?'dashboard_mobilecontent_show':''">  
               <div class="cover_back" @click="foldNav"></div>
            <mobileside  />
        </div> 
        <div class="dashboard_maincontent">
            <navcenter />
        </div>
    </div>
</template>
<script>
import Navside from './Navside'
import Navcenter from './Navcenter'
import Mobileside from './Mobileside'
export default {
components:{
    Navside,
    Navcenter,
    Mobileside,
},
data(){
return{
    foldMode:false,
}
},
    middleware:'auth',
    methods:{
    logOut(){
        this.$auth.logout().catch();
        
        this.$router.push({name: 'index'});
    },
    foldNav(){
        this.foldMode = !this.foldMode
        },
    },
    created(){
       this.$nuxt.$on('logout-user', () => {
           this.logOut();
           
        });
         this.$nuxt.$on('fold-nav', () => {
           this.foldNav();
           
        });
    }
}
</script>