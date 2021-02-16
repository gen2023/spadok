import React from 'react';

function Price() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
      </div>
      <div className="tableRow">
        <div className="tableColName">цена старт потока</div>
        <div className="tableCol price borderPriceA">415 €</div>
        <div className="tableCol price borderPriceA">895 €</div>
        <div className="tableCol price borderPriceA">1395 €</div>
      </div>
      <div className="tableRow">
        <div className="tableColName"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
        <div className="tableCol"></div>
      </div>
      <div className="tableRow">
        <div className="tableColName">при оплате сегодня</div>
        <div className="tableCol price borderPriceB">355 €</div>
        <div className="tableCol price borderPriceB">775 €</div>
        <div className="tableCol price borderPriceB">1175 €</div>
      </div>
    </>
  );
}

export default Price;
