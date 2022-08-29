import { useState, useContext, useEffect } from "react";
import { Container } from "../UI/Container";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import * as S from "./S.el";
import { Button } from "../UI/Button";
import { Link } from "react-scroll";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false)
  }

  return (
    <S.Header>
      <Container>
        <S.HeaderInner>
          <S.Logo to={"/"}>
            <LogoIcon />
          </S.Logo>

          <S.Ul open={open}>
            <>
              <S.Li>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={onClose}
                >
                  О проекте
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="properties"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={onClose}
                >
                  Особенности
                </Link>
              </S.Li>
              <S.Li>
                {" "}
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="censor"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={onClose}
                >
                  О цензуре
                </Link>
              </S.Li>
              <S.Li>Ru / En</S.Li>
              <S.Li mob>
                <Button>Финансировать проект</Button>
              </S.Li>
            </>
          </S.Ul>
          <S.MenuBtn open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
          </S.MenuBtn>
        </S.HeaderInner>
      </Container>
    </S.Header>
  );
};
