import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-div">
                <div className="logo-div">
                    <img src="data:image/png;base64,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" alt="site logo" className="logo-img"/>
                </div>

                {/* <div className="contact-us-div">
                    <h2 className="contact-text">Developers:</h2>
                </div> */}

                <div className="chloe developer">
                    <h3>Chloe Barber</h3>
                    <a href="https://github.com/chloebarber"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href=""><img src="https://tinyurl.com/enkdepy6" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="antonio developer">
                    <h3>Antonio Davila-Olivares</h3>
                    <a href="https://github.com/D3vila"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="https://www.linkedin.com/in/antonio-davila-olivares-843856212/"><img src="https://tinyurl.com/enkdepy6" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="ji developer">
                    <h3>Ji Kyung</h3>
                    <a href="https://github.com/ji-k"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="https://www.linkedin.com/in/jikyung/"><img src="https://tinyurl.com/enkdepy6" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="meagan developer">
                    <h3>Meagan Smith</h3>
                    <a href="https://github.com/meagan13"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="https://www.linkedin.com/in/meaganhsmith"><img src="https://tinyurl.com/enkdepy6" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="github-repo-div">
                    <a href="https://github.com/chloebarber/mario-kart-high-score" className="repo-text"><h2>Website GitHub Repo</h2></a>
                </div>

                <div className="acknowledge">
                    <p className="acknowledge-text">The included text and images were retreived from the <a href="https://www.mariowiki.com/Main_Page"> Super MarioKart Wiki.</a></p>
                </div>
            </div>
        </>
    )
}


export default Footer;
