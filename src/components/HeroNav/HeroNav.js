import React, { useEffect } from 'react';
import gsap from 'gsap';
import './HeroNav.css';

const HeroNav = () => {

    useEffect(() => {

        const tl = gsap.timeline({defaults: {ease: 'power1.out'}}); 
        tl.to(".text ", { y: "0%", duration: 1, stagger: 0.25});
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
        tl.to(".intro", { y: "-100%", duration: 1}, "-=1")
        tl.fromTo("nav", { opacity: 0} ,{opacity: 1, duration: 1});
        tl.fromTo(".big-text", { opacity: 0} ,{opacity: 1, duration: 1}, "-=1");

    }, []);

    return (
        <div>
            <main>
                <section className="landing">
                    <nav>
                        <h1 id="logo">Nature</h1>
                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">About</a></li>
                        </ul> 
                    </nav> 
                    <h1 className="big-text">Enjoy the Fog</h1>  
                </section> 
            </main>

            <div className="intro">
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text">Creating innovation</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">For Everyday</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">people.</span>
                    </h1>
                </div>
            </div>

            <div className="slider"></div>
        </div>
    )
}

export default HeroNav
