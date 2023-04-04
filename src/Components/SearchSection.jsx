import SearchBar from "./SearchBar";
import Logo from './Logo';
import LanguageLink from './LanguageLink';
import Button from './Button';

const SearchSection = () => {
  return(
    <div className="search-section">
      <Logo/>
      <SearchBar/>
      <Button/>
      <LanguageLink/>
    </div>
  )
}

export default SearchSection;