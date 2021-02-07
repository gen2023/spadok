import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block8() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">
          Базовые эмоции (страх, долг, контроль, обида) + Готовые техники
          диагностики и выведения эмоции за пределы тела и их утилизация.
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">+ решение актуальных ситуаций (практическое занятие) </div>
        <div className="tableCol">
          <span className="textNumber">1</span>
        </div>
        <div className="tableCol">
          <span className="textNumber">2</span>
        </div>
        <div className="tableCol">
          <span className="textNumber">3</span>
        </div>
      </div>
      
    </>
  );
}

export default Block8;
