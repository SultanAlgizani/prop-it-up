import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setAge: this.props.age
        };
    }

    addOne = a =>{
        this.setState({setAge: this.state.setAge+1});
    }


    render() {
        const { firstName, lastName, hairColor } = this.props;
            return (
                <div>
                        <h1>{lastName}, {firstName}</h1>
                        <p>Age: {this.state.setAge}</p>
                        <p>Hair color: {hairColor}</p>
                        <button onClick={this.addOne}>Birthday Button for {firstName} {lastName}</button>
                </div>
        );
    }
}

export default PersonCard;