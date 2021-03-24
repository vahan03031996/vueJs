<template>
  <div>

    <ul class="d-flex">
       <li>
      <router-link :to="{name: 'Users'}">Users</router-link>
    </li>
      <li>
        <router-link :to="{name: 'User-create'}">Users</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
