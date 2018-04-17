import React, { PropTypes } from "react";
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"}/>
      <BurgerIngredient type={"Cheese"}/>
      <BurgerIngredient type={"meat"}/>
      <BurgerIngredient type={"Salad"}/>
      <BurgerIngredient type={"bread-bottom"}/>
    </div>
  );
};

burger.propTypes = {};

burger.defaultProps = {};

export default burger;
