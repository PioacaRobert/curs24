import styled from "styled-components";
import { colors } from "../../const";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.span`
  color: white;
  font-size: 1.6rem;
  display: inline-block;
  border-radius: 5px;
  border: 2px solid ${colors.green};
  background-color: ${colors.green};
  cursor: pointer;
  padding: 1.5rem 4rem;
  transition: background-color 0.4s;
  &:hover {
    color: ${colors.green};
    background-color: white;
    border-color: ${colors.green};
  }
`;
