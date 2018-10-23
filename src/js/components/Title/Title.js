import React from 'react';

import './style.scss';

const Title = ({ text, children }) => {
  return (
    <section id="title" className="flex" styleName="title">
      <div styleName="text">
        <h1>{text}</h1>
      </div>
      <div id="actions" className="flex end right" styleName="actions">
        {children}
      </div>
    </section>
  );
};

export default Title;
