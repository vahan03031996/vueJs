<template>
  <div id="app">
    <div class="container">

      <div>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="newUser.name">
          <div class="text-danger font-weight-bold" v-if="errors.users.name">
            {{errors.users.name}}
          </div>
        </div>

        <div class="form-group">
          <label>Surname</label>
          <input type="text" class="form-control" v-model="newUser.surname">
          <div class="text-danger font-weight-bold" v-if="errors.users.surname">
            {{errors.users.surname}}
          </div>
        </div>
        <div class="form-group">
          <label>Gender</label>
          <input type="text" class="form-control" v-model="newUser.gender">
          <div class="text-danger font-weight-bold" v-if="errors.users.gender">
            {{errors.users.gender}}
          </div>
        </div>

        <div class="form-group">
          <label>Age</label>
          <input type="text" class="form-control" v-model="newUser.age">
          <div class="text-danger font-weight-bold" v-if="errors.users.age">
            {{errors.users.age}}
          </div>
        </div>

        <div class="form-group">
          <button class="btn btn-success" @click="saveUser">Change</button>
          <button class="btn btn-success" @click="randomAge">Random Age</button>
        </div>
      </div>

      <div>
        <table class="table table-dark table-bordered table-hover">

          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Action</th>
          </tr>

          <tr v-for="user in users" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.surname}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.age}} {{ user.age > 50 ? "Old" : "Young"}}</td>
            <td>
              <button class="btn btn-warning" @click="editUser(user.id)">Edit</button>
              <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>

        </table>
      </div>
    </div>

    <div class="my_modal" v-if="modals.editUser">
      <div class="container">
        <div class="form-group">
          <label for="inp1">Name</label>
          <input id="inp1" type="text" class="form-control" v-model="editUserData.name">
        </div>
        <div class="form-group">
          <label for="inp2">surname</label>
          <input id="inp2" type="text" class="form-control" v-model="editUserData.surname">
        </div>
        <div class="form-group">
          <label for="inp3">gender</label>
          <input id="inp3" type="text" class="form-control" v-model="editUserData.gender">
        </div>
        <div class="form-group">
          <label for="inp4">age</label>
          <input id="inp4" type="text" class="form-control" v-model="editUserData.age">
        </div>
      </div>
    </div>


  </div>
</template>




<script>
  export default {
    name: 'App',
    data(){
      return {
        users: [],
        newUser: {
          name: "",
          surname: "",
          gender: "",
          age: ""
        },
        editUserData: {
          name: "",
          surname: "",
          gender: "",
          age: ""
        },
        errors: {
          users: {
            name: "",
            surname: "",
            gender: "",
            age: ""
          }
        },
        modals: {
          editUser: false,
        }

      }
    },
    mounted() {
      this.getUsersStorage();
    },
    methods: {
      randomAge(){
        const age = Math.floor(Math.random() * 100);
        this.newUser.age = age;
      },
      deleteUser(id){
        this.users = this.users.filter(user => {
          return user.id != id
        });

        this.setUsersStorage();
      },
      editUser(id){
        const user = this.users.find(user => {
          return user.id == id
        });
        this.editUserData = {...user}
        this.modals.editUser = true
        this.setUsersStorage();
      },
      saveUser(){
        this.errors.users.name = this.newUser.name == "" ? "Name is required" : ""
        this.errors.users.surname = this.newUser.surname == "" ? "surname is required" : ""
        this.errors.users.gender = this.newUser.gender == "" ? "gender is required" : ""
        this.errors.users.age = this.newUser.age == "" ? "age is required" : ""


        if(this.errors.users.gender == "" && this.errors.users.name == "" && this.errors.users.surname == "" && this.errors.users.age == ""){
          const user = {};

          user.id = this.generateRandomNumber()
          user.name = this.newUser.name;
          user.surname = this.newUser.surname;
          user.gender = this.newUser.gender;
          user.age = this.newUser.age;


          this.users.push(user)
          this.setUsersStorage();
        }

      },
      generateRandomNumber(){
        const d = new Date();
        return d.getTime() + Math.floor(Math.random() * 1000);
      },
      setUsersStorage(){
        const users = JSON.stringify(this.users)
        localStorage.setItem("users", users);
      },
      getUsersStorage(){
        let users = localStorage.getItem("users") || null;
        users = JSON.parse(users)
        this.users = users ? users : []
      }
    }
  }
</script>





<style>
  .male{
    background: blue;
  }
  .female{
    background: pink;
  }
  .my_modal{
    position: absolute;
    width: 80%;
    height: 80vh;
    background: black;
    color: white;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
