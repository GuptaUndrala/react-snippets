import React, { useState } from 'react';
import './TableWithCheckBox.css';

const data = {
    headers:
    {
        isChecked: false,
        name: 'Name',
        id: 'Id',
        qty: 'Qty',
        cost: 'Cost'
    },
    rows: [
        {
            isChecked: false,
            name: 'Raj',
            id: '001',
            qty: '2',
            cost: 2000
        },
        {
            isChecked: false,
            name: 'Sam',
            id: '002',
            qty: '5',
            cost: 1000
        },
        {
            isChecked: false,
            name: 'Sai',
            id: '003',
            qty: '5',
            cost: 999
        },
        {
            isChecked: false,
            name: 'Sri',
            id: '004',
            qty: '5',
            cost: 980
        }
    ]
};

function TableWithCheckBox() {
    const [tableData, setTableData] = useState(data);
    const [checkedRowsData, setcheckedRowsData] = useState([]);

    function handleRowCheckbox(rowId) {
        setTableData((prevTableData) => {
            const { headers, rows } = prevTableData;

            // Update the rows with the toggled checkbox value
            const updatedRows = rows.map((row) => {
                return row.id === rowId ? { ...row, isChecked: !row.isChecked } : row;
            });

            const allRowsChecked = updatedRows.every((row) => row.isChecked === true);

            const updatedHeader = { ...headers, isChecked: allRowsChecked }

            // Return the updated table data
            return { headers: updatedHeader, rows: updatedRows };
        });
    }

    function handleHeaderCheckbox(isChecked) {
        setTableData((prevTableData) => {
            const { headers, rows } = prevTableData;
            const updatedHeaders = { ...headers, isChecked: !isChecked }
            const updatedRows = rows.map((row) => {
                return { ...row, isChecked: !isChecked }
            })
            return { headers: updatedHeaders, rows: updatedRows }
        })
    }

    function handleButton() {
        setcheckedRowsData(tableData.rows.filter((row)=> row.isChecked));
    }

    //const buttonEnabled = tableData.rows.filter((row)=> row.isChecked).length === 0

    function handleButtonClearAll() {
        setTableData((prevTableData) => {
            const { headers, rows } = prevTableData;
            const updatedHeaders = { ...headers, isChecked: false }
            const updatedRows = rows.map((row) => {
                return { ...row, isChecked: false }
            })
            return { headers: updatedHeaders, rows: updatedRows }
        })

        setcheckedRowsData([]);
    }

    const buttonEnabled = tableData.rows.every((row) => !row.isChecked);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>
                                        <input type='checkbox' checked={tableData.headers.isChecked} onChange={() => handleHeaderCheckbox(tableData.headers.isChecked)} />
                                    </td>
                                    <td>{tableData.headers.name}</td>
                                    <td>{tableData.headers.id}</td>
                                    <td>{tableData.headers.qty}</td>
                                    <td>{tableData.headers.cost}</td>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.rows.map((row, index) => {
                                    return <tr key={index}>
                                        <td><input type="checkbox" checked={row.isChecked} onChange={() => handleRowCheckbox(row.id)} /></td>
                                        <td>{row.name}</td>
                                        <td>{row.id}</td>
                                        <td>{row.qty}</td>
                                        <td>{row.cost}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className='col-12'>
                    <button type='button' disabled={buttonEnabled} className='btn btn-primary mb-3' onClick={handleButton}>Show Selected Row</button>
                </div>

                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            {checkedRowsData.length > 0 ? (
                                <button type='button' className='btn btn-primary d-flex ms-auto' onClick={handleButtonClearAll} >Clear All</button>
                            ) : (
                                <button type='button' disabled className='btn btn-primary d-flex ms-auto' onClick={handleButtonClearAll} >Clear All</button>)
                            }
                        </div>
                        <div className='card-body'>
                            {checkedRowsData.length > 0 ? (
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Qty</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {checkedRowsData.map((row) => {
                                            return <tr key={row.id}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.qty}</td>
                                                <td>{row.cost}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            ) : ('No data selected')}
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}
export default TableWithCheckBox;