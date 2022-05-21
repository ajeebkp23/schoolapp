<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      message: 'simple one'
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <input v-model="message" placeholder="edit" />
      <p>Message is {{ message }}</p>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
