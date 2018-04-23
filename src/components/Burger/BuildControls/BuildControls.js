import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
import { Button } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <Label.Group tag>
        <Label color="red" as="a">
          Price: ${props.price.toFixed(2)}
        </Label>
      </Label.Group>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <br />
      <Button
        primary
        onClick={props.ordered}
        disabled={!props.purchaseable}
        className={classes.OrderButton}
      >

        Order Now
      </Button>
    </div>
  );
};

export default buildControls;
