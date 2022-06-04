import React, { useState } from "react";
import "../styles/Card.css";

const Card = () => {
  const [ind, setInd] = useState(0);

  const cardData = [
      {
          image:"https://d16kd6gzalkogb.cloudfront.net/magazine_images/Facebook-Logo1.jpg",
          title:"POP-UNDER",
          decs:"This is one of the most popular ads. After users click, this ad opens landing page in behind. So, the user experience is not hampered much.",
          link:"Learn More"
      },
      {
        image:"https://scx2.b-cdn.net/gfx/news/2018/facebookfoug.jpg",
        title:"BANNER AD",
        decs:"Choose between the available banner formats. Highly effective ad for visibility.",
        link:"Learn More"
    },
    {
      image:"https://i0.wp.com/www.artiststrong.com/wp-content/uploads/2015/05/social-media-763731_640.jpg?ssl=1",
      title:"NATIVE",
      decs:"Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.",
      link:"Learn More"
  },
  {
    image:"https://i0.wp.com/www.artiststrong.com/wp-content/uploads/2015/05/social-media-763731_640.jpg?ssl=1",
    title:"SKIM",
    decs:"SKIM is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.",
    link:"Learn More"
}
  ]
const [count,setCount] = useState(0);
const handleUpdate = (data) =>{
    setCount(data);
    setInd(data)
}
  console.log(cardData[0].title)
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="service_text text-center pb-4">
            <h2>VERSATILE AD FORMATS</h2>
          </div>
          <div className="row w-75 m-auto py-4">
            <div className="card-chips col-6 my-2 col-md-3">
              <button
                className={ind === 0 ? "active" : "linked"}
                onClick={() => handleUpdate(0)}
              >
                POP_UNDER
              </button>
            </div>
            <div className="card-chips my-2 col-6 col-md-3">
              <button
                className={ind === 1 ? "active" : "linked"}
                onClick={() => handleUpdate(1)}
              >
                BANNER AD
              </button>
            </div>
            <div className="card-chips my-2 col-6 col-md-3">
              <button
                className={ind === 2 ? "active" : "linked"}
                onClick={() => handleUpdate(2)}
              >
               NATIVE
              </button>
            </div>
            <div className="card-chips my-2 col-6 col-md-3">
              <button
                className={ind === 3 ? "active" : "linked"}
                onClick={() => handleUpdate(3)}
              >
                SKIM
              </button>
            </div>
          </div>

          <div className="Card_box_text row align-items-start py-5">
            {
                <>
                    <div className="Card_left col-12 col-md-5">
              <img
                src={cardData[count].image}
                alt="image_card"
                className="img-fluid"
              />
            </div>
            <div className="Card_right col-12 my-5 my-md-0 col-md-5">
              <h3>{cardData[count].title}</h3>
              <p>
                {cardData[count].decs}
              </p>
              <button>Learn More</button>
            </div>
                </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
