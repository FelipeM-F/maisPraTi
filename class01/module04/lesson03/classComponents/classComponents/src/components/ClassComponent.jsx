import { Component } from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
    }

    add = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <button onClick={this.add}>Adicionar</button>
            </div>
        )
    }
}