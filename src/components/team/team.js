import hexToRgba from "hex-to-rgba"
import "./team.css"
import Colab from "../colab/colab"

function Team (props){

    return (
        props.colabs.length > 0 ? 
            <section className="team" style={{backgroundColor: hexToRgba(props.color,'0.6')}}>
                <input type='color' className="colorinput" value={props.color} onChange={event => props.changecolor(event.target.value,props.id)}></input>
                <div className="content">
                    <h3 style={{borderColor: props.color }}>{props.name}</h3>
                    <div className="colabs">
                        {props.colabs.map(colab => <Colab name={colab.name} office={colab.office} img={colab.image} key={colab.name}
                        pcolor={props.color} rmmemberfunction= {(id) => props.updatecolabfunc(id)} fav={colab.fav} favfunc={props.favcolab} id={colab.id}/>)}
                    </div>
                </div>
            </section>

        : ''
    )
}

export default Team