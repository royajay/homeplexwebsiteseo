import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"

const Plumber = () => {
    const images = [
      {
        id: 1,
        imageUrl: '../images/banner.png',
        title: 'Image 1',
      },
      {
        id: 2,
        imageUrl: '../images/banner.png',
        title: 'Image 2',
      },
      // Add more images and text here as needed
    ];
  

  const servicesData = [
    {
      id: 1,
      title: 'On Budgets / No More rates',
      subtitle: 'We offer budget-friendly options without compromising quality. ',
      imageSrc: "../images/bill.png",
    },
    {
      id: 2,
      title: 'On Time Services',
      subtitle: '2 hrs Response time with  punctual and reliable services ',
      imageSrc: '../images/ontime.png',
    },
    {
      id: 3,
      title: 'Service Warranty',
      subtitle: 'We provide a one-month service warranty on the same issue.',
      imageSrc: '../images/qualify.png',
    },
    {
      id: 4,
      title: 'Verified Experts',
      subtitle: 'Highly trained & Dicipline professionals',
      imageSrc: '../images/24hrs.png',
    },
  ];
  const priceList = [
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Waste Pipe Leakage',
      subtitle: 'Repair or replacement of waste pipe per piece',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/list/p-6.png',
    },

  ];


  return (
    <div className="app">



      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex plumber? </div>
        <div>
            {servicesData.map(service => (
              <div key={service.id} className="service-item">
                <img src={service.imageSrc} alt={service.title} />
                <div>
                  <div className='serviceh2'>{service.title}</div>
                  <div className='servicep'>{service.subtitle}</div>
                </div>
              </div>
            ))}
    </div>
   
        </div>
        </div>

        <div className='headingall'>
          See Our Rates
        </div>
        <div className="column ">
        <div className="price-list">
          {priceList.map((item, index) => (
            <PriceCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              extra={item.extra}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        </div>
        <div className='headingall'>
         Our Works 
        </div>
        <div className="card-container">
      {images.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt="Card" className="card-image" />
          <div className="card-content">
          <div className='serviceh2'>{card.title}</div>
          </div>
        </div>
      ))}
    </div>
              </div>
              
  );
};

export default Plumber;
