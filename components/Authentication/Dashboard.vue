<template>
  
    <div class="dasboard_container">
        <div class="dashboard_sidecontent" :class="foldMode ? 'fold_class' : ''">
            <navside />
        </div>
        <div class="dashboard_maincontent">
            <navcenter />
        </div>
    </div>
</template>
<script>
import Navside from './Navside'
import Navcenter from './Navcenter'
export default {
components:{
    Navside,
    Navcenter
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
        }
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