const Search = () => {
    return(
     <div className="search-bar">
         <input type="text" className="search-name" name="search" placeholder="Search your foods"></input>
         <input type="button" className="search-submit" name="submit" value="Submit"></input>
        <div className="filter-btn">
            <button className="filter-btn-round" onClick={()=>{console.log('button click')}}>Top Rates Restorant</button>
        </div>
     </div>
     
    ) 
 }

 export default Search;