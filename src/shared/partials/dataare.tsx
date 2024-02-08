import React from "react";
import BasicExampleDataGrid from '../datagrid/datagrid'

const DataArea: React.FC = () => {
  return (

      <div className="main-panel">
        <div className="content-wrapper" style={{backgroundColor:'white'}}>
        
          <BasicExampleDataGrid/>
          </div>
      </div>
  );
};

export default DataArea;
