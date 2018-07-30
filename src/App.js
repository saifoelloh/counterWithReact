import React, {Component} from 'react'

export default class App extends Component {

    render(){
        return (
            <div>
                <Counter nama="Arsenal" />
            </div>
        );
    }
}

class Header extends Component {
    render(){
        return (
            <ul>
                <li>menu</li>
                <li>list</li>
                <li>contact</li>
            </ul>
        );
    }
}

class Counter extends Component {

    state = {
        number: 0
    }

    naik = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    turun = () => {
        if(this.state.number!==0){
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Ranking {this.props.nama}</h1>
                <h3>{this.state.number}</h3>
                <button onClick={this.naik}>naik</button>
                <button onClick={this.turun}>turun</button>
            </div>
        )
    }

}
