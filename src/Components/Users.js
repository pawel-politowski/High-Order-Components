import React from 'react';
import { withFetch } from '../hoc/withFetch';

function Users (props){
    const renderData = () => props.data.map((dataElement) => 
    <div>
    <div>{dataElement.name && dataElement.name.first} {dataElement.name && dataElement.name.last}</div>
    </div>
    )

    return(
        <div>
            {renderData()}
        </div>
        
    )
}

export default withFetch(Users, 'https://randomuser.me/api/?format=json&results=10');