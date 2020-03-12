import React from 'react';
import './Login.css'

export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
    };

    /* schreibt die Eingabe in ein Formularfeld in State*/
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    /* Das hier passiert wenn der User auf Bestätigen drückt*/
    onSubmit = e => {
        e.preventDefault();         /* das verhindert das die Daten in der URL Leiste stehen */
        this.props.onSubmit(this.state);
    };



    render() {
        return (
            <form className="input-container">

                <h2>Log In</h2>
                <input
                    className="form__field"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                    id='name'
                />
                
                <br />
               
                <input
                    className="form__field"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />

             

                

                <button
                    className="loginButton"
                    onClick={e => this.onSubmit(e)}> Einloggen </button>

            </form>
            );
    }
}