import { Reducer } from 'redux';

import { IState } from './models';

const reducer: Reducer = (
  state: IState = {
    all: false,
    direct: false,
    layover1: false,
    layover2: false,
    layover3: false,
    filter: 'cheapest',
    tickets: [],
    loading: true,
    number: 5,
  },
  action: { type?: string; payload?: any } = {}
) => {
  switch (action.type) {
    case 'ALL':
      if (state.all === true) {
        return { ...state, all: false, direct: false, layover1: false, layover2: false, layover3: false };
      }
      return { ...state, all: true, direct: true, layover1: true, layover2: true, layover3: true };
    case 'DIRECT':
      if (state.direct === true) {
        return { ...state, direct: false, all: false };
      }
      return { ...state, direct: true, all: state.layover1 && state.layover2 && state.layover3 };
    case '1LAYOVER':
      if (state.layover1 === true) {
        return { ...state, layover1: false, all: false };
      }
      return { ...state, layover1: true, all: state.direct && state.layover2 && state.layover3 };
    case '2LAYOVER':
      if (state.layover2 === true) {
        return { ...state, layover2: false, all: false };
      }
      return { ...state, layover2: true, all: state.layover1 && state.direct && state.layover3 };
    case '3LAYOVER':
      if (state.layover3 === true) {
        return { ...state, layover3: false, all: false };
      }
      return { ...state, layover3: true, all: state.layover1 && state.layover2 && state.direct };
    case 'CHEAP':
      return { ...state, filter: 'cheapest' };
    case 'FAST':
      return { ...state, filter: 'fastest' };
    case 'OPTIMAL':
      return { ...state, filter: 'optimal' };
    case '5MORE':
      return { ...state, number: state.number + 5 };
    case 'SET':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case 'ALLSET':
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;
