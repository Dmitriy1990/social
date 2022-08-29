import React from "react";
import { Block } from "../UI/Block";
import { Button } from "../UI/Button";
import { Container } from "../UI/Container";
import * as S from "./S.el";

export const Invest = () => {
  return (
    <S.Wrapper>
      <Block>
        <Container>
          <S.Title>
            Узнайте первыми о запуске новой социальной сети People UP
          </S.Title>
          <S.Desc>
            Чтобы не пропустить открытие, оставьте свою электронную почту и мы
            пригласим вас !
          </S.Desc>
          <S.Label>Электронная почта</S.Label>
          <S.Input />
          <div>
            <Button>Получить подарок</Button>
          </div>
        </Container>
      </Block>
    </S.Wrapper>
  );
};
