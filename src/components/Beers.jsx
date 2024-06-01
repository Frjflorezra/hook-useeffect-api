import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
export const Beers = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/coffee/hot"
        );
        setImagesList(response.data);
        console.log(imagesList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App container-fluid carousel-container">
      {imagesList.length > 0 ? (
        <div className="custom-carousel">
        <Carousel>
          {imagesList.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.image}
                alt={`Slide ${index}`}
              />
              <Carousel.Caption>
                <h5>{image.title}</h5>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
