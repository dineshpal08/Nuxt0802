<template>
  <div class="w-2/3 mx-auto mb-32 shadow-lg">
    <div>
      <h1 class="color mx-5 pt-5 text-xl">User List</h1>
      <br />
      <br />
      <hr />
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left text-lg">Name</th>
            <th class="text-left">Mobile No.</th>
            <th class="text-left">Designation</th>
            <th class="text-left">Email ID</th>
            <th class="text-left">Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.mobileNo }}</td>
            <td>{{ item.designation }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.selected.toString() }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["users"]),
  },
  mounted() {
    this.getall();
  },
  methods: {
    getall() {
      console.log(JSON.stringify(this.users), "fdfsdgfh0");
      console.log(this.users, "page4");
    },
  },
};
</script>
<style scoped>
.color {
  color: #1976d2;
}
</style>
