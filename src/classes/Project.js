import {List} from './List';

export class Project{

    constructor(){
        this._list=[];
    }

    addToDoList(addedList){
        if(addedList instanceof List){
            this._list.push(addedList);
            return true;
        }
        return false;
    }

    deleteToDoList(ListName){
        for(let i=0;i<this._list.length;i++){
            if(this._list[i].name===ListName){
                this._list.splice(i,1);
                return true;
            }
        }
        return false;
    }

    get list(){
        return this._list;
    }

    set list(value){
        this._list=value;
    }
}