import { Children, createContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    state: "",
    lga: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      console.log("Profile picture:", profilePicture);
      const response = axios.post(
        "http://localhost:3000/api/auth/register/client",
        {
          Headers: {
            "Content-Type": "application/json",
          },
          ...formData,
        }
      );
      const data = await response;

      console.log(data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  return (
    <AuthContext.Provider value={{ handleChange, handleSubmit, formData }}>
      {Children}
    </AuthContext.Provider>
  );
};
