import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'


const NavHeader = () => {
return ( 
    <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">

      <a class="navbar-brand" href="/">Backpacking Scotland</a>

      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">

          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="hostels">View Hostels</a>
          </li>

        </ul>
      </div>
</nav>
  );
};

export default NavHeader;