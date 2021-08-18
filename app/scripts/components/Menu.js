/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
 import React, {useState} from 'react';

 function Menu() {
     const [showingSearch, setShowingSearch] = useState(false);
     const showSearchContainer = (e) => {
         e.preventDefault();
         setShowingSearch(!showingSearch);
     }
     const onSearch = (e) => {
         
         // Start Here
         // ...
         
 
     }
 
     return (
         <header className="menu">
                 <div className="menu-container">
                     <div className="menu-holder">
                         <h1>ELC</h1>
                         <nav>
                             <a href="#" className="nav-item">HOLIDAY</a>
                             <a href="#" className="nav-item">WHAT'S NEW</a>
                             <a href="#" className="nav-item">PRODUCTS</a>
                             <a href="#" className="nav-item">BESTSELLERS</a>
                             <a href="#" className="nav-item">GOODBYES</a>
                             <a href="#" className="nav-item">STORES</a>
                             <a href="#" className="nav-item">INSPIRATION</a>
 
                             <a href="#" onClick={(e) => showSearchContainer(e)}>
                                 <i className="material-icons search">search</i>
                             </a>
                         </nav>
                     </div>
                 </div>
                 <div className={(showingSearch ? "showing " : "") + "search-container"}>
                     <input type="text" onChange={(e) => onSearch(e)} />
                     <a href="#" onClick={(e) => showSearchContainer(e)}>
                         <i className="material-icons close">close</i>
                     </a>
                 </div>
             </header>
     )
 }
 
 export default Menu
