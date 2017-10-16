import React from 'react';

function AddForm(props){
    return  <form className="addform" onSubmit={props.addNewArticle}>
        <h2>Добавить:</h2>
        <p>Заголовок:</p>
        <p><input type="text" style={{backgroundColor: props.titleValid ? "#fff" : "red"}} ref={props.title} /></p>
        <p>Текст:</p>
        <p><textarea type="text" style={{backgroundColor: props.textValid ? "#fff" : "red"}} ref={props.text} ></textarea></p>
        <input type="color" ref={props.color} />
        <input type="submit" />
    </form>
}

export default AddForm;
