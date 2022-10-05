<template>
    <v-row>
        <v-col v-for="item in header"
        :key="item.heading">
        <th>{{item.heading}}</th>
        </v-col>
    </v-row>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: "TableHeader",
    data() {
        return {
            header:[
        {heading: "Title"},
        {heading: "Type"},
        {heading: "State"},
        {heading: "Priority"},
        {heading: "Due Date"},
        {heading: "Assignees"},
        {heading: "Reporter"},
        {heading: "Section"},
        {heading: "Created"},
        {heading: "Updated"},

      ]
        }
    }

})
</script>