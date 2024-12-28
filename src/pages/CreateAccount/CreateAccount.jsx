import { Link } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: form logic
  };

  return (
    <form className="create-account-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <h1>Create an account<span className='point'>.</span></h1>
        <p className='form-title__text'>Already have an account? <Link className='point' to="/sign">Sign in</Link></p>
      </div>


      <div className="form-group">
        <label className='form-group__input-label' htmlFor="userId">User ID</label>
        <input className='form-group__input form-group__input-userid-icon' id="userId" type="text" required />
      </div>

      <div className="form-group">
        <label className='form-group__input-label' htmlFor="password">Password</label>
        <input className='form-group__input form-group__input-lock-icon' id="password" type="password" minLength={8} required />
        <span className='form-group__input-info'>8 characters minimum</span>
      </div>

      <div className="form-group">
        <label className='form-group__input-label' htmlFor="accountName">Account Name</label>
        <input className='form-group__input form-group__input-user-icon' id="accountName" type="text" required />
        <span className='form-group__input-info'>Visible nickname for your profile</span>
      </div>

      <div className="form-group">
        <label className='form-group__input-label' htmlFor="email">Email</label>
        <input className='form-group__input form-group__input-email-icon' id="email" type="email" placeholder='Resend (60s)' required />
      </div>

      <div className="form-group">
        <label className='form-group__input-label' htmlFor="verificationCode">Verification Code</label>
        <input className='form-group__input form-group__input-email-icon' id="verificationCode" type="text" required />
      </div>
      <div className="form-check">
        <div className="form-check__item">
          <input className='form-check__input' id="terms" type="checkbox" required />
          <label className='form-check__item-label' htmlFor="terms">
            I read the <Link className='form-check__item-link' to="/terms-service"> Terms of Service</Link> and agree.
          </label>
        </div>

        <div className="form-check__item">
          <input className='form-check__input' id="privacy" type="checkbox" required />
          <label className='form-check__item-label' htmlFor="privacy">
            I read the <Link className='form-check__item-link' to="/privacy-policy">Privacy Policy</Link> and agree.
          </label>
        </div>

        <div className="form-check__item optional">
          <input className='form-check__input' id="promo" type="checkbox" />
          <label className='form-check__item-label' htmlFor="promo">I would like to receive promotional emails.</label>
        </div>
      </div>


      <button type="submit" className="submit-btn">Create Account</button>
    </form>

  );
}

export default CreateAccount;
