import React from 'react';
import './PageTwo.css';

const PageTwo = () => {
  const handleSave = () => {
    
    alert("Page saved!");
  };

  return (
    <div className="page-container">
      <h1>Page Two</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aut adipisci consequatur quam in aliquam eaque rerum libero explicabo nostrum, nihil dolorem ut voluptate ipsum distinctio saepe tempora sint. Ipsam!
      </p>
      <p>
        Sunt, tenetur reprehenderit excepturi ducimus aut nulla dolor voluptate dignissimos. Dolor blanditiis minus sint earum fugiat delectus, amet sequi ex ducimus tempora quidem odio labore recusandae vero provident. Repellat, saepe!
      </p>
      <p>
        Quaerat rem recusandae, quibusdam ducimus incidunt, at non unde, repellat ipsum magni quia. Doloribus, accusamus corrupti ipsam nihil non placeat odio ab vero ea ullam, molestias officiis enim! Tenetur, blanditiis.
      </p>
      <button className="save-button" onClick={handleSave}>Save Page</button>
    </div>
  );
};

export default PageTwo;
