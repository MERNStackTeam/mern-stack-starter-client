import React from "react";
import TopNavbar from "./shared/partials/topnavbar";
import SideNavbar from "./shared/partials/sidemenu";
import Footer from "./shared/partials/footer";
import DataArea from "./shared/partials/dataare";

const App: React.FC = () => {
  return (
    <div className="app">
      <TopNavbar />
      <div className=" page-body-wrapper">
        <SideNavbar />
        <DataArea />
      </div>
      <Footer />
    </div>
  );
};

export default App;
