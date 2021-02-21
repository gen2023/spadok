import React, { Component } from 'react';

import './ButtonSubscribe.css';

class ButtonSubscribe extends Component {
  render() {
    return (
      <>
        <div className="contentRow">
          <div className="blockSubscribe">
            <button type="button" className="subscribe">
              Хочу научиться
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default ButtonSubscribe;
