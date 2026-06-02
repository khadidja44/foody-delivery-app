import React from "react"
import { Button } from "react-bootstrap";
import './Header.css';


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            Good food choices
                        </h2>
                        <p>
                            Awaken your senses with authentic, bold cuisine. We sublimate every recipe with a touch of creativity to transform your meal into a truly exceptional moment.
                        </p>

                        <button>Order now</button>
                        <button>
                            Learn more
                        </button>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>

        </header>

    )
}
export default Header;