import React, { useState } from 'react';
import Menu from '../menu/Menu';
import ChildPageOne from "../child-pages/ChildPageOne";
import ChildPageTwo from "../child-pages/ChildPageTwo";
import ChildPageThree from "../child-pages/ChildPageThree";

function ParentPage() {
    const [activeComponent, setActiveComponent] = useState('ChildPageOne');

    // const rederedComponent = () => {
    //     switch (activeComponent) {
    //         case 'ChildPageOne':
    //             return <ChildPageOne />;
    //         case 'ChildPageTwo':
    //             return <ChildPageTwo />;
    //         case 'ChildPageThree':
    //             return <ChildPageThree />;
    //         default:
    //             return <ChildPageOne /> 
    //     }

    //     if(activeComponent === 'ChildPageOne'){
    //        return <ChildPageOne />;
    //     }
    //     else if(activeComponent === 'ChildPageTwo'){
    //         return <ChildPageTwo />;
    //     }
    //     else{
    //         return <ChildPageThree />;
    //     }                
    // };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Menu setActiveComponent={setActiveComponent} />
                    {/* {rederedComponent()} */}

                    {activeComponent === 'ChildPageOne' ? <ChildPageOne /> : activeComponent === 'ChildPageTwo' ? <ChildPageTwo /> : <ChildPageThree />}
                </div>
            </div>
        </div>
    );
}

export default ParentPage;