import './app-info.css';

const AppInfo = ({employeesNumber, employeesToIncrease}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in a company </h1>
            <h2>Total employees: {employeesNumber}</h2>
            <h2>Will receive a bonus: {employeesToIncrease}</h2>
        </div>    
    )
}

export default AppInfo;
