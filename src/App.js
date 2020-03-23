import React from 'react';
import FetchedPosts from "./components/FetchedPosts/FetchedPosts";


function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <FetchedPosts/>
        </div>
      </div>
    </div>
  );
}

export default App;
