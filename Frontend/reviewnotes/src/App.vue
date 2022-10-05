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
      <div class="centerDiv"><h1>Filters</h1></div>
      <div class="toolbar">
        <ToolBar/>
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
import ToolBar from "./components/ToolBar.vue"; 


export default defineComponent({
  name: 'App',

  components: {
    BreadCrumbs,
    NewNoteBtn,
    DataTable,
    ToolBar
},
  data () {
    return {
    }
  },
})
</script>

<style>

</style>
