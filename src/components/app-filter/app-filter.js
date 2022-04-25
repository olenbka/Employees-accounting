import './app-filter.css';

const AppFilter = (props) => {
    const filterData = [
        {name: 'all', label: 'All employees'},
        {name: 'moreThen1000', label: 'Salary more than 1000'},
        {name: 'rise', label: 'For promotion'},

    ]

    const buttons = filterData.map(({name, label}) => {
        const activeButton = props.filter === name;
        const clazz = activeButton ? "btn-light" : "btn-outline-ligh";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
            )
    })
        
    return (
        <div className="btn-group">
            {buttons}               
        </div>
    );
}

export default AppFilter;
