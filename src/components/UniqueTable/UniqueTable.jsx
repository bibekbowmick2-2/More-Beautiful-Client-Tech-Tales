import React from 'react'
import DataTable,{ createTheme } from 'react-data-table-component'
import { useLoaderData } from 'react-router-dom';

export default function UniqueTable() {
    const loaderData = useLoaderData(); 
    const getWordCount = (text) => (text ? text.split(/\s+/).length : 0);

   
    const filteredData = [...loaderData]
        .sort((a, b) => getWordCount(b.longDescription) - getWordCount(a.longDescription))
        .slice(0, 10);
    const columns = [
        {
            name: 'Image',
            selector: row => row.image,
            sortable: true
           
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },


        {
            name: 'ShortDescription',
            selector: row => row.shortDescription,
            sortable: true
        },


        
        {
            name: 'LongDescription',
            selector: row => row.longDescription,
            sortable: true
        },


        {
            name: 'Category',
            selector: row => row.category,
            sortable: true
        },


        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
    ];
    const data = filteredData;

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#080325',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
           default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');



      const customStyles = {
        rows: {
          style: {
            minHeight: '72px', // override the row height
          },
        },


        headCells: {
            style: {
                backgroundColor: '#0af70d',
                color: '#000000',
            },
        },
    }
    
  return (
    <div className='min-h-screen bg-[#a2c5cd]'>
        <DataTable
			columns={columns}
			data={data}
            pagination
            selectableRows
             theme="solarized"
             customStyles={customStyles}
            
		/>
    </div>
  )
}
