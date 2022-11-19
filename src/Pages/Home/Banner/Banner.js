import React from "react";
// import img1 from '../../../assets2/carousel-1.jpg';
import img2 from '../../../assets2/carousel-2.jpg';
import img3 from '../../../assets2/carousel-3.jpg';
import BannerItems from "./BannerItems";

const bannerData = [
  // {
//   image: img1,
//   prev: 6,
//   id: 1,
//   next: 2
// },
{
  image: img2,
  prev: 1,
  id: 2,
  next: 3
},
{
  image: img3,
  prev: 2,
  id: 3,
  next: 4
},
]

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {
        bannerData.map(slide=><BannerItems 
          key={slide.id}
          slide={slide}
        />)
      }
      {/* <BannerItems image={img1} /> */}

      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      
    </div>
  );
};

export default Banner;