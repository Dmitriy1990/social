import styled from 'styled-components'

export const Footer = styled.footer`
    background: #DFE8F0;
`

export const FooterInner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    max-width: 170px;
    margin: auto;
    p{
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 40px;
        @media (max-width: 768px){
            margin-bottom: 20px;
        }
    }
`;

export const TargetLink = styled.a`
  & > svg > path {
    transition: 0.2s;
  }
  &:active svg > path {
    fill: rgba(255, 255, 255, 0.6);
  }
  &:hover svg > path {
    fill: rgba(255, 255, 255, 0.8);
  }

`;