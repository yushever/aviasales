import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './Footer.module.scss';

const Footer = (props: any) => {
  return (
    <div>
      <button className={classes.button} onClick={props.showMoreTickets}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

const mapStateToProps = (state: { number: number }) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps, actions)(Footer);
