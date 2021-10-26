import styled from "styled-components";
import { colors } from "../../const";
import { device } from "../../breakpoints";

export const Card = styled.div`
  border: 1px solid rgb(223, 206, 206);
  margin-right: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  width: 270px;
  border-radius: 5px;
  @media only screen and ${device.sm} {
    width: 100%;
  }
  @media only screen and ${device.lg} {
    width: 330px;
    max-width: 450px;
    margin: 50px 10px;
  }
`;

export const Header = styled.h1`
  width: 100;
  font-size: 20px;
  padding-top: 20px;
  padding-left: 15px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Data = styled.p`
  font-size: 14px;
  padding-top: 20px;
  padding-left: 15px;
  padding-bottom: 30px;
`;

export const Locatie = styled.span`
  margin-left: 20px;
  padding-right: 10px;
`;

export const Bara = styled.div`
  height: 5px;
  background-color: ${({ type }) =>
    type === "rosu"
      ? colors.red
      : colors.green && type === "verde"
      ? colors.green
      : colors.blue && type === "albastru"
      ? colors.blue
      : colors.yellow};
  width: 96%;
  margin-left: 5px;
  border-radius: 2px;
  margin-bottom: 5px;
`;
