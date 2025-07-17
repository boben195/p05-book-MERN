import React from "react";
import ReservForm from "./components/ReservForm";
import { ToastContainer, toast } from "react-toastify";

export const backendUrl = "http://localhost:4000";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <ReservForm />
    </div>
  );
};

export default App;
