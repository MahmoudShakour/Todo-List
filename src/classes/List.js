import { Item } from "./Item";  


export class List{
    constructor(name){
        this._name=name;
        this._list=[];
    }

    addItem(addedItem){
        if(addedItem instanceof Item){
            this._list.push(addedItem);
            return true;
        }
        return false;
    }

    deleteItem(itemTitle){
        for(let i=0;i<this._list.length;i++){
            if(this._list[i].title===itemTitle){
                this._list.splice(i,1);
                return true;
            }
        }
        return false;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name=value;
    }

    get list(){
        return this._list;
    }

    set list(value){
        this._list=value;
    }

}