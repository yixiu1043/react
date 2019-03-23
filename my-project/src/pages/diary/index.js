import React, { PureComponent } from 'react'
import { Steps, WingBlank, WhiteSpace, SwipeAction, List, Toast, PullToRefresh } from 'antd-mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'dva';
import styles from './index.less';
const Step = Steps.Step;
const Item = List.Item;
const Brief = Item.Brief;
const customIcon = () => (
  <FontAwesomeIcon icon="circle" />
);
function mapStateToProps(state) {
  return {
    diary: state.diary,
    // firsstListLoading: state.loading.effects['diary/fetchList'],
  }
}
@connect(mapStateToProps)
export class Diary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: document.documentElement.clientHeight,
        overflow: 'auto'
      }
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'diary/fetchList'
    })
  }
  deleteItem = (id) => {
    // console.log(id)
    const { dispatch } = this.props;
    dispatch({
      type: "diary/delete",
      id
    })
    Toast.success('删除成功')
  }
  pullDown = () => {

  }
  render() {
    const { diary } = this.props;
    const { notes } = diary;
    return (
      <List>
        <WhiteSpace />
        <PullToRefresh
          style={this.state.style}
          onRefresh={this.pullDown}
        >
          {
            notes.map(note => {
              return (
                <Item key={note.id} wrap className={styles.item}>
                  <SwipeAction
                    style={{ backgroundColor: 'gray' }}
                    autoClose
                    right={[
                      {
                        text: '取消',
                        onPress: () => { },
                        style: { backgroundColor: '#ddd', color: 'white' },
                      },
                      {
                        text: '删除',
                        onPress: () => this.deleteItem(note.id),
                        style: { backgroundColor: '#F4333C', color: 'white' },
                      },
                    ]}
                    onOpen={() => console.log('global open')}
                    onClose={() => console.log('global close')}
                  >
                    <div className={styles.inner}>
                      <FontAwesomeIcon className={styles.icon} icon="circle" color="#27b677" />
                      <div className={styles.body}>
                        <div className={styles.content}>
                          {note.body}
                          <Brief>{note.name}</Brief>
                        </div>
                      </div>
                    </div>
                  </SwipeAction>
                </Item>
              )
            }
            )
          }
        </PullToRefresh>
      </List>
    )
  }
}


export default Diary
