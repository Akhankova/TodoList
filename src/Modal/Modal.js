import React from 'react';
import './Modal.css';
import Calendar from 'react-calendar';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  }
  render () {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}  style={{marginBottom: '25px', backgroundColor: 'yellow'}}>Open calendar</button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <Calendar />
              <button onClick={() => this.setState({isOpen: false})} style={{marginTop: '35px', backgroundColor: 'rosybrown'}}>Close calendar</button>
            </div>
          </div>)
        }
      </React.Fragment>
    )
  }
}
