import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import * as S from "./S.el";

import { Pagination } from "swiper";
import { Container } from "../UI/Container";
import { Button } from "../UI/Button";

export const Slider = () => {
  return (
    <S.Wrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Container>
            <S.Title>Социальная сеть People UP</S.Title>
            <div>
              <S.H3>Запуск совсем скоро !</S.H3>
            </div>
            <div>
              <S.Desc>
                Площадка People UP обладает всеми возможностями для эффективной
                подачи и монетизации контента путем платных подписок на
                пользователей, покупок разового доступа к закрытому контенту и
                отправки платных сообщений, которые отобразятся у получателя как
                приоритетные.
              </S.Desc>
            </div>
            <div>
              <Button>Пригласите меня на открытие</Button>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="slide-two">
          <Container>
            <S.Title white>
              Выигрывайте ценные призы инвестируя в современный проект
            </S.Title>
            <div>
              <S.Desc white>
                Мы выражаем огромную благодарность всем участникам, принимающим
                активное участие в финансировании проекта и успешности его
                развития !
              </S.Desc>
            </div>
            <S.Blocks>
              <S.Block>
                <S.BlockValue>2 180</S.BlockValue>
                <S.BlockDecsc>Соинвесторов</S.BlockDecsc>
              </S.Block>
              <S.Block>
                <S.BlockValue>27</S.BlockValue>
                <S.BlockDecsc>Разыгрывается призов</S.BlockDecsc>
              </S.Block>
              <S.Block>
                <S.BlockValue>349</S.BlockValue>
                <S.BlockDecsc>Выиграно призов</S.BlockDecsc>
              </S.Block>
            </S.Blocks>
            <div>
              <Button>Финансировать проект</Button>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </S.Wrapper>
  );
};
