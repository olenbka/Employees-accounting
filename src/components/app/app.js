
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {name: "Sasha N.", salary: 3200, increase: true},
        {name: "John D.", salary: 3850, increase: false},
        {name: "Lisabet L.", salary: 4100, increase: false}
    ]
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
               <SearchPanel/> 
               <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}


export default App;
