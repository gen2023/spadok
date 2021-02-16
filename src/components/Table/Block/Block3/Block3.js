import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block3() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">
          Осознанное управление вниманием (практический блок) + Готовые техники
          + Ваши первые результаты
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

export default Block3;
