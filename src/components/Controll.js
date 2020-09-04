import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {

    searchList = (txtSearch)=>{
        this.props.searchList(txtSearch);
    }

    sortBy = (type) =>{
        this.props.sortBy(type)
    }

    render() {
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Search searchList = {this.searchList}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort sortBy = {this.sortBy}/>
                </div>
            </div>

        );
    }

}

export default Control;
