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
      try {
        const { capabilities } = await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "Permissão da camera negada";
        } else if (error.name === "NotFoundError") {
          this.$emit("closeDialog");
          Notify.create({
            color: "red-5",
            textColor: "white",
            icon: "priority_high",
            message: "Nenhuma camera instalada neste dispositivo",
            position: "top-right",
            timeout: 3000,
          });
        } else if (error.name === "NotSupportedError") {
          this.$emit("closeDialog");
          Notify.create({
            color: "red-5",
            textColor: "white",
            icon: "priority_high",
            message: "Erro na aplicação",
            position: "top-right",
            timeout: 3000,
          });
        } else if (error.name === "NotReadableError") {
          this.$emit("closeDialog");
          Notify.create({
            color: "red-5",
            textColor: "white",
            icon: "priority_high",
            message: "Talvez sua camera já esteja em uso",
            position: "top-right",
            timeout: 3000,
          });
        } else if (error.name === "OverconstrainedError") {
          this.$emit("closeDialog");
          Notify.create({
            color: "red-5",
            textColor: "white",
            icon: "priority_high",
            message: "Camera frontal não encontrada",
            position: "top-right",
            timeout: 3000,
          });
        } else if (error.name === "StreamApiNotSupportedError") {
          this.$emit("closeDialog");

          Notify.create({
            color: "red-5",
            textColor: "white",
            icon: "priority_high",
            message: "Erro no navegador, tente outro navegador",
            position: "top-right",
            timeout: 3000,
          });
        }
      } finally {
        // hide loading indicator
      }
    },
    onDecode(decodeString) {
      this.decodeString = decodeString;
      return this.passEvent(decodeString);
    },
  },
};
</script>
