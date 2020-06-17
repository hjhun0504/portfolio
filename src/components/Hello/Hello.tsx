import React from 'react';

import './Hello.scss';

const Hello = (): JSX.Element => {
  return (
    <section className="Hello">
      <h1>안녕하세요!</h1>
      <p className="desc">
        프론트엔드 개발자 <strong>한정훈</strong>입니다. 더 나은 개발자가 되기
        위해 매일 꾸준히 공부하고 있습니다. 코딩으로 제품을 만드는 것이
        즐겁습니다.
      </p>
    </section>
  );
};

export default Hello;
