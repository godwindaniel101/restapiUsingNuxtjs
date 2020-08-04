<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <div class="todo_wrap">
          <div class="employee_header" style="padding-left:0;padding-right:0;">
            <div class="back_nav">
              <nuxt-link to="/panel/task" v-if="task_status">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-arrow-left fa-w-14 fa-3x"
                >
                  <path
                    fill="#000"
                    d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                    class=""
                  ></path>
                </svg>
              </nuxt-link>
            </div>
            <div class="tag-wrapper">
              <p class="">{{ taskName != null ? taskName : "My" }} Todo</p>
            </div>
          </div>
          <div class="todo_div">
            <form class="todo_form" @submit.prevent="addTodo()">
              <div class="todo_input_wrap">
                <input
                  type="text"
                  class="todo_input"
                  v-model="form.todo_text"
                  @change="text_error = ''"
                />
                <span v-text="text_error"></span>
              </div>
              <div class="todo_icon" @click="addTodo()">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-plus fa-w-14 fa-3x"
                >
                  <path
                    fill="#fff"
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    class=""
                  ></path>
                </svg>
              </div>
            </form>
          </div>
          <div class="todo_body" :class="tableLoader ? 'todo_body_2' : ''">
            <table class="todo_table">
              <tbody>
                <tr>
                  <td>
                    <div class="todo_table_icon">
                      <input
                        type="checkbox"
                        @change="completeAllTodo"
                        v-model="form.all_task"
                      />
                    </div>
                  </td>
                  <td>
                    <span> </span>
                  </td>
                  <td>
                    <div class="todo_table_icon">
                      <svg @click="deleteAllTodo"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 352 512"
                        class="svg-inline--fa fa-times fa-w-11 fa-3x"
                      >
                        <path
                          fill="red"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr v-for="unitText in todoArray" :key="todoArray.id">
                  <td>
                    <div class="todo_table_icon">
                      <input
                        type="checkbox"
                        v-model="unitText.is_completed"
                        @change="completeTodo(unitText.id)"
                      />
                    </div>
                  </td>
                  <td>
                    <span :class="unitText.is_completed ? 'mark_done' : ''">
                      {{ unitText.todo_text }}
                    </span>
                  </td>
                  <td>
                    <div class="todo_table_icon">
                      <svg
                        width="20"
                        height="20"
                        @click="deleteTodo(unitText.id)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 352 512"
                        class="svg-inline--fa fa-times fa-w-11 fa-3x"
                      >
                        <path
                          fill="red"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
         triggerHome:{
        type:Boolean,
        default:false,
    }
    },
  data() {
    return {

      task_status :false,
      tableLoader:false,
      taskName:'',
      todoArray: [],
      text_error:"",
      form: {
        todo_text: "",
        all_task:false,
      },
      triggerEdit: false
    };
  },
  components: {},
  methods: {
    async addTodo() {
     try { if(this.form.todo_text == "" || this.form.todo_text == null){
        this.text_error = "*Fill"
      }else{
      var id = this.$route.params.id ? this.$route.params.id : "";

        await this.$axios

          .post("/auth/addTodo/" + id, this.form)
          .then(({ data }) => {
            this.getTodo()
            this.form.todo_text = "";
            this.$swal({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              icon: "success",
              title: data.message
            });
          });
      }
      }
      catch (e) {}
    },
   async getTodo() {
    try { var id = this.$route.params.id ? this.$route.params.id : "";
        
      await this.$axios.get("/auth/getTodo/" + id).then(({ data }) => {
        this.todoArray = data;
        this.tableLoader=true;
      });
    } catch (e) {}
   },
   async completeTodo(id) {
    try {
      await this.$axios.post("/auth/completeTodo/" + id, this.form).then(({ data }) => {
        this.$swal({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
          title: data.message
        });
      });
    } catch (e) {}
   },
   completeAllTodo() {
      this.$swal({
        customClass: {
          confirmButton: "btn btn-danger",
          cancelButton: "btn btn-success"
        },
        buttonsStyling: false,
        title: "Are you sure?",
        text:  this.form.all_task ? 'Are you done with your task ?' : 'You want to Restart your task ?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: this.form.all_task ? 'Yes, I am done' : 'Yes, Restart ',
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
         try { var id = this.$route.params.id ? this.$route.params.id : "";
                      var  data = this.todoArray;
                      var c = data.length;
                      for(let i=0 ; i < c ; ++i) {
                        this.todoArray[i].is_completed = this.form.all_task;
                      }
                     this.$axios.post("/auth/completeAllTodo/"+id,this.form).then(({ data }) => {
                       
                      this.$swal({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        icon: "success",
                        title: data.message
                      });
                    });
        } catch (e) {}
        }else{
          this.form.all_task = !this.form.all_task
        }
      });

   },
    deleteAllTodo() {
           this.$swal({
        customClass: {
          confirmButton: "btn btn-danger",
          cancelButton: "btn btn-success"
        },
        buttonsStyling: false,
        title: "Are you sure?",
        text: 'You cant revert this',
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
        var id = this.$route.params.id ? this.$route.params.id : "";
       try {
       this.$axios.delete("/auth/deleteAllTodo/" + id).then(({ data }) => {
         this.getTodo()
        this.$swal({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
          title: data.message
        });
      });
    } catch (e) {}
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });


   },
   async deleteTodo(id) {
    try {
      await this.$axios.delete("/auth/deleteTodo/" + id).then(({ data }) => {
         this.getTodo()
        this.$swal({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
          title: data.message
        });
      });
    } catch (e) {}
   },
   getTaskName(){
    try {  var id = this.$route.params.id ? this.$route.params.id : "";
     if(id == null || id === ""){
       return
     }
     this.task_status = true;
     this.$axios.get("/auth/getTaskName/" + id).then(({ data }) => {
        this.taskName = data
      });
    } catch (e) {}
   }
},
  mounted(){
    this.getTodo()
    this.getTaskName()
  }
};
</script>
