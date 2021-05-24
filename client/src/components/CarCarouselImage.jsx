import React from "react";

const CarCarouselImage = () => {
  return (
    <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
      <a data-lightbox="photos" href="assets/img/car-inner.png">
        <div
          style={{
            width: "100%",
            height: "250px",
            background:
              'url("assets/img/car-inner.png") center / cover, var(--blue)',
            borderRadius: "12px",
          }}
        />
      </a>
    </div>
  );
};

export default CarCarouselImage;
