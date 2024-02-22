import Topnavbar from "../shared/partials/topnavbar";
import Sidebar from "../shared/partials/sidebar";
import Footer from "../shared/partials/footer";
import BasicExampleDataGrid from "../shared/datagrid/datagrid";
import { ToastContainer, toast } from "react-toastify";

function layout() {

  const notify = () => toast.success("Toaster Check!");
  return (
    <div className="wrapper">
      <Topnavbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard v3</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                <button style={{'width':'100px'}} className="btn btn-success" onClick={notify}>Notify!</button> <br/>
                 <ToastContainer />

                <BasicExampleDataGrid/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default layout;
