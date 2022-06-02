import React from "react";
import '../css/style.css';
import '../css/responsive-style.css';
import  cv from '../Cv/sbeditresume.pdf';


const Home = () => {
  return (
    <>
        <section id="home" className="banner_wrapper">
                <div className="container">
                    <div className="row">
                        <div className=" col-sm-12 text-center text-md-start ">
                            <h6>WELCOME TO MY WORLD</h6>
                            <h1>I'm Sagar Bika. <br/> <span>Front-End Developer. </span> <br /> Based in India.</h1>
                            <div className="mt-4">
                                <a className="main-btn" href={cv} download="resume.pdf"> Download Resume </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  );
};

export default Home;