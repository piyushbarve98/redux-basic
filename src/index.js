import "./styles.css";
import { createStore } from 'redux';

const initState = {
  todos:[],
  posts:[]
}
function myReducer(state= initState, action){
  if(action.type==='ADD_TODO'){
    return({
      ...state,
      todos:[...state.todos, action.todo]
    });
  }
  if(action.type==='ADD_POST'){
    return({
      ...state,
      posts:[...state.posts, action.post]
    });
  }
}
let store = createStore(myReducer);


store.subscribe(()=>{
  console.log('action happened!!');
  console.log(store.getState());
});

store.dispatch({type:'ADD_TODO', todo:'Watch React Tutorials'});
store.dispatch({type:'ADD_TODO', todo:'Become A React Ninja'});
store.dispatch({type:'ADD_POST', post:'this is post'})