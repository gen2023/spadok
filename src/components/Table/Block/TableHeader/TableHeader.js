import React from 'react';

function TableHeader() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName center">Пакет</div>
        <div className="tableCol">Базовый</div>
        <div className="tableCol">Стандарт</div>
        <div className="tableCol">Эксперт</div>
      </div>
    </>
  );
}

export default TableHeader;
