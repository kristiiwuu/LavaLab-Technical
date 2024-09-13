import logo from './logo.svg';
import styles from './App.module.css';
import Dashboard from './components/Dashboard/Dashboard';
import SearchBar from './components/SearchBar/SearchBar';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className={styles.App}>
      <SideMenu />
      <div className={styles.right_container}>
        <div className={styles.SearchBar}>
          <SearchBar />
        </div>
        <div className={styles.Dashboard}>
            <Dashboard />
        </div>
      </div>

    </div>
  );
}

export default App;
