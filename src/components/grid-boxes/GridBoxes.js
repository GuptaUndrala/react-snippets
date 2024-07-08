import { useState } from 'react';
import './GridBoxes.css';

const data = [
    {
        boxId: '001',
        isActive: true
    },
    {
        boxId: '002',
        isActive: false
    },
    {
        boxId: '003',
        isActive: false
    },
    {
        boxId: '004',
        isActive: false
    },
    {
        boxId: '005',
        isActive: false
    },
    {
        boxId: '006',
        isActive: false
    },
    {
        boxId: '007',
        isActive: false
    },
    {
        boxId: '008',
        isActive: false
    },
    {
        boxId: '009',
        isActive: false
    },
    {
        boxId: '0010',
        isActive: false
    },
    {
        boxId: '0011',
        isActive: false
    },
    {
        boxId: '0012',
        isActive: false
    },
    {
        boxId: '0013',
        isActive: false
    },
    {
        boxId: '0014',
        isActive: false
    },
    {
        boxId: '0015',
        isActive: false
    },
    {
        boxId: '0016',
        isActive: false
    }
]

function GridBoxes(){
    const [boxData, setBoxData] = useState(data);

    function handleGridBox(boxId){
        setBoxData(()=> (
            //return boxData.boxId === boxId ? (boxData.isActive === true) : boxData.isActive;
            boxData.map((box, index)=> {
                return box.boxId === boxId ? {...box, isActive: !box.isActive} : box;
            })
        ));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="grid-boxes-wrapper">
                        {boxData.map((box, index) => (
                            <li key={index} className={`grid-box ${box.isActive ? 'active': ''}`} onClick={() => handleGridBox(box.boxId)}>{box.boxId}</li>    
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default GridBoxes;