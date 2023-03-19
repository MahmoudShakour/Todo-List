import {Item} from './classes/Item';
import {List} from './classes/List';
import {Project} from './classes/Project';
import "./css/styles.css";
import { domManipulation } from './DOM/domManipulator';
import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format';

const addListbutton=document.querySelector(".add-list-button");
addListbutton.addEventListener("click",domManipulation.applyAddingList);



let project=new Project("mahmoud Ahmed Abdulshakour");

let item=new Item("TOP","FINISH TODOLIST PROJECT",1,format(startOfToday(),"yyyy-MM-dd"));
let list=new List("Work");
list.addItem(item);


domManipulation.appendListElement(list);
domManipulation.displayList(list);

const todayButton=document.querySelector(".today");
todayButton.addEventListener("click",()=>{
    let list=project.getTodayItems();
    let todayList=new List("today");
    todayList.list=list;
    domManipulation.displayList(todayList);

    const parent=document.querySelector(".display-container");
    parent.removeChild(parent.childNodes[1]);
});


const weekButton=document.querySelector(".week");
weekButton.addEventListener("click",()=>{
    let list=project.getWeekItems();
    let weekList=new List("This Week");
    weekList.list=list;
    domManipulation.displayList(weekList);

    const parent=document.querySelector(".display-container");
    parent.removeChild(parent.childNodes[1]);
});


export {project};