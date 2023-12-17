import './services.css';

const Services = () => {
  return (
    <div className='services'>
      <div className="service-item">
        <i className='bi bi-card-image service-icon'></i>
        adventures
      </div>

      <div className="service-item">
        <i className='bi bi-people-fill service-icon'></i>
        family tours
      </div>

      <div className="service-item">
        <i className='bi bi-buildings service-icon'></i>
        city cards
      </div>

      <div className="service-item">
        <i className='bi bi-globe service-icon'></i>
        multi-day trips
      </div>
    </div>
  )
}

export default Services;