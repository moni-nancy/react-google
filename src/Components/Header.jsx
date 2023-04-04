import Avatar from './Avatar';
import MenuItem from './MenuItem';
import '../styles/header.css';
import AppsIcon from './AppsIcon';


const Header = () => {
  return(
    <div className='app-header'>
      <div className='app-header-menu'>
       <MenuItem title={'Gmail'}/>
       <MenuItem title={'Images'} />
      </div>
      <AppsIcon/>
    <Avatar/>
    </div>
  );
};

export default Header;