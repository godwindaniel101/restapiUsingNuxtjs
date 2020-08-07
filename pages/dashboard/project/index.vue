<template>
  <div class="container-fx">
    <div class="_project_wrap">
      <div class="_project_item" v-for="item in items" :key="items.id">
        <nuxt-link
          :to="{ path: '/dashboard/project/' + item.id }"
          tag="div"
          class="project_item"
        >
          <table class="project_index_table">
            <tr>
              <td>
                <p>Name</p>
              </td>
              <td>
                <h6>{{ item.project_name }}</h6>
              </td>
            </tr>
            <tr>
              <td>
                <p>Supervisor</p>
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
              <td style="border-bottom:0;">
                <p>End Date</p>
              </td>
              <td>
                <h6>{{ item.end_date }}</h6>
              </td>
            </tr>
          </table>
        </nuxt-link>
      </div>
    </div>
    <nuxt-link
      to="/dashboard/project/create"
      tag="div"
      class="_project_add _d_flex"
    >
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="svg-inline--fa fa-plus fa-w-14 fa-3x"
      >
        <path
          fill="#f0fff8"
          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          class=""
        ></path>
      </svg>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async getProject() {
      this.$nuxt.$emit("changPreloader", true);
      try {
        await this.$axios.get("auth/getProject").then(({ data }) => {
          this.items = data;
          this.$nuxt.$emit("changPreloader", false);
        });
      } catch (e) {}
    }
  },
  mounted() {
    this.getProject();
  }
};
</script>
