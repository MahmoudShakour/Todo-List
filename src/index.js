import {Item} from './classes/Item';
import {List} from './classes/List';
import {Project} from './classes/Project';
import "./css/styles.css";
import { domManipulation } from './DOM/domManipulator';
import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format';


let project=new Project();

if(!localStorage.getItem("project")){
   let item=new Item("TOP","FINISH TODOLIST PROJECT",1,format(startOfToday(),"yyyy-MM-dd"));
   let list=new List("Work");
   list.addItem(item);
   domManipulation.appendListElement(list);
   domManipulation.displayList(list);
   localStorage.setItem("project",JSON.stringify(project));
}
else{
    // let returnProject=JSONToProject(JSON.parse(localStorage.getItem("project")));
    let returnedProject=Project.JSONToProject(JSON.parse(localStorage.getItem("project")));
    console.log(returnedProject);
    // TYPING To Do
    // console.log(project.list);
    for(let i=0;i<returnedProject.list.length;i++){
        let list=returnedProject.list[i];
        console.log(list);
        domManipulation.appendListElement(list);
        domManipulation.displayList(list);
    }
}


const addListbutton=document.querySelector(".add-list-button");
addListbutton.addEventListener("click",()=>{
    console.log("hi");
    domManipulation.applyAddingList();
    localStorage.setItem("project",JSON.stringify(project));
    console.log(project);
});






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


function JSONToProject(obj){
    let project=new Project();
    for(let i=0;i<obj._list.length;i++){
        let todo=obj._list[i];
        let returnedtodo=new List(todo._name);
        for(let j=0;j<todo._list;j++){
            let item=todo._list[j];
            let returneditem=new Item(item._title,item._description,item._priority,item._dueDate);
            returnedtodo.addItem(returneditem);
        }
        project.addToDoList(returnedtodo);
    }
    console.log(project);
    return project;
}

export {project};