import React from "react";

const Pic = props => (
    <li>
        {/* https://farm#.staticflickr.com/server/id_secret.jpg */}
        <img src={props.url} alt="picture" />
    </li>
    
)




export default Pic;