import React from 'react';
import { withFetch } from '../hoc/withFetch';

function UsersAnother (props){
    const renderData = () => props.data.map((dataElement) => 
    <div>
    <div>{dataElement.name && dataElement.name.first} {dataElement.name && dataElement.name.last}</div>
    <div>{dataElement.email && dataElement.email}</div>
    <hr/>
    </div>
    )

    return(
        <div>
            {renderData()}
        </div>
        
    )
}

export default withFetch(UsersAnother, 'https://randomuser.me/api/?format=json&results=15');