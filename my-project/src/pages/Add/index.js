import React, { Component } from "react";
import { connect } from "dva";
import Header from "../../components/Header";
// import { getTex, showIcon } from "../../actions";

// @connect(
//     state => (
//         { ...state }
//     )
// )
export default class addDiary extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        // dispatch(showIcon(false, true, false));
    }
    change = () => {
        const { dispatch } = this.props;
        // dispatch(getTex());
    }
    render() {
        const {history}=this.props;
        return (
            <div>
                <Header title="新日记" />
                <textarea id="myMsg" cols="30" rows="10"
                    style={{ width: "100%", height: 250, border: 0 }}
                    onChange={this.change}
                ></textarea>
            </div>
        )
    }
}