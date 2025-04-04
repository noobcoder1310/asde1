import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../list.json";
import Slider from "react-slick";
import Card from "./Card"; 




function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
           <div className="relative z-10 bg-white py-2  px-5 mb-4">
        <h1 className="font semi-bold text-xl pb-2">Free offered courses</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          corporis, suscipit cum sed omnis quam voluptatem obcaecati iusto quos
          accusantium aperiam expedita illum laboriosam, earum repellat
          reiciendis incidunt error perspiciatis!
        </p>
        </div>
        </div>
      </div>
      <div>
        <div>
      <Slider {...settings}>
       
        {filterData.map((item)=>(
          <Card item={item} key={item.id}/>
        )
        )}
      </Slider>
      </div>
    </div>
     
    </>
  );
}

export default Freebook;
