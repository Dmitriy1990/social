import styled from 'styled-components'

export const Block = styled.div`
    padding: 80px 0;
    @media (max-width: 768px){
        padding: 40px 0;
    }
    @media (max-width: 576px){
        padding: 20px 0;
    }
`;

export const BlockTitle = styled.h3`
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
    @media (max-width: 768px){
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 28px;
    }
    @media (max-width: 576px){
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 10px;
    }
`