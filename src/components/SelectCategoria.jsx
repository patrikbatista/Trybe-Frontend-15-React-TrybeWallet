import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectCategoria extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" value={ value } onChange={ handleChange }>
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabaho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectCategoria.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectCategoria;