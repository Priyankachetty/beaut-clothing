import { Link } from "react-router-dom";

import './directory-item.style.scss';

const DirectoryItem = ({category}) =>{
    const {imageUrl,title} = category;
    return(
        <div className="directory-item-container">
					<div
						className="background-image"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					/>
					<div className="body">
						<Link to={`/shop/${title}`}><h2>{title}</h2></Link>
						<p>Shop Now</p>
					</div>
				</div>
    )

}

export default DirectoryItem;