import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (evt) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case Fields.Email:
        setEmail(value);
        break;

      case Fields.Password:
        setPassword(value);
        break;

      default:
        console.warn(`Неизвестное имя поля - ${name}`);
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Почта
        <input type="mail" name="email" onChange={onChange} value={email} />
      </label>

      <label>
        Пароль
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
}
