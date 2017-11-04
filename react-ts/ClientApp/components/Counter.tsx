import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todosActions';

export class Counter extends React.Component<any, any> {
    constructor() {
        super();

        this.onHandleSomething = this.onHandleSomething.bind(this);
    }

    onHandleSomething(){
        this.props.createTodo();
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <button onClick={this.onHandleSomething}>Add Todo</button>
        </div>;
    }
}

function mapStateToProps(state:any,ownProps:any){
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch:any){
    return {
        createTodo: (todo:any) => dispatch(todoActions.createTodo(todo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter) as typeof Counter;
//export default Counter;