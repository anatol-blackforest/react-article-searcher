import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import ArticleList from './ArticleList';
import AddForm from './AddForm';
import SearchForm from './SearchForm';

class App extends Component{
    constructor(props){
        super(props);
        this.addNewArticle = this.addNewArticle.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.data = [...this.props.data];
        this.dataForRender = [...this.data];
        this.state = {
            nothingFind: false,
            titleValid: true,
            textValid: true
        };
    }
    addNewArticle(e){
        e.preventDefault();
        if(this.title.value && this.text.value){
            let newArticle = {
                id: Date.now(),
                title: this.title.value,
                text: this.text.value,
                color: this.color.value
            }
            this.data.push(newArticle);
            this.dataForRender = [...this.data];
            this.title.value = "";
            this.text.value = "";
            this.setState({textValid: true, titleValid: true});
        }else{
            if(!this.title.value && !this.text.value){
                this.setState({textValid: false, titleValid: false});
            }else if(!this.title.value && this.text.value){
                this.setState({textValid: true, titleValid: false});
            }else if(!this.text.value && this.title.value){
                this.setState({textValid: false, titleValid: true});
            }
        }
    }
    deleteHandler(id){
        this.data.forEach((item, index, arr) => {
            if (item.id === id){
                this.data.splice(index, 1);
                this.dataForRender = [...this.data];
                this.setState(this.state);
            }
        });
    }
    updateHandler(e, id){
        e.preventDefault();
        this.data.forEach((item, index, arr) => {
            if (item.id === id){
                this.data[index]["title"] = findDOMNode(e.target).querySelector(".update-title").value
                this.data[index]["text"] = findDOMNode(e.target).querySelector(".update-text").value
                this.dataForRender = [...this.data];
                this.setState(this.state);
            }
        });
    }
    searchHandler(e){
        e.preventDefault();
        this.dataForRender = this.data.filter(item => {
            let searchVal = this.search.value.trim().toLowerCase();
            return (item.title.toLowerCase().indexOf(searchVal) !== -1 || item.text.toLowerCase().indexOf(searchVal) !== -1);
        });
        this.setState({nothingFind: this.dataForRender.length ? false : true});
    }
    resetHandler(){
        this.dataForRender = [...this.data];
        this.setState({nothingFind: false});
    }
    render(){
        return <div className="app">
            <AddForm 
                titleValid={this.state.titleValid} 
                textValid={this.state.textValid} 
                addNewArticle={this.addNewArticle} 
                title={title => this.title = title} 
                text={text => this.text = text} 
                color={color => this.color = color} 
            />
            <SearchForm 
                nothingFind={this.state.nothingFind} 
                searchHandler={this.searchHandler} 
                resetHandler={this.resetHandler} 
                search={search => this.search = search} 
            />
            <ArticleList 
                data={this.dataForRender} 
                deleteHandler={this.deleteHandler} 
                updateHandler={this.updateHandler} 
            />
        </div>
    }
}

export default App;