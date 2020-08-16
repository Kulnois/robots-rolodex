import React, { useState, useEffect }  from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');    
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchRobots = () => {        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => users.length > 0 ? setRobots(users) : setErrorMessage('No se encontraron resultados'))
            .catch(error => setErrorMessage(`Error de conexión, por favor compruebe su conexión a internet --${error.message}--`))
    };

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    useEffect(() => {
        fetchRobots();
    }, []);    

    const filteredRobots = () => {
        if (robots.length > 0) {
            return robots.filter(robot =>
                robot.name.toLowerCase().includes(searchField.trim().toLowerCase())
            )
        }
    };

    const renderContent = () => {
        if (errorMessage) {
            return <h3>{errorMessage}</h3>;
        } else if (robots.length > 0 && filteredRobots().length > 0) {
            return <CardList robots={filteredRobots()} />;
        } else if (robots.length > 0 && !errorMessage && filteredRobots().length === 0) {        
            return <h3>Resultado no encontrado pruebe con otro nombre de robot.</h3>;
        } else {
            return <h3>Buscando robots...</h3>;
        }
    };

    return (
        <div>
            <h1>Robots Rolodex</h1>
            <SearchBox
                placeholder="Buscar Robots"
                handleChange={handleChange}
            />
            {renderContent()}
        </div>
    );
}

export default App;