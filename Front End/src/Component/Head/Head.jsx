import React from 'react';

function Head() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h3 >STUDENT DATA</h3>

    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <ul class="navbar-nav  justify-content-center ">
        <li class="nav-item">
          {/* <a class="nav-link active " aria-current="page" href="#" style={{ marginRight: '15px', fontSize: '1.2rem' }}>ADD</a> */}
          <button type="button" class="btn btn-primary" style={{ marginLeft: '20px', fontSize: '1.2rem' }}>Add Student</button>
        </li>
      </ul>
    </div>

  </div>
</nav>
        </div>
    );
}

export default Head;
