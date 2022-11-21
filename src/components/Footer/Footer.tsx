import { connect } from 'react-redux';

import * as actions from '../../actions';
import { IState } from '../../models';

import classes from './Footer.module.scss';

interface FooterProps {
  showMoreTickets: () => void;
}

const Footer = (props: FooterProps) => {
  return (
    <div>
      <button className={classes.button} onClick={props.showMoreTickets}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps, actions)(Footer);
