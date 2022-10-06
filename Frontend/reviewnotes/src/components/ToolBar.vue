<template>
    <v-row>
          <v-spacer/>
          <v-col>
            
            <v-btn-toggle
              v-model="typeFilter"
              tile
              color="deep-purple accent-3"
              mandatory
            >
              <v-btn value="all" @click="logVal">
                All
              </v-btn>
  
              <v-btn value="tasks" @click="logVal">
                Tasks
              </v-btn>
      
              <v-btn value="notes" @click="logVal">
                Notes
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col>
            <v-btn-toggle
              v-model="priorityFilter"
              tile
              color="deep-purple accent-3"
              mandatory
            >
            <v-btn value="None" @click="logVal">
                None
              </v-btn>

              <v-btn value="High" @click="logVal">
                High
              </v-btn>
  
              <v-btn value="Medium" @click="logVal">
                Medium
              </v-btn>
      
              <v-btn value="Low" @click="logVal">
                Low
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-spacer/>
        </v-row>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api'
  import { storeToRefs } from 'pinia';
  import { useTaskFilterStore, usePriorityFilterStore } from '../App.vue';
  
  export default defineComponent({
      name: "ToolBar",
      setup () {
        const typeFilterStore = useTaskFilterStore();
        const { typeFilter } = storeToRefs(typeFilterStore);

        const priorityFilterStore = usePriorityFilterStore();
        const { priorityFilter } = storeToRefs(priorityFilterStore)

        return {
          typeFilter,
          priorityFilter
        }
      },
      data () {
      return {
      toggle_one: 0,
      //typeFilter: "all",
      //priorityFilter: "none"

      }
      },
      methods: {
        logVal() {
          //console.log(this.typeFilter);
          //console.log(this.priorityFilter);
        }
      }
  })
</script>