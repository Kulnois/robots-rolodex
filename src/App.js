import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Robots Rolodex</h1>
                <SearchBox />
                <CardList />

            </div>
        )
    }
}

export default App;