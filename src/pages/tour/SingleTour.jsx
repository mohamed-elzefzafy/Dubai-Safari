import { useParams } from "react-router-dom";
import "./singletour.css";
import {toursList}  from "../../data";
import Rating from "components/tours/Rating";
import BookNow from "./BookNow";



const SingleTour = () => {
  const {id} = useParams();
  console.log(id);

  const tour = toursList.find(item => item.id === +id)
  console.log(tour);
  return (
  <section className="tour">
    <div className="tour-step"> 
     United Arab Emirates  <i className="bi bi-chevron-right"></i>
     Things to do in Dubai   <i className="bi bi-chevron-right"></i> Safari
    </div>
    <div className="tour-category">ADVENTURE</div>
    <h1 className="tour-title">Dubai : {tour.title}</h1>
<div className="tour-info">
      <Rating rating={tour.rating} reviews={tour.reviews}/>
      <div className="tour-provider">
        Activity Provider <span>M-Elzefzafy</span>
      </div>
</div>
<div className="tour-wrabber-img">
  <img src={tour.image} alt={tour.title} className="tour-img" />
<BookNow priceFrom={tour.priceFrom}/>
</div>
<p className="tour-description">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
  voluptates nostrum a iure perspiciatis earum saepe quaerat nobis
   sapiente. Illum est dolorum provident temporibus magnam eos fugiat 
   architecto, sapiente expedita.
</p>
<div className="tour-more-information">
  <h2 className="tour-info-title">about this activity</h2>
  <div className="tour-info-item">
  <div className="tour-info-item-title">
  <i style={{color : "#27ae60"}} className="bi bi-calendar3"></i>
     Free Cancelation
  </div>
  <p className="tour-info-item-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus?
  </p>
  </div>

  <div className="tour-info-item">
  <div className="tour-info-item-title">
  <i style={{color : "#2980b9"}} className="bi bi-calendar-plus-fill"></i>
     Reserve now & Pay Later
  </div>
  <p className="tour-info-item-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus?
  </p>
  </div>




  <div className="tour-info-item">
  <div className="tour-info-item-title">
  <i  style={{color : "#a74c3c"}} className="bi bi-virus"></i>
     Covid 19 - Perotect
  </div>
  <p className="tour-info-item-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus?
  </p>
  </div>




  <div className="tour-info-item">
  <div className="tour-info-item-title">
  <i style={{color : "#8e44ad"}}  className="bi bi-clock-history"></i>
     Duration 4-7 hours
  </div>
  <p className="tour-info-item-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus?
  </p>
  </div>


  <div className="tour-info-item">
  <div className="tour-info-item-title">
  <i style={{color : "#2c3e50"}}  className="bi bi-person-check"></i>
    Live Tour Guide
  </div>
  <p className="tour-info-item-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus?
  </p>
  </div>




</div>
  </section>
  )
}

export default SingleTour;