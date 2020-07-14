import React from "react"

const EmailSignUp = () => {
  return (
    <div className="w-100 bg-light border-top py-5">
      <label htmlFor="email" className="font-peacock h4 text-center d-block mt-5 mb-4">
        Newsletter Sign Up
      </label>
      <div className="input-group mb-5 mx-auto" style={{ maxWidth: 400 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-dark" type="button" id="button-addon2">
            Go
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailSignUp
