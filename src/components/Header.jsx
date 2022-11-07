import React from 'react'
import logo from '../img/logo.svg'

 function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a className="navbar-brand" href="#!">
               <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#!">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#!">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#!">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#!'>Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">Оставить заявку</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;