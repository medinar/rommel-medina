import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <>
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#61DBFB"
                            }
                        }
                    }
                }}
            />           
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Web development and websites promotions</h1>
                    <Typed 
                        className="typed-text" 
                        strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <a href="/" className="btn-main-offer">Let's Talk</a>
                </div>
            </div>
        </>
    );
}

export default Header;
