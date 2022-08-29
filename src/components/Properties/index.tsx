import React from "react";
import { Block, BlockTitle } from "../UI/Block";
import { Container } from "../UI/Container";
import * as S from "./S.el";
import { ReactComponent as AudioIcon } from "../../assets/svg/audio.svg";
import { ReactComponent as DonutIcon } from "../../assets/svg/donut.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/message.svg";
import { ReactComponent as PaidIcon } from "../../assets/svg/paid.svg";
import { ReactComponent as StatsIcon } from "../../assets/svg/stats.svg";

export const Properties = () => {
  return (
    <S.Wrapper id="properties">
      <Block>
        <Container wide>
          <BlockTitle>Особенности</BlockTitle>
          <S.Blocks>
            <S.Block>
              <S.BlockIcon>
                <PaidIcon />
              </S.BlockIcon>
              <S.BlockTitle>Платный доступ</S.BlockTitle>
              <S.BlockDesc>
                Владелец контента может самостоятельно и по своему желанию
                установить режим доступа к публикуемому контенту: бесплатный, по
                подписке или же разовый доступ с фиксированной ценой.
              </S.BlockDesc>
            </S.Block>

            <S.Block>
              <S.BlockIcon>
                <DonutIcon />
              </S.BlockIcon>
              <S.BlockTitle>Донаты</S.BlockTitle>
              <S.BlockDesc>
                Любой пользователь может задонатить любую сумму другому
                пользователю через систему блокчейн, никаких лимитов, все
                безопасно и анонимно.
              </S.BlockDesc>
            </S.Block>

            <S.Block>
              <S.BlockIcon>
                <MessageIcon />
              </S.BlockIcon>
              <S.BlockTitle>Платные сообщения</S.BlockTitle>
              <S.BlockDesc>
                Есть возможность отправки платных сообщений другим
                пользователям, которые в свою очередь будут отображаться у
                получателя как приоритетные.
              </S.BlockDesc>
            </S.Block>

            <S.Block>
              <S.BlockIcon>
                <StatsIcon />
              </S.BlockIcon>
              <S.BlockTitle>Расширенная статистика</S.BlockTitle>
              <S.BlockDesc>
                Каждый пользователь в данном разделе может отслеживать
                эффективность и общую статистику в разных разрезах: подписки,
                отписки, донаты, траты.
              </S.BlockDesc>
            </S.Block>

            <S.Block>
              <S.BlockIcon>
                <AudioIcon />
              </S.BlockIcon>
              <S.BlockTitle>Аудио подкасты</S.BlockTitle>
              <S.BlockDesc>
                Платформа позволяет организовывать и проводить массовые
                аудиотрансляции
              </S.BlockDesc>
            </S.Block>
          </S.Blocks>
        </Container>
      </Block>
    </S.Wrapper>
  );
};
