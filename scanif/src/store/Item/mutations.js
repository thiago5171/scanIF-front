export function fillItem(state, data) {
  state.validatorItem.estado = data.estado;
  state.validatorItem.situacao = data.situacao;
  state.validatorItem.tomb_antigo = data.tomb_antigo;
  state.validatorItem.tombamento = data.tombamento;
  state.validatorItem.localidade = data.localidade;
}

export function getMutation(state, response) {
  response.map((item) => {
    state.statusList.push((value = item.id), (label = item.nome));
  });
}

export function getValidItemsMutation(state, response) {
  state.items = [];

  state.items = response;
}
