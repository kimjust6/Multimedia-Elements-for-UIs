import React from 'react';

function Design() {
  return (
    <div  style={{ paddingTop: 80, paddingLeft:20 }}>
    <div className="container">

    <h1>Design</h1>
    <p>There are several factors that I have considered when designing this website. <br></br>
    The main considerations that I made were implemented in that navigation bar. <br></br>
    In order to make sure that all the webpages were easily accessible, I included <br></br>
    all the different types of pages that I would need.  This includes an about me page, <br></br>
    a design page, an assignments page, a labs page, and the academic policy page.

    </p>
    
    <p>
      Another consideration that I made was to use drop down menus so that each  <br></br>
      assignment is more easily accessible.  Without the drop down menus, you would  <br></br>
      need to wait for the page to load again before continuing to choose exactly which <br></br>
      assignment you would like to view.  You also do not need to go back to the home <br></br>
      page in order to view any of the pages.
    </p>

    <p>
      In addition to adding all of the pages, I included a 404 error page in order to <br></br>
      show a clear error for routes that do not exist.
    </p>
    </div>
  </div>
  );
}

export default Design;
