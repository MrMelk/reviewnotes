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
          <NewNoteBtn/>
        </v-col>
      </v-row>
      </div>
      <div class="toolbar">
        <h1>Filter bar</h1>
      </div>
      <DataTable/>

    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BreadCrumbs from "./components/BreadCrumbs.vue";
import NewNoteBtn from "./components/NewNoteBtn.vue";
import DataTable from "./components/DataTable.vue"; 


export default defineComponent({
  name: 'App',

  components: {
    BreadCrumbs,
    NewNoteBtn,
    DataTable
},
  data () {
    return {

    }
  },
})
</script>

<style>

</style>
