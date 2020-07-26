<template>
<div class="page-wrapper">
 <div class="nav-wrapper">
<Navbar></Navbar>
</div>
  <section class="body-top">
                <p>employee</p>
                <nuxt-link :to="{path:'/employee/create'}"><a class="btn">add employee</a></nuxt-link>
    </section>
  <section class="features">
      <div class="feature-container">
        <div class="nav-side">
                    <div class="nav-side-bar">
                        <div class="nav-side-bar-image">
                            <div>
                                <div class="side-img">
                                    <img src="../../images/logo.png" alt="logo">
                                </div>
                            </div>
                            <div class="side-text">
                                <p class="" @click="getEmployee()">All Employee</p>
                            </div>
                        </div>
                        <div class="nav-side-bar-notice">
                            <p class="">Project</p>
                                <ul>
                                    <li  v-for="data in employeeName" :key="employeeName.id">
                                      <a :to="{path:'/employee/' + data.id}">  
                                            <div class="side-icon">
                                                 <p>{{data.abbr}} </p>
                                            </div>
                                            <div class="side-name" >
                                                <p>{{data.name}}</p>
                                            </div>
                                     </a>
                                    </li>
                                </ul>
                            <a href="#" class="btn2">add Project</a>
                        </div>
                    </div>
                </div>
    </div>
    <div class="feature-container_2 ">
        <div class="main-content">
        <div class="main-content-table">
            
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                         <label class="main"><input type="checkbox"><span class="main-checkbox"></span> </label>
                                    </th>
                                    <th></th>
                                    <th><p>EMPLOYEE</p></th>
                                    <th><p>SALARY</p></th>
                                    <th><p>STATUS</p></th>
                                    <th><p>MANAGE</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="data in employessDetail" :key="employessDetail.id">
                                        <td>
                                                 <label class="main"><input type="checkbox"><span class="main-checkbox"></span> </label>
                                        </td>
                                        <td>
                                            <div class="main-content-image">
                                                    <img src="../../images/icon.png" alt="logo">
                                            </div>
                                        </td>
                                        <td data-column="Name">
                                            <p> {{data.first_name}} {{data.first_name}} <br><span>{{data.position}}</span></p>
                                            
                                        </td>
                                        <td data-column="Salary">
                                            <p> {{data.salary}} Naira <br><span>{{data.type}}</span></p>
                                            
                                        </td>
                                        <td data-column="Status">
                                            <p>{{data.status}}<br><span>{{data.duration}}</span></p>
                                            
                                        </td>
                                        <td data-column="Manage">
                                        <div class="actionClass">
                                            <div>
                                            <nuxt-link :to="{path:'/employee/edit/' + data.id}">
                                                <img src="../../images/icon-trash.png">
                                            </nuxt-link>
                                            </div>
                                            <div>
                                                <a @click="deleteUser(data.id)">
                                                    <img src="../../images/icon-edit.png">
                                                </a>
                                            </div>
                                            
                                        </div>
                                        
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    </div>
    </div>
  </section>
</div>
</template>
<script>

import  Navbar from  '@/components/Navbar';
    export default {
        middleware: 'guest',
        components:{
            Navbar,
            
        },   
        data(){       
            return {
                mobilePoint : false,
                employessDetail:{},
                employeeName:[],
            }
        },
        methods :{
            toggleClass(){
                this.mobilePoint = !this.mobilePoint;
            },
            getEmployee(){
            this.$axios.get('http://localhost:8000/api/employee').then((datas)=>{
                var result = datas.data.data
                this.employessDetail = datas.data.data
                var  arraylength = datas.data.data.length
                var obj = {};
                for(let i = 0 ;  i < arraylength ; i++){
                    var first_name = datas.data.data[i]['first_name'];
                    var last_name = datas.data.data[i]['last_name']
                    var id = datas.data.data[i]['id']
                   this.employeeName.push({
                       'name' : first_name + ' ' + last_name,
                       'abbr' : first_name.charAt(0) + last_name.charAt(0),
                       'id': id
                   })
                }
                    console.log(this.employeeName);
                    console.log('yes');
                }).catch((data)=>{
                   
                })
            },
            deleteUser($id){
                 this.$axios.delete('http://localhost:8000/api/employee/' + $id).then((datas)=>{
                     alert(data.data.data.message);
                     this.getEmployee()
                 }).catch(()=>{

                 })
            },
        },
        mounted(){
            this.getEmployee()
        },
    }
</script>
<style scoped>

</style>