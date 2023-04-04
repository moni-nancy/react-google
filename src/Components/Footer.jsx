import Location from './Location';
import BottomLeftMenu from './BottomLeftMenu';
import FooterText from './FooterText';
import BottomRightMenu from './BottomRightMenu';

const Footer = () => {
  return(
    
    <div>
      <div>
        <Location/>
      </div>
      <BottomLeftMenu/>
      <FooterText/>
      <BottomRightMenu/>
    </div>
  )
}

export default Footer;
