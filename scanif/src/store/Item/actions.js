import { api } from "boot/axios";
import { axios } from "boot/axios";
import { Notify } from "quasar";
import { store } from "quasar/wrappers";
import { createStore } from "vuex";
export function validatorAction(context, itemBody) {
  console.log(itemBody);
  api
    .post("/api/item/validator", itemBody)
    .then(() => {
      Notify.create({
        color: "green-5",
        textColor: "white",
        icon: "check",
        message: "Item registrado com sucesso!",
        position: "top-right",
        timeout: 3000,
      });
    })
    .catch((error) => {
      if (error.response) {
        Notify.create({
          color: "red-5",
          textColor: "white",
          icon: "priority_high",
          message: "Item não existe, tente realizar o cadastro",
          position: "top-right",
          timeout: 3000,
        });
      } else {
        Notify.create({
          color: "red-5",
          textColor: "white",
          icon: "priority_high",
          message: "Oops, parece que o serviço está indisponível!",
          position: "top-right",
          timeout: 3000,
        });
      }
    });
}