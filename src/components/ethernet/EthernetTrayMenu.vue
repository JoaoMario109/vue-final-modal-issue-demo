<template>
  <v-menu
    :close-on-content-click="false"
    nudge-left="400"
    nudge-bottom="25"
  >
    <template
      #activator="{ on, attrs }"
    >
      <v-card
        id="ethernet-tray-menu-button"
        elevation="0"
        color="transparent"
        v-bind="attrs"
        v-on="on"
      >
        Open Tray
      </v-card>
    </template>
    <v-card
      elevation="1"
      width="400"
    >
      <v-container>
        <div>
          No ethernet interfaces available
        </div>
        <div class="center-button">
          <v-btn @click="$emit('open')">Open Popup</v-btn>
        </div>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EthernetTrayMenu',
})
</script>

<style>
</style>
