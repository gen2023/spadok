import React from 'react';
import { Link } from 'react-router-dom';

import './homeLanding.css';
import './mobile_homeLanding.css';

import logo from '../../images/logo.png';
import logoText from '../../images/logo_text.png';
import home_block2 from '../../images/home_block2.png';
import homePage3_ico1 from '../../images/homePage3_ico1.png';
import homePage3_ico2 from '../../images/homePage3_ico2.png';
import homePage3_ico3 from '../../images/homePage3_ico3.png';
import homePage3_more from '../../images/more.png';
import face1 from '../../images/home_block4_reviews1.png';
import face2 from '../../images/home_block4_reviews2.png';
import face3 from '../../images/home_block4_reviews3.png';
import star from '../../images/star.png';
import homePage5 from '../../images/block3.png';

function HomeLanding() {
  return (
    <>
      <div className="homePage1">
        <div className="homePage1_leftColumn">
          <div className="homePage1_leftColumn_title">
            Школа перцептивных технологий
          </div>
          <img src={logoText} alt="logoText" />
        </div>
        <div className="homePage1_rightColumn">
          <img src={logo} alt="logo" />
        </div>
        <div className="homePage1_rightColumn_logoText">
          <img src={logoText} alt="logoText" />
        </div>
      </div>
      <div className="homePage2">
        <div className="homePage2_leftColumn">
          <img src={home_block2} alt="Spadok" />
        </div>
        <div className="homePage2_rightColumn">
          <div className="homePage2_rightColumn_title">О школе СПАДОК</div>
          <div className="homePage2_rightColumn_description">
            <div className="homePage2_block_mobile">
              <img src={home_block2} alt="Spadok" />
            </div>
            <b>
              Мы лечим и обучаем только тому, что знаем, умеем и любим сами.
            </b>
            <div className="homePage2_rightColumn_line"></div>
            Помагаем всем, кто работает с телом (остеопатам, мануальным
            терапевтам, специалистам восстановительной и спортивной медицины)
            повысить свой уровень восприятия и .расширить спектрр своих услуг
            <div className="homePage2_rightColumn_line"></div>
            <b>Наш сумарный практический опыт работы более 100 лет.</b>
          </div>
        </div>
      </div>
      <div className="homePage3">
        <div className="homePage3_title">Мы предлагаем</div>
        <div className="homePage3_Background"></div>
        <div className="homePage3_center">
          <div className="homePage3_block homePage3_block1">
            Обучающий проект по возрождению восприятия. Для всех кто связан с
            телесными практиками и работой с людьми
            <div className="homePage3_block_img">
              <img src={homePage3_ico1} alt="block1" />
            </div>
            <Link to="/training">
              ОБУЧЕНИЕ
              <div className="homePage3_block_button">
                <img src={homePage3_more} alt="block3" />
              </div>
            </Link>
          </div>
          <div className="homePage3_block homePage3_block2">
            Мастера помогут Вам восстановить здоровье, изменить жизненные
            ситуации, чтобы приблизить
            <br />
            Вашу цель
            <div className="homePage3_block_img">
              <img src={homePage3_ico2} alt="block2" />
            </div>
            <Link to="">
              ЗДОРОВЬЕ
              <div className="homePage3_block_button">
                <img src={homePage3_more} alt="block3" />
              </div>
            </Link>
          </div>
          <div className="homePage3_block homePage3_block3">
            Магазин биоэнергетической продукции для успешной и счастливой жизни
            <div className="homePage3_block_img">
              <img src={homePage3_ico3} alt="block3" />
            </div>
            <Link to="">
              МАГАЗИН
              <div className="homePage3_block_button">
                <img src={homePage3_more} alt="block3" />
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="homePage3_footer"></div> */}
      </div>
      <div className="homePage4">
        <div className="homePage4_title">
          <Link to="/reviews">Что говорят наши ученики</Link>
        </div>
        <div className="homePage4_reviews">
          <div className="homePage4_reviews_block">
            <div className="homePage4_reviews_block_face">
              <Link to="/reviews#review">
                <img src={face1} alt="face1" />
              </Link>
            </div>
            <div className="homePage4_reviews_block_name homePage4_reviews_block_name1">
              Косметолог-эстетист, тренер - преподаватель в Lash Art University
            </div>
            <div className="homePage4_reviews_block_review">
              Был страх публичных выступлений, был да сплыл. За пол года было не
              мало выступлений в малых группах, и пока мой рекорд 300человек.
            </div>
            <div className="homePage4_reviews_block_appraisal">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="homePage4_reviews_block">
            <div className="homePage4_reviews_block_face">
              <Link to="/reviews#review">
                <img src={face2} alt="face2" />
              </Link>
            </div>
            <div className="homePage4_reviews_block_name">
              массажист, работающий перцептивными техниками
            </div>
            <div className="homePage4_reviews_block_review">
              С каждым семинаром вы будете подниматься на одну ступень, и
              качество вашей работы будет подниматься прямо пропорционально
              вашим знаниям и самое главное что, есть поддержка
              &#171;Спадка&#187;....
            </div>
            <div className="homePage4_reviews_block_appraisal">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="homePage4_reviews_block">
            <div className="homePage4_reviews_block_face">
              <Link to="/reviews#review">
                <img src={face3} alt="face3" />
              </Link>
            </div>
            <div className="homePage4_reviews_block_name">
              Обучающий тренер, арт-коуч
            </div>
            <div className="homePage4_reviews_block_review">
              Занимаясь долго саморазвитием, мне было очень интересно ещё больше
              познать себя, научиться новому чувствованию и не набирать на себя
              проблемы клиентов.
            </div>
            <div className="homePage4_reviews_block_appraisal">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="homePage5">
        <div className="homePage5_leftColumn">
          <img src={homePage5} alt="contact" />
        </div>
        <div className="homePage5_rightColumn">
          <div className="homePage5_rightColumn_title">Наши контакты</div>
          <div>
            <div className="homePage5_rightColumn_title_blockTitle">АДРЕСС</div>
            <div className="homePage5_rightColumn_title_description">
              Киев, ул. Почайнинская, 70
            </div>
          </div>
          <div>
            <div className="homePage5_rightColumn_title_blockTitle">
              ЭЛЕКТРОННАЯ ПОЧТА
            </div>
            <div className="homePage5_rightColumn_title_description">
              spadokschool@gmail.com
            </div>
          </div>
          <div>
            <div className="homePage5_rightColumn_title_blockTitle">
              ТЕЛЕФОНЫ
            </div>
            <div className="homePage5_rightColumn_title_description">
              Ирина Слабошпицкая - тел +38(063)4563612 (Viber,WhatsApp),
              +38(099)1127568,
              <br />
              Елена Завгородняя - тел +38(067)793- 78-76 (Viber)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLanding;
