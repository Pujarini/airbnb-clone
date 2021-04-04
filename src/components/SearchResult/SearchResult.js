import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import './SearchResult.css';

function SearchResult({img,location,title,description,star,price,total}) {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchPage__heart"/>
            <div className="searchResult__info">
                <div className="searchResult__infotop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infobottom">
                    <div className="searchResult__infostars">
                        <StarIcon className="searchResult__icon"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchresult__price"><h2>{price}</h2><p>{total}</p></div>
                </div>
            </div>
            
        </div>
    )
}

export default SearchResult
