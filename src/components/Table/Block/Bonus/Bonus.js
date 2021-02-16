import React from 'react';

import imgOk from '../../../../images/ok.png';

function Bonus() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName headerBonus">Бонус</div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
      </div>
      <div className="tableRow">
        <div className="tableColName">Модификатор ресурса - амулет</div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          Модификатор настроения - подушка для сидения &#171;Релакс&#187;
        </div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          Модификатор защиты - стельки Вашего размера
        </div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
    </>
  );
}

export default Bonus;
