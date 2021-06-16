<template>
  <v-row>
    <v-col>
      <span>
        <h4>Register new crime</h4>
      </span>
      <v-text-field
        label="Name of Crime - autamatic by system"
        disabled
        v-model="newCrime.name"
      ></v-text-field>
      <v-text-field
        label="Place of Crime"
        v-model="newCrime.crimePlace"
      ></v-text-field>
      <v-text-field
        label="Postal Code"
        v-model="newCrime.postalCode"
      ></v-text-field>
      <v-select
        :items="crimeType"
        item-text="crime"
        label="Type of Crime"
        v-model="newCrime.crimeType"
      >
      </v-select>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="newCrime.date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="newCrime.date"
            label="Date of Crime"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="newCrime.date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(newCrime.date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-select
        label="Severity"
        :items="severity"
        item-text="number"
        v-model="newCrime.severity"
      >
      </v-select>
      <v-text-field label="Notes" v-model="newCrime.note"></v-text-field>
      <v-btn @click="addCrime" width="100%">Add Crime</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      newCrime: {},
      rules: [
        (value) => !!value || "Required.",
        (value) => (value || "").length <= 90 || "Max 90 characters",
      ],
    };
  },
  computed: {
    crimes() {
      return this.$store.getters.crimes;
    },
    severity() {
      return this.$store.getters.severity;
    },
    crimeType() {
      return this.$store.getters.crimeType;
    },
  },
  methods: {
    addCrime() {
      this.$store.commit("addCrime", this.newCrime);
      this.newCrime = {};
    },
  },
};
</script>

<style scoped >
div {
  color: #e1f5fe;
  text-align: left;
}
span {
  color: #e1f5fe;
}
</style>