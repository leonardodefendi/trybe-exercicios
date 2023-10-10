import './App.css';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';

function App() {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');
  const toggleTheme = () => {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value={ { theme: pageTheme, toggleTheme } }>
      <Header />
      <Image />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
