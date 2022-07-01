import './MainContent.css';
import React, { useState } from 'react';

function MainContent(props) {
    console.log(props.info)
    return (
        <div className="mainInf">
            {props.amountOfInf === undefined ? null : <h2>Found {props.amountOfInf} results</h2>}
            <div>
                {props.info.length === 0 ? '' :
                    props.info.map(res => {
                        return res.volumeInfo.imageLinks ?
                            <div className="cardDiv">
                                <img src={`${res.volumeInfo.imageLinks.smallThumbnail}`} alt="Image" />
                                <p className="currentP">{res.volumeInfo.title}</p>
                                <p className='trasper'>{res.volumeInfo.authors}</p>
                            </div>
                            :
                            <div className='cardDiv'>
                                <img alt="NoImage" />
                                <p className="currentP">{res.volumeInfo.title}</p>
                                <p className='trasper'>{res.volumeInfo.authors}</p>
                            </div>
                    })
                }
            </div>
        </div>
    );
}

export default MainContent;