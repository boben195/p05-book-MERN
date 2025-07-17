import React from "react";
import AdminTable from "./components/AdminTable";

export const backendUrl = "http://localhost:4000";

const App = () => {
  return (
    <div>
      <AdminTable />
    </div>
  );
};

export default App;
