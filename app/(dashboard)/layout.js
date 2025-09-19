import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <body className="lg:flex ">
      <Sidebar />
      <div className="lg:ml-[250px] mt-[28px] lg:mr-[30px] p-5 lg:p-0">
        <Topbar />
        <div className="mt-[27px]">{children}</div>
      </div>
    </body>
  );
};

export default DashboardLayout;
