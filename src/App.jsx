import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout';
import CreateAccount from './features/CreateAccount/';
import PrivacyPolicy from './features/CreateAccount/component/Form/component/PrivacyPolicy/index';
import TermsOfService from './features/CreateAccount/component/Form/component/TermsOfService/index';
import SignIn from './features/CreateAccount/component/Form/component/SignIn/index';
import ContactSupport from './features/CreateAccount/component/Support/component/ContactSupport/index';
import PromoCode from './features/CreateAccount/component/Support/component/PromoCode/index';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/" element={<CreateAccount />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/promo" element={<PromoCode />} />
        <Route path="/support" element={<ContactSupport />} />
      </Routes>
    </Layout>
  )
}

export default App
