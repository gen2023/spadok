import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block1() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">
          Переход на следующий уровень мышления. Осознанное использование
          перцепции (интуиции). Разбор схемы психоэмоциональных зон в теле
          человека + Готовая схема зон эмоций
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
    </>
  );
}

export default Block1;
