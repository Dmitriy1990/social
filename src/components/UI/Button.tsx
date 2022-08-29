import styled from "styled-components/macro";

type Props = {
  fullWidth?: boolean;

};

export const Button = styled.a<Props>`
  display: inline-block;
  margin: auto;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  appearance: none;
  user-select: none;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  position: relative;
  background: #00A3FF;
  border-radius: 4px;
  color: #fff;
  &:disabled {
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    background: linear-gradient(180deg, #eaeaea 0%, #c2c2c2 100%);
    box-shadow: 0px 20px 20px -8px rgba(179, 179, 179, 0.4);
    border-radius: 8px;
    cursor: initial;
  }
`;
