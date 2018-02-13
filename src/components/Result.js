import React from 'react';
import { Link } from 'react-router-dom';

function Result (props){
     console.log(props);
      return(
        <div>
         {props.flights.map(f=>
          <h2 key = {f.id}>
          <Link to={{pathname: '/reservation/' + f.id+'/'+props.user}}><span>&#x2618;</span></Link>
          <span>{f.origin}  </span>
          <span>{f.destination}</span>
          </h2>
        )}
        </div>
      );
    }


export default Result
