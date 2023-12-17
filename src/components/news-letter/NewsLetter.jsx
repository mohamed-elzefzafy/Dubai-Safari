import "./newsletter.css";
import newsLetterImage from "../../images/newsletterimage.jpg"
const NewsLetter = () => {
  return (
  <div className="news-letter">
    <div className="news-letter-container">
      <div className="news-letter-image-wrabber">
      <img src={newsLetterImage} alt="news-letter" className="news-letter-image"/>
      </div>
      <div className="news-letter-content">
        <h2 className="news-letter-content-title">
          Your Dubai itinerary is waiting
        </h2>
        <p className="news-letter-content-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Expedita hic consequuntur
        </p>
        <div className="news-letter-inputs">
          <input type="email" placeholder="Your Email" className="news-letter-input" />
          <button className="news-letter-btn">
            Sign Up
          </button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default NewsLetter;