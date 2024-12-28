import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout';
import CreateAccount from './features/CreateAccount/';
import PrivacyPolicy from './features/CreateAccount/component/PrivacyPolicy';
import TermsOfService from './features/CreateAccount/component/TermsOfService';
import SignIn from './features/CreateAccount/component/SignIn';



function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/" element={<CreateAccount />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </Layout>
  )
}

export default App
