import "./dropdownlist.css"

function Dropdownlist(props){

    const update = (event) =>{
        props.updatefunc(event.target.value)
    }

    return (
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={update}>
            <option value="" disabled key={-1}>Selecionar</option>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdownlist