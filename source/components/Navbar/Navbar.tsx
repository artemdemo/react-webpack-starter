import React from 'react';
import classnames from 'classnames';

type TProps = {
  className?: string;
  children?: any;
};

const Navbar = (props: TProps) => {
  return (
    <nav className={classnames(
      props.className,
      'navbar navbar-expand navbar-light bg-light',
    )}>
      <div className='navbar-nav d-flex justify-content-between' style={{width: '100%'}}>
        {props.children}
      </div>
    </nav>
  );
};

export default Navbar;
