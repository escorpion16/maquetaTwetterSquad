import React from 'react';
import FeedTrends from '../feedTrends';
import SearchSideBar from '../SearchSideBar/searchSideBar';

const SidebarCol = () => {
    return (
        <div className="t-sidebar-col">
        
           <SearchSideBar className="lupa"/>
           <h2 className="sidebar-title">Qué está pasando</h2>
           <FeedTrends /> 
        </div>
    )
}

export default SidebarCol;