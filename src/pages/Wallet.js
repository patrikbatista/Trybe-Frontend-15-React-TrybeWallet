import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import SelectPagamento from '../components/SelectPagamento';
import SelectCategoria from '../components/SelectCategoria';
import Formulario from '../components/Formulario';
import Header from '../components/Header';
import { getApiAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
      despesa: '',
      categoria: '',
      pagamento: '',
      moeda: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, despesa, categoria, pagamento, moeda } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Header />

        <form name="valor">
          <Formulario
            valor={ valor }
            despesa={ despesa }
            handleChange={ this.handleChange }
          />
          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              name="moeda"
              value={ moeda }
              onChange={ this.handleChange }
            >
              {currencies.map((currency, index) => (
                <option key={ index } value={ currency }>{currency}</option>
              ))}
            </select>
          </label>
          <SelectPagamento value={ pagamento } handleChange={ this.handleChange } />
          <SelectCategoria value={ categoria } handleChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({

  getApi: () => dispatch(getApiAction()),

});

const mapStateToProps = (state) => ({

  currencies: state.wallet.currencies,

});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
