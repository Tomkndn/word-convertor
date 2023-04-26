import React from 'react'
export default function Nav(props){
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <img className='img' src='/T.png' alt='logo' style={{height: '40px',margin: '7px'}}/>
                Word Convertor
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link Active" href="/">Conversion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input switch" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label switch" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
                </div>
            </div>
        </nav>
    );
};  