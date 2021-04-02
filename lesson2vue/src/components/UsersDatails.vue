<template>
  <div class="container">
    <div v-if="blocks.details">
      <h1>user details</h1>
      <p>name : {{ user.name }}</p>
      <p>name : {{ user.surname }}</p>
      <p>name : {{ user.gender }}</p>
      <p>name : {{ user.age }}</p>
      <button class="btn btn-warning" @click="showEditBlock">Edit</button>
    </div>
    <div v-else>
      <div class="form-group">
        <div class="form-group">
          <label>name</label>
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <label>surname</label>
          <input type="text" class="form-control" v-model="user.surname">
        </div>
        <div class="form-group">
          <label>gender</label>
          <input type="text" class="form-control" v-model="user.gender">
        </div>
        <div class="form-group">
          <label>age</label>
          <input type="text" class="form-control" v-model="user.age">
        </div>
        <div class="form-group">
          <button @click="saveUser" class="btn btn-primary">save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UsersDatails",

      data() {
        return {
          users: [],
          user: [],
          blocks: {
            details: true
          }
        }
      },
      mounted() {
        this.getUsersStorage();
        this.getUser()
      },
      methods:{
        getUsersStorage() {
          let users = localStorage.getItem("users") || null;
          users = JSON.parse(users)
          this.users = users ? users : []
        },
        setUsersStorage(){
          const users = JSON.stringify(this.users)
          localStorage.setItem("users", users);
        },
        getUser(){
          this.user = this.users.find(u => {
            return  u.id == this.$route.params.user_id
          })
        },
        showEditBlock(){
          this.blocks.details = !this.blocks.details
        },
        saveUser() {
          this.users.filter(u => {
            if (u.id == this.user.id) {
              u.name = this.user.name
              u.surname = this.user.surname
              u.gender = this.user.gender
              u.age = this.user.age

            }
          })
          this.setUsersStorage()
          this.showEditBlock()
        }

      }


    }
</script>

<style scoped>

</style>
