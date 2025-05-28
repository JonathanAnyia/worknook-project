import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Services from "./Pages/Services";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import SignUpRole from "./Pages/SignUpRole";
import CleanerForm from "./Pages/CleanerForm";
import ClientForm from "./Pages/ClientForm";
import WorkerDetails from "./Pages/WorkerDetails";
import WorkerList from "./Components/WorkerList";
import { AuthProvider } from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/SignUpRole" element={<SignUpRole />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/client" element={<ClientForm />} />
            <Route path="/cleaner" element={<CleanerForm />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/workers/:id" element={<WorkerDetails />} />
            <Route path="/workers" element={<WorkerList />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
