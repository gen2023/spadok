import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block7() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">
          Анализ работы инструмента &#171;перцептивное рисование&#187; + Два
          шаблона ловушек и шаблон гармонизатора.
        </div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" className="imgOk" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          + решение 1й актуальной ситуации рисованием
        </div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <span className="textNumber">1</span>
        </div>
        <div className="tableCol">
          <span className="textNumber">2</span>
        </div>
      </div>
    </>
  );
}

export default Block7;
