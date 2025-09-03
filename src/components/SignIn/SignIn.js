import React, {Component} from "react";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmit = () => {
        fetch('https://smart-brainapi-fmans.sevalla.app/signin', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.onLoad(user);
                this.props.onRouteChange('home');
            }
        });
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <>
                <div className="center mt6">
                    <main className="pa4 black-100 shadow-2 br4" style={{width: '320px'}}>
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f2 tc fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input 
                                    className="pa2 br3 input-reset ba bg-transparent hover-bg-light-blue hover-white w-100 " 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 br3 input-reset ba bg-transparent hover-bg-light-blue hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="" style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <a href="#0" onClick={() => onRouteChange('Register')} className="f5 link mr2 dim black db">Register</a>
                                <input className="b ph3 br3 pv2 input-reset ba b--black bg-transparent hover-bg-light-yellow grow pointer f6 dib" 
                                    type="submit" 
                                    onClick={this.onSubmit}
                                    value="Sign in"/>
                            </div>
                        </div>
                    </main>   
                </div>
                <div className="center mt3 pa3 note">
                    <div className="shadow-5 bg-light-blue pl3 pr3 pt1 pb2 br3">
                        <p className="f5">Hello! This is just a testing React App. <br/>So you can enter below email and password to sign in if you don't want to register.</p>
                        <p className="f5">Email: test@gmail.com</p>
                        <p className="f5">Password: test</p>
                    </div>
                </div>
            </>
        );
    }

}

export default SignIn;