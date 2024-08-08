import "./inputfield.css"

function Inputfield (props){

    var type = "text"

    if (props.type ==="color"){
        type ="color"
    }
    const update = (event) =>{
        props.updatefunc(event.target.value)
    }

    return(
        <div className="inputfield">
            <div className={type}>
                <label>{props.label}</label>
                <input type={type} value={props.value} onChange={update} required = {props.required} placeholder={props.placeholder}/>
            </div>
        </div>
    )
}

export default Inputfield