import Logo from './Logo';
import SearchBar from "./SearchBar";
import Button from './Button';
import LanguageLink from './LanguageLink';
import '../styles/googleapp.css';


const SearchSection = () => {
  return(
    <div className="search-section">
      <Logo/>
      <SearchBar/>
      <Button title={'Google Search'}/>
      <Button title={'Feeling lucky'}/>
      <LanguageLink/>
    </div>
  )
}

export default SearchSection;