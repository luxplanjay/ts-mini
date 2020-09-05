import React, { Component } from 'react';
import './TodoEdutor.css';

interface Props {
  onSubmit: (message: string) => void;
}

interface State {
  message: string;
}

class TodoEditor extends Component<Props, State> {
  state = {
    message: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
