import React from "react";
import "../css/style.css";
import "../css/responsive-style.css";

const About = () => {
  return (
    <>
      <section id="about" class="about_wrapper">
        <div className="container">
          <div className=" row d-flex justify-content-between align-items-center m-0 ">
            <div className="col-lg-5 mb-4 mb-lg-0 p-0">
              <img
                src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="
                alt="img..."
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-lg-7 p-0 ps-lg-5 text-center text-lg-start">
              <div className="my-3 mb-lg-0">
                <span className="subtitle">My About Details</span>
                <h2>About Me</h2>
                <p>
                  I am a self taught Front-End Developer , building responsive
                  websites , Passionate about learning new technologies and
                  pushed myself to learn the most eﬀective ways to achieve a
                  result I am fast learner and can quickly integrate into a team
                  so I can provide value to the company and the customers. I
                  wish to work in an organization where I get an opportunity to
                  apply my skills and develop new ones to help the organization
                  to achieve its overall objectives.
                </p>
              </div>
              <div className="pt-4">
                <ul
                  className=" nav nav-pills mb-3 d-flex justify-content-center  justify-content-lg-between"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item m-0 " role="presentation">
                    <button
                      className="nav-link links text-white active rounded-pill"
                      id="pills-skills-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-skills"
                      type="button"
                      role="tab"
                      aria-controls="pills-skills"
                      aria-selected="true"
                    >
                      My Skills
                    </button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-award-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-award"
                      type="button"
                      role="tab"
                      aria-controls="pills-award"
                      aria-selected="false"
                    >
                      Award
                    </button>
                  </li> */}
                  {/* <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-experience-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-experience"
                      type="button"
                      role="tab"
                      aria-controls="pills-experience"
                      aria-selected="false"
                    >
                      Experience
                    </button>
                  </li> */}
                  <li className="nav-item m-0" role="presentation">
                    <button
                      className="nav-link links text-white rounded-pill"
                      id="pills-education-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-education"
                      type="button"
                      role="tab"
                      aria-controls="pills-education"
                      aria-selected="false"
                      // style={{background:"#FD4766"}}
                    >
                      Education
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-skills"
                    role="tabpanel"
                    aria-labelledby="pills-skills-tab"
                  >
                    <div className="single-progress">
                      <h6>HTML/CSS</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">75%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>Bootstrap</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">85%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>TailwindCSS</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "69%" }}
                          aria-valuenow="69"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">69%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>Vanilla JavaScript</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "68%" }}
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">68%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>ReactJS</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">72%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>Redux-Toolkit</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">60%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>Figma</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "42%" }}
                          aria-valuenow="42"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">42%</label>
                      </div>
                    </div>
                    <div className="single-progress">
                      <h6>Git</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <label htmlFor="">42%</label>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    class="tab-pane fade"
                    id="pills-award"
                    role="tabpanel"
                    aria-labelledby="pills-award-tab"
                  >
                    <ul className="text-start p-0">
                        <li>
                            <a href="#">
                                Awwards.com
                                <span>-Winner</span>
                            </a>
                        </li>
                    </ul>
                  </div> */}
                  {/* <div
                    class="tab-pane fade"
                    id="pills-experience"
                    role="tabpanel"
                    aria-labelledby="pills-experience-tab"
                  >
                    exp
                  </div> */}
                  <div
                    className="tab-pane fade"
                    id="pills-education"
                    role="tabpanel"
                    aria-labelledby="pills-education-tab"
                  >
                    <ul>
                      <h6 className="subtitle">My Qualification</h6>
                      <li>
                        <a href="/">
                          <span>
                            Bachelor of Commerce - University of Delhi - 2021 -
                            with - 67.25%
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span className="ssc" style={{ fonstSize: "14px" }}>
                            Secondary School Certificate - Kendriya Vidyalaya
                            Sangathan (Delhi) - 2018 - with - 68.54%
                          </span>
                        </a>
                      </li>
                      <li style={{ marginBottom: "1.5rem" }}>
                        <a href="/">
                          <span>
                            Higher School Certificate - Kendriya Vidyalaya
                            Sangathan (Delhi) - 2016 - with - 6.8(CGPA)
                          </span>
                        </a>
                      </li>
                      <h6 className="subtitle">Other Qualification</h6>
                      <li>
                        <a href="/">
                          <span>
                            ANIIT - NIIT(South Extension)-2021 - with - 7(CGPA)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
