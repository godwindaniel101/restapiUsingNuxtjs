<template>
      <div class="container-fx">
          <div class="_sub_project">
            <nuxt-link
              to="/dashboard/project"
              class="back_icon"
              tag="div"
            >
              <div class="_back_nav">
                <div style="auto 20px">
                  <svg
                    width="20"
                    height="20"
                    stroke-width="1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="svg-inline--fa fa-arrow-left fa-w-14 fa-3x"
                  >
                    <path
                      fill="#000"
                      d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                    ></path>
                  </svg>
                </div>
              </div>
            </nuxt-link>
            <div class="_back_nav_action">
              <nuxt-link
                :to="{ path: '/dashboard/project/edit/' + project_id }" class="button_div b_blue" tag="div"
              >
                <svg
                  width="16"
                  height="16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="svg-inline--fa fa-user-edit fa-w-20 fa-3x"
                >
                  <path
                    fill="#fff"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                    class
                  />
                </svg>
              </nuxt-link>
              <div class="button_div b_red" >
              <svg
                @click="deleteProject"
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"
              >
                <path
                  fill="#fff"
                  d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                  class
                />
              </svg>
              </div>
            </div>
            </div>
            
            <div class="project_body">
              <div class="project_task">
                <div class="project_task_details">
                  <table>
                    <tr>
                      <td>
                          Project Name
                      </td>
                      <td>
                        {{form.project_name}}
                      </td>
                      </tr>
                      <tr>
                      <td>
                          Supervisor
                      </td>
                      <td>
                        {{form.project_supervisor}}
                      </td>
                      </tr>
                      <tr>
                      <td>
                          Ast.Supervisor
                      </td>
                      <td>
                        {{form.ast_project_supervisor}}
                      </td>
                      </tr>
                      <tr>
                      <td>
                          Address
                      </td>
                      <td>
                        {{form.project_address}}
                      </td>
                      </tr>
                        <tr>
                      <td>
                          Description
                      </td>
                      <td>
                        {{form.project_description}}
                      </td>
                      </tr>
                            <tr>
                      <td>
                          Start Date
                      </td>
                      <td>
                        {{form.start_date}}
                      </td>
                      </tr>
                            <tr>
                      <td>
                          End Date
                      </td>
                      <td>
                        {{form.end_date}}
                      </td>
                      </tr>
                  </table>
                </div>
                <div class="project_task_graph">
                  <div class="project_task_graph_child">
                    <span>Graph Component</span>
                  </div>
                </div>
                <div class="project_task_right">
                  <div class="project_task_right_child">
                     <span>Notification Component</span>
                  </div>
                </div>
              </div>
            </div>
          <div class="project_task_table">
            <div class="tacker_tag">
              <p>
                Task Tracker
              </p>
              <nuxt-link
                :to="{ path: '/dashboard/task/create/' + project_id }"
                tag="button"
                class="b_btn b_green"
              >
                Add Task
              </nuxt-link>
            </div>
            <table class="table_template">
              <thead>
                <tr>
                  <th class="mb_table">Code</th>
                  <th>Task Name</th>
                  <th class="mb_table">Asigned By</th>
                  <th>Asigned To</th>
                  <th class="mb_table">Assign Date</th>
                  <th>End Date</th>
                  <th>%Complete</th>
                  <th class="mb_table">Status</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="data in taskData" :key="taskData.id">
                  <td class="mb_table">
                    <span>Code</span>
                  </td>
                  <td>
                    <span>{{ data.task_name }}</span>
                  </td>
                  <td class="mb_table">
                    <span>{{
                      data.assignby ? data.assignby.name : "assign_by"
                    }}</span>
                  </td>
                  <td>
                    <span>{{
                      data.assignto ? data.assignto.first_name : "assign_to"
                    }}</span>
                  </td>
                  <td class="mb_table">
                    <span>{{ data.start_date }}</span>
                  </td>
                  <td>
                    <span>{{ data.end_date }}</span>
                  </td>
                  <td>
                    <span>{{ data.percentage_completed }}</span>
                  </td>
                  <td class="mb_table">
                    <span>{{ data.taskstatus }}</span>
                  </td>
                  <td>
                    <span>{{ data.task_priority }}</span>
                  </td>
                  <td>
                    <span class="button_div_wrap ">
                      <nuxt-link
                        tag="div"
                        class="button_div b_green"
                        :to="{ path: '/dashboard/task/edit/' + data.task_id }"
                      >
                        <svg
                          width="15"
                          height="15"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          class="svg-inline--fa fa-user-edit fa-w-20 fa-3x"
                        >
                          <path
                            fill="#fff"
                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                            class
                          />
                        </svg>
                      </nuxt-link>
                      <div class="button_div b_red" @click="deleteTask( data.id)">
                        <svg
                          width="13"
                          height="13"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"
                        >
                          <path
                            fill="#fff"
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                            class
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>
<script>
import Employeeform from "~/components/FormsComponent/employeeForm.vue";
export default {
  data() {
    return {
      project_id: "",
      taskData: [],
      form: {},
      preloader: true
    };
  },
  components: {
    Employeeform
  },
  methods: {
    deleteTask($id){
         this.$swal({
        customClass: {
          confirmButton: "btn btn-danger",
          cancelButton: "btn btn-success"
        },
        buttonsStyling: false,
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          try {
            this.$axios
              .delete("auth/deleteTask/" + $id)
              .then(({ data }) => {
                
                this.$swal("Deleted!", data.message, "success");
                this.getTaskProjectRecord();
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
    deleteProject() {
      this.$swal({
        customClass: {
          confirmButton: "btn btn-danger",
          cancelButton: "btn btn-success"
        },
        buttonsStyling: false,
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          try {
            this.$axios
              .delete("auth/deleteProject/" + this.project_id)
              .then(({ data }) => {
                this.$router.push({ path: "/dashboard/project" });
                this.$swal("Deleted!", data.message, "success");
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
    async getProjectRecord() {
      this.$nuxt.$emit("changPreloader", true);
      this.project_id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getProjectRecord/" + this.project_id)
          .then(({ data }) => {
            this.form = data;
            // this.preloader = false;
          });
      } catch (e) {}
    },
    async getTaskProjectRecord() {
      
      this.project_id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getTaskProjectRecord/" + this.project_id)
          .then(({ data }) => {
            console.log(data);
            this.taskData = data;
             this.$nuxt.$emit("changPreloader", false);
          });
      } catch (e) {}
    },
    async getDefault() {
      await this.getProjectRecord();
      await this.getTaskProjectRecord();
      this.preloader = false;
    }
  },
  mounted() {
    this.getDefault();
  }
};
</script>
