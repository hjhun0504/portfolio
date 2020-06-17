import React from 'react';

import CustomButton from '@components/CustomButton/CustomButton';

import './Header.scss';

const Navbar = (): JSX.Element => {
  const handleClick = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="Header">
      <nav>
        <div className="logo" onClick={handleClick}>
          <div className="title">한정훈</div>
          <small>Front-end Developer</small>
        </div>
        <a href="https://bit.ly/3d7lxAr" target="blank">
          <CustomButton icon="pdf" invert>
            이력서 보기
          </CustomButton>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;