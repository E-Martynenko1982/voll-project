import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceholderContent from './component/Placeholder-content';
import './index.scss';


function Form() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: form logic
  };

  return (
    <form className="create-account" onSubmit={handleSubmit}>
      <div className="create-account__icon">
        <img src="/images/flag-icon.png" alt="flag" />
      </div>
      <div className="create-account__title">
        <h1>
          Create an account
          <span className="create-account__title-point"></span>
        </h1>
        <p className="create-account__title-text">
          Already have an account?{' '}
          <Link style={{ textDecorationLine: 'none' }} className="create-account__title-link" to="/sign">
            Sign in
          </Link>
        </p>
      </div>
      <div className="create-account__group">
        <label className="create-account__label" htmlFor="userId">
          User ID
        </label>
        <input
          className="create-account__input create-account__input--userid-icon"
          id="userId"
          type="text"
          required
        />
      </div>
      <div className="create-account__group">
        <label className="create-account__label" htmlFor="password">
          Password
        </label>
        <input
          className="create-account__input create-account__input--lock-icon"
          id="password"
          type="password"
          minLength={8}
          required
        />
        <span className="create-account__input-info">8 characters minimum</span>
      </div>
      <div className="create-account__group">
        <label className="create-account__label" htmlFor="accountName">
          Account Name
        </label>
        <input
          className="create-account__input create-account__input--user-icon"
          id="accountName"
          type="text"
          required
        />
        <span className="create-account__input-info">
          Visible nickname for your profile
        </span>
      </div>
      <div className="create-account__group">
        <label className="create-account__label" htmlFor="email">
          Email
        </label>
        <input
          className="create-account__input create-account__input--email-icon"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

          required
        />
        {!email && (
          <div>
            <PlaceholderContent />
          </div>
        )}
      </div>
      <div className="create-account__group">
        <label className="create-account__label" htmlFor="verificationCode">
          Verification Code
        </label>
        <input
          className="create-account__input create-account__input--email-icon"
          id="verificationCode"
          type="text"
          required
        />
      </div>
      <div className="create-account__check">
        <div className="create-account__check-item">
          <input
            className="create-account__check-input"
            id="terms"
            type="checkbox"
            required
          />
          <label className="create-account__check-label" htmlFor="terms">
            I read the{' '}
            <Link style={{ textDecorationLine: 'none' }} className="create-account__check-link" to="/terms-service">
              Terms of Service
            </Link>{' '}
            and agree.
          </label>
        </div>
        <div className="create-account__check-item">
          <input
            className="create-account__check-input"
            id="privacy"
            type="checkbox"
            required
          />
          <label className="create-account__check-label" htmlFor="privacy">
            I read the{' '}
            <Link style={{ textDecorationLine: 'none' }} className="create-account__check-link" to="/privacy-policy">
              Privacy Policy
            </Link>{' '}
            and agree.
          </label>
        </div>
        <div className="create-account__check-item create-account__check-item--optional">
          <input
            className="create-account__check-input"
            id="promo"
            type="checkbox"
            checked={true}
          />
          <label className="create-account__check-label" htmlFor="promo">
            I would like to receive promotional emails.
          </label>
        </div>
      </div>
      <button type="submit" className="create-account__submit-btn">
        Create Account
      </button>
    </form>

  )
}

export default Form