import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  text-align: center;
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 576px){
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Desc = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 60px;
  @media (max-width: 768px){
    margin-bottom: 40px;
  }
  @media (max-width: 576px){
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Label = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background: #f6f7f8;
  border: 1px solid #edf0f7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 250px;
  height: 40px;
  padding: 4px 10px;
  margin-bottom: 20px;
  @media (max-width: 576px){
    width: 100%;
  }
`;
