import React, {Component } from 'react'
import {Button, Collapse} from 'reactstrap'
import axios from 'axios'

export default class DynamicFooter extends Component{
    constructor(props){
        super(props)

        this.state = {
            collapse: false
        }
    }


    toggleCollapse(){
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render(){
        return <div className="bg-white mt-4">
        <h3>Histórico </h3>
            <Button onClick={this.toggleCollapse.bind(this)} outline color="primary" className="btn-block py-2">
                <i className="fas fa-history mr-4"></i> Histórico
            </Button>
            <Collapse isOpen={this.state.collapse}>
            <ul className="list-group">
            {
                this.props.historico.map( (h, i)=>
                    <li key={i} className="list-group-item- mb-2">
                        {
                            `${h.cidade}, ${h.temperatura}º - umidade: ${h.umidade}`
                        }
                    </li>
                )
            }
            </ul>
            </Collapse>
        </div>
    }
}