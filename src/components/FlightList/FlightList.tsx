import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spin } from 'antd';

import Flight from '../Flight/Flight';
import * as actions from '../../actions';

import 'antd/dist/antd.css';

import classes from './FlightList.module.scss';

const FlightList = (props: {
  all: boolean;
  direct: boolean;
  layover1: boolean;
  layover2: boolean;
  layover3: boolean;
  filter: 'cheapest';
  tickets: [];
  loading: boolean;
  number: number;
}) => {
  console.log('ticketsInFlights:', props.tickets);

  let filteredElements: any = props.tickets;

  const filterLayovers = (element: { carrier: string; price: number; segments: any }) => {
    return (
      (props.direct && (element.segments[0].stops.length === 0 || element.segments[1].stops.length === 0)) ||
      (props.layover1 && (element.segments[0].stops.length === 1 || element.segments[1].stops.length === 1)) ||
      (props.layover2 && (element.segments[0].stops.length === 2 || element.segments[1].stops.length === 2)) ||
      (props.layover3 && (element.segments[0].stops.length === 3 || element.segments[1].stops.length === 3))
    );
  };

  if (!props.all && (props.direct || props.layover1 || props.layover2 || props.layover3)) {
    filteredElements = filteredElements.filter((element: { carrier: string; price: number; segments: any }) => {
      return filterLayovers(element);
    });
  }

  if (props.filter === 'cheapest') {
    filteredElements = filteredElements.sort(function (
      a: { carrier: string; price: number; segments: any },
      b: { carrier: string; price: number; segments: any }
    ) {
      return a.price - b.price;
    });
  } else if (props.filter === 'fastest') {
    filteredElements = filteredElements.sort(function (
      a: { carrier: string; price: number; segments: any },
      b: { carrier: string; price: number; segments: any }
    ) {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
    });
  } else if (props.filter === 'optimal') {
    filteredElements = filteredElements.sort(function (
      a: { carrier: string; price: number; segments: any },
      b: { carrier: string; price: number; segments: any }
    ) {
      return (
        a.segments[0].stops.length +
        a.segments[1].stops.length -
        (b.segments[0].stops.length + b.segments[1].stops.length)
      );
    });
  }

  console.log('FILTER', filteredElements);
  let loader = props.loading ? <Spin className={classes.spinner} /> : null;

  const elements = filteredElements
    .slice(0, props.number)
    .map((ticket: { price: number; carrier: string; segments: [] }) => {
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

const mapStateToProps = (state: {
  all: boolean;
  direct: boolean;
  layover1: boolean;
  layover2: boolean;
  layover3: boolean;
  filter: 'cheapest';
  tickets: [];
  loading: boolean;
  number: number;
}) => {
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
