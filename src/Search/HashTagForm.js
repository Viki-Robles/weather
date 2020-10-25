import React from 'react';
import shortid from 'shortid';


export default  class HashTagForm extends React.Component {
    state = { text: ''};

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text:this.state.text,
            complete: false,
            id: shortid.generate()
        });
        this.setState({
            text: ""
        });
    }
    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <input
            name="text"
            onChange={this.handleChange} 
            placeholder="#"
            value={this.state.text}/>
            </form>
            <button onClick={this.handleSubmit}>Add</button>
            </>
        );
    }
}