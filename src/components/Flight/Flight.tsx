import classes from './Flight.module.scss';

const Flight = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.price}>13 400 P</div>
        <div className={classes.airline}>S7 Airlines</div>
      </div>
      <div className={classes.flights}>
        <div className={classes.content}>
          <div className={classes.time}>
            <div className={classes['content-header']}>MOW - HKT</div>
            <div className={classes['content-value']}>10:00 - 11:00</div>
          </div>
          <div className={classes.length}>
            <div className={classes['content-header']}>В пути</div>
            <div className={classes['content-value']}>21ч 15м</div>
          </div>
          <div className={classes.change}>
            <div className={classes['content-header']}>2 пересадки</div>
            <div className={classes['content-value']}>HKG, JNB</div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.time}>
            <div className={classes['content-header']}>MOW - HKT</div>
            <div className={classes['content-value']}>10:00 - 11:00</div>
          </div>
          <div className={classes.length}>
            <div className={classes['content-header']}>В пути</div>
            <div className={classes['content-value']}>21ч 15м</div>
          </div>
          <div className={classes.change}>
            <div className={classes['content-header']}>2 пересадки</div>
            <div className={classes['content-value']}>HKG, JNB</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Flight;
