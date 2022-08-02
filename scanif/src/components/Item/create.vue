<template>
  <q-dialog v-model="dialog" persistent :maximized="true">
    <q-card class="bg-positive text-white">
      {{ item }}
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
                v-model="item.tombamento"
                label="Tombamento"
                :dense="dense"
              />
              <q-select
                outlined
                emit-value
                map-options
                v-model="item.status_id"
                label="Status"
                :dense="dense"
                :options="statusOptions"
              />

              <q-input
                outlined
                v-model="item.localidade"
                label="Localidade"
                :dense="dense"
              />

              <q-input
                outlined
                v-model="item.denominacao"
                label="Denominação"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="item.termo"
                label="Termo"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="item.valor"
                label="Valor(R$)"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="item.tomb_antigo"
                label="Tombamento antigo"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="item.estado"
                label="Estado do bem"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="item.situacao"
                label="Situação"
                :dense="dense"
              />
              <q-input
                outlined
                v-model="item.n_serie"
                label="Número de Série"
                :dense="dense"
              />

              <q-input
                outlined
                v-model="item.observacao"
                label="Observação"
                :dense="dense"
              />
            </div>
          </div>
          <q-card-actions class="on-right q-mt-md">
            <q-btn color="primary" @click="$emit('closeDialog'), sendItem()">
              Salvar
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
export default {
  props: ["modal"],
  emits: ["closeDialog"],
  setup(props) {
    const $store = useStore();

    let dialog = computed(() => {
      return props.modal;
    });
    let controlDialog = () => {
      showModal.value = !showModal.value;
    };
    const statusOptions = computed({
      get: () => $store.state.Item.statusList,
    });

    const item = reactive({
      tombamento: "",
      tomb_antigo: "",
      situacao: "EFETIVADO",
      estado: "Em uso",
      localidade: "",
      denominacao: "",
      valor: "",
      n_serie: "",
      observacao: "",
      status_id: "",
    });
    const sendItem = () => {
      $store.dispatch("Item/createAction", item);
    };

    return { dialog, item, sendItem, statusOptions };
  },
};
</script>
