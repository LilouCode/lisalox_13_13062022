function Form() {
  return (
    <form>
      <div className="input-wrapper">
        <label>
          Username
          <input type="text" id="username" />
        </label>
      </div>

      <div className="input-wrapper">
        <label>
          Password
          <input type="password" id="password" />
        </label>
      </div>

      <div className="input-remember">
        <label>
          <input type="checkbox" id="remember-me" />
          Remember me
        </label>
      </div>

      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
export default Form;
