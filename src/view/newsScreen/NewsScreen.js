import React from "react"
import { R } from "../../res/R";
import { VM } from "../../viewmodel/VM";
import New from "./New"

export default class NewsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={news:VM.news.data?.data?.news?.noArchived}
    }

    //Setea el state de news el nuevo  valor de News cada vez que se actualize el modelo de este.
    componentDidMount() {
        VM.news.listen(()=>{this.setState({news:VM.news.data.data.news.noArchived})})
    }

    //Recorre las noticias sin archivar y devuelve un elemento New por cada una de ellas.
    renderNews() {
        let result =[];
        for(let element in this.state.news) {
            result.push(
            <New 
                key={element}
                style={this.style.new}
                id={this.state.news[element]._id}
                title={this.state.news[element].title}
                date={this.state.news[element].date}
                author={this.state.news[element].author}
                description={this.state.news[element].description}
                content={this.state.news[element].content}/>)
        }

        //Si no hay ninguna noticia, muestra el texto de "No Resultados".
        if(!result.length)
            result.push(<div style={this.style.noResults}>{R.strings.noResults}</div>)
        return result
    }

    render() {
        return (
            <div style={this.style.content}>
                {this.renderNews()}
            </div>
        )
    }

    style = {
        content : {
            background: R.colors.border,
            marginTop:100,
            minHeight:"92.3vh",
            overflow:"hidden"
        },
        new : {
            padding:20,
            margin:20
        },
        noResults: {
            fontSize:60,
            fontWeight:500,
            textAlign:"center",
            marginTop:200
        }
    }
}
