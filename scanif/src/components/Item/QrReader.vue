<template>
  <q-dialog
    v-model="dialog"
    persistent
    style="max-width: 100px; max-height: 100px"
  >
    <q-bar>
      <q-space />
      <q-btn dense flat icon="close" @click="$emit('closeDialog')">
        <q-tooltip class="bg-white text-white">Fechar</q-tooltip>
      </q-btn>
    </q-bar>
    <p>{{ error }}</p>
    <p>{{ decodeString }}</p>

    <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>
  </q-dialog>
</template>

<script>
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
    async onInit(promise) {
      try {
        const { capabilities } = await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "Permissão da camera negada";
        } else if (error.name === "NotFoundError") {
          this.error = "Nenhuma camera instalada neste dispositivo";
        } else if (error.name === "NotSupportedError") {
          this.error = "page is not served over HTTPS (or localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "Talvez sua camera já esteja em uso";
        } else if (error.name === "OverconstrainedError") {
          this.error =
            "did you requested the front camera although there is none?";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "browser seems to be lacking features";
        }
      } finally {
        // hide loading indicator
      }
    },
    onDecode(decodeString) {
      this.decodeString = decodeString;
    },
  },
};
</script>
