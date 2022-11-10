import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './Search.module.scss';

const Search = (props: any) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Количество пересадок</div>
      <ul>
        <li>
          <label className={classes.label}>
            <input
              type="checkbox"
              className={classes['custom-checkbox']}
              checked={props.all}
              onChange={props.checkAll}
            />
            <span className={classes.span}>Все</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input
              type="checkbox"
              className={classes['custom-checkbox']}
              checked={props.direct}
              onChange={props.checkDirect}
            />
            <span className={classes.span}>Без пересадок</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input
              type="checkbox"
              className={classes['custom-checkbox']}
              checked={props.layover1}
              onChange={props.checkOne}
            />
            <span className={classes.span}>1 пересадка</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input
              type="checkbox"
              className={classes['custom-checkbox']}
              checked={props.layover2}
              onChange={props.checkTwo}
            />
            <span className={classes.span}>2 пересадки</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input
              type="checkbox"
              className={classes['custom-checkbox']}
              checked={props.layover3}
              onChange={props.checkThree}
            />
            <span className={classes.span}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: {
  all: boolean;
  direct: boolean;
  layover1: boolean;
  layover2: boolean;
  layover3: boolean;
}) => {
  return {
    all: state.all,
    direct: state.direct,
    layover1: state.layover1,
    layover2: state.layover2,
    layover3: state.layover3,
  };
};

export default connect(mapStateToProps, actions)(Search);

// export default Search;
