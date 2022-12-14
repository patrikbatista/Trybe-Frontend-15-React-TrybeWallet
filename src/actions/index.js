// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const addUserAction = (email) => ({

  type: ADD_USER,

  payload: {
    email,
  },

});

export const addCurrenciesAction = (currencies) => ({

  type: ADD_CURRENCIES,
  payload: {
    currencies,
  },
});

export const addExpenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
  },
});

const numLength = 3;
const arrayFiltered = (array) => array
  .filter((currencie) => currencie.length === numLength);

export const getApiAction = () => (dispatch) => (
// dispatch(mySomeNotifyAction());

  fetch(END_POINT)

    .then((response) => response.json()

      .then(

        (json) => {
          const currenciesApi = Object.keys(json);
          const filteredCurrencies = arrayFiltered(currenciesApi);

          dispatch(addCurrenciesAction(filteredCurrencies));
        },

      )));

export const getExpenseApiAction = (expense) => (dispatch) => (
// dispatch(mySomeNotifyAction());

  fetch(END_POINT)

    .then((response) => response.json()

      .then(

        (json) => {
          // const { value, currency } = expense;
          // const { ask } = json[currency];
          // const total = value * ask;
          dispatch(addExpenseAction({ ...expense, exchangeRates: json }));
        },

      )));
