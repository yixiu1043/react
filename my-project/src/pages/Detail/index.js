import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '../../components/Header';
// import { getDetail, showIcon } from "../../actions";
// import "./index.scss";

// @connect(
//     state => (
//         { ...state }
//     )
// )
export default class Detail extends Component {
  componentWillMount() {
    const { match, dispatch } = this.props;
    var id = match.params.id;
    // dispatch(getDetail(dispatch, id));
    // dispatch(showIcon(false, false, true));
  }
  render() {
    const { detailList, dispatch } = this.props;
    var items = detailList.map((item, index) => {
      return (
        <div key={index}>
          <div className="detailList" id={detailList._id}>
            <div className="time">
              <span className="year">
                {item.time.year}.{item.time.month}.{item.time.day}
              </span>
              <span className="hour">
                {item.time.hours}:{item.time.minutes}
              </span>
              <span className="week">{item.time.week}</span>
            </div>
            <div className="location">
              <span className="iconfont icon-location" />
              <span>{item.location}</span>
            </div>
            <div className="tex">{item.txt}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Header title="编辑" />
        {items}
        <div className="skip">
          <span className="icon-item iconfont icon-arrow-left" />
          <span className="icon-item iconfont icon-fenxiang" />
          <span className="icon-item iconfont icon-arrow-right" />
        </div>
      </div>
    );
  }
}
