<template>
  <div id="app">
    <div class="container">
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
        <div class="form-group" >
          <label>Age</label>
          <input type="text" class="form-control"  v-model="newUser.age ">
          <p class="alert alert-danger" v-if="errors.user.age">{{errors.user.age}}</p>
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click="saveUser"> Change</button>
          <button class="btn btn-success" @click="getRundAge"> Rusnd</button>
        </div>
      </div>
      <div>
        <table class="table table-dark table-bordered table-hover">
          <tr>
            <th>Name</th>
            <th>SurName</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Age</th>
          </tr>
          <tr v-for="user in users" :kay="user.id">
            <td>{{user.name}} </td>
            <td>{{user.surname}} </td>
            <td>{{user.gender}} </td>
            <td>{{user.age}}  {{user.age > 50 ? "OLD" : 'YOUNG'}}</td>
            <td><button class="btn btn-danger" @click="deleteUser(user.id)">Delete </button></td>
            <!--            <td>{{user.id}} </td>-->
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        users: []
        ,
        newUser: {
          name: '',
          surname: '',
          gender: '',
          age: ''
        },
        errors: {
          user: {
            name: '',
            surname: '',
            gender: '',
            age: '',
          },
        }
      }
    },
    mounted() {
      this.getUsersStorage();
    },
    methods: {
      saveUser() {
        this.errors.user.name = this.newUser.name == "" ? "Name is required" : ""
        this.errors.user.surname = this.newUser.surname == "" ? "Surname is required" : ""
        this.errors.user.gender = this.newUser.gender == "" ? "Gender is required" : ""
        this.errors.user.age = this.newUser.age == "" ? "Age is required" : ""
        if (this.errors.user.name == "" && this.errors.user.surname == "" && this.errors.user.gender == "" && this.errors.user.age == "") {
          const user = {};
          const id = this.generateRandomNumber();
          user.name = this.newUser.name
          user.surname = this.newUser.surname
          user.gender = this.newUser.gender
          user.age = this.newUser.age
          user.id = id
          this.users.push(user);
          this.setUsersStorage();
        }
      },
      deleteUser(id){
        // console.log(id)
      },
      setUsersStorage(){
        const users = JSON.stringify(this.users)
        localStorage.setItem("users" , users)
      },
      getUsersStorage(){
        let users  = localStorage.getItem('users') || null;
        users = JSON.parse(users)
        this.users = users ? users : []
      },
      generateRandomNumber(){
        const d = new Date();
        return   d.getTime() * Math.floor(1 +Math.random() * 1000);
      },
      getRundAge(){
        let run = Math.floor(1 +Math.random() * 100);
        this.newUser.age = run;
      }
    }
  }
</script>
<style>
  .male {
    background-color: blue;
  }
  .female {
    background-color: pink;
  }
</style>
