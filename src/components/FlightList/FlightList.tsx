import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

import Flight from '../Flight/Flight';
import * as actions from '../../actions';
import { IState, ITicket } from '../../models';

import classes from './FlightList.module.scss';

const FlightList = (props: IState) => {
  let filteredElements: ITicket[] = props.tickets;

  const filterLayovers = (element: ITicket) => {
    return (
      (props.direct && (element.segments[0].stops.length === 0 || element.segments[1].stops.length === 0)) ||
      (props.layover1 && (element.segments[0].stops.length === 1 || element.segments[1].stops.length === 1)) ||
      (props.layover2 && (element.segments[0].stops.length === 2 || element.segments[1].stops.length === 2)) ||
      (props.layover3 && (element.segments[0].stops.length === 3 || element.segments[1].stops.length === 3))
    );
  };

  if (!props.all && (props.direct || props.layover1 || props.layover2 || props.layover3)) {
    filteredElements = filteredElements.filter((element: ITicket) => {
      return filterLayovers(element);
    });
  }

  if (props.filter === 'cheapest') {
    filteredElements = filteredElements.sort(function (a: ITicket, b: ITicket) {
      return a.price - b.price;
    });
  } else if (props.filter === 'fastest') {
    filteredElements = filteredElements.sort(function (a: ITicket, b: ITicket) {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
    });
  } else if (props.filter === 'optimal') {
    filteredElements = filteredElements.sort(function (a: ITicket, b: ITicket) {
      return (
        a.segments[0].stops.length +
        a.segments[1].stops.length -
        (b.segments[0].stops.length + b.segments[1].stops.length)
      );
    });
  }

  let loader = props.loading ? <Spin className={classes.spinner} /> : null;

  const elements = filteredElements.slice(0, props.number).map((ticket: ITicket) => {
    const id = uuidv4();
    return (
      <div key={id}>
        <Flight ticket={ticket} />
      </div>
    );
  });
  return (
    <div className={classes.container}>
      {loader}
      <ul>{elements}</ul>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    all: state.all,
    direct: state.direct,
    layover1: state.layover1,
    layover2: state.layover2,
    layover3: state.layover3,
    filter: state.filter,
    tickets: state.tickets,
    loading: state.loading,
    number: state.number,
  };
};

export default connect(mapStateToProps, actions)(FlightList);
