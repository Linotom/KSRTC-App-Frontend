import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KSRTC-APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Add Bus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">Delete Bus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search Bus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewall">View All Bus</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header