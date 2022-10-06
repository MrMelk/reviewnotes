<template>
    <div class="tableDiv">
        <TableHeader/>
        <v-row 
          v-for="note in filteredNotes"
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
          <v-col
          v-if="!note.assignees.length"
          >
          no assignees
          </v-col>
          <v-col v-else v-for="assignee in note.assignees" :key="assignee.$oid">
            {{userNames[assignee.$oid]}}
          </v-col>
          <v-col>
            {{userNames[note.reporterId.$oid]}}
          </v-col>
          <v-col>
            {{note.sectionRef}}
          </v-col>
          <v-col>
            {{note.createdAt.$date.substring(0,19)}}
          </v-col>
          <v-col>
            {{note.updatedAt.$date.substring(0,19)}}
          </v-col>
        </v-row>
        <v-btn block @click="loadMore">Load More</v-btn>
      </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api'
    import axios from "axios"
    import TableHeader from './TableHeader.vue';
    import { Note } from '@/types/Note';
    import { User } from '@/types/User';
    
    
    export default defineComponent({
        name: "DataTable",

        props: {
          typeFilter: {
            type: String
          }
        },

        components: {
            TableHeader,
        },
        data() {
            return {
                count: 3,
                notes: [] as Note[],
                users: [] as User[],
                userNames: {}
            }
        },
        computed: {
            filteredNotes: function() {
                const filteredNotes: Note[] = []
                if (this.notes.length !== 0 && this.count < this.notes.length){
                    for (let i = 0; i < this.count; i++) {
                        filteredNotes.push(this.notes[i]);
                    }
                }
                else {
                    for (let i = 0; i < this.notes.length; i++) {
                        filteredNotes.push(this.notes[i]);
                    }
                }

                return filteredNotes;
            }
        },
        mounted() {
            axios.get("http://localhost:5000/reviewnotes/").then((res) => {
                this.notes = res.data as Note[];
                console.log(res.data);
                
            });
            axios.get("http://localhost:5000/users/").then((res)=> {
                this.users = res.data as User[];
                console.log(res.data);
                let images: Record<string, string> = {}
                for(let user of this.users){
                    images[user.id] = user.name
                }
                this.userNames = images;
                console.log(images["001"]);     
            });
        },
        methods: {
            loadMore(){
                this.count += 3;
                console.log(this.count);
                console.log(this.typeFilter)
            }
        }
    })

</script>