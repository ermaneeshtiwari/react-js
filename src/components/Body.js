import RestorentCart from "./RestorentCart";
import Search from "./Search";
import {restoList} from "../utils/mockData";
import { useState } from "react";
const Body =() => {
    const [listofrestoList, setListofrestorList] = useState(restoList);

    
   
    return(
        <div className="restor-container">
            <div className="searchform">
                <div className="search-bar">
                    <Search />
                    <div className="filter-btn">
                    <button className="filter-btn-round" onClick={()=>{
                        const filteredList = listofrestoList.filter (
                            (res) => res.info.avgRating > 4
                        );
                        setListofrestorList(filteredList);
                    }}>Top Rates Restorant</button>
                    </div>
                </div>
            </div>
            
            <div className="resto-list">
                {listofrestoList.map((restorant)=>
                    <RestorentCart key={restorant.info.id} resData={restorant} />
                )}
            </div>
        </div>
    )
}

export default Body;