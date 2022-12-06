import React from "react";

export const russian = {
  ACCOUNT_CREATION_SUCCESS: "Учетная запись успешно создана!",
  ACCOUNT_CREATION_FAILURE: "Не удалось создать учетную запись!",
  FETCH_FAILURE: "Ошибка сервера! Пожалуйста, повторите попытку позже.",
  FULL_NAME_LABEL: "Полное имя",
  EMAIL_LABEL: "Эл. адрес",
  PASSWORD_LABEL: "Пароль",
  CONFIRM_PASSWORD_LABEL: "Подтвердите Пароль",
  OCCUPATION_LABEL: "Род занятий",
  STATE_LABEL: "Государство",
  SIGN_UP_LABEL: "Зарегистрироваться",
  EMAIL_HELPER_TEXT: "Неверный адрес электронной почты",
  PASSWORD_HELPER_TEXT: (
    <span>
      - По крайней мере 8 символов
      <br />
      - По крайней мере одна цифра
      <br />
      - По крайней мере одна заглавная буква
      <br />
      - По крайней мере одна строчная буква
      <br />
      - Нет пробелов (проверьте наличие пробелов в конце)
      <br />
    </span>
  ),
  CONFIRM_PASSWORD_ERROR_HELPER_TEXT: "- Пароли не совпадают",
};
