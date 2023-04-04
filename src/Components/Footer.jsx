import Location from './Location';
import BottomLeftMenu from './BottomLeftMenu';
import FooterText from './FooterText';
import BottomRightMenu from './BottomRightMenu';
import '../styles/googleapp.css';

const Footer = () => {
  return(
    
    <div className='footer' >
      <Location/>
       <div style={{ display: 'flex', justifyContent:'center',alignItems:'center', gap: '20px' }}>
      <BottomLeftMenu/>
      <FooterText/>
      <BottomRightMenu/>
    </div>

      </div>
      
  )
}

export default Footer;
