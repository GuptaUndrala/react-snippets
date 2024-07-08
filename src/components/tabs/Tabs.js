import React, { useState } from 'react';
import './Tabs.css';
import TabContent from '../tab-content/TabContent';
import TabItem from '../tab-item/TabItem';

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Tab1', 'Tab2', 'Tab3','Tab4'];

    const tabContentdata = [
        {
            imgUrl: 'https://placehold.co/400x400',
            title: 'Tab 1 Title',
            description: 'Content 1 Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content'
        },
        {
            imgUrl: 'https://placehold.co/400x400',
            title: 'Tab 2 Title',
            description: 'Content 2 Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content'
        },
        {
            imgUrl: 'https://placehold.co/400x400',
            title: 'Tab 3 Title',
            description: 'Content 3 Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content'
        }
    ]

    if(activeTab > tabContentdata.length -1){
        return <p>No data!</p>
    }

    const {imgUrl, title, description} = tabContentdata[activeTab];

    function handleTabClick(index) {
        setActiveTab(index);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="vertical-tabs-wrapper">
                        <ul className="vertical-tabs-list">
                            {tabs.map((tab, index)=>(
                                <TabItem tab={tab} index={index} key={index} activeTab={activeTab} tabClickFunction={handleTabClick}/>
                            ))}                            
                        </ul>

                        <TabContent imgUrl={imgUrl} title={title} description={description}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;