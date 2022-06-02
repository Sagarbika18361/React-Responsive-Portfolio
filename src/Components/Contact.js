import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact_wrapper" id="contact">
        <div className="container ">
          <div className="row justify-content-between align-items-center">
              <span className="subtitle d-flex justify-content-center fw-bolder mb-sm-4 mb-lg-0 fs-5 m-0 p-3 align-items-center"> My Complete Project</span>
            <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
              <h2 className="hire_me position-relative mb-4 mb-sm-5  pt-sm-4 pt-lg-5 " style={{color:"#c6c9d8bf"}}>Hire Me.</h2>
              <hr className="colorcng"/> 
              <div className="row call_details mb-4 mt-4">
                <label htmlFor="" className="col-sm-3 col-lg-4  text-secondary">
                  Call us directly:
                </label>

                <div className="col-sm-9 col-lg-8 mb-lg-2 text-md-start ">
                  <a href="javascript:void(0)">+91 8860478612</a>
                </div>

                <label htmlFor="" className="col-sm-3 col-lg-4 text-secondary">
                  Contact Email: 
                </label>
                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start ">
                  <a href="mailto:sagarbika18361@gmail.com">
                    sagarbika18361@gmail.com
                  </a>   
                </div>
              </div>
              <form action="">
                <div className="mb-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="Your Name"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="Your Number"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="Your Email"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="6"
                    className=" form-control"
                    style={{ resize: "none"}}
                    placeholder="Write a Message..."
                    autoComplete="off"
                  ></textarea>
                </div>
                <button type="submit" className="main-btn ">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 p-0 h-100 order-1 mb-4 order-lg-1 mb-lg-0">
                <img src="https://media.istockphoto.com/photos/man-leaning-against-led-panel-lighting-picture-id173802124?b=1&k=20&m=173802124&s=170667a&w=0&h=_BXUjZGvgi0-AZ5CV7b80DSgZF_5YFxiVdSc9PCG-Ag=" style={{height:"450px"}} className=" m-0 w-100 rounded-3" alt="img..." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
