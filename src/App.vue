<template>
  <div id="app">
    <div class="container">
      <div v-if="user.name"  v-bind:class="user.gender == 'male' ? 'male' : 'female' ">
        <p> name: {{user.name}}</p>
        <p> UserName:{{user.surname}} </p>
        <p> gender: {{user.gender}} </p>
      </div>
      <div>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="newUser.name">
          <p class="alert alert-danger" v-if="errors.user.name">{{errors.user.name}}</p>
        </div>
        <div class="form-group">
          <label>Surname</label>
          <input type="text" class="form-control" v-model="newUser.surname">
          <p class="alert alert-danger" v-if="errors.user.surname">{{errors.user.surname}}</p>
        </div>
        <div class="form-group">
          <label>Gender</label>
          <input type="text" class="form-control" v-model="newUser.gender">
          <p class="alert alert-danger" v-if="errors.user.gender">{{errors.user.gender}}</p>
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click="saveUser"> Change</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


  export default {
    name: 'App',
    data() {
      return {
        user: {
          name: '',
          surname: '',
          gender: ''
        },
        newUser: {
          name: '',
          surname: '',
          gender: ''
        },
        errors: {
          user: {
            name: '',
            surname: '',
            gender: ''
          },

        }

      }
    },
    methods: {
      saveUser() {

        this.errors.user.name = this.newUser.name == "" ? "Name is required" : ""
        this.errors.user.surname = this.newUser.surname == "" ? "Surname is required" : ""
        this.errors.user.gender = this.newUser.gender == "" ? "Gender is required" : ""



        if (this.errors.user.name == "" && this.errors.user.surname == "" && this.errors.user.gender == "") {
          this.user.name = this.newUser.name
          this.user.surname = this.newUser.surname
          this.user.gender = this.newUser.gender
        }

      }
    }

  }

</script>

<style>
  .male{
    background-color: blue;
  }
  .female{
    background-color: pink;
  }
</style>
