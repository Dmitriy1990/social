import styled from "styled-components";

export const Container = styled.div<{
  pNone?: boolean;
  page?: boolean;
  mtNone?: boolean;
  pTabletNone?: boolean;
  mbNone?: boolean;
  mobPNone?: boolean;
  wide?: boolean
}>`
  width: 100%;
  max-width: ${p => p.wide ? 1168 : 1128}px;
  margin: 0 auto;
  padding: 0 34px;
  position: relative;
  height: 100%;
  @media (max-width: 576px) {
    padding-right: ${(props) => (props.pNone ? "0" : "20px")};
    padding-left: ${(props) => (props.pNone ? "0" : "20px")};
  }
  @media (max-width: 767px) {
    padding-right: ${(props) => (props.pNone ? "0" : "20px")};
    padding-left: ${(props) => (props.pNone ? "0" : "20px")};
  }
  ${(props) => {
    if (props.pTabletNone) {
      return `
        @media (max-width: 1024px) {
          padding-right: 0px;
          padding-left: 0px;
        }
      `;
    }
  }}
  ${(props) => {
    if (props.page) {
      return `
        margin-top: 60px;
        @media (max-width: 767px) {
          margin-top: ${props.mtNone ? "0" : "20px"};
        }
        @media (min-width: 767px) and (max-width: 1024px) {
          margin-top: 40px;
        }
      `;
    }
    if (props.mobPNone) {
      return `
        @media (max-width: 767px) {
          padding-right: 0;
          padding-left: 0;
        }
      `;
    }
  }}
`;

export const ContainerCustom = styled(Container)`
  @media (max-width: 380px) {
    max-width: 100%;
  }
  @media (max-width: 360px) {
    max-width: 100%;
  }
`

export const ContainerWidth = styled(Container)`
  @media (max-width: 767px) {
    max-width: none;
    padding: 0;
  }
`