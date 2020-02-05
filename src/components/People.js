import React, { Component } from 'react';
import PeopleItem from './PeopleItem';
import PropTypes from 'prop-types';
export class People extends Component {
   
    render() {
        return this.props.peoples.map((people) => (
            <PeopleItem key={people.id} people={people} decrementCounter={this.props.decrementCounter} increamentCounter={this.props.increamentCounter} />
        ));
    };
}
People.propTypes = {
    peoples: PropTypes.array.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    increamentCounter: PropTypes.func.isRequired
}
export default People;
