import GetTickets from './components/services/service';

const ticketsService = new GetTickets();

export const ALL = 'ALL';
export const DIRECT = 'DIRECT';
export const LAYOVER1 = '1LAYOVER';
export const LAYOVER2 = '2LAYOVER';
export const LAYOVER3 = '3LAYOVER';
export const CHEAP = 'CHEAP';
export const FAST = 'FAST';
export const OPTIMAL = 'OPTIMAL';
export const MORE5 = '5MORE';
export const SET = 'SET';
export const ALLSET = 'ALLSET';

export const checkAll = () => ({ type: ALL });
export const checkDirect = () => ({ type: DIRECT });
export const checkOne = () => ({ type: LAYOVER1 });
export const checkTwo = () => ({ type: LAYOVER2 });
export const checkThree = () => ({ type: LAYOVER3 });
export const chooseCheapest = () => ({ type: CHEAP });
export const chooseFastest = () => ({ type: FAST });
export const chooseOptimal = () => ({ type: OPTIMAL });
export const showMoreTickets = () => ({ type: MORE5 });
export const setTickets = (tickets: { tickets: [] }) => {
  return {
    type: SET,
    payload: tickets.tickets,
  };
};
export const setAllTickets = () => ({ type: ALLSET });

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
