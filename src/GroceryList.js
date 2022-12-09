import { Component } from 'react';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangEvent(e) {
        this.setState({ userInput: e });
        // console.log(event.target.value);
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item')
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({ groceryList: listArray, userInput: '' });
            // console.log(listArray);
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({ groceryList: listArray })
    }

    crossedWord(e) {
        const lime = e.target;
        lime.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                        <input type="text"
                            placeholder='Do you want to buy today?'
                            onChange={(e) => { this.onChangEvent(e.target.value) }}
                            value={this.state.userInput} />
                    </div>
                    <div className='container'>
                        <button onClick={() => this.addItem(this.state.userInput)} className="add" >Add</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className='container'>
                        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}