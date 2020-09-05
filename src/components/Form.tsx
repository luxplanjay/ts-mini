import React, { useState, useRef } from 'react';

interface Props {
  onSubmit: (cred: { email: string; password: string }) => void;
}

export default function Form({ onSubmit }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Неизвестное имя поля - ${name}`);
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
