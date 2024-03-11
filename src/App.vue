<template>
  <v-app>
    <v-card flat>
      <v-app-bar app rounded="0">
        <ethernet-tray-menu
          @open="openPopup"
        />
      </v-app-bar>
    </v-card>
    <Popup
      :open="open"
    />
  </v-app>
</template>

<script>
import EthernetTrayMenu from './components/ethernet/EthernetTrayMenu.vue'
import Popup from './components/popup/Popup.vue'

export default {
  components: {
    EthernetTrayMenu,
    Popup,
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openPopup() {
      console.log('openPopup')
      this.open = !this.open
    },
  },
};
</script>

<style>
</style>
