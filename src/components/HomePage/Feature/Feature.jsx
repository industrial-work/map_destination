import React from "react";
import "./Feature.css";

const Feature = () => {
  const featuresData = [
    {
      icon: "fa-shield-alt",
      title: "Safety features",
      points: [
        "Centralised tracking system",
        "Emergency response system",
        "Professional chauffeur",
        "Sanitised cabs",
      ],
    },
    {
      icon: "fa-headset",
      title: "24*7 support",
      description:
        "We're committed to providing quality service around the clock. Our customer service never sleeps.",
    },
    {
      icon: "fa-money-check-alt",
      title: "Affordable Rate",
      description:
        "Get Your Money's Worth With 100% cancelation policy and here you find the Perfect Balance of Quality and Price.",
    },
    {
      icon: "fa-gift",
      title: "Surprise Gift",
      description:
        "We are excited to offer a special surprise gift to all of our customers who book a tour, cab or hotel stay with us.",
    },
  ];

  return (
    <div className="background-container">
      <div className="overlay"></div>
      <div className="features-container">
        <h2>Our Awesome Feature</h2>
        <div className="heading-divider"></div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              {feature.points ? (
                <ul>
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
