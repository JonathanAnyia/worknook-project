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
import CleanerForm from "./Pages/ClientForm";
import ClientForm from "./Pages/WorkerForm";
import WorkerDetails from "./Pages/WorkerDetails";
import WorkerList from "./Components/WorkerList";
import { AuthProvider } from "./Context/AuthProvider"; // Import AuthProvider
import WorkerForm from "./Pages/ClientForm";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Use AuthProvider instead of AuthContext.Provider */}
      <BrowserRouter>
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
            <Route path="/worker" element={<ClientForm />} />
            <Route path="/client" element={<WorkerForm />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/workers/:id" element={<WorkerDetails />} />
            <Route path="/workers" element={<WorkerList />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
