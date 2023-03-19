import {Item} from './classes/Item';
import {List} from './classes/List';
import {Project} from './classes/Project';
import "./css/styles.css";
import { domManipulation } from './DOM/domManipulator';



const addListbutton=document.querySelector(".add-list-button");
addListbutton.addEventListener("click",domManipulation.applyAddingList);


let project=new Project("mahmoud Ahmed Abdulshakour");

let item=new Item("TOP","FINISH TODOLIST PROJECT",1);
let list=new List("Work");
list.addItem(item);


domManipulation.appendListElement(list);
domManipulation.displayList(list);
export {project};