import React from "react"

function Login() {
  return (
    <form style={{ width: "18rem" }} className="m-auto mt-5">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
    </form>
  )
}

export default Login
