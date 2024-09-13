import React, {useState} from 'react';
import styles from './App.module.css';
import Dashboard from './components/Dashboard/Dashboard';
import SearchBar from './components/SearchBar/SearchBar';
import SideMenu from './components/SideMenu/SideMenu';
import NewDocForm from './components/NewDocForm/NewDocForm';

function App() {

  const [docFormVisible, setDocFormVisible] = useState(false);
  const [docs, setDocs] = useState([]);

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
    setDocs([...docs, newDoc]); // add to array of titles that will be rendered in Dashboard
    setDocFormVisible(false);   // hide form
  };

  return (
    <div className={styles.App}>
      <SideMenu handleNewDoc={handleNewDoc}/>
      <div className={styles.right_container}>
        <div className={styles.SearchBar}>
          <SearchBar />
        </div>
        <div className={styles.Dashboard}>
            <Dashboard docs={docs}/>
        </div>
        {docFormVisible && (
          <NewDocForm onSubmit={handleSubmit}/> 
        )}
      </div>

    </div>
  );
}

export default App;
