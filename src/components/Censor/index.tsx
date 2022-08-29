import React from "react";
import { Block, BlockTitle } from "../UI/Block";
import { Container } from "../UI/Container";
import * as S from "./S.el";
import device from "../../assets/img/device.png";

export const Censor = () => {
  return (
    <S.Wrapper id="censor">
      <S.WrapperInner>
        <Block>
          <Container>
            <S.TextBlock>
              <BlockTitle>О цензуре</BlockTitle>
              <p>
                Ресурс подходит для блогеров, медийных личностей и других людей
                которые активно использую социальные сети для общения со своей
                аудиторией. Так же это отличная площадка для развития и
                популяризации контента среди остальных пользователей.
                <br />
                <br />
                <S.Image src={device} alt="" />
                Площадка People UP обладает всеми возможностями для эффективной
                подачи и монетизации контента путем платных подписок на
                пользователей, покупок разового доступа к закрытому контенту и
                отправки платных сообщений, которые отобразятся у получателя как
                приоритетные.
              </p>
            </S.TextBlock>
          </Container>
        </Block>
      </S.WrapperInner>
    </S.Wrapper>
  );
};
