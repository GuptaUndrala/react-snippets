function TabContent({imgUrl, title, description}) {
    
    return (
        <div className="tab-content">
            
            <div className="tab-content-inner">
                <div className='left'>
                    <img src={imgUrl} alt="tab vector" />
                </div>
                <div className='right'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TabContent;