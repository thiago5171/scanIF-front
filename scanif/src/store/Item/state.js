export default function () {
  let genericSelect = {
    value: 0,
    label: "",
  };
  return {
    validatorItem: {},
    completeItem: {},
    items: [],
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
