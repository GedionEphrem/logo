import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const Commen = (props) => {
    return (
        <div className='cardHeading'>
            <h3>{props.this}</h3>
            <MoreVertOutlinedIcon className='headingIcon' />
        </div>
    )
}
export default Commen