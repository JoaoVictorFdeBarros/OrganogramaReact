import "./teamform.css"
import Inputfield from "../inputfield/inputfield"
import Custombutton from "../custombutton/custombutton"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Teamform(props) {

    const [teamname, setteamname] = useState('')
    const [color, setcolor] = useState('')

    const handlesubmit = (event)=>{
        event.preventDefault()

        props.newteam({
            "name": teamname,
            "color": color,
            "id": uuidv4()
        })

        setteamname('')
        setcolor('')
    }
    

    return (
        <section className="teamform">
            <form onSubmit={handlesubmit}>
                <h2>Preencha os dados para criar um time</h2>
                <Inputfield value={teamname} updatefunc={value => setteamname(value)} required={true} label="Nome" placeholder="Digite o nome do time" />
                <Inputfield type="color" value={color} updatefunc={value => setcolor(value)} required={true} label="Cor" placeholder="Digite a cor (hex)" />
                <Custombutton text="Criar time" />

            </form>
        </section>
    )

}

export default Teamform