import './App.css';
// import DisplayField from './components/DisplayField';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [thePage, setPage] = useState('About')

  const changePage = () => {
    if (thePage === 'About') return <About />;
    if (thePage === 'Projects') return <Projects />;
    if (thePage === 'Contact') return <Contact />;
  }

  const handlePageChange = (page) => setPage(page)

  return (
   
      <div className="View">
      <Sidebar
        thePage={thePage}
        handlePageChange={handlePageChange} />
        <div id='pageContent'>
          {changePage()}
        </div>
      
      </div>

  );
}

export default App;
