<template>
  <q-dialog v-model="dialog" persistent :maximized="true">
    <q-card class="bg-positive text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" @click="$emit('closeDialog')">
          <q-tooltip class="bg-white text-black">Fechar</q-tooltip>
        </q-btn>
      </q-bar>

      <div class="q-pa-sm">
        <q-card class="q-m-sm">
          <q-card-section class="q-mt-sm center">
            <div class="text-h6 absolute-center text-black">
              Registro de item
            </div>
          </q-card-section>
          <div class="q-pa-md">
            <div
              class="q-gutter-md"
              style="display: flex; flex-direction: column"
            >
              <q-input
                outlined
                v-model="text"
                label="Tombamento"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="text"
                label="Denominação"
                :dense="dense"
              />
              <q-select
                outlined
                v-model="text"
                label="Localidade"
                :dense="dense"
              />
              <q-input outlined v-model="text" label="Termo" :dense="dense" />
              <q-input
                outlined
                v-model="text"
                label="Valor(R$)"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="text"
                label="Tombamento antigo"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="text"
                label="Estado do bem"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="text"
                label="Situação"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="text"
                label="Número de Série"
                :dense="dense"
              />

              <q-input
                outlined
                v-model="text"
                label="Observação"
                :dense="dense"
              />
            </div>
          </div>
          <q-separator inset />
          <q-input />
        </q-card>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { useStore } from "vuex";
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
