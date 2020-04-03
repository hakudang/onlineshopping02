import React, { Component } from 'react';

class popUpLaptop extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        // console.log(this.props.id);

        return (
            <div>
                {/* <!-- Button trigger modal -->
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
          Launch
        </button> */}

                {/* <!-- Modal --> */}
                <div className="modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    {/* <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                            <td scope="row"></td>
                                            <td>Màn hình</td>
                                            <td>{this.props.screen}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"></td>
                                            <td>CPU</td>
                                            <td>{this.props.cpu}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"></td>
                                            <td>RAM</td>
                                            <td>{this.props.ram}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"></td>
                                            <td>Mô tả</td>
                                            <td>{this.props.desc}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default popUpLaptop;