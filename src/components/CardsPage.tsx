import React, { FC } from "react";
import Card, { CardVariant } from "./Card";

const CardsPage: FC = () => {
  return (
    <div>
      <Card
        width={"200px"}
        height={"200px"}
        variant={CardVariant.outlined}
        onClick={(num) => {
          console.log("click " + num);
        }}
      >
        <button>Button</button>
        <div>ljvjg</div>
      </Card>
    </div>
  );
};

export default CardsPage;
