import { format, add } from 'date-fns';

import classes from './Flight.module.scss';

const Flight = (props: any) => {
  const { ticket } = props;
  let price = ticket.price;

  let date0: Date = new Date(ticket.segments[0].date);
  let date1: Date = new Date(ticket.segments[1].date);
  let duration0: number = ticket.segments[0].duration;
  let duration1: number = ticket.segments[1].duration;
  let time0: Date = add(date0, { minutes: duration0 });
  let time1: Date = add(date1, { minutes: duration1 });

  const start0 = format(new Date(date0), 'HH:mm');
  const start1 = format(new Date(date1), 'HH:mm');
  const result0 = format(new Date(time0), 'HH:mm');
  const result1 = format(new Date(time1), 'HH:mm');

  function countLayovers(length: number) {
    if (length === 0) {
      return 'Без пересадок';
    }
    if (length === 1) {
      return '1 пересадка';
    }
    if (length > 1) {
      return `${length} пересадки`;
    }
  }
  function convMin(minutes: number) {
    if (minutes >= 60) {
      return ((minutes / 60) | 0) + 'ч ' + (minutes % 60) + 'м';
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.price}>{price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')} Р</div>
        <div className={classes.airline}>{ticket.carrier}</div>
      </div>
      <div className={classes.flights}>
        <div className={classes.content}>
          <div className={classes.time}>
            <div className={classes['content-header']}>
              {ticket.segments[0].origin} - {ticket.segments[0].destination}
            </div>
            <div className={classes['content-value']}>
              {start0} - {result0}
            </div>
          </div>
          <div className={classes.length}>
            <div className={classes['content-header']}>В пути</div>
            <div className={classes['content-value']}>{convMin(ticket.segments[0].duration)}</div>
          </div>
          <div className={classes.change}>
            <div className={classes['content-header']}>{countLayovers(ticket.segments[0].stops.length)}</div>
            <div className={classes['content-value']}>
              {ticket.segments[0].stops.length === 0 ? '-' : ticket.segments[0].stops.join(', ')}
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.time}>
            <div className={classes['content-header']}>
              {ticket.segments[1].origin} - {ticket.segments[1].destination}
            </div>
            <div className={classes['content-value']}>
              {start1} - {result1}
            </div>
          </div>
          <div className={classes.length}>
            <div className={classes['content-header']}>В пути</div>
            <div className={classes['content-value']}>{convMin(ticket.segments[1].duration)}</div>
          </div>
          <div className={classes.change}>
            <div className={classes['content-header']}>{countLayovers(ticket.segments[1].stops.length)}</div>
            <div className={classes['content-value']}>
              {ticket.segments[1].stops.length === 0 ? '-' : ticket.segments[1].stops.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Flight;
