import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';
class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }


    render () {
        console.log('props', this.props.personAddedHandler);
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => dispatch({type: actionTypes.ADD_PERSON }),
        personDeleteHandler: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personId: personId})
    }
}
// console.log('asdf',mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Persons);