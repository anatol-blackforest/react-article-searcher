import React, {Component} from 'react';

class Article extends Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            isOpen: false
        }
    }
    handleToggle(){
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        let data = this.props.data;
        return <li style={{backgroundColor: data.color}} >
            <p className="deleteitem" onClick={() => this.props.deleteHandler(this.props.id)}>X</p>
            <p className="updateitem"  onClick={this.handleToggle}>+</p>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            {
                this.state.isOpen ? (<form onSubmit={(e) =>  this.props.updateHandler(e, this.props.id)}>
                    <p><input type="text" className="update-title" placeholder={data.title} /></p>
                    <p><textarea className="update-text" placeholder={data.text} ></textarea></p>
                    <input type="submit" />
                </form>) : null
            }
        </li>
    }
}

export default Article;
