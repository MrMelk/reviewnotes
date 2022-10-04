<template>
    <div>
    <v-breadcrumbs 
    :items="items"
    divider="/">
    </v-breadcrumbs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
    
export default defineComponent({
  name: 'BreadCrumbs',

    data () {
      return {
        items: [{
          text: 'Engagements',
          disabled: false,
          href: '/engagements/2021_001/reviewnotes',
        },
        {
          text: 'Microsoft 2021',
          disabled: false,
          href: '/engagements/2021_001/reviewnotes',
        },
        {
          text: 'reviewnotes',
          disabled: true,
          href: '/engagements/2021_001/reviewnotes',
        },
      ],
      }
    },
  })
</script>