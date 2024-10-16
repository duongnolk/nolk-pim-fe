import React from 'react';
import DataTable from './DataTable';
import { NavBarHeader2, SideBar } from './ui-components';
import { SearchField, Button } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify'
import config from './aws-exports.js'
import './App.css';
import '@aws-amplify/ui-react/styles.css'

export const PlaceholderSearchFieldExample = () => (
  <SearchField label="search" placeholder="Search..." />
);

const handleExport = () => {
  // Logic for export (e.g., download CSV)
  console.log('Exporting table data...');
};

const handleImport = () => {
  // Logic for import (e.g., open file dialog to upload)
  console.log('Importing data...');
};

Amplify.configure(config)

const App = () => {
  return (
    <div className='App'>
      <NavBarHeader2 width={'100vw'} />
      <div className='container'>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className="main-content">
          <div className="search-and-actions">
            <SearchField flex= {'1'} className='full-width-search' placeholder="Search here..." onSubmit={(value) => console.log(`Search term: ${value}`) } />
            <Button variation="primary" onClick={handleExport}>Export</Button>
            <Button variation="primary" onClick={handleImport}>Import</Button>
          </div>
          <DataTable />
        </div>
      </div>
      {/* <div className='footer'> */}
        {/* <MarketingFooterBrand flex={'1'} marginTop={'auto'}  /> */}
      {/* </div> */}

    </div>
  );
};

export default App;
