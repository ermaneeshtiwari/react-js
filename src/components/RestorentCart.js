import {SHOP_IMG} from "../utils/constants";
const RestorentCart = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla } = resData?.info;

    return(<div className="rest-cart">
        <div className="cartImage">
            <img src={SHOP_IMG + cloudinaryImageId} alt={name} />
        </div>
        <div className="cartName"><h3>{name}</h3></div>
        <div className="item-list">{cuisines.join(", ")}</div>
        <div className="cartRating"><p>{costForTwo}</p></div>
        <div className="cartRating"><p>{avgRating}</p></div>
        <div className="cartTime"><p>{sla.slaString}</p></div>
    </div>);
}

export default RestorentCart;