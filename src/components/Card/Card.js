import React from "react";
// import { colors } from "../../const";

import { Card as CardElement, Header, Data, Locatie, Bara } from "./Card.style";

export const Card = ({ head, data, locatie, type }) => {
  return (
    <CardElement>
      <Header>{head}</Header>
      <Data>
        {data}
        <Locatie>{locatie}</Locatie>
      </Data>

      <Bara type={type}></Bara>
    </CardElement>
  );
};
