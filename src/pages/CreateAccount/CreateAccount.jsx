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
        <label className='form-group_input-label' htmlFor="userId">User ID</label>
        <input className='form-group_input form-group_input-userid-icon' id="userId" type="text" required />
      </div>

      <div className="form-group">
        <label className='form-group_input-label' htmlFor="password">Password</label>
        <input className='form-group_input form-group_input-lock-icon' id="password" type="password" minLength={8} required />
        <span className='form-group_input_info'>8 characters minimum</span>
      </div>

      <div className="form-group">
        <label className='form-group_input-label' htmlFor="accountName">Account Name</label>
        <input className='form-group_input form-group_input-user-icon' id="accountName" type="text" required />
        <span className='form-group_input_info'>Visible nickname for your profile</span>
      </div>

      <div className="form-group">
        <label className='form-group_input-label' htmlFor="email">Email</label>
        <input className='form-group_input form-group_input-email-icon' id="email" type="email" required />
      </div>

      <div className="form-group">
        <label className='form-group_input-label' htmlFor="verificationCode">Verification Code</label>
        <input className='form-group_input form-group_input-email-icon' id="verificationCode" type="text" required />
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
