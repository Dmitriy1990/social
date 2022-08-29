import styled from 'styled-components';

export const Page = styled.div`
  flex-direction: column;
  min-height: calc(100vh - 80px);
  display: flex;
  margin-top: 80px;

  @media (max-width: 576px){
    min-height: calc(100vh - 62px);
    margin-top: 62px;
  }
`;