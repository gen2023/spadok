import React from 'react';

function Price() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">цена старт потока</div>
        <div className="tableCol">415 €</div>
        <div className="tableCol">895 €</div>
        <div className="tableCol">1395 €</div>
      </div>
      <div className="tableRow">
        <div className="tableColName"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
      </div>
      <div className="tableRow">
        <div className="tableColName">при оплате сегодня</div>
        <div className="tableCol">355 €</div>
        <div className="tableCol">775 €</div>
        <div className="tableCol">1175 €</div>
      </div>
    </>
  );
}

export default Price;
