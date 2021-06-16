<template>
  <v-container class="inline">
    <v-row>
      <v-col>
        <span class="inline"> <h4>Crimes list</h4> </span>
        <ol class="inline">
          <li
            v-for="(c, index) in crimes"
            :key="index"
            v-show="c.closed === false"
          >
            <input
              type="checkbox"
              :checked="c.closed"
              @click="crimeDone(index)"
            />
            <span v-bind:class="{ strike: c.closed }">
              {{ c.name }}
            </span>
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    crime: Array,
  },
  data: function () {
    return {
      searchTerm: "",
    };
  },
  computed: {
    crimes() {
      return this.$store.getters.crimes.filter((item) => {
        return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
  methods: {
    crimeDone(value) {
      this.$store.commit("crimeDone", value);
    },
  },
};
</script>

<style scoped>


h4 {
  color: #e1f5fe;
  margin-bottom: 10px;
}
</style>