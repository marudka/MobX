import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Page extends Component {
    filter(event) {
        this.props.store.filter = event.target.value;
    }

    createNew(event) {
        if (event.which === 13) {
            this.props.store.createTodo(event.target.value);
        }
    }

    toggleComplete(item) {
        item.complete = !item.complete;
    }

    render() {
        const { filteredTodos, filter, clearComplete } = this.props.store;
        const todosList = filteredTodos.map(item => (
            <li key={item.id}>
                <input
                    type="checkbox"
                    value={item.complete}
                    checked={item.complete}
                    onChange={this.toggleComplete.bind(this, item)}
                />
                {item.value}
            </li>
        ));
        return <div>
            <h1>Hello MobX</h1>
            <div>
                <label>Create new todo</label>
                <input className="create" onKeyPress={this.createNew.bind(this)} />
            </div>
            <div>
                <label>Filter</label>
                <input className="filter" value={filter} onChange={this.filter.bind(this)} />
            </div>
            <ul>{todosList}</ul>
            <button onClick={clearComplete}>Clear complete</button>
        </div>
    }
}

export default Page;
