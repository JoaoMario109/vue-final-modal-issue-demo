<template>
  <div>
    <vue-final-modal
      v-model="show_modal"
      classes="modal-container"
      content-class="modal-content"
    >
      <v-card>
        <v-card-title class="justify-space-between text-h5">
          <span>Some Test Modal</span>
        </v-card-title>
        <v-card-subtitle class="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt blanditiis aut odio doloremque esse iste, distinctio suscipit fugit voluptatem maiores ducimus beatae architecto molestiae minima illo repellat! Maiores, eum earum!
        </v-card-subtitle>
        <v-card-actions class="justify-center">
          <v-btn
            class="ma-2 elevation-2"
            color="grey"
            text
            @click="show_modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="ma-2 elevation-2"
            color="primary"
            text
            @click="show_modal = false;"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </vue-final-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Popup',
  data() {
    return {
      show_modal: false,
    }
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    open(open: boolean): void {
      this.show_modal = true
    },
  },
})
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
}
.center-button {
  width: 100;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
