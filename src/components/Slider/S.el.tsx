import styled, { css } from "styled-components";
import bg from "../../assets/img/slide.jpg";
import bg768 from "../../assets/img/slide768.jpg";
import bg320 from "../../assets/img/slide320.jpg";
import bg2 from "../../assets/img/slide2.jpg";
import bg2768 from "../../assets/img/slide2768.jpg";
import bg2320 from "../../assets/img/slide2320.jpg";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  .swiper-wrapper {
    @media (max-width: 768px) {
      padding-bottom: 40px;
    }
  }
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #ffffff;
    border: 1px solid #00a3ff;
    border-radius: 50%;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #00a3ff;
  }
  .swiper-slide {
    height: 600px;
    padding: 70px 0 40px;
    text-align: center;
    background: url(${bg}) no-repeat center;
    background-size: cover;
    &.slide-two {
      background: url(${bg2}) no-repeat center;
      background-size: cover;
    }
    @media (max-width: 768px) {
      padding: 30px 0 40px;
      background-image: url(${bg768});
      height: 320px;
      &.slide-two {
        background-image: url(${bg2768});
      }
    }
    @media (max-width: 576px) {
      background-image: url(${bg320});
      height: 275px;
      padding: 10px 0 20px;
      &.slide-two {
        background-image: url(${bg2320});
      }
    }
  }
`;

const style = css`
  text-align: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  display: inline-block;
  margin: auto auto 10px;
  @media (max-width: 576px) {
    padding: 4px 10px;
  }
`;

export const Title = styled.h2<{ white?: boolean }>`
  font-size: 64px;
  line-height: 75px;
  ${style};
  ${(p) => {
    if (p.white) {
      return `
        background: none;
        color: #fff;
      `;
    }
  }}
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 4px;
  }
`;

export const H3 = styled.h3<{ white?: boolean }>`
  ${style};
  font-size: 36px;
  line-height: 42px;
  ${(p) => {
    if (p.white) {
      return `
        background: none;
        color: #fff;
      `;
    }
  }}
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
  }
`;

export const Desc = styled.p<{ white?: boolean }>`
  ${style};
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  max-width: 560px;
  ${(p) => {
    if (p.white) {
      return `
        background: none;
        color: #fff;
        max-width: 880px;
      `;
    }
  }}
  width: 100%;
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;

export const Blocks = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
`;

export const BlockValue = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const BlockDecsc = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
