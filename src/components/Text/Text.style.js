import styled from "styled-components";
import { colors } from "../../const";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const Title = styled.h1`
  color: ${colors.darkblue};
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.6;
  padding: 5rem 0;
  font-family: "Work Sans", sans-serif;
`;
