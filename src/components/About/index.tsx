import React from "react";
import { Block, BlockTitle } from "../UI/Block";
import { Container } from "../UI/Container";
import * as S from "./S.el";

export const About = () => {
  return (
    <S.Wrapper id="about">
      <Block>
        <Container>
          <BlockTitle>О проекте</BlockTitle>
          <S.Desc>
            Ресурс подходит для блогеров, медийных личностей и других людей
            которые активно использую социальные сети для общения со своей
            аудиторией. Так же это отличная площадка для развития и
            популяризации контента среди остальных пользователей.
            <br />
            <br />
            Площадка People UP обладает всеми возможностями для эффективной
            подачи и монетизации контента путем платных подписок на
            пользователей, покупок разового доступа к закрытому контенту и
            отправки платных сообщений, которые отобразятся у получателя как
            приоритетные.
          </S.Desc>
        </Container>
      </Block>
    </S.Wrapper>
  );
};
