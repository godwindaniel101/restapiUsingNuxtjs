<template>
  <div class="preloaded_wrapper">
    <div class="preloader_item" v-show="preloader">
      <div class="image_wrap">
        <img src="~assets/images/preloader.gif" />
      </div>
    </div>
    <div class="other_contents" v-show="!preloader">
      <div class="container-fluid">
        <div class="table_container wrap_my_form">
          <div class="employee_headerx">
            <nuxt-link to="/dashboard/project/create">
              <svg
                width="50"
                height="50"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="svg-inline--fa fa-clipboard-list-check fa-w-12 fa-3x"
              >
                <path
                  fill="yellowgreen"
                  d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM65.6 209.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 217c-2.1-2.1-2.1-5.5 0-7.6zM96 392c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm224-16c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H154.1l32.3-32h124c5.3 0 9.6 3.6 9.6 8v16z"
                ></path>
              </svg>
            </nuxt-link>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4" v-for="item in items" :key="items.id">
                <nuxt-link
                  :to="{ path: '/dashboard/project/' + item.id }"
                  tag="div"
                  class="project_item"
                >
                  <table class="project_index_table">
                    <tr>
                      <td>
                        <p>Project Name</p>
                      </td>
                      <td>
                        <h6>{{ item.project_name }}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Project Supervisor</p>
                      </td>
                      <td>
                        <h6>
                          {{
                            item.supervisor
                              ? item.supervisor.first_name +
                                " " +
                                item.supervisor.middle_name +
                                " " +
                                item.supervisor.last_name
                              : "Off"
                          }}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Start Date</p>
                      </td>
                      <td>
                        <h6>{{ item.start_date }}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>End Date</p>
                      </td>
                      <td>
                        <h6>{{ item.end_date }}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Project Description</p>
                      </td>
                      <td>
                        <h6>{{ item.project_description }}</h6>
                      </td>
                    </tr>
                  </table>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Index from "~/components/EmployeeComponent/index.vue";
export default {
  components: {
    Index
  },
  data() {
    return {
      preloader: true,
      items: []
    };
  },
  methods: {
    async getProject() {
      try {
        await this.$axios.get("auth/getProject").then(({ data }) => {
          this.items = data;
          this.preloader = false;
        });
      } catch (e) {}
    }
  },
  mounted() {
    this.getProject();
  }
};
</script>
