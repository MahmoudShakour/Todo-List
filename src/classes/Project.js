import {List} from './List';
import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';

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

    getTodayItems(){
        let list=[];
        for(let i=0;i<this._list.length;i++){
            let todolist=this._list[i];
            for(let j=0;j<todolist._list.length;j++){
                let item=todolist._list[j];
                if(isToday(new Date(item.dueDate))){
                    list.push(item);
                }
            }
        }
        return list;
    }

    getTomorrowItems(){
        let list=[];
        for(let i=0;i<this._list.length;i++){
            let todolist=this._list[i];
            for(let j=0;j<todolist._list.length;j++){
                let item=todolist._list[j];
                if(isTomorrow(new Date(item.dueDate))){
                    list.push(item);
                }
            }
        }
        return list;
    }


    get list(){
        return this._list;
    }

    set list(value){
        this._list=value;
    }
}