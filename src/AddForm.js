import React from 'react';
//форма добавления новой записи
function AddForm(props){
    return  <form className="addform" onSubmit={props.addNewArticle}>
        <h2>Добавить:</h2>
        <p>Заголовок:</p>
        <p><input type="text" style={{backgroundColor: props.titleValid ? "#fff" : "red"}} ref={props.title} /></p>
        <p>Текст:</p>
        <p><textarea type="text" style={{backgroundColor: props.textValid ? "#fff" : "red"}} ref={props.text} ></textarea></p>
        <input type="submit" />
    </form>
}

export default AddForm;
