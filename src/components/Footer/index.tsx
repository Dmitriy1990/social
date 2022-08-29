import { Container } from "../UI/Container";
import * as S from "./S.el";
import { ReactComponent as Icon } from "../../assets/svg/tg.svg";
import { Block } from "../UI/Block";

export const Footer = () => {
  return (
    <S.Footer>
      <Block>
        <Container>
          <S.FooterInner>
            <p>2021 &copy; People UP</p>
            <S.TargetLink target="_blank" rel="noreferrer" href="https://t.me/">
              <Icon />
            </S.TargetLink>
          </S.FooterInner>
        </Container>
      </Block>
    </S.Footer>
  );
};
