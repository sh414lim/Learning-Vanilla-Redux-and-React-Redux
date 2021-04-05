import {createStore} from "redux";



const add=document.getElementById('add');
const minus=document.getElementById('minus');
const number=document.querySelector('span');


//string 을 keep 해주는 const

const ADD="ADD";
const MINUS="MINUS";



const CountModifier=(count=0,action)=>{
    //리덕스 에선 항상 상태(state)에 관해 애기할 때는 switch action.type이라고 작성
    switch(action.type){
        //만약 action type이 ADD 가 되면
        case ADD:
            return count +1
            case MINUS:
                return count -1
                default:
                    return count;
    }
   
};




const Countstore=createStore(CountModifier);
const onChange=()=>{
    number.innerText=Countstore.getState();
}
Countstore.subscribe(onChange);

const handleAdd=()=>{
   Countstore.dispatch({type:ADD});

}
const handleMinus=()=>{

    Countstore.dispatch({type:MINUS});

}

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);






