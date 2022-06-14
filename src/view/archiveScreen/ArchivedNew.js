import React from "react"
import { Button } from "react-bootstrap";
import { R } from "../../res/R";
import { VM } from "../../viewmodel/VM";
import {Apis} from "../../domain/Apis"
import TimeUtils from "../../utils/TimeUtils"

export default class ArchivedNew extends React.Component {

    //Elimina y obtiene el nuevo estado de las noticias.
    async deleteArchived() {
        await Apis.news.deleteArchived(this.props.id)
        VM.news.get()
    }

    render() {
        return (
            <div style={{...this.style.content, ...this.props.style}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={this.style.title}>{this.props.title}</div>
                    <div style={this.style.archiveDate}>{R.strings.archivedAt + TimeUtils.getDate(this.props.archiveDate)}</div>
                </div>

                <div style={this.style.description}>{this.props.description}</div>
                <div style={this.style.body} dangerouslySetInnerHTML={{__html: this.props.content}}/>
                
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={this.style.author}>{R.strings.authorBy+this.props.author+","}</div>
                    <div style={this.style.date}>{TimeUtils.getDate(this.props.date)}</div>
                    <Button style={this.style.button} onClick={()=>this.deleteArchived()}>{R.strings.remove}</Button>  
                </div>
            </div>
        )
    }

    style = {
        content: {
            background: R.colors.white,
            borderRadius: "12px",
            minWidth:1000,
            textAlign:'left',
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
        archiveDate: {
            fontSize: 20,
            fontWeight:500,
            marginLeft:"auto"
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
