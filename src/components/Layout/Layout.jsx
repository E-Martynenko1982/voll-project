import PropTypes from 'prop-types';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className='layout-container'>
      <div className="layout-image-column">
        <div className="layout-image-overlay">
          <h2 className="layout-brand">Nick Mine Inc.</h2>
        </div>
      </div>
      <div className="layout-form-column">
        {children}
      </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
}
export default Layout;