<template>
  <v-app>
    <v-app-bar height="100px" class="appbar" app color="light-blue lighten-5">
      <div class="d-flex align-center header">
        <v-img
          class="shrink mr-2"
          src="https://interpol-center.org/wp-content/uploads/2021/03/logo-inter.png"
          width="70"
        />
        <span class="color"> LÖKE </span>
      </div>
      <v-spacer></v-spacer>

      <div class="routing">
        <router-link class="links" to="/overview">HOME</router-link>
        <router-link class="links" to="#">ABOUT</router-link>
        <router-link class="links" to="#">CONTACT</router-link>
      </div>
    </v-app-bar>
    <v-main class="blue accent-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style  scoped>
.v-app-bar {
  padding-right: 50px;
  padding-left: 50px;
  font-family: Poppins;
}

.routing {
  align-self: flex-end;
}

.links {
  margin: 15px;
  padding: 7px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.links:hover {
  color: #ff9100;
}

.header {
  font-size: 20px;
  font-weight: bolder;
}
</style>