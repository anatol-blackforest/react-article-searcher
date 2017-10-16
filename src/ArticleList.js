import React, {Component} from 'react';
import Article from './Article';
//список всех записей
class ArticleList extends Component{
    render(){
        const data = this.props.data.map(item => <Article 
            updateHandler={this.props.updateHandler} 
            deleteHandler={this.props.deleteHandler} 
            key={item.id} 
            id={item.id} 
            data={item}
        />);
        return <ul>{data.reverse()}</ul>
    }
}

export default ArticleList;