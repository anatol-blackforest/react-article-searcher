import React from 'react';

function SearchForm(props){
    return  <div>
        <form  onSubmit={props.searchHandler} >
            <p>Поиск:</p>
            <input type="text" ref={props.search}/>
            <input type="submit" value="search"/>
            <input type="reset" value="reset" onClick={props.resetHandler} />
        </form>
        {props.nothingFind ? <p>Nothing find</p> : null}
    </div>
}

export default SearchForm
