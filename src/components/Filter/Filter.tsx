import classes from "./Filter.module.scss";
import classNames from "classnames";

const Filter = () => {
  return (
    <div className={classes.buttons}>
      <button className={classNames(classes.button, classes["button-cheap"])}>
        Самый дешевый
      </button>
      <button className={classNames(classes.button, classes["button-fast"])}>
        Самый быстрый
      </button>
      <button className={classNames(classes.button, classes["button-optimal"])}>
        Оптимальный
      </button>
    </div>
  );
};
export default Filter;
