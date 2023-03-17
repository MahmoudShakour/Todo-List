import {Item} from './classes/Item';
import {List} from './classes/List';
import {Project} from './classes/Project';
import "./css/styles.css";
import { domManipulation } from './DOM/domManipulator';



const addListbutton=document.querySelector(".add-list-button");
addListbutton.addEventListener("click",domManipulation.applyAddingList);


let item=new Item("desc","tit",1);
let item2=new Item("desc","tit",1);
let list=new List("work");
list.addItem(item);
list.addItem(item2);

domManipulation.appendListElement(list);