import classes from './Search.module.scss';

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Количество пересадок</div>
      <ul>
        <li>
          <label className={classes.label}>
            <input type="checkbox" className={classes['custom-checkbox']} />
            <span className={classes.span}>Все</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input type="checkbox" className={classes['custom-checkbox']} />
            <span className={classes.span}>Без пересадок</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input type="checkbox" className={classes['custom-checkbox']} />
            <span className={classes.span}>1 пересадка</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input type="checkbox" className={classes['custom-checkbox']} />
            <span className={classes.span}>2 пересадки</span>
          </label>
        </li>
        <li>
          <label className={classes.label}>
            <input type="checkbox" className={classes['custom-checkbox']} />
            <span className={classes.span}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default Search;
