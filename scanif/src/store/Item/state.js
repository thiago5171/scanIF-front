export default function () {
  let genericSelect = {
    value: 0,
    label: "",
  };
  return {
    validatorItem: {},
    completeItem: {},
    items: [],
    columnsReports: [
      {
        name: "tombamento",
        required: true,
        field: "tombamento",
        label: "Tombamento",
        align: "left",
        sortable: true,
      },
      {
        name: "denominacao",
        align: "center",
        label: "Denominação",
        field: "denominacao",
        sortable: true,
      },
      {
        name: "localidade",
        label: "Localidade",
        field: "localidade",
        sortable: true,
      },
      { name: "termo", label: "Termo", field: "termo" },
      { name: "valor", label: "Valor(R$)", field: "valor" },
      { name: "tomb_antigo", label: "Tombamento Antigo", field: "tomb_antigo" },
      {
        name: "estado",
        label: "Estado do Bem",
        field: "estado",
        sortable: true,
      },
      {
        name: "situacao",
        label: "Situação",
        field: "situacao",
        sortable: true,
      },
      { name: "n_serie", label: "Número de Série", field: "n_serie" },
      { name: "observacao", label: "Observação", field: "observacao" },
      { name: "nome", label: "Status", field: "nome" },
    ],
    statusList: [
      {
        value: 1,
        label: "encontrado e na lista",
        sigla: "el",
      },
      {
        value: 2,
        label: "encontrado e não esta na lista",
        sigla: "enl",
      },
      {
        value: 3,
        label: "encontrado, ausente na lista e com identificação",
        sigla: "eali",
      },
      {
        value: 4,
        label: "encontrado, ausente na lista e sem identificação",
        sigla: "ealsi",
      },
    ],
  };
}
