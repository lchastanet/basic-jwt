function GoogleAuthButton({ type }) {
  const handleLoginGoogle = (e) => {
    e.preventDefault()
    window.open("http://localhost:5500/api/auth/google", "_self")
  }

  return (
    <div className="row">
      <a
        onClick={handleLoginGoogle}
        className="btn btn-outline-dark ml-auto mt-3"
        href="http://localhost:5500/api/auth/google"
        role="button"
        style={{ textTransform: "none" }}
      >
        <img
          style={{ marginBottom: "3px", marginRight: "5px", width: "20px" }}
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
        {type} with Google
      </a>
    </div>
  )
}

export default GoogleAuthButton
