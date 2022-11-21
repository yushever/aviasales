import GetTickets from './components/services/service';

const ticketsService = new GetTickets();

export const checkAll = () => ({ type: 'ALL' });
export const checkDirect = () => ({ type: 'DIRECT' });
export const checkOne = () => ({ type: '1LAYOVER' });
export const checkTwo = () => ({ type: '2LAYOVER' });
export const checkThree = () => ({ type: '3LAYOVER' });
export const chooseCheapest = () => ({ type: 'CHEAP' });
export const chooseFastest = () => ({ type: 'FAST' });
export const chooseOptimal = () => ({ type: 'OPTIMAL' });
export const showMoreTickets = () => ({ type: '5MORE' });
export const setTickets = (tickets: { tickets: [] }) => {
  return {
    type: 'SET',
    payload: tickets.tickets,
  };
};
export const setAllTickets = () => ({ type: 'ALLSET' });

async function showAllTickets(dispatch: any) {
  let tickets = await ticketsService.getAllTickets();
  while (tickets.stop === false) {
    dispatch(setTickets(tickets));
    tickets = await ticketsService.getAllTickets();
  }
  dispatch(setAllTickets());
}
export const getTickets = () => {
  return (dispatch: any) => {
    {
      ticketsService.getId().then(() => {
        showAllTickets(dispatch);
      });
    }
  };
};
