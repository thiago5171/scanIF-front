<template>
  <q-dialog
    v-model="dialog"
    persistent
    style="max-width: 100px; max-height: 100px"
  >
    <q-bar>
      <q-space />
      <q-btn dense flat icon="close" @click="$emit(passEvent(decodeString))">
        <q-tooltip class="bg-white text-white">Fechar</q-tooltip>
      </q-btn>
    </q-bar>
    <p>{{ error }}</p>
    <p>{{ decodeString }}</p>

    <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>
  </q-dialog>
</template>

<script>
import { Notify } from "quasar";

import { QrcodeStream } from "vue3-qrcode-reader";
import { computed, reactive } from "vue";
export default {
  props: ["modal"],
  emits: ["closeDialog"],

  data(props) {
    let dialog = computed(() => {
      return props.modal;
    });
    return {
      dialog,
      error: "",
      decodeString: "",
    };
  },
  components: {
    QrcodeStream,
  },
  methods: {
    passEvent(decodeString) {
      this.$emit("tombamento", decodeString);

      this.$emit("closeDialog");
    },
    async onInit(promise) {
      s;
    },
    onDecode(decodeString) {
      this.decodeString = decodeString;
      return this.passEvent(decodeString);
    },
  },
};
</script>
