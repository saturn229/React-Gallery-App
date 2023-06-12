import React from "react";
import Pic from "./Pic";
import NotFound from "./NotFound";




const PicList = props => {
    const results = props.data;
    let pic;
    if(results.length > 0){
        pic = results.map(pics => <Pic url = {`http://farm${pics.farm}.staticflickr.com/${pics.server}/${pics.id}_${pics.secret}.jpg`} key={pics.id}/>)
    } else {
        pic = <NotFound />
    }

    
    

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {pic}
            </ul>
            </div>
    )
};

export default PicList;

