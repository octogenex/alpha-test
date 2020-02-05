import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class PeopleItem extends Component {
   
    render() {
        const { id, name, currentCount } = this.props.people;
        return (
            <div>
                
                <strong>{name}</strong>
               
                <button onClick={this.props.decrementCounter.bind(this, id)}>-</button>
                {currentCount}
                <button onClick={this.props.increamentCounter.bind(this,id)}>+</button>
            
            </div>
        );
    }
}
PeopleItem.propTypes = {
    people: PropTypes.object.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    increamentCounter: PropTypes.func.isRequired
}
export default PeopleItem;
