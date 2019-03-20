import React, { Component } from "react";
import { connect } from "react-redux";
import Link from 'umi/link';
// import Header from "../../components/Header";
// import { getMydiary, getTex, deleteItemById, showDel, showIcon } from "../../actions";
// import "./index.scss";

// export default class Diary extends Component {
//     componentWillMount() {
//         const { dispatch } = this.props;
//         // dispatch(showIcon(true, false, false));
//         // getMydiary(dispatch);
//     }
//     render() {
//         return (
//             <div>
//                 <Header title="全部" />
//                 <MyList />
//             </div>
//         )
//     }
// }
export class Diary extends Component {
    change = () => {
        const { dispatch } = this.props;
        // dispatch(getTex());
    }
    render() {
        const { myList, dispatch } = this.props;
        var items = myList.map((item, index) => {
            return (
                <div key={index} className="myList" id={item._id}
                    // onTouchMove={() => { showDel(index) }}
                >
                    <div className="line"></div>
                    <div className="left">
                        <div className="trigon"></div>
                        <div className="circle"></div>
                        <div className="top"><span>{item.time.day}</span><span>{item.time.week}</span></div>
                        <div className="bottom"><span>{item.time.year}.{item.time.month}</span></div>
                    </div>
                    <Link className="right"
                        to={"/diary/detail/" + item._id + "/" + index}
                
                        <p className="tex">{item.txt}</p>
                        <div className="location">{item.time.hours}:{item.time.minutes} {item.location}</div>
                    </Link>
                    <div className="delete iconfont icon-delete"
                        // onClick={() => { deleteItemById(dispatch, item._id) }}
                    ></div>
                </div>
            )
        })

        return (
            <div className="allList">
                {items.length > 0 ? items : <h3 style={{ textAlign: "center" }}>无结果</h3>}
            </div>
        )

                        }
                    }
        
                        
                                