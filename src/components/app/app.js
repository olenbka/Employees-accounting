import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "Sasha N.", salary: 3200, increase: true, id: 1},
                {name: "John D.", salary: 3850, increase: false, id:2},
                {name: "Lisabet L.", salary: 4100, increase: false, id:3}
            ]        
        }
        this.newId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
        })

    }

    addItem = (name, salary) => {
        
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.newId++

        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data : newArr
            }
        })

    }

    render() { 
        const {data} = this.state; 
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                <SearchPanel/> 
                <AppFilter/>
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    };    
}


export default App;
