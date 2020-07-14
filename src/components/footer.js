import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="bg-dark text-light w-100 py-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4 pb-3 h4">Contact Us</h3>

            <h4 className="h5">Info</h4>
            <p className="mb-4" style={{ opacity: 0.7 }}>
              Lorem ipsum dolor sit amet <br />
              adipisicing elit.
            </p>

            <h4 className="h5">Info</h4>
            <p className="mb-4" style={{ opacity: 0.7 }}>
              Lorem ipsum dolor sit amet <br />
              adipisicing elit.
            </p>

            <h4 className="h5">Info</h4>
            <p className="mb-4" style={{ opacity: 0.7 }}>
              Lorem ipsum dolor sit amet <br />
              adipisicing elit.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="mb-4 pb-3 h4">Send Us a Message</h3>

            <section>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" className="w-100" />
              </div>
              <div className="form-group">
                <label htmlFor="Name">Subject</label>
                <input type="text" className="w-100" />
              </div>
              <div className="form-group">
                <label htmlFor="Name">Message</label>
                <textarea rows={3} className="w-100" />
              </div>
              <button className="btn btn-success btn-block">Submit</button>
            </section>
          </div>
        </div>
        <hr className="mb-5" style={{ marginTop: "7rem" }} />
        <div className="w-100 d-flex justify-content-between">
          <div className="d-inline-block">
            <h5 className="mb-4">About Us</h5>
            <p>
              Link to page
              <br />
              Link to page
            </p>
          </div>
          <div className="d-inline-block">
            <h5 className="mb-4">About Us</h5>
            <p>
              Link to page
              <br />
              Link to page
            </p>
          </div>
          <div className="d-inline-block">
            <h5 className="mb-4">About Us</h5>
            <p>
              Link to page
              <br />
              Link to page
            </p>
          </div>
          <div className="d-inline-block">
            <h5 className="mb-4">About Us</h5>
            <p>
              Link to page
              <br />
              Link to page
            </p>
          </div>
        </div>
        <div className="text-center mt-5 pt-5">© {new Date().getFullYear()} Lively Farm</div>
      </div>
    </footer>
  )
}

export default Footer

// <footer className="bg-light py-3 text-center">
//   © {new Date().getFullYear()} Lively Farm
// </footer>
