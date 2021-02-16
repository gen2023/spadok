import React from 'react';

function Price() {
  return (
    <>
      <div className="contentRow blockRowJs">
        <div className="columnLeft">
          <div className="textCenter">
            <div> цена старт потока </div>
            <div className="textBold">415 €</div>
            <br />
            <div> при оплате сегодня </div>
            <div className="textBold">355 €</div>
          </div>
        </div>
        <div className="columnCenter">
          <div className="textCenter">
            <div> цена старт потока </div>
            <div className="textBold">895 €</div>
            <br />
            <div> при оплате сегодня</div>
            <div className="textBold"> 775 €</div>
          </div>
        </div>
        <div className="columnRight">
          <div className="textCenter">
            <div>цена старт потока</div> <div className="textBold">1395 €</div>
            <br />
            <div>при оплате сегодня</div> <div className="textBold">1175 €</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
