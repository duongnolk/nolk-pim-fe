// src/components/DataTable.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles



const DataTable = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://8wmblga3fi.execute-api.us-east-1.amazonaws.com/dev/brand'); // Replace with your actual endpoint
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Table>
      <thead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </thead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.brand_id}>
            <TableCell>{item.brand_id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan="3" style={{ textAlign: 'right' }}>
            Total items: {items.length}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DataTable;
