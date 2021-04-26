import React, {useEffect} from 'react'
import './TxtImgSection.css';

const images = [
    {
        before  : "https://images.pexels.com/photos/666737/pexels-photo-666737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        after   :  "https://images.pexels.com/photos/5219233/pexels-photo-5219233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    },
    {
        before  : "https://images.pexels.com/photos/666737/pexels-photo-666737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        after   :  "https://images.pexels.com/photos/5219233/pexels-photo-5219233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }
]

const TxtImgSection = () => {

    useEffect(() => {
        
        const sliderBar = document.querySelector('.sliderBar');
        const before = document.querySelector('.img-container-before');
        const after = document.querySelector('.img-container-after');
        const container = document.querySelector('.container');

        const drag = (e) => {
            let xPos = e.layerX;
            console.log(xPos)
            let size = container.offsetWidth;
            before.style.width = xPos + "px";
            sliderBar.style.left = xPos + "px";

            if(xPos < 10) {
                before.style.width = 0;
                sliderBar.style.left = 0;
            }
            if(xPos + 5 > size) {
                after.style.width = 0;
                sliderBar.style.left = 0;
            }
        }
            container.addEventListener("mousemove", drag);
    }, [])
    

    const imageReveal = (
        <div className="row">
            {images.map((image, index) => (
                <div className="container" key={index}>
                    <div className="img-container-after">
                        <img className="after" src={image.after}  alt="" />   
                    </div>        
                    <div className="img-container-before">
                        <img className="before" src={image.before}  alt="" />   
                    </div>
                    <div className="sliderBar"></div>        
                </div>
            ))}
        </div>
    )

    return (
        <div>
            {imageReveal}
        </div>
    )
}

export default TxtImgSection
