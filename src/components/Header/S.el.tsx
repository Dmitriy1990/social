import styled from "styled-components/macro";
import {Link} from "react-router-dom"

export const Header = styled.header`
  width: 100%;
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 9999;
  @media (max-width: 576px){
    height: 62px;
  }
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
`;

export const Logo = styled(Link)`
    padding-top: 5px;
    @media (max-width: 576px){
        padding-top: 0;
        svg{
            width: 125px;
            height: 62px;
        }
       
    }
`
export const Ul = styled.ul<{ open?: boolean }>`
    list-style: none;
    display: flex;
    @media (max-width: 767px){
        position: fixed;
        top: 80px;
        left: ${(props) => (props.open ? '0' : '-100%')};
        width: 100%;
        height: 100%;
        background: #fff;
        flex-direction: column;
        padding-top: 40px;
    }
    @media (max-width: 576px){
        top: 62px;
    }
`;

export const Li = styled.li<{mob?: boolean; desc?: boolean}>`
    align-items: center;
    margin-right: 40px;
    display: ${p => p.mob ? 'none' : 'flex'};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    &:last-child{
        margin-right: 0;
    }
    @media (max-width: 767px){
        margin-right: 0;
        margin-bottom: 40px;
        justify-content: center;
        display: ${_ => _.desc ? 'none' : 'flex'} ;
        color: #00A3FF;
        .active{
          color: #000000;
        }
    }
`;

export const IconBtn = styled.div`
    cursor: pointer;
    margin-left: 10px;
    height: 20px;
    width: 20px;
`;

export const Login = styled.button`
    background: transparent;
    padding: 0;
    appearance: none;
    ${props => props.theme.text};
    cursor: pointer;
    border: none;
    color: ${props => props.theme.white};
    &:focus{
        outline: none;
    }
`;

export const MenuBtn = styled.span<{ open?: boolean }>`
  position: absolute;
  margin-top: -3px;
  right: 0px;
  width: 24px;
  height: 8px;
  cursor: pointer;
  z-index: 5;
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  span {
    transition: all 0.3s ease 0s;
    top: calc(50% - 1px);
    right: 0px;
    position: absolute;
    background-color: #00A3FF;
  }
  span:first-child {
    top: ${(props) => (props.open ? 'calc(50% - 2px)' : '0px')};
    width: ${(props) => (props.open ? 17 : 24)}px;
    height: 3px;
    border-radius: 2px;
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
  span:last-child {
    top: ${(props) => (props.open ? 'auto' : '6px')};
    bottom: ${(props) => (props.open ? 'calc(50% - 1px)' : '0px')};
    width: ${(props) => (props.open ? '17px' : '12px')};
    height: 3px;
    border-radius: 2px;
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};
  }
  @media (max-width: 767px) {
    position: absolute;
    margin-left: 0px;
  }
`;

export const Name = styled.div`
  padding: 0 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  @media (max-width: 767px){
    display: inline-block;
  }
`