<template>
    <div>
        <v-btn
        color="primary"
        dark
        @click.stop="dialog = true">
        Open Dialog
      </v-btn>
  
      <v-dialog
        v-model="dialog"
        max-width="30%"
      >
        <v-card>
          <v-card-title class="text-h5">
            Bender?! You stole the atom
          </v-card-title>
  
          <v-card-text>
            Here will be the form to create a new review note
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Ok
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "NewNoteBtn",
    data() {
        return {
          dialog: false  
        }
    },
})
</script>
