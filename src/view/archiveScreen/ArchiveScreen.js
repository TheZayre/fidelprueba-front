import React from "react"
import { R } from "../../res/R";
import { VM } from "../../viewmodel/VM";
import ArchivedNew from "./ArchivedNew";

export default class ArchiveScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={archived:VM.news.data?.data?.news?.archived}
    }

    //Setea el state de archived el nuevo  valor de News cada vez que se actualize el modelo de este.
    componentDidMount() {
        VM.news.listen(()=>{this.setState({archived:VM.news.data?.data.news.archived})})
    }

    //Recorre las noticias archivadas y devuelve un elemento New por cada una de ellas.
    renderArchived() {
        let result =[];
        for(let element in this.state.archived) {
            result.push(
            <ArchivedNew 
                key={element}
                style={this.style.archived}
                id={this.state.archived[element]._id}
                date={this.state.archived[element].date}
                archiveDate={this.state.archived[element].archiveDate}
                author={this.state.archived[element].author}
                title={this.state.archived[element].title}
                description={this.state.archived[element].description}
                content={this.state.archived[element].content}/>)
        }

        //Si no hay ninguna noticia archivada, muestra el texto de "No Resultados".
        if(!result.length)
            result.push(<div style={this.style.noResults}>{R.strings.noResults}</div>)
        return result
    }

    render() {
        return (
            <div style={this.style.content}>
                {this.renderArchived()}
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
        archived : {
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
