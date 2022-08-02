<template>
  <q-dialog v-model="dialog" persistent :maximized="true">
    <q-card class="bg-positive text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" @click="$emit('closeDialog')">
          <q-tooltip class="bg-white text-black">Fechar</q-tooltip>
        </q-btn>
      </q-bar>
    </q-card>
  </q-dialog>
</template>
<script>
import { useStore } from "src/store";
import { computed } from "vue";
export default {
  props: ["modal"],
  emits: ["closeDialog"],
  setup(props) {
    let dialog = computed(() => {
      return props.modal;
    });

    return { dialog };
  },
};
</script>
