<template>
  <div class="preloaded_wrapper">
    <div class="preloader_item" v-show="preloader">
      <div class="image_wrap">
        <img src="~assets/images/preloader.gif" />
      </div>
    </div>
    <div class="other_contents" v-show="!preloader">
      <div class="container-fluid">
        <div class="wrap_my_form xydesx">
          <div class="project_task_table">
            <!-- <button class="button btn btn-success"  @click="getTaskUnitProjectRecord"> Get My Task</button> -->
            <table class="project_task_tracker">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Task Name</th>
                  <th>Asigned By</th>
                  <!-- <th>Asigned To</th> -->
                  <th>Assign Date</th>
                  <th>End Date</th>
                  <th>% Complete</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <!-- <th>Action</th> -->
                </tr>
              </thead>

              <tbody>
                <tr v-for="data in taskData" :key="taskData.id">
                  <td>
                    <span>Code</span>
                  </td>
                  <td>
                    <span>{{ data.task_name }}</span>
                  </td>
                  <td>
                    <span>{{
                      data.assignby ? data.assignby.name : "assign_by"
                    }}</span>
                  </td>
                  <td>
                    <span>{{ data.start_date }}</span>
                  </td>
                  <td>
                    <span>{{ data.end_date }}</span>
                  </td>
                  <td>
                    <span>{{ data.percentage_completed }}</span>
                  </td>
                  <td>
                    <div class="implode_wrap">
                      <div class="implode_wrap_1">
                        <select
                          class="update_status"
                          @change="updateTaskStatus(data.id)"
                          v-model="data.task_status"
                        >
                          <option value="1">Pending</option>
                          <option value="2">In Stages</option>
                          <option value="3">Resolved</option>
                        </select>
                      </div>
                      <div class="implode_wrap_2">
                        <nuxt-link
                          tag="div"
                          class="xsdcxfd"
                          :to="{ path: '/panel/todo/' + data.id }"
                          v-if="data.task_status == 2"
                          >
                          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-right fa-w-14 fa-3x"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" class=""></path></svg>
                          </nuxt-link
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{{ data.task_priority }}</span>
                  </td>
                  <!-- <td>
                    <span class="button_div_wrap ">
                      <nuxt-link
                        tag="div"
                        class="button_div b_blue"
                        :to="{ path: '/dashboard/task/edit/' + data.task_id }"
                      >
                        <svg
                          width="18"
                          height="18"
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
                          width="16"
                          height="16"
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
                  </td> -->
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
import Employeeform from "~/components/FormsComponent/employeeForm.vue";
export default {
  data() {
    return {
      project_id: "",
      taskData: [],
      form: {
        project_name: ""
      },
      preloader: true
    };
  },
  components: {
    Employeeform
  },
  methods: {
    async updateTaskStatus($id) {
      var status_r = this.taskData.filter(item => item.id == $id);
      var task_status = status_r[0]["task_status"];

      try {
        await this.$axios
          .post("auth/updateTaskStatus/" + $id, { task_status: task_status })
          .then(({ data }) => {
            this.getTaskUnitProjectRecord();
            this.$swal({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              icon: "success",
              title: data.message
            });
            // if (task_status == 2) {
            //   this.$router.push({ path: "/panel/todo/" + $id });
            // }
          });
      } catch (e) {}
    },
    async getTaskUnitProjectRecord() {
      try {
        await this.$axios
          .get("auth/getTaskUnitProjectRecord/")
          .then(({ data }) => {
            console.log(data);
            this.taskData = data;
            // this.preloader = false;
          });
      } catch (e) {}
    },
    async getDefault() {
      await this.getTaskUnitProjectRecord();
      this.preloader = false;
    }
  },
  mounted() {
    this.getDefault();
  }
};
</script>
