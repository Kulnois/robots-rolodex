import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            robots: []
        };
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    render() {
        return (
            <div>
                <h1>Hello Robots Rolodex</h1>
                <SearchBox />
                <CardList />
                {this.state.robots.map(robot => (
                    <div key={robot.id}>{robot.name}</div>
                ))}

            </div>
        )
    }
}

export default App;