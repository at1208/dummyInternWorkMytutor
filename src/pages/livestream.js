import React, { Component } from 'react';
import {Button,Card,CardBody,CardHeader,Col,Form,FormFeedback,FormGroup,FormText,Input,Label,Row,} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Flash from 'react-reveal/Flash';




class LiveStream extends Component {

  state = {
   EditLive: 0,
   LiveList: 0,
   startDate: new Date() };

 handleChange = date => {
   this.setState({
     startDate: date }); };

render(){

 if(this.state.LiveList){
   return<div>

   <div className=' justify-content-center'>
     <h1 className='text-center' onClick={() => this.setState({ LiveList: 0 })}>Live Stream</h1>
     <Button className='btn btn-sm ' style={{ marginLeft:'10px'}} onClick={() => this.setState({ LiveList: 1 })}>Live Stream List</Button>
     <Button className='btn btn-sm float-right' style={{ marginRight:'10px'}} onClick={() => this.setState({ EditLive: 1 })}>Edit LiveStream</Button>
   </div>

<hr />

<div className='container-fluid'>
 <Flash>
<h1 className='text-center'> List of Live Streams</h1>
</Flash>
</div>

         </div>
 } else if(this.state.EditLive){
   return <div>

   <div className=' justify-content-center'>
     <h1 className='text-center' onClick={() => this.setState({ LiveList: 0, EditLive: 0 })}>Live Stream</h1>
     <Button className='btn btn-sm ' style={{ marginLeft:'10px'}} onClick={() => this.setState({ LiveList: 1, EditLive:0 })}>Live Stream List</Button>
     <Button className='btn btn-sm float-right' style={{ marginRight:'10px'}} onClick={() => this.setState({ EditLive: 1, LiveList:0 })}>Edit LiveStream</Button>
   </div>

   <DatePicker
         className='text-center'
          placeholder='Select Date'
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={1}
          timeCaption="time"
           dateFormat="MMMM d, yyyy h:mm aa"
        />


   </div>
 }return <div>

        <div className=' justify-content-center'>
          <h1 className='text-center'>Live Stream</h1>
          <Button className='btn btn-sm ' style={{ marginLeft:'10px'}} onClick={() => this.setState({ LiveList: 1, EditLive:0})}>Live Stream List</Button>
          <Button className='btn btn-sm float-right' style={{ marginRight:'10px'}}  onClick={() => this.setState({ EditLive: 1, LiveList:0 }) }>Edit LiveStream</Button>
        </div>

  <hr />

<div className=' ' style={{ marginTop: '50px'}}>

<Col>
  <Card>
  <CardHeader>Enter details</CardHeader>
<CardBody>
<Form>
<FormGroup>
  <Label for="exampleEmail">Title</Label>
  <Input
   type='text'
   placeholder="Enter title of stream"
  />

  <Label for="exampleEmail">Subject</Label>
  <Input
     type='text'
  placeholder='Enter Subject'



  />

  <Label for="exampleEmail">Thumbnail</Label>
  <Input
     type='text'
  placeholder='EnteR URL Link'

  />

  <Label for="exampleEmail">Youtube ID</Label>
  <Input
     type='text'
  placeholder='Enter Youtube ID'



  />
  <br />
  <DatePicker
         placeholder='Select Date'
         selected={this.state.startDate}
         onChange={this.handleChange}
         showTimeSelect
         timeFormat="HH:mm"
         timeIntervals={1}
         timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
       />

<br />
    <Button>Submit</Button>
</FormGroup>
</Form>
</CardBody>
</Card>

</Col>
 </div>

  </div>

}
}
export default LiveStream;
