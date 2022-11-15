import { Reducer } from 'redux';

const reducer: Reducer = (
  state: {
    all: boolean;
    direct: boolean;
    layover1: boolean;
    layover2: boolean;
    layover3: boolean;
    filter: string;
    tickets: [];
  } = {
    all: false,
    direct: false,
    layover1: false,
    layover2: false,
    layover3: false,
    filter: 'cheapest',
    tickets: [],
  },
  action: { type: string; payload?: any }
) => {
  console.log(action);
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
    case 'SET':
      return { ...state, tickets: action.payload };

    default:
      return state;
  }
};

export default reducer;
