import React from 'react';

const Logo = props => {
  const { alt, className, src, title } = props;

  return (
    <div>
      <img alt={alt} className={className} src={src} />
      <p className="logo-title">{title}</p>
    </div>
  )
};

export default Logo;
