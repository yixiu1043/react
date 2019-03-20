import React, { Component } from 'react'
import { connect } from 'dva';
import { Button, InputItem, Toast } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import Link from 'umi/link';
import router from 'umi/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.less'

export class Form extends Component {
  static propTypes = {
    form: formShape,
  };
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        const { username, password } = error;
        if (username.errors.length) {
          Toast.info(username.errors[0].message)
          return false
        }
        if (password.errors.length) {
          Toast.info(password.errors[0].message)
          return false
        }
      }
      router.push('/')
      // console.log(error);
    });
  }
  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div className={styles.form}>
        <div className={styles.close}>
          <FontAwesomeIcon icon="times" inverse />
        </div>
        <div className={styles.top}>
          <FontAwesomeIcon icon="book-open" size="6x" inverse />
          <span className={styles.txt}>吾记</span>
        </div>
        <InputItem
          clear
          className={styles.input}
          placeholder="输入昵称"
          {...getFieldProps('username', { rules: [{ required: true, message: '请输入用户名' }] })}
        >
          <FontAwesomeIcon icon="user" inverse />
        </InputItem>
        <div className="ti20 red-font p10 h30">{(errors = getFieldError('username')) ? errors.join(',') : null}</div>
        <InputItem
          clear
          type="password"
          className={styles.input}
          placeholder="输入密码"
          {...getFieldProps('password', { rules: [{ required: true, message: '请输入密码' }] })}
        >
          <FontAwesomeIcon icon="unlock-alt" inverse />
        </InputItem>
        <div className="ti20 red-font p10 h30">{(errors = getFieldError('password')) ? errors.join(',') : null}</div>
        <Button className={styles.submit} onClick={this.submit}>提交</Button>
        <div className={styles.links}>
          <span className="white-font cs">注册账号</span>
          <span className="white-font cs">忘记密码</span>
        </div>
      </div>
    )
  }
}

export default createForm()(Form);



