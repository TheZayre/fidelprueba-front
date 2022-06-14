import React from "react"
import { Button } from "react-bootstrap";
import { R } from "../../res/R";
import { VM } from "../../viewmodel/VM";
import {Apis} from "../../domain/Apis"
import TimeUtils from "../../utils/TimeUtils"

export default class New extends React.Component {
    constructor(props) {
        super(props);
        this.state={news:VM.news.data?.archive}
    }

    //Archiva y obtiene el nuevo estado de las noticias.
    async archiveNew() {
        await Apis.news.archiveNew(this.props.id, new Date())
        VM.news.get()
    }

    render() {
        return (
            <div style={{...this.style.content, ...this.props.style}}>
                <div style={this.style.title}>{this.props.title}</div>
                <div style={this.style.description}>{this.props.description}</div>
                <div style={this.style.body} dangerouslySetInnerHTML={{__html: this.props.content}}/>
                
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={this.style.author}>{R.strings.authorBy+this.props.author+","}</div>
                    <div style={this.style.date}>{TimeUtils.getDate(this.props.date)}</div>
                    <Button style={this.style.button} onClick={()=>this.archiveNew()}>{R.strings.archive}</Button>  
                </div>
            </div>
        )
    }

    style = {
        content: {
            background: R.colors.white,
            borderRadius: "12px",
            textAlign:'left',
            minWidth:1000,
        },
        title: {
            fontSize: 30,
            fontWeight:700,
            marginRight:75,
        }, 
        description: {
            fontSize: 20,
            fontWeight:500,
        },
        body: {
            fontSize: 16,
            margin:20
        },
        date: {
            fontSize: 20,
            fontWeight:500,
        },
        author: {
            fontSize: 20,
            fontWeight:500,
            marginRight:5,
        },
        button: {
            fontSize: 20,
            marginLeft:"auto",
            width:100,
        }
    }
}
