import PropTypes from 'prop-types';
import './index.scss';

function Layout({ children }) {
  return (
    <div className='layout-container'>
      <div className="layout-container__image-column">

        <img className='layout-container__logo' src="/images/logo.png" alt="logo" />
        <h2 className="layout-container__brand">Nick Mine Inc.</h2>

      </div>
      <div className="layout-container__form-column">
        {children}
      </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
}
export default Layout;