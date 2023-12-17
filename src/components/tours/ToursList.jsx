
import TourItem from './TourItem';
import './tourlist.css';

const ToursList = ({orderTourList}) => {
  return (
    <div className='tour-list'>
      {orderTourList.map(item => 
  
    <TourItem  item={item} key={item.id}/>
    
      )}
    </div>
  )
}

export default ToursList;