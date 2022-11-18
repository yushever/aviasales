import { connect } from 'react-redux';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import FlightList from '../FlightList/FlightList';
import Footer from '../Footer/Footer';
import * as actions from '../../actions';

import classes from './App.module.scss';

function App(props: any) {
  props.getTickets();
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.container}>
        <div className={classes.search}>
          <Search />
        </div>
        <div className={classes.flights}>
          <div className={classes.filter}>
            <Filter />
          </div>
          <div className={classes.info}>
            <FlightList />
          </div>
          <div className={classes.add}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, actions)(App);
