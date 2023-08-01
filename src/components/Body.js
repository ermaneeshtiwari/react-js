import RestorentCart from "./RestorentCart";
import Search from "./Search";
import {restoList} from "../utils/mockData";
const Body =() => {
    return(
        <div className="restor-container">
            <div className="searchform"><Search /></div>
            <div className="resto-list">
                {restoList.map((restorant)=>
                    <RestorentCart key={restorant.info.id} resData={restorant} />
                )}
            </div>
        </div>
    )
}

export default Body;