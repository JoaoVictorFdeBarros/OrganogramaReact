import "./custombutton.css"

function Custombutton (props){
    return(
        <button  className="custombutton">
            {props.text}
        </button>
    )
}

export default Custombutton