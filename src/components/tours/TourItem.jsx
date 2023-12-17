import { Link } from "react-router-dom";
import Rating from "./Rating"


const TourItem = ({item}) => {
  return (
    <div key={item.id} className='tour-item'>
            
    <img src={item.image} alt={item.title} className='tour-item-img'/>
    <span className="tour-item-label">Adventure</span>
    <div className="tour-item-body">
    <div className="tour-item-title">{item.title}</div>
    <div className="tour-item-duration">
     <span>{item.duration} </span> <i className='bi bi-dot'></i>
     pickup avaliable
    </div>
    <Rating rating={item.rating} reviews={item.reviews}/>
    <div className="tour-item-price">
      <strong>From ${item.priceFrom}</strong>  per person
    </div>
    <Link   to={`/tour/${item.id}`} className="tour-item-link">

    See more

    
    </Link>
    </div>
</div>
  )
}

export default TourItem;