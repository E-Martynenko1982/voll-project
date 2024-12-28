import { Link } from "react-router-dom";
import './index.scss';

function Support() {
  return (
    <div className="container">
      <img src="/images/call.png" alt="call" />
      <Link style={{ textDecorationLine: 'none', marginLeft: '20px' }}
        className='container__link'
        to="/promo">
        Have Promo Code?
      </Link>
      <Link style={{ textDecorationLine: 'none', marginLeft: '177px' }} className='container__link'
        to="/support">Contact Support</Link>
    </div>
  )
}

export default Support