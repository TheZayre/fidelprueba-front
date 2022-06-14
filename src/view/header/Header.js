import React from 'react';
import {R} from '../../res/R';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selected: this.getActualPath(window.location.pathname), onMouse:0}
    }

    //Obtiene el path actual.
    getActualPath(path) {
        switch(path){
            case "/" : return 1;
            case "/news" : return 1;
            case "/archive" : return 2;
            default: return 0;
        }
    }

    render() {
        return (
            <div style={{...this.style.header,...this.props.style}}>
                <Image style={this.style.allfunds} src={R.drawables.commons.allfunds}/>
                <Link to={"/news"}>
                    <Image style={{...this.style.button, ...this.state.onMouse===1 || this.state.selected===1
                        ? {opacity:1, padding:22} : {opacity:0.5}}}
                    src={R.drawables.commons.news}
                    onClick={()=>this.setState({selected:1})}
                    onMouseLeave={()=>this.setState({onMouse:0})}
                    onMouseEnter={()=>this.setState({onMouse:1})}/>
                </Link>
                <Link to={"/archive"}>
                    <Image style={{...this.style.button, ...this.state.onMouse===2 || this.state.selected===2
                        ? {opacity:1, padding:22} : {opacity:0.5}}}
                    src={R.drawables.commons.archive}
                    onClick={()=>this.setState({selected:2})}
                    onMouseLeave={()=>this.setState({onMouse:0})}
                    onMouseEnter={()=>this.setState({onMouse:2})}/>
                </Link>
            </div>
        )
    }
    style = {
        header: {
            position:"fixed",
            top:0,
            backgroundColor: R.colors.main,
            boxShadow: "0px 4px 4px rgba(28, 31, 32, 0.2)",
            width: "100%",
            height: 100,
            display:'flex',
        },
        allfunds: {
            padding:20
        },
        button:{
            cursor: "pointer",
            padding:20,
            marginLeft:20,
            height: "100%",
            transition: "all 200ms linear"
        }
    }
}