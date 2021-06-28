<template >
  <v-container class="wrapper">
    <v-row>
      <v-col>
        <crime />
      </v-col>
      <v-col>
        <suspect />
      </v-col>
      <v-col>
        <victims />
      </v-col>
    </v-row>
    <hr />
  </v-container>
</template>

<script>
import crime from "../components/crime";
import victims from "../components/victims";
import suspect from "../components/suspect";

export default {
  components: {
    crime,
    victims,
    suspect,
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 20px;
}

hr {
  margin-top: 25px;
  margin-bottom: 15px;
}
</style>