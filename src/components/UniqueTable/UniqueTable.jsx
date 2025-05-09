import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { useLoaderData } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



export default function UniqueTable() {
  const loaderData = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const getWordCount = (text) => (text ? text.split(/\s+/).length : 0);

  const filteredData = [...loaderData]
    .sort((a, b) => getWordCount(b.longDescription) - getWordCount(a.longDescription))
    .slice(0, 12);

  const columns = [
    {
      name: 'Image',
      selector: (row) => (
        loading ? <Skeleton height={64} width={64}  baseColor="#d1d5db" highlightColor="#e5e7eb"/> :
        <img
          src={row.image}
          alt={row.title}
          className="w-16 h-16 rounded-md object-cover"
        />
      ),
      sortable: false,
      grow: 0.5,
    },
    {
      name: 'Title',
      selector: (row) => (loading ? <Skeleton count={1} height={40} width={100}  baseColor="#d1d5db" highlightColor="#e5e7eb" /> : row.title),
      sortable: true,
      wrap: true,
    },
    {
      name: 'Short Description',
      selector: (row) => (loading ? <Skeleton count={1} height={50} width={130} /> : row.shortDescription),
      sortable: true,
      wrap: true,
    },
    {
      name: 'Long Description',
      selector: (row) => (loading ? <Skeleton count={1} height={50} width={130} /> : row.longDescription),
      sortable: true,
      wrap: true,
    },
    {
      name: 'Category',
      selector: (row) => (loading ? <Skeleton height={60} width={90} /> : row.category),
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => (loading ? <Skeleton height={50} width={130} /> : row.email),
      sortable: true,
      wrap: true,
    },
  ];

  createTheme(
    'solarized',
    {
      text: {
        primary: '#ffffff',
        secondary: '#b2f5ea',
      },
      background: {
        default: '#080325',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#2d3748',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    },
    'dark'
  );

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px',
        fontSize: '13px',
      },
    },
    headCells: {
      style: {
        backgroundColor: '#0af70d',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    cells: {
      style: {
        padding: '10px',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#080325] py-10 px-4 md:px-10">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center p-6">
        Top Games by Description Length
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <DataTable
          columns={columns}
          data={loading ? Array(12).fill({}) : filteredData}
          pagination
          selectableRows
          theme="solarized"
          customStyles={customStyles}
          responsive
        />
      </div>
    </div>
  );
}
