export class Item{
    constructor(title,description,priority){
        this._title=title;
        this._description=description;
        this._priority=priority;
        this._status="To Do";
    }

    get description(){
        return this._description;
    }

    get title(){
        return this._title;
    }

    get priority(){
        return this._priority;
    }

    get status(){
        return this._status;
    }

    set description(value){
        this._description=value;
    }
    
    set title(value){
        this._title=value;
    }

    set priority(value){
        this._priority=value;
    }

    set status(value){
        this._status=value;
    }
}