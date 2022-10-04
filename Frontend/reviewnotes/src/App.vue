<template>
  <v-app>
    
    <v-main>
      <BreadCrumbs/>
     <div>
      <v-row no gutters>
        <v-col>
        <h1 class="header">Review notes</h1>
        </v-col>
      <v-col>
        <button class="btn">New note</button>
      </v-col>
      </v-row>
      <div class="toolbar">
      </div>
        <li v-for="note in notes" v-bind:key="note">
          {{note}}
        </li>
     </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from 'vue';
import BreadCrumbs from "./components/BreadCrumbs.vue"


export default defineComponent({
  name: 'App',
  test: "notes",

  components: {
    BreadCrumbs
  },
  data () {
    return {
      notes: []
    }
  },
  mounted() {
    axios.get("http://localhost:5000/reviewnotes/").then((res) => {
      this.notes = res.data;
      console.log(res.data);
    })
  },
  methods: {
    
  }
})
</script>

<style>

</style>
