import React from 'react';

import './CustomButton.scss';

import { FiExternalLink } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
  icon?: 'pdf' | 'link' | 'github';
  large?: boolean;
  invert?: boolean;
}

const Button = ({ children, icon, large, invert }: Props): JSX.Element => {
  let buttonIcon = null;
  switch (icon) {
    case 'pdf':
      buttonIcon = <i className="far fa-file-pdf icon" />;
      break;
    case 'link':
      buttonIcon = <FiExternalLink className="icon" />;
      break;
    case 'github':
      buttonIcon = <i className="fab fa-github icon" />;
  }

  return (
    <button
      className={`CustomButton ${large ? 'large' : ''} ${
        invert ? 'invert' : ''
      }`}
    >
      <span className="text">{children}</span>
      {buttonIcon}
    </button>
  );
};

export default Button;
