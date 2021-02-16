import React from 'react';

function TableHeader() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColNameHeader"></div>
        <div className="tableCol tableHeader">
          <span className="turn">Базовый</span>
        </div>
        <div className="tableCol tableHeader">
          <span className="turn">Стандарт</span>
        </div>
        <div className="tableCol tableHeader">
          <span className="turn">Эксперт</span>
        </div>
      </div>
    </>
  );
}

export default TableHeader;
