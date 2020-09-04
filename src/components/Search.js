import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtSearch: ''
        }
    }

    onChangeValue = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        })
    }

    searchList = ()=>{
        this.props.searchList(this.state.txtSearch);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." value = {this.state.txtSearch} name = "txtSearch" onChange = {this.onChangeValue}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick = {this.searchList}>
                        <span className="fa fa-search mr-5"></span>&nbsp;Tìm
                                </button>
                </span>
            </div>
        );
    }

}

export default Search;
