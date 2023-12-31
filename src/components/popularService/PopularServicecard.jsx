import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import the Link component
import './Popularservice.css';

const PopularServiceCard = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: '../images/list/chouse.jpg',
      title: 'House Construction With Material',
      subtitle: 'Contact Us for Pricing',
      location: "Inside Kathmandu velly",
      category: "Price Varies According to Your desire Materials",
      price: "Rs 3200 -5000 / sq.ft",
    },
    {
      id: 2,
      imageUrl: '../images/list/inhouse.png',
      title: 'House Construction Without Material',
      subtitle: 'Contact Us for Pricing',
      location: "Inside Kathmandu velly",
      category: "Building Construction (Foundation ,pillers,walls ,slab & beams,UnderGround Watetank & septic Tank) with plaster Labour Cost only",
      price: "Rs.430-460 / sq.ft",
    },
    {
      id: 3,
      imageUrl: '../images/list/civilwork.jpeg',
      title: 'Other Civil Work',
      subtitle: 'Contact Us for Pricing',
      location: "Inside Kathmandu velly",
      category: "Soil Testing, Material testing, Custom home building, Commercial Construction, Residential remodeling, Concrete and masonry work, Electrical and plumbing work, Project management and consulting, Interior Design etc",
      price: "Contact Us",
    },
  ];

  return (
    <>
      <div className='headingpopular'>
        Homeplex Popular Work
      </div>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.id} className="cardp">
            <img src={card.imageUrl} alt="Card" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-subtitle">{card.category}</p>
            </div>
            <div>
              {card.id === 3 ? (
                 <button className='btnpop'>
                <Link to="tel:9808338555" style={{ color: '#ffffff', fontSize: '16px' }}>
                  Contact us
                </Link>
                </button>
              ) : (
                <button className='btnpop'>{card.price}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularServiceCard;
