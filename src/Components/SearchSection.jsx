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
      <div id="search-button">
        <Button title={'Google Search'}/>
       <Button title={"I'm Feeling Lucky"}/>
      </div>
      
      <LanguageLink/>
    </div>
  )
}

export default SearchSection;