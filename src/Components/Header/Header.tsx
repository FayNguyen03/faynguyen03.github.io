import { NavLink } from "react-router-dom";
import { useState } from "react";
import GradientText from "../../ReactBitsEffect/GradientText";
import "./Header.css";

function Header(){
    const [open, setOpen] = useState(false);
    return <div className="header">
         <div className="headerContainer">
            <div className="nav">
                <NavLink to="/" className="logoLink" onClick={() => setOpen(false)}>
                <GradientText 
                    colors={["#1A181B", "#564D65", "#3E8989", "#2CDA9D", "#05F140"]}
                    animationSpeed={3} 
                    showBorder={false} 
                    className="logo"
                    textSize="40px"
                >
                    FAY NGUYEN
                </GradientText>
                </NavLink>

                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    {open ? (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="8" y1="8" x2="20" y2="20" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="20" y1="8" x2="8" y2="20" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="8" width="18" height="2.5" rx="1.25" fill="#222" />
                            <rect x="5" y="13" width="18" height="2.5" rx="1.25" fill="#222" />
                            <rect x="5" y="18" width="18" height="2.5" rx="1.25" fill="#222" />
                        </svg>
                    )}
                </button>

                <ul id="sidemenu" className={open ? "open" : ""}>
                    <li><NavLink to="/about" end className="tab" onClick={() => setOpen(false)}>ABOUT</NavLink></li>
                    <li><NavLink to="/experience" end className="tab" onClick={() => setOpen(false)}>EXPERIENCE</NavLink></li>
                    <li><NavLink to="/project" end className="tab" onClick={() => setOpen(false)}>PROJECT</NavLink></li>
                    <li><NavLink to="/contact" end className="tab" onClick={() => setOpen(false)}>CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;