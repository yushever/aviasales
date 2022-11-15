import { connect } from 'react-redux';

import Flight from '../Flight/Flight';
import * as actions from '../../actions';

// import classes from './FlightList.module.scss';

const FlightList = (props: { tickets: [] }) => {
  console.log('ticketsInFlights:', props.tickets);
  const elements = props.tickets.slice(0, 5).map((ticket: { price: number; carrier: string; segments: [] }) => {
    return (
      <div key={ticket.price}>
        <Flight ticket={ticket} />
      </div>
    );
  });
  return <ul>{elements}</ul>;
};

const mapStateToProps = (state: { tickets: [] }) => {
  return {
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps, actions)(FlightList);
