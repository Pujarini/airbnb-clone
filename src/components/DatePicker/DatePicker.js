import React, { useState } from 'react';
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import './DatePicker.css';

function Search() {
    const history=useHistory();
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      } 
      function handleSelect(ranges){
          console.log(ranges);
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
      }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}></DateRangePicker>
            <h2>Number of Guests
                <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type="number"></input>
            <Button onClick={()=> history.push('/search')}> Search Airbnb</Button>
        </div>
    )
}

export default Search
