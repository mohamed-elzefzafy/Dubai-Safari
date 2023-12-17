

const BookNow = ({priceFrom}) => {
  return (
    <div className="book-now">
    <div className="book-now-header">Save up to 35%</div>
    <div className="book-now-body">
      <div className="book-now-booked">Booked 42 times yestrday</div>
      <div className="book-now-price-wrabber">
        <div className="book-now-price">
          <b>${priceFrom}</b>
          <p>per person</p>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
      <p className="book-now-more-info">
        <i className="bi bi-calendar-check"></i>
        <span>reserve now and buy later</span>
        to pay your spot and pay nothing today 
      </p>
    </div>
  </div>
  )
}

export default BookNow