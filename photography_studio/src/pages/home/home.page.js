import React from 'react';

const images = {
    image1: "https://images.pexels.com/photos/1450155/pexels-photo-1450155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image2: "https://images.pexels.com/photos/745767/pexels-photo-745767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image3: "https://images.pexels.com/photos/1700768/pexels-photo-1700768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image4: "https://images.pexels.com/photos/597200/pexels-photo-597200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image5: "https://images.pexels.com/photos/1589082/pexels-photo-1589082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image6: "https://images.pexels.com/photos/1700768/pexels-photo-1700768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}

const Home = () => {

    
    return (
        <div className="homepage">
            <div className="row">
                <div className="column">
                    <img src={images.image1} className="image1" />
                    <img src={images.image4} />
                    <img src={images.image2} />
                    <img src={images.image3} />
                    <img src={images.image5} />
                    <img src={images.image6} />
                    <img src={images.image1} />
                </div> 
                <div className="column">
                    <img src={images.image2} />
                    <img src={images.image3} />
                    <img src={images.image4} />
                    <img src={images.image5} />
                    <img src={images.image6} />
                    <img src={images.image1} />
                    <img src={images.image1} />
                </div> 
                <div className="column">
                    <img src={images.image1} />
                    <img src={images.image2} />
                    <img src={images.image3} />
                    <img src={images.image4} />
                    <img src={images.image5} />
                    <img src={images.image6} />
                    <img src={images.image1} />
                </div> 
               
            </div>
        </div>
    )
}

export default Home;