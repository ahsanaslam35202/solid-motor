import React from "react";

const CarCarouselImage = (props) => {
  const { image, vin } = props;
  const url =
    "http://solid-motor-app.herokuapp.com/api/cars/images/" +
    vin +
    "/otherImages/" +
    image;
  const bgUrl =
    'url("http://solid-motor-app.herokuapp.com/api/cars/images/' +
    vin +
    "/otherImages/" +
    image +
    '") center / cover, var(--blue)';
  return (
    <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
      <a data-lightbox="photos" href={url}>
        <div
          style={{
            width: "100%",
            height: "250px",
            background: bgUrl,
            borderRadius: "12px",
          }}
        />
      </a>
    </div>
  );
};

export default CarCarouselImage;
