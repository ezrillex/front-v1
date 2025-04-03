<script lang="ts">
  import Router from "svelte-spa-router";

  import About from './About.svelte'
  import Home from  './Home.svelte'
  import SignupBasic from "./pages/signup_basic.svelte";
  import AccountBasic from "./pages/account_basic.svelte";

  // i think this goes in the non refreshing module script section
  const routes = {
    '/about': About,
    '/signup': SignupBasic,
    '/cuenta': AccountBasic,
    '*': Home,
  }
</script>

<main>
  <Router {routes} />
</main>

<style>

</style>
