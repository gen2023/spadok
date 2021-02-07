import React from 'react';

import imgOk from '../../../../images/ok.png';

function Block9() {
  return (
    <>
      <div className="tableRow">
        <div className="tableColName">
          Гармонизация отношений. Взаимоотношения с родителями, детьми.
          Особенности партнерских отношений (муж - жена, мужчина - женщина,
          начальник - подчиненный )
        </div>
        <div className="tableCol"></div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" />
        </div>
        <div className="tableCol">
          <img src={imgOk} alt="yes" />
        </div>
      </div>
      <div className="tableRow">
        <div className="tableColName">
          + решение актуальных ситуаций во взаимоотношениях (практическое
          занятие) индивидуально с мастером
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

export default Block9;
