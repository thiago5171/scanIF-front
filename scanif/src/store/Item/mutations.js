export function fillItem(state, data) {
  state.validatorItem.estado = data.estado;
  state.validatorItem.situacao = data.situacao;
  state.validatorItem.tomb_antigo = data.tomb_antigo;
  state.validatorItem.tombamento = data.tombamento;
  state.validatorItem.localidade = data.localidade;
}
