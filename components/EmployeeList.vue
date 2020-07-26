<template>
<div class="feature-container">
        <div class="nav-side">
                    <div class="nav-side-bar">
                        <div class="nav-side-bar-image">
                            <div class="side-img">
                                <img src="" alt="logo">
                            </div>
                            <div class="side-text">
                                <p class="" @click="getEmployee()">All Employee</p>
                            </div>
                        </div>
                        <div class="nav-side-bar-notice">
                            <p class="">Project</p>
                            {{authenticated}}
                                <ul>
                                    <li>
                                        <div class="side-icon">
                                           <p> DG </p>
                                        </div>
                                        <div class="side-name">
                                            <p>Daniel Godwin</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="side-icon">
                                           <p> DG </p>
                                        </div>
                                        <div class="side-name">
                                            <p>Daniel Godwin</p>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
    </div>
    </template>
    <script>
    export default {
        components:{
            Navbar,Employee
        },
        data(){
        
            return {
        mobilePoint : false
            }
        },
        methods :{
            getEmployee(){
                this.$axios.get('http://localhost:8000/api/employee').then((data)=>{
                                console.log(data.data);
                            }).catch((data)=>{
                                console.log(data.data);
                            })
            },
        },
        mounted() {
            this.getEmployee();
        }
    }
    </script>