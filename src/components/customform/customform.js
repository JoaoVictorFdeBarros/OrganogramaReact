import "./customform.css"
import Inputfield from "../inputfield/inputfield"
import Dropdownlist from "../dropdownlist/dropdownlist"
import Custombutton from "../custombutton/custombutton"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Customform(props) {

    const [name, setname] = useState('')
    const [office, setoffice] = useState('')
    const [image, setimage] = useState('')
    const [team, setteam] = useState('')

    const handlesubmit = (event)=>{
        event.preventDefault()

        props.newcolab({
            "name": name,
            "office": office,
            "image": image,
            "team": team,
            "id": uuidv4()
        })

        setname('')
        setoffice('')
        setimage('')
        setteam('')
    }
    

    return (
        <section className="customform">
            <form onSubmit={handlesubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Inputfield value={name} updatefunc={value => setname(value)} required={true} label="Nome" placeholder="Digite seu nome" />
                <Inputfield value={office} updatefunc={value => setoffice(value)} required={true} label="Cargo" placeholder="Digite seu cargo" />
                <Inputfield value={image} updatefunc={value => setimage(value)} label="Imagem" placeholder="Cole a url da imagem" />
                <Dropdownlist value={team} updatefunc={value => setteam(value)} required={true} label="Times" itens={props.teams.map(team => team.name)} />
                <Custombutton text="Criar card" />

            </form>
        </section>
    )

}

export default Customform