import './CreateAccount.css';

function CreateAccount() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: form logic
  };

  return (
    <form className="create-account-form" onSubmit={handleSubmit}>
      <h1>Create an account<span className='point'>.</span></h1>

      <div className="form-group">
        <label htmlFor="userId">User ID</label>
        <input id="userId" type="text" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" minLength={8} required />
        <small>8 characters minimum</small>
      </div>

      <div className="form-group">
        <label htmlFor="accountName">Account Name</label>
        <input id="accountName" type="text" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="verificationCode">Verification Code</label>
        <input id="verificationCode" type="text" required />
      </div>

      <div className="form-check">
        <input id="terms" type="checkbox" required />
        <label htmlFor="terms">I read the Terms of Service and agree.</label>
      </div>

      <div className="form-check">
        <input id="privacy" type="checkbox" required />
        <label htmlFor="privacy">I read the Privacy Policy and agree.</label>
      </div>

      <div className="form-check optional">
        <input id="promo" type="checkbox" />
        <label htmlFor="promo">I would like to receive promotional emails.</label>
      </div>

      <button type="submit" className="submit-btn">Create Account</button>
    </form>

  );
}

export default CreateAccount;
