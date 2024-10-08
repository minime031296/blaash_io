import React from 'react';
import { useLocation } from 'react-router-dom';
import './layoutpreview.css';

const LayoutPreview = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const layout = JSON.parse(decodeURIComponent(params.get('layout')));

  return (
    <div className="layout-preview">
      <h1>Layout Preview</h1>
      <div className="component">
         
        {layout.components} 
      </div>
    </div>
  );
};

export default LayoutPreview;
