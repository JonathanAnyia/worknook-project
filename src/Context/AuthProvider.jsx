import { Children, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const [isSuccess, setIsSuccess] = useState(false);  
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

      if (data.status === 201) {
        setIsSuccess(true);
        console.log("Registration successful:", data.data);
      }

      console.log(data);
      localStorage.setItem("user", JSON.stringify(data?.data.user || {}));
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  return (
    <AuthContext.Provider value={{ handleChange, handleSubmit, isSuccess, formData }}>
      {children}
    </AuthContext.Provider>
  );
};
