import React, {useState} from 'react';
import styles from './App.module.css';
import Dashboard from './components/Dashboard/Dashboard';
import SearchBar from './components/SearchBar/SearchBar';
import SideMenu from './components/SideMenu/SideMenu';
import NewDocForm from './components/NewDocForm/NewDocForm';

function App() {

  const [docFormVisible, setDocFormVisible] = useState(false);
  const [docs, setDocs] = useState([]);
  const [filterDocs, setFilterDocs] = useState([]); // filterDocs state necessary for keeping full dataset intact


  // USER PRESSED +NEW BUTTON
  const handleNewDoc = (e) => {
    e.preventDefault();
    setDocFormVisible(true); // prompt user to enter document title
  };

  // USER CREATED A DOC
  const handleSubmit = (title) => {
    const newDoc = {
      title: title,
      timestamp: new Date()
    }
    setFilterDocs([...docs, newDoc]); 
    setDocs([...docs, newDoc]); // add to array of titles that will be rendered in Dashboard
    setDocFormVisible(false);   // hide form
  };

  // USER SEARCHED FOR SPECIFIC TITLE
  // filter out doc(s) based on title searched
  const handleSearch = (searchTerm) => {
    const lowercaseSearch = searchTerm.toLowerCase(); 
    const filterDocs = docs.filter( (doc) => {
      const lowercaseTitle = doc.title.toLowerCase();
      return lowercaseTitle.includes(lowercaseSearch); // filters out docs that have the search term in its title
    });
    setFilterDocs(filterDocs); // update state of filterDocs
  }

  return (
    <div className={styles.App}>
      <SideMenu handleNewDoc={handleNewDoc}/>
      <div className={styles.right_container}>
        <div className={styles.SearchBar}>
          <SearchBar handleSearch= {handleSearch}/>
        </div>
        <div className={styles.Dashboard}>
            <Dashboard docs={filterDocs}/>
        </div>
        {docFormVisible && (
          <NewDocForm onSubmit={handleSubmit}/> 
        )}
      </div>

    </div>
  );
}

export default App;
