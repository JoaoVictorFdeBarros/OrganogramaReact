import "./icon.css"
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'

function Customicon (props){

    function togglestate (){
        if (props.formstate){
            props.togglestate(false)
        }
        else{
            props.togglestate(true)
        }
    }

    return(
        <div className="customicon">
            {props.formstate ? <AiOutlineArrowUp className="icondraw" onClick={togglestate}/> : <AiOutlineArrowDown className="icondraw" onClick={togglestate}/> }
        </div>
    )

}

export default Customicon