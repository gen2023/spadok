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
// import face3 from '../../../images/face3.png';
//import face4 from '../../../images/face4.png';

function PerseptionBase() {
  return (
    <>
      <div className="pageBaseSeminar1">
        <div className="titleSeminar">
          <div className="titleSeminar_block">ШКОЛА ПЕРЦЕПТИВНОГО ОБУЧЕНИЯ</div>
        </div>
        <div className="pagePerseptionBaseSeminar1_row">
          <div className="blockLogo">
            <img className="logoSpadok" src={logo} alt="logo Spadok" />
          </div>
          <div className="pageBaseSeminar1_row_text">
            ОСНОВЫ ПЕРЦЕПЦИИ - 2й аккредитованный семинар
          </div>
        </div>
        <div className="pageBaseSeminar1_about">
          <span>
            Это семинар о феномене перцепции и его практическом применении в
            коррекции дисфункций физического тела.
          </span>
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
              - для массажистов, которые хотят разобраться в причинах
              возникновения нарушений работы организма человека.
              <br />
              - для психологов, которые занимаются телесно-ориентированными
              практиками и в поиске СВОИХ профессиональных инструментов.
              <br />
              - для кранио-сакральных терапевтов, которые хотят научиться
              стабильно удерживать состояние повышенной чувствительности и
              интерпретировать свои ощущения;
              <br />
              - для тех, кто хочет изучить методы самозащиты от негативных
              влияний.
              <br />
              - для тех, кто хочет расширить мировосприятие, т.е. свои
              персональные рамки. Перцепция позволяет вам управлять своим
              вниманием, т.е., &#171;слышать&#187; себя и опираясь на
              собственный практический опыт, находить настоящую причину
              происходящего.
              <br />
              - для тех, кто хочет уйти от стереотипов.
              <br />
              <br />
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
              <br />- <span className="nameBlockText">ПОЗНАТЬ</span> движение и
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
            <span className="persentBlock5">80.00%</span>
            <br />
            <span className="textBlock5">практика</span>
          </div>
          <div className="contentPage5_block">
            <span className="persentBlock5">20.00%</span>
            <br />
            <span className="textBlock5">теория</span>
          </div>
        </div>
        <div className="blockPage5"></div>
      </div>
      <div className="pagePerseptionBaseSeminar6">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage6">
            <div className="title_leftColumnPage6">ОСОБЕННОСТИ СЕМИНАРА</div>
          </div>
          <div className="rightColumnPage6">
            <div className="rightColumnPage6_title">ОСОБЕННОСТИ СЕМИНАРА</div>
            <div className="rightColumnPage6_row">
              <img src={ico1} alt="ico1" />
              <span>
                Мастера каждому передают из рук в руки ощущения и свои знания,
                погружая Вас в перцепцию.
              </span>
            </div>
            <div className="rightColumnPage6_row">
              <img src={ico2} alt="ico2" />
              <span>
                Мы объясняем простыми и понятными словами, чтобы было понятно
                всем людям без медицинского образования.
              </span>
            </div>
            <div className="rightColumnPage6_row">
              <img src={ico3} alt="ico3" />
              <span>
                Практическая работа при обучении ( 80% времени ) проводиться
                ТРЕМЯ мастерами - это увеличивает скорость восприятия материала,
                его объём и глубину ощущений в работе.
              </span>
            </div>
            <div className="rightColumnPage6_row">
              <img src={ico3} alt="ico3" />
              <span>
                Каждый слушатель получает персональную отработку. Отстраивая
                ваше физическое тело, мы расширяем спектр ваших возможностей.
              </span>
            </div>
            <div className="rightColumnPage6_row">
              <img src={ico3} alt="ico1" />
              <span>
                Приобретая новые качества, действия Ваших рук приобретают новое
                значение...
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
            {/* <div className="rightColumnPage7_row">
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
            </div> */}
          </div>
        </div>
        <div className="footerPageBaseSeminar7"></div>
      </div>
      <div className="pagePerseptionBaseSeminar8">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage8">
            <div className="title_leftColumnPage8">ПРОГРАММА СЕМИНАРА:</div>
          </div>
          <div className="rightColumnPagePerseption8">
            <div className="rightColumnPage8_title">Первый день:</div>
            <div className="rightColumnPage8_titleDay">
              <span>
                <b>
                  <i>ВЗАИМОСВЯЗЬ ПСИХОЭМОЦИОНАЛЬНЫХ СОСТОЯНИЙ И СИСТЕМЫ DSV.</i>
                </b>
              </span>
            </div>
            <div className="rightColumnPage8_title_description">
              - Общие вопросы, показания и противопоказания к методу
              перцептивной терапии.
              <br />
              - Техники и алгоритмы диагностики движения энергии по телу:
              импульсные, тракционные, взвешивание.
              <br />
              - Этапы возникновения различных типов дисфункций в теле человека.
              <br />
              - Топография и функциональные связи психоэмоционального и
              физического состояния.
              <br />
              - Понятие “напряжение психоэмоциональных зон”. Основные принципы
              диагностики напряжений психоэмоциональных зон в теле человека.
              <br />
              - Техники коррекции через вентральную ось, точки входа и выхода.
              <br />
              - Наработка навыков перцепции соматической дисфункции в различных
              областях тела; актуализация дисфункции, восприятие границ и
              способы ее коррекции.
              <br />
              - Основные терапевтические техники: облегчение движения,
              миофасциальное растяжение, работа с тканевой объемной жесткостью;
              отработка практических навыков.
              <br />- Техника безопасности. Правила безопасности терапевта –
              принципы внутренней готовности терапевта, их влияние на лечебный
              процесс.
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar6"></div>
      </div>
      <div className="pagePerseptionBaseSeminar8">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage8">
            <div className="title_leftColumnPage8">ПРОГРАММА СЕМИНАРА:</div>
          </div>
          <div className="rightColumnPagePerseption8">
            <div className="rightColumnPage8_title">Второй день:</div>
            <div className="rightColumnPage8_titleDay">
              <span>
                <b>
                  <i>
                    ИЗУЧЕНИЕ АНАТОМО-ФИЗИОЛОГИЧЕСКОЙ СИСТЕМЫ ЧЕЛОВЕКА (DSV).
                  </i>
                </b>
              </span>
            </div>
            <div className="rightColumnPage8_title_description">
              - Анатомия.
              <br />
              - Физиология.
              <br />- Патологическая физиология.
            </div>
          </div>
        </div>
        <div className="footerPageBaseSeminar6"></div>
      </div>
      <div className="pagePerseptionBaseSeminar8">
        <div className="pageBaseSeminar2_row">
          <div className="leftColumnPage8">
            <div className="title_leftColumnPage8">ПРОГРАММА СЕМИНАРА:</div>
          </div>
          <div className="rightColumnPagePerseption8">
            <div className="rightColumnPage8_title">Третий день:</div>
            <div className="rightColumnPage8_titleDay">
              <span>
                <b>
                  <i>
                    ТОНКАЯ НАСТРОЙКА ПЕРЦЕПЦИИ СЕНСОРНЫХ СИСТЕМ ТЕЛА.
                    ПРАКТИЧЕСКОЕ ПРИМЕНЕНИЕ ПОЛУЧЕННЫХ ЗНАНИЙ.
                  </i>
                </b>
              </span>
            </div>
            <div className="rightColumnPage8_title_description">
              - Палитра ощущений при перцепции тканей в последовательность:
              кости, мышцы, висцера ( внутренние органы ), сосуды, фасции,
              нервы.
              <br />
              - Правила, техники и порядок проведения перцептивной диагностики
              костей. Типичное проявление дисфункций костей. <br />
              - Техники коррекции костей через облегчение движения, тканевую
              объемную жесткость.
              <br />
              - Правила, техники и порядок проведения перцептивной диагностики
              мышц. Типичное проявление дисфункций мышечной ткани. <br />
              - Техники коррекции мышц через облегчение движения, тканевую
              объемную жесткость.
              <br />
              - Перцептивная диагностика дисфункций сосудистой системы.
              <br />
              - Отработка навыков перцепции соматической дисфункции в различных
              областях тела.
              <br />- Рекомендации алгоритмов проведения работы с клиентом.
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

export default PerseptionBase;
