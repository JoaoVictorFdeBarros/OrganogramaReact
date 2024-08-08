import "./colab.css"
import {CiBookmarkRemove} from 'react-icons/ci'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

function Colab(props) {

    function fav(){
        props.favfunc(props.id)
    }

    const favprops = {
        className: "favicon",
        onClick: fav
    }
    return(
        <div className="colab">
            <div className="header"style={{backgroundColor: props.pcolor}}>
                <div className="icons">
                    {props.fav ?
                    <AiFillStar {...favprops} color= "#f0f000"/>
                    :
                    <AiOutlineStar {...favprops}/>
                    }
                    <CiBookmarkRemove className="removeicon" onClick={() => props.rmmemberfunction(props.id)}/>
                </div>

                <img src={props.img} alt={props.name}/>
            </div>
            <div className="footnote">
                <h4>{props.name}</h4>
                <h5>{props.office}</h5>

            </div>
        </div>
    )
}

export default Colab