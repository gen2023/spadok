import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block0() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">+ Период обучения в неделях</div>
        <div className="tableCol">8</div>
        <div className="tableCol">14</div>
        <div className="tableCol">18</div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          + Инструкция пошагового выполнения техник
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName"> + Проверка домашних заданий</div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName"> + Доступ в закрытую Telegram-гр</div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">+ Работа с мастером в группе</div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          + Групповые сессии &#171;Вопрос-Ответ&#187; - колличество встреч
        </div>
        <div className="tableCol">4</div>
        <div className="tableCol">6</div>
        <div className="tableCol">8</div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          + Доступ к записям обучающих сессий (месяц)
        </div>
        <div className="tableCol">3</div>
        <div className="tableCol">4</div>
        <div className="tableCol">6</div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          + Доступ в закрытую Telegram-гр после обучения (месяц)
        </div>
        <div className="tableCol"></div>
        <div className="tableCol">2</div>
        <div className="tableCol">3</div>
      </div>
    </>
  );
}

export default Block0;
