import GetTickets from './components/services/service';

const tickets = new GetTickets();

function showAllTickets(dispatch: any) {
  tickets.getAllTickets().then((ticket) => {
    console.log('showAllTickets:', ticket);
    dispatch(setTickets(ticket));
  });
}

export const checkAll = () => ({ type: 'ALL' });
export const checkDirect = () => ({ type: 'DIRECT' });
export const checkOne = () => ({ type: '1LAYOVER' });
export const checkTwo = () => ({ type: '2LAYOVER' });
export const checkThree = () => ({ type: '3LAYOVER' });
export const chooseCheapest = () => ({ type: 'CHEAP' });
export const chooseFastest = () => ({ type: 'FAST' });
export const chooseOptimal = () => ({ type: 'OPTIMAL' });
export const setTickets = (tickets: { tickets: [] }) => {
  return {
    type: 'SET',
    payload: tickets.tickets,
  };
};
export const getTickets = () => {
  return (dispatch: any) => {
    {
      tickets.getId().then((res) => {
        console.log('getTickets:', res);
        showAllTickets(dispatch);
      });
    }
  };
};
