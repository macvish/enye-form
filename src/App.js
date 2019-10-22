import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Button, Layout, Input, DatePicker, InputNumber, Form } from 'antd'

import { addAge, addDate, addFName, addLName, addHobby } from './reducers/Actions'
import './App.css'

const { Header, Footer, Content } = Layout
const InputGroup = Input.Group
let currentYear = new Date().getFullYear()

class App extends Component{
  constructor(){
    super()
    this.state = {
      currentyear: currentYear,
    }

    this._handleSubmit = this._handleSubmit.bind(this)
    this._disabledYear =this._disabledYear.bind(this)
    this._handleDate = this._handleDate.bind(this)
  }

  _disabledYear(current) {
    // Can not select days before today and today
    return current && current >= moment().endOf('day');
  }

  _handleDate(date, datestring){
    let year = date.year()
    this.props.addDate(year, datestring)
    let age = this.state.currentyear - year
    this.props.addAge(`Age: ${age}`)
  }

  _handleSubmit(e){
    e.preventDefault()

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(`First Name: ${this.props.fname}`)
        console.log(`Last Name: ${this.props.lname}`)
        console.log(`You picked ${this.props.date}`)
        console.log(`Current Year: ${this.state.currentyear}`)
        console.log(`Year: ${this.props.year}`)
        console.log(`Age: ${this.props.age}`)
        console.log(`Hobby: ${this.props.hobby}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="App">
        <Layout>
          <Header>Enya Form</Header>
          <Content>
            <Form onSubmit={this._handleSubmit}>
              <Form.Item>
              {getFieldDecorator('first name', {
                rules: [{ required: true, message: 'Please input your first name!' }],
              })(
                <Input  placeholder='First Name' 
                onChange={(e) => this.props.addFName(e.target.value)}
                style={{width: '23%'}}/>)}
              </Form.Item>
              <Form.Item>
              {getFieldDecorator('last name', {
                rules: [{ required: true, message: 'Please input your last name!' }],
              })(
                <Input placeholder='Last Name' 
                onChange={(e) => this.props.addLName(e.target.value)}
                style={{width: '23%'}}/>)}
              </Form.Item>
              <InputGroup compact>
                <Form.Item>
                {getFieldDecorator('first name', {
                  rules: [{ required: true, message: 'Please enter your date of birth!' }],
                })(
                  <DatePicker 
                    placeholder='Birthday' 
                    format='DD/MM'
                    disabledDate={this._disabledYear}
                    onChange={this._handleDate} 
                    style={{marginRight: 10, width: '80%'}} 
                  />)}
                </Form.Item>
                <Form.Item>
                  <InputNumber 
                    placeholder='Age'
                    value={this.props.age}                
                    style={{marginLeft: 10}} disabled/>
                </Form.Item>
              </InputGroup>  
              <Form.Item>
              {getFieldDecorator('hobby', {
                rules: [{ required: true, message: 'Please input your hobby!' }],
              })(
                <Input placeholder='Hobby' 
                onChange={(e) => this.props.addHobby(e.target.value)}
                style={{width: '23%'}}/>)}
              </Form.Item>
              <div></div>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '23%'}}>Sumbit</Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

const WrappedForm = Form.create({ name: 'user_form' })(App)

const mapStateToProps = state => {
  return{
    fname: state.fname.name,
    lname: state.lname.name,
    date: state.birthday.date,
    age: state.age.age,
    hobby: state.hobby.hobby,
    year: state.birthday.year
  }
}

const mapDispatchToProps = { addAge, addDate, addFName, addLName, addHobby }

export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm)
