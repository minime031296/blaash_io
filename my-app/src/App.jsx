import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutPreview from './LayoutPreview';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/layout-preview" element={<LayoutPreview />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
