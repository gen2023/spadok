import React from 'react';
import '../seminar.css';
import '../mobile_seminar.css';
import logo from '../../../images/logo.png';
import block3 from '../../../images/block3.png';
import block_result from '../../../images/block_result.png';
import ico1 from '../../../images/ico1_bloc6.png';
import ico2 from '../../../images/ico2_bloc6.png';
import ico3 from '../../../images/ico3_bloc6.png';
import face1 from '../../../images/face1.png';
import face2 from '../../../images/face2.png';
import face3 from '../../../images/face3.png';
//import face4 from '../../../images/face4.png';

function Base() {
  return (
    <>
      <div className="pageBaseSeminar1">
        <div className="titleSeminar">
          <div className="titleSeminar_block">ШКОЛА ПЕРЦЕПТИВНОГО ОБУЧЕНИЯ</div>
        </div>
        <div className="pageBaseSeminar1_row">
          <div className="blockLogo">
            <img className="logoSpadok" src={logo} alt="logo Spadok" />
          </div>
          <div className="pageBaseSeminar1_row_text">
            ПЕРЦЕПЦИЯ теория и практика (1й базовый)
          </div>
        </div>
        <div className="footerPageBaseSeminar1">Киев, ул. Почайнинская, 70</div>
      </div>
      <div className="pageBaseSeminar2">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage2">
            {/* <div>
              <img src={logo} alt="logo Spadok" />
            </div> */}
            <div className="title_leftColumnPage2">о семинаре</div>
          </div>
          <div className="rightColumnPage2">
            <div className="titlePage2">
              <span className="titlePage2_span">
                КОМУ БУДЕТ ПОЛЕЗЕН СЕМИНАР:
              </span>
            </div>
            <div className="textPage2SeminarBase">
              - массажистам, которые хотят разобраться в причинах возникновения
              нарушений работы организма человека.
              <br />- психологам, которые занимаются телесно-ориентированными
              практиками и в поиске СВОИХ профессиональных инструментов.
              <br />- кранио-сакральным терапевтам, которые хотят научиться
              стабильно удерживать состояние повышенной чувствительности и
              интерпретировать свои ощущения;
              <br />- тем, кто хочет изучить методы самозащиты от негативных
              влияний.
              <br /> - тем, кто хочет расширить мировосприятие, т.е. свои
              персональные рамки.
              <br />
              Перцепция позволяет вам управлять своим вниманием, т.е.,
              &#171;слышать&#187; себя и опираясь на собственный практический
              опыт, находить настоящую причину происходящего
              <br />- тем, кто хочет уйти от стереотипов. <br />
              Вместо готовых протоколов, мы учим самостоятельному подбору техник
              для устранения причин, вызвавших изменения в теле.
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar2">
          {/* ШКОЛА ПЕРЦПТИВНЫХ ТЕХНОЛОГИЙ */}
        </div>
      </div>
      <div className="pageBaseSeminar3">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage3">
            <img
              className="imgTitle_leftColumnPage3"
              src={block3}
              alt="img Spadok"
            />
          </div>
          <div className="rightColumnPage3">
            <div className="titlePage3">
              <span className="titlePage3_span">НА СЕМИНАРЕ ВЫ СМОЖЕТЕ:</span>
            </div>
            <div className="textPage3SeminarBase">
              - <span className="nameBlockText">УВИДЕТЬ</span> тело по-новому и
              получить информацию, которую вам не расскажут ни на одном
              обучающем курсе по работе с телом
              <br />- <span className="nameBlockText">УБЕДИТЬСЯ</span> в
              эффективности перцептивных техник на разных телах (на участниках
              семинара)
              <br />- <span className="nameBlockText">УЗНАТЬ</span> о
              &#171;точках коррекции&#187; в теле, влияющих на его состояние
              <br />- <span className="nameBlockText">ПОЧУВСТВОВАТЬ</span>
              &nbsp;воздействие и увидеть результат на себе
              <br />- <span className="nameBlockText">ОЩУТИТЬ</span> движение и
              натяжение ткани, движение энергий и не только.
              <br />- <span className="nameBlockText">РАСШИРИТЬ</span> свои
              возможности специалиста применяющего перцепцию в своей сфере
              коррекции здоровья
              <br />- <span className="nameBlockText">ОВЛАДЕТЬ </span>
              перцептивными техниками, которые сразу сможете использовать в
              работе
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar3"></div>
      </div>
      <div className="pageBaseSeminar4">
        <div className="pageBaseSeminar4_header">
          <span className="pageBaseSeminar4_title">результат</span>
          <span className="pageBaseSeminar4_image">
            <img src={block_result} alt="block result" />
          </span>
        </div>
        <div className="pageBaseSeminar4_row">
          <div className="titlePage4">
            <span className="titlePage4_span">
              ПО ОКОНЧАНИЮ ТРЕХ ДНЕЙ СЕМИНАРА ВЫ ПОЛУЧИТЕ ОТВЕТЫ НА ГЛАВНЫЕ
              ВОПРОСЫ:
            </span>
          </div>
          <div className="textPage4SeminarBase">
            - Как связаны физические процессы в теле и ситуации, происходящие в
            нашей жизни?
            <br />
            - Как специалисту научиться &#171;слушать ткани&#187; руками?
            <br />
            - Как управлять своим ВНИМАНИЕМ?
            <br />
            - Как безошибочно определять проблему в теле клиента и КУДА НУЖНО
            СМОТРЕТЬ, чтобы ее увидеть?
            <br />
            - Какие техники безопасной работы с клиентом сохраняют вашу силу и
            энергию.
            <br />
            - Как это работать от таза и ног (а не силой рук)?
            <br />- Как найти и убрать в теле клиента напряжения, которые
            находятся на одном из основных уровнях:
            <div className="Podtext_textPage4SeminarBase">
              - на физическом (кости, мышцы, сосуды, нервная ткань, внутренние
              органы, фасции);
              <br />
              - на психоэмоциональном (понижать уровень эмоционального
              напряжения);
              <br />- в окружающем пространстве в целом (используя
              психодинамические техники).
            </div>
            - Как можно улучшить те техники, которыми вы уже пользуетесь?
          </div>
        </div>
      </div>
      <div className="pageBaseSeminar5">
        <div className="blockPage5"></div>
        <div className="contentPage5">
          <div className="contentPage5_block">
            <span className="persentBlock5">83.00%</span>
            <br />
            <span className="textBlock5">практика</span>
          </div>
          <div className="contentPage5_block">
            <span className="persentBlock5">17.00%</span>
            <br />
            <span className="textBlock5">теория</span>
          </div>
        </div>
        <div className="blockPage5"></div>
      </div>
      <div className="pageBaseSeminar6">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage6">
            <div className="title_leftColumnPage6">ОСОБЕННОСТИ СЕМИНАРА</div>
          </div>
          <div className="rightColumnPage6">
            <div className="rightColumnPage6_title">ОСОБЕННОСТИ СЕМИНАРА</div>
            <div className="rightColumnPage6_row">
              <img src={ico1} alt="ico1" />
              <span>
                Все свои знания и умения мы передаем из рук в руки, погружая Вас
                в ощущения через перцепцию.
              </span>
            </div>
            <div className="rightColumnPage6_row">
              <img src={ico2} alt="ico2" />
              <span>
                Изложение материала простым и понятным языком. Доступно всем,
                даже без медицинского образования.
              </span>
            </div>
            <div className="rightColumnPage6_row">
              <img src={ico3} alt="ico3" />
              <span>
                Практика с разными мастерами увеличивает скорость восприятия
                материала, его объём и глубину ощущений в работе
              </span>
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar6"></div>
      </div>
      <div className="pageBaseSeminar7">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage7">
            <div className="leftColumnPage7_title">
              <span>
                МАСТЕРА
                <br />
                ШКОЛЫ
              </span>
              <br />
              <span className="leftColumnPage7_title__">ведущие семинар</span>
            </div>
          </div>
          <div className="rightColumnPage6">
            <div className="rightColumnPage6_title">
              <span>МАСТЕРА ШКОЛЫ</span>
              <br />
              <span className="rightColumnPage6_title__">ведущие семинар</span>
            </div>
            <div className="rightColumnPage7_row">
              <img src={face1} alt="ico1" />
              <div>
                <div className="titne_rightColumnPage7_row">
                  Елена Завгородняя
                </div>
                <div className="description_rightColumnPage7_row">
                  Практический психолог, физиолог-реабилитолог, Мастер Школы
                  перцептивный технологий СПАДОК, специалист школы «Интегральная
                  психонейробиодинамика» В.Филимонова, специалист в области
                  краниосакральной терапии, остеопатии, психосоматических
                  расстройств, очной и дистанционной коррекции психодинамических
                  состояний, эстетическом моделировании лица и тела, фасциальной
                  пластики тела. Практический опыт в области телесных практик
                  более 20 лет.
                </div>
              </div>
            </div>
            <div className="rightColumnPage7_row">
              <img src={face2} alt="ico2" />
              <div>
                <div className="titne_rightColumnPage7_row">
                  Ирина Слабошпицкая
                </div>
                <div className="description_rightColumnPage7_row">
                  физиолог-реабилитолог, Мастер Школы перцептивный технологий
                  СПАДОК, Мастер школы «Соматической интеграции» Ю.Чикурова,
                  специалист в области биологического центрирования, мягких
                  мануальных техник, коррекции последствий родовых травм у
                  детей, очной и дистанционной коррекции психодинамических
                  состояний, краниосакральной терапии, фасциальной пластики лица
                  и тела, гармонизации парных отношений, личностного роста.
                  Практический опыт в области телесных практик более 20 лет.
                </div>
              </div>
            </div>
            <div className="rightColumnPage7_row">
              <img src={face3} alt="ico2" />
              <div>
                <div className="titne_rightColumnPage7_row">
                  СТРЕПЕТОВА ЕЛЕНА
                </div>
                <div className="description_rightColumnPage7_row">
                  доцент, кандидат медицинских наук, преподаватель кафедры
                  анестезиологии Национального медицинского университета имени
                  А. А. Богомольца, практический врач анестезиолог, постоянно в
                  своей практике использующий навыки перцептивной анатомии.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar7"></div>
      </div>
      <div className="pageBaseSeminar8">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage8">
            <div className="title_leftColumnPage8">Работаем по плану</div>
          </div>
          <div className="rightColumnPage8">
            <div className="rightColumnPage8_title">Программа семина</div>
            <div className="rightColumnPage8_title_description">
              - Что такое ПЕРЦЕПЦИЯ
              <br />
              - Взаимосвязь тонкого и физического тела.
              <br />
              - Различие между функцией и дисфункцией.
              <br />
              - Остановленное действие и вектор дисфункции.
              <br />
              - Палитра ощущений при перцепции тканей и их иерархия:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;кости, висцера, фасции, нервы,
              сосуды, мышцы.
              <br />
              - Влияние застоя энергии в теле на формирование мысли.
              <br />- Личная безопасность во время работы.
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar6"></div>
      </div>
      <div className="pageBaseSeminar9">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage9">
            <div className="title_leftColumnPage2">Наши контакты</div>
          </div>
          <div className="rightColumnPage9">
            <div className="rightColumnPage9_row">
              <span className="rightColumnPage9_row_title">Адресс</span>
              <br />
              <span className="rightColumnPage9_row_description">
                Киев, ул. Почайнинская, 70
              </span>
            </div>
            <div className="rightColumnPage9_row">
              <span className="rightColumnPage9_row_title">
                Электронная почта
              </span>
              <br />
              <span className="rightColumnPage9_row_description">
                spadokschool@gmail.com
              </span>
            </div>
            <div className="rightColumnPage9_row">
              <span className="rightColumnPage9_row_title">Телефоны</span>
              <br />
              <span className="rightColumnPage9_row_description">
                Ирина Слабошпицкая - тел +38(063)4563612
                <br />
                (Viber,WhatsApp), +38(099)1127568,
                <br />
                Елена Завгородняя - тел +38(067)793-78-76
                <br />
                (Viber)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pageBaseSeminar10">
        <div className="pageBaseSeminar10_row">
          <div className="block_pageBaseSeminar10_row">
            <div className="title_block_pageBaseSeminar10_row">Резюме</div>
            <div className="description_block_pageBaseSeminar10_row">
              Понимание одного принципа избавляет от запоминания тысячи фактов
            </div>
            <div className="pageBaseSeminar10_logo">
              <img src={logo} alt="logo Spadok" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Base;
