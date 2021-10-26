import styled from "styled-components";
import { device } from "../../breakpoints";

export const Flex = styled.body`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 200px;
  margin-bottom: 50px;
  @media only screen and ${device.sm} {
    margin-left: 30px;
  }
  @media only screen and ${device.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
`;
