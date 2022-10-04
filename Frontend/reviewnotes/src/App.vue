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
        sdsd
      </div>
     </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BreadCrumbs from "./components/BreadCrumbs.vue"

export default defineComponent({
  name: 'App',
  
  components: {
    BreadCrumbs
  },
  data () {
    return {
      
    }
  },
})
</script>

<style>

</style>
