import React from 'react';

const PersonCard = props => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         setAge: this.props.age
    //     };
    // }

    // addOne = a =>{
    //     this.setState({setAge: this.state.setAge+1});
    // }

    const { firstName, lastName, age, hairColor } = props;
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            {/* <button onClick={this.addOne}>Birthday Button for {firstName} {lastName}</button> */}
        </div>
    );
}

export default PersonCard;