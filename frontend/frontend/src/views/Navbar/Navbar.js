import React from "react";
import {Link} from "react-router-dom";
import './style.css'
import './script'


function Navbar() {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <title>Purple Navbar | Nice effect for navigation</title>
            <link rel="stylesheet" href="./style.css"/>

        </head>
        <body>

        <h1>Hover or Click on the links</h1>
        <ul class="bar">
            <li><a href="#" title="Click me">Link</a>
            </li>
            <li><a href="#" title="Click me">Link</a>
            </li>
            <li><a href="#" title="Click me">Link</a>
            </li>
            <li><a href="#" title="Click me">Link</a>
            </li>
        </ul>

        <script src="./script.js"></script>

        </body>
        </html>
    )
}

export default Navbar