import Icon from "./FontAwesomeIcon";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const RateStar = ({number})=>{
    return <div className="d-flex">
        {Array.from(Array(number), (e, i)=> <Icon icon={faStar} className="star ml-2" key={i}/>)}
    </div>
}

export default RateStar;