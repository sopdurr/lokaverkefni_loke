<template>
  <v-row>
    <v-col v-if="addCriminal">
      <span>
        <h4>Suspect</h4>
      </span>
      <v-select :items="suspects" item-text="name" label="Choose from list" >
      </v-select>
      <span class="center"> OR </span>
      <div>
        <v-btn width="100%" @click="add">Register new criminal</v-btn>
      </div>
    </v-col>
    <v-col v-else>
      <span>
        <h4>Register new criminal</h4>
      </span>
      <v-text-field label="Name" v-model="newSuspects.name"></v-text-field>
      <v-text-field
        label="Home Address"
        v-model="newSuspects.homeAddress"
      ></v-text-field>
      <v-text-field
        label="Phone Number"
        v-model="newSuspects.phoneNumber"
      ></v-text-field>
      <v-text-field label="Age" v-model="newSuspects.age"></v-text-field>
      <v-text-field label="Comment" v-model="newSuspects.note"></v-text-field>
      <v-checkbox color="orange" label="Prisoned before ?"></v-checkbox>
      <v-btn width="100%" @click="addSuspects"> Register criminal </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      addCriminal: true,
      newSuspects: {},
    };
  },
  computed: {
    suspects() {
      return this.$store.getters.criminals;
    },
  },
  methods: {
    addSuspects() {
      this.$store.commit("addSuspects", this.newSuspects);
      this.newSuspects = {};
      this.addCriminal = true;
    },
        add() {
      if (this.addCriminal === true) {
        return (this.addCriminal = false);
      }
      if (this.addCriminal === false) {
        return (this.addCriminal = true);
      }
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 5px 0px 20px 0px
}

.button {
  margin-top: 10px;
}

span {
  color: #e1f5fe;
}
</style>