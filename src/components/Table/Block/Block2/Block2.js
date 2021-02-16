import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block2() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">
          Возрождение перцептивного общения с телом. Как слушать и понимать язык
          своего тела + Техники управления физическим и психоэмоциональным
          здоровьем
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

export default Block2;
