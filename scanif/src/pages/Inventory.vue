<template>
  <q-page padding>
    <q-card>
      <q-card-section class="q-mt-sm center">
        <div class="text-h6 absolute-center text-black">
          Validação dos itens
        </div>
      </q-card-section>
      <q-card-section class="col-3 col-sm-6">
        <q-input
          clearable
          :rules="[(val) => !!val || 'Campo obrigatório']"
          v-model="form.tombamento"
          filled
          hint="Tombamento"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="form.tomb_antigo"
          clearable
          filled
          hint="Tombamento Antigo"
        />
      </q-card-section>
      <q-card-section color="primary">
        <q-input clearable v-model="form.localidade" filled hint="Localidade" />
      </q-card-section>
      <q-card-section color="primary">
        <q-input v-model="form.situacao" clearable filled hint="Situação" />
      </q-card-section>
      <q-card-section class="col-3 col-sm-6">
        <q-input v-model="form.estado" filled clearable hint="Estado do Bem" />
      </q-card-section>
      <q-card-actions class="on-right q-mt-md">
        <q-btn color="primary" @click="sendItem()"> Salvar </q-btn>
      </q-card-actions>
    </q-card>
    <create
      :modal="showModal"
      @closeDialog="controlDialog"
      :componentStore="'item'"
    />
    <q-page-sticky position="bottom-right" :offset="[20, 95]">
      <q-btn fab icon="qr_code_scanner" color="positive" />
    </q-page-sticky>
    <q-page-sticky
      @click="controlDialog()"
      position="bottom-right"
      :offset="[18, 25]"
    >
      <q-btn fab icon="create_new_folder" color="positive" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import create from "components/Item/create.vue";
import { defineComponent, ref, reactive, toRefs } from "vue";
export default {
  components: { create },
  setup() {
    const $store = useStore();
    let showModal = ref(false);

    let controlDialog = () => {
      showModal.value = !showModal.value;
    };
    const form = reactive({
      tombamento: "",
      tomb_antigo: "",
      situacao: "EFETIVADO",
      estado: "Em uso",
      localidade: "",
    });
    // let { tombamento, tomb_antigo, situacao, localidade, estado } =
    //   toRefs(form);

    const sendItem = () => {
      $store.dispatch("Item/validatorAction", form);
      form.tombamento = "";
    };

    return { form, sendItem, controlDialog, showModal };
  },
};
</script>
