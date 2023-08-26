import { NavLink } from 'react-router-dom';
import { SvgSelector } from 'shared/SvgSelector/SvgSelector';
import css from './navbar.module.scss'

const Navbar = () => {
  
 

 


  return (
    <div className={`${css.menu} container`}>
      <SvgSelector id="logo" />
      <SvgSelector id="logoName" />
    </div>
  );
};

export default Navbar;
