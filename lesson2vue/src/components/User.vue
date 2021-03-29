<template>
  <div class="col-4 justify-content-center">
    <h3>Name : {{user.name}}</h3>
    <h3>SurName: {{user.surname}}</h3>
    <h3>Age : {{user.age}}</h3>
    <button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
    <router-link class="btn btn-warning" :to="{name: 'User-Datails', params: {user_id : user.id}}">Show</router-link>
    <hr>
  </div>
</template>

<script>
  export default {
    name: "User",
    props: {
      user : { type: Object, default: () => {}}
    },
    methods: {
      deleteUser(id) {
        this.$emit('deleteUser',id)
      }
    }
  }
</script>

<style scoped>

</style>
