import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SignIn from './components/SignIn';



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
