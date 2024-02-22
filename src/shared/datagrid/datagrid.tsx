import * as React from 'react';
import { DataGrid, GridCallbackDetails, GridRowId, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const [selectionModel, setSelectionModel] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const handleChangeSelection = (rowSelectionModel: GridRowId[], details: GridCallbackDetails<any>) => {
    setSelectionModel(rowSelectionModel.map(String));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on the search query
  const filteredData = data.rows.filter((row) =>
    VISIBLE_FIELDS.some((field) => row[field].toString().toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div >
      {/* <div style={{ marginBottom: 10 }}>
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
      </div> */}
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={data.columns}
          slots={{ toolbar: GridToolbar }}
          checkboxSelection
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={handleChangeSelection}
        />
      </div>
    </div>
  );
}