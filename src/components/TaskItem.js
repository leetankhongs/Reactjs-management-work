import React, { Component } from 'react';

class TaskItem extends Component {

    changeStatus = () => {
        this.props.changeStatus(this.props.task.ID);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.ID);
    }

    updateItem = () =>{
        this.props.updateItem(this.props.task.ID);
    }

    render() {

        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">

                    <span className={this.props.task.status === true ? "label label-danger" : "label label-success"} onClick={this.changeStatus}>
                        {this.props.task.status === true ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick = {this.updateItem}>
                        <span className="fa fa-pencil mr-5"></span>&nbsp;Sửa
                                            </button>
                                            &nbsp;
                                            <button type="button" className="btn btn-danger" onClick={this.deleteTask}>
                        <span className="fa fa-trash mr-5"></span>&nbsp;Xóa
                                            </button>
                </td>
            </tr>
        );
    }

}

export default TaskItem;
