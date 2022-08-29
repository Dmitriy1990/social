import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
`;

const flex = css`
  display: flex;
  justify-content: center;
`;

export const Blocks = styled.div`
  flex-wrap: wrap;
  ${flex};
  align-items: stretch;
`;

export const Block = styled.div`
  display: flex;
  margin: 0 10px 50px;
  flex-direction: column;
  align-items: center;
  max-width: 340px;
  width: 100%;
  @media (max-width: 576px) {
    margin: 0 10px 40px;
  }
`;

export const BlockIcon = styled.div`
  ${flex};

  width: 100px;
  height: 100px;
  align-items: center;
  background: #00a3ff;
  box-shadow: 0px 14px 20px -4px rgba(0, 163, 255, 0.2);
  border-radius: 30px;
  margin-bottom: 20px;
`;

export const BlockTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

export const BlockDesc = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #233649;
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
