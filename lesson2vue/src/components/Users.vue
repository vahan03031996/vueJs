<template>
  <div>
    <div class="row ">
      <user
        v-for="user in users"
        :key="user.id"
        :user="user"
        @deleteUser="deleteUser"
      />
    </div>
  </div>
</template>

<script>
import User from "./User";

export default {
  name: "Users",
  components: {
    User
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getUsersStorage();
    this.consoleTime()
    this.consoleTime2()
  },
  methods: {
    getUsersStorage() {
      let users = localStorage.getItem("users") || null;
      users = JSON.parse(users)
      this.users = users ? users : []
    },
    deleteUser(id) {
      this.users = this.users.filter(user => {
        return user.id != id
      });

      this.setUsersStorage();
    },
    setUsersStorage() {
      const users = JSON.stringify(this.users)
      localStorage.setItem("users", users);
    }
  }
}
</script>

<style scoped>

</style>
