<template>
    <div class="tableDiv">
        <TableHeader/>
        <v-row 
          v-for="note in notes"
          :key="note._id.$oid"
          >
          <v-col>
            {{note.title}}
          </v-col>
          <v-col>
            {{note.type}}
          </v-col>
          <v-col>
            {{note.status}}
          </v-col>
          <v-col>
            {{note.priority.text}}
          </v-col>
          <v-col>
            {{note.dueDate}}
          </v-col>
          <v-col>
            {{note.assignees}}
          </v-col>
          <v-col>
            {{note.reporterId.$oid}}
          </v-col>
          <v-col>
            {{note.sectionRef}}
          </v-col>
          <v-col>
            {{note.createdAt.$date}}
          </v-col>
          <v-col>
            {{note.updatedAt.$date}}
          </v-col>

        </v-row>
      </div>
</template>


<script lang="ts">
    import { defineComponent } from '@vue/composition-api'
    import axios from "axios"
    import TableHeader from './TableHeader.vue';
    import { Note } from '@/types/Note';
    
    export default defineComponent({
        name: "DataTable",
        components: {
            TableHeader,
        },
        data() {
            return {
                notes: [] as Note[]
            }
        },
        mounted() {
            axios.get("http://localhost:5000/reviewnotes/").then((res) => {
                this.notes = res.data as Note[];
                console.log(res.data);
    })
  }
    })
</script>