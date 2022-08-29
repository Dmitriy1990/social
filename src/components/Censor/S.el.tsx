import styled, { css } from "styled-components";
import device from "../../assets/img/device.png";

export const Wrapper = styled.div`
  background: linear-gradient(90deg, #ffffff 0%, rgba(237, 241, 244, 0) 100%);
`;

export const WrapperInner = styled.div`
  background: url(${device}) no-repeat;
  background-position: 100% 100%;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  @media (max-width: 1080px) {
    background: none;
  }
`;

export const TextBlock = styled.div`
  width: 490px;
  h3 {
    text-align: left;
    @media (max-width: 1080px) {
      text-align: center;
    }
  }
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    
    @media (max-width: 576px){
        font-size: 12px;
        line-height: 18px;
        text-align: center;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  display: none;
  text-align: center;
  margin: auto;
  @media (max-width: 1080px) {
    display: block;
  }
`;
