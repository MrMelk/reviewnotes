<template>
    <v-row>
          <v-spacer/>
          <v-col>
            
            <v-btn-toggle
              v-model="typeFilter"
              tile
              color="deep-purple accent-3"
              group
            >
              <v-btn value="all">
                All
              </v-btn>
  
              <v-btn value="tasks">
                Tasks
              </v-btn>
      
              <v-btn value="notes">
                Notes
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col>
            <v-btn-toggle
              v-model="priorityFilter"
              tile
              color="deep-purple accent-3"
              group
            >
            <v-btn value="none">
                None
              </v-btn>

              <v-btn value="high">
                High
              </v-btn>
  
              <v-btn value="medium">
                Medium
              </v-btn>
      
              <v-btn value="low" >
                Low
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-spacer/>
        </v-row>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api'
    
    export default defineComponent({
        name: "ToolBar",
        data () {
        return {
        toggle_one: 0,
        typeFilter: "all",
        priorityFilter: "none"

        }
        },
    })
</script>