function TabItem({tab, index, activeTab, tabClickFunction}) {
    return(
        <li className={`tab ${activeTab === index ? 'active' : ''}`} onClick={()=> tabClickFunction(index)}>{tab}</li>
    );
}

export default TabItem;