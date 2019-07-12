import React, { PureComponent, Fragment } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'dva';
import styles from './index.less';
@connect(({ find }) => ({
  notes: find.notes,
}))
export class Find extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'find/fetchList',
    });
  }
  render() {
    const { notes } = this.props;
    console.log(notes);
    return (
      <WingBlank size="lg" className={styles.find}>
        {notes.map(note => {
          return (
            <Fragment key={note.id}>
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header
                  title={note.id}
                  thumb={note.url}
                  thumbStyle={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
                <Card.Body>
                  <div>{note.name}</div>
                </Card.Body>
                <Card.Footer
                  content={note.width}
                  extra={
                    <div>
                      <span className={styles.count}>{note.box_count}</span>
                      <FontAwesomeIcon icon="heart" />
                    </div>
                  }
                />
              </Card>
            </Fragment>
          );
        })}
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  }
}

export default Find;
