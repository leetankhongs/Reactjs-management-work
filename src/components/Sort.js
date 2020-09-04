import React, { Component } from 'react';
import '../App.css'

class Sort extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Type: 0
        }
    }

    onClick = (type) =>{
        this.setState({
            Type: type
        })

        this.props.sortBy(type);
    }
    

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp &nbsp; <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button" className={this.state.Type === 0?"sort_selected" : ""} onClick = {()=>this.onClick(0)}>
                            <span >
                                Null
                                                    </span>
                        </a>
                    </li>
                    <li>
                        <a role="button" className={this.state.Type === 1?"sort_selected" : "" } onClick = {()=>this.onClick(1)}>
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                                                    </span>
                        </a>
                    </li>
                    <li>
                        <a role="button" className={this.state.Type === -1?"sort_selected" : ""} onClick = {()=>this.onClick(-1)}>
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                                                    </span>
                        </a>
                    </li>
                </ul>
            </div>

        );
    }

}

export default Sort;
