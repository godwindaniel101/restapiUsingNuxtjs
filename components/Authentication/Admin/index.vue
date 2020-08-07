<template>
  <div class="contianer-fx">
    <div class="_dashboard">
      <div class="_dashheader">
        <div class="_dash_head_content">
          <router-link
            tag="div"
            to="/dashboard/employee"
            class="_dash_head_wrap"
          >
            <div class="_dash_head_main">
              <div class="_head_main_text">
                <p class>Employee</p>
              </div>
              <div class="_head_main_icon">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="svg-inline--fa fa-users fa-w-20 fa-3x"
                >
                  <path
                    fill="#00743f"
                    d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                    class
                  />
                </svg>
              </div>
            </div>

            <div class="_hmb">
              <div class="_hmb_left">Total</div>
              <div class="_hmb_right">{{dashBoardData.employee_count}}</div>
            </div>
          </router-link>
          <router-link
            to="/dashboard/employee/untasked"
            tag="div"
            class="_dash_button_wrap"
          >
            <div class="_hmx">
              <div class="_hmx_left">Untasked</div>
              <div class="_hmx_right">{{dashBoardData.idle_employee}}</div>
            </div>
          </router-link>
        </div>
        <div class="_dash_head_content">
          <router-link
            tag="div"
            to="/dashboard/project"
            class="_dash_head_wrap"
          >
            <div class="_dash_head_main">
              <div class="_head_main_text">
                <p class>Project</p>
              </div>
              <div class="_head_main_icon">
                <svg
                  width="30"
                  height="30"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 384 512"
                  class="svg-inline--fa fa-clipboard-list-check fa-w-12 fa-3x"
                >
                  <path
                    d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM65.6 209.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 217c-2.1-2.1-2.1-5.5 0-7.6zM96 392c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm224-16c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H154.1l32.3-32h124c5.3 0 9.6 3.6 9.6 8v16z"
                    class=""
                  ></path>
                </svg>
              </div>
            </div>

            <div class="_hmb">
              <div class="_hmb_left">Total</div>
              <div class="_hmb_right">{{dashBoardData.project_count}}</div>
            </div>
          </router-link>
          <router-link
            to="/dashboard/project/dueproject"
            tag="div"
            class="_dash_button_wrap"
          >
            <div class="_hmx">
              <div class="_hmx_left">Due Project</div>
              <div class="_hmx_right">{{dashBoardData.dueProject_count}}</div>
            </div>
          </router-link>
        </div>
        <div class="_dash_head_content">
          <router-link
            tag="div"
            to="/dashboard/task"
            class="_dash_head_wrap"
          >
            <div class="_dash_head_main">
              <div class="_head_main_text">
                <p class>Task</p>
              </div>
              <div class="_head_main_icon">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="svg-inline--fa fa-scroll fa-w-20 fa-3x"
                >
                  <path
                    fill="red"
                    d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"
                    class=""
                  ></path>
                </svg>
              </div>
            </div>

            <div class="_hmb">
              <div class="_hmb_left">Total</div>
              <div class="_hmb_right">{{dashBoardData.task_count}}</div>
            </div>
          </router-link>
          <router-link
            to="/dashboard"
            tag="div"
            class="_dash_button_wrap"
          >
            <div class="_hmx">
              <div class="_hmx_left">Uncompleted</div>
              <div class="_hmx_right">23</div>
            </div>
          </router-link>
        </div>
        <div class="_dash_head_content">
          <router-link
            tag="div"
            to="/dashboard/todo"
            class="_dash_head_wrap"
          >
            <div class="_dash_head_main">
              <div class="_head_main_text">
                <p class>Todo</p>
              </div>
              <div class="_head_main_icon">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-tasks fa-w-16 fa-3x"
                >
                  <path
                    fill="purple"
                    d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                    class=""
                  ></path>
                </svg>
              </div>
            </div>

            <div class="_hmb">
              <div class="_hmb_left">Total</div>
              <div class="_hmb_right">23</div>
            </div>
          </router-link>
          <router-link
            to="/dashboard"
            tag="div"
            class="_dash_button_wrap"
          >
            <div class="_hmx">
              <div class="_hmx_left">Undone</div>
              <div class="_hmx_right">23</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dashBoardData: []
    };
  },
  methods: {
    getAdminDashboard() {
      this.$nuxt.$emit("changPreloader", true);
      this.$axios
        .get("auth/adminDashboard")
        .then(({ data }) => {
          this.dashBoardData = data;
          this.$nuxt.$emit("changPreloader", false);
        })
        .catch(e => {
          cconsole.log(e);
        });
    }
  },
  mounted() {
    this.getAdminDashboard();
  }
};
</script>
