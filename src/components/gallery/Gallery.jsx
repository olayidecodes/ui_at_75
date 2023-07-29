"use client"
import React, { useState } from "react";
import Image from 'next/image'  
import styles from "./page.module.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      index: 1,
      imageUrl: "/abh.png",
      text: "Alexander Brown Hall"
    },
    {
      index: 2,
      imageUrl: "/mellanby.png",
      text: "Mellanby Hall"
    },
    {
      index: 3,
      imageUrl: "/kuti.png",
      text: "Kuti Hall"
    },
    {
      index: 4,
      imageUrl: "/indy.png",
      text: "Independence Hall"
    },
    {
      index: 5,
      imageUrl: "/tedder.png",
      text: "Tedder Hall"
    },
    {
      index: 6,
      imageUrl: "/awo.png",
      text: "Obafemi Awolowo Hall"
    },
  ]

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.image_gallery_container}>
      <div>
      <Slider {...settings} className={styles.image_grid}>
        {images.map((image) => (
          <div className={styles.image_box}>
            <Image  
              key={image.index}
              src={image.imageUrl}
              width={400}
              height={300}
              alt={`Image ${image.index + 1}`}
              
            />
            <span onClick={() => handleImageClick(image.imageUrl)}>{image.text}</span>
          </div>
        ))}
        </Slider>
      </div>
      {selectedImage && (
        <div className={styles.image_popup}>
          <span className={styles.close_btn} onClick={handleClosePopup}>
            &times;
          </span>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
