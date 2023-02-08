import React from "react";
import { Link } from "react-router-dom";
import './headerMain.css'

function HeaderMain() {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <h1>Crud React</h1>
                </div>
                <div className="btnPost">
                    <Link to="/post">
                        <button>add new post</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain