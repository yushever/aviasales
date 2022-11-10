import classNames from 'classnames';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './Filter.module.scss';

const Filter = (props: any) => {
  return (
    <div className={classes.buttons}>
      <button
        className={classNames(
          classes.button,
          classes['button-cheap'],
          props.filter === 'cheapest' ? classes.selected : ''
        )}
        onClick={props.chooseCheapest}
      >
        Самый дешевый
      </button>
      <button
        className={classNames(
          classes.button,
          classes['button-fast'],
          props.filter === 'fastest' ? classes.selected : ''
        )}
        onClick={props.chooseFastest}
      >
        Самый быстрый
      </button>
      <button
        className={classNames(
          classes.button,
          classes['button-optimal'],
          props.filter === 'optimal' ? classes.selected : ''
        )}
        onClick={props.chooseOptimal}
      >
        Оптимальный
      </button>
    </div>
  );
};

const mapStateToProps = (state: { filter: string }) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, actions)(Filter);
