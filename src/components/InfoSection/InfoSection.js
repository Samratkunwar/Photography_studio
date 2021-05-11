import React from 'react';
import './InfoSection.css';

const image = "https://images.unsplash.com/photo-1619458737231-580c2bee15f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";

const InfoSection = () => {
    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="infoRow">
                        <div className="infoColumn">
                            <div className="textWrapper">
                                <h1 className="topLine">This is a photography page</h1>
                                <h1 className="heading">This is a photography page</h1>
                                <p className="description">This is a story of a little guy. HIs house was little and so was his life. He went to a restaurant to have a little time</p>
                            </div>
                        </div>
                        <div className="infoColumn">
                            <div className="imgWrapper">
                                <img src={image} alt={image} className="image" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default InfoSection;
