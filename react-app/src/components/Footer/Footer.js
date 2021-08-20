import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-div">
                <div className="logo-div">
                    <img src="https://i.imgur.com/Fa4DmJZ.png" className="logo-mario" alt='baby mario'></img>
                </div>

                {/* <div className="contact-us-div">
                    <h2 className="contact-text">Developers:</h2>
                </div> */}

                <div className="chloe developer">
                    <h3>Chloe Barber</h3>
                    <a href="https://github.com/chloebarber"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="google.com"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="antonio developer">
                    <h3>Antonio Davila-Olivares</h3>
                    <a href="https://github.com/D3vila"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="https://www.linkedin.com/in/antonio-davila-olivares-843856212/"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="ji developer">
                    <h3>Ji Kyung</h3>
                    <a href="https://github.com/ji-k"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="https://www.linkedin.com/in/jikyung/"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="LinkedIn icon" className="linkedin-icon" /></a>
                </div>

                <div className="meagan developer">
                    <h3>Meagan Smith</h3>
                    <a href="https://github.com/meagan13"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="github-icon"/></a>
                    <a href="https://www.linkedin.com/in/meaganhsmith"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="LinkedIn icon" className="linkedin-icon" /></a>
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
