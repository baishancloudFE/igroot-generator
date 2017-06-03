import {Component} from 'react'
import {TestApi} from '../apis/test.api'

import './App.scss'

export class App extends Component {
    state = {}

    render() {
        const {testData} = this.state

        return (
            <div id="app">
                <img src="static/bird.jpg" alt="bird"/> <br/>
                welcome to React! <br/>
                {testData}
            </div>
        )
    }

    componentWillMount() {
        TestApi.get()
            .then(json => this.setState({testData: JSON.stringify(json)}))
    }
}
