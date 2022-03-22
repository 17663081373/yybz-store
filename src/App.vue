<template>
  <div id="app">
    <home></home>
    <router-view/>
<!--    <div style="position: fixed; width: 100px; height: 10px; background-color: azure">-->
<!--    </div>-->
<!--    <route-view></route-view>-->
  </div>
</template>

<script>

import Home from "./components/Home/Home";
export default {
    data() {
        return {
        }
    },
    methods: {
        // greet() {
        //     this.$toast.add({severity: 'info', summary: 'Hello '  + this.text});
        //     this.message = 'Hello ' + this.text;
        // }
    },
    components: {
      Home
    }
}
</script>

<style scoped>

</style>
