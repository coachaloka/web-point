import React from "react";
import './BannerIntems.css';
const BannerItems = ({slide}) => {
    const {image, id, prev, next}= slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full rounded-xl" alt="slicer images "/>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Develop Visual <br />
          Identity for Your <br />
          Business.
        </h1>
      </div>
      <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h6 className="text-white font-bold">
        Looking for a creative designer to conceive and develop engaging integrated concepts and innovative visual experiences.
        </h6>
      </div>
      <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Reach Me!</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;