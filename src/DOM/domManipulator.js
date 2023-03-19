import { List } from "../classes/List";
import { Item } from "../classes/Item";
import cubeIcon from "./images/cube.svg";
import circleIcon from "./images/circle.svg";
import { project } from "../index.js";


export class domManipulation{

    static appendListElement(listObj){

        const listElementContainer=document.createElement("div");
        listElementContainer.className="list-element-container";

        
        const listIcon=new Image();
        listIcon.className="list-icon";
        listIcon.src=circleIcon;

        const listName=document.createElement("div");
        listName.className="list-name";
        listName.textContent=listObj.name;

        const header=document.createElement("div");
        header.className="header";
        header.appendChild(listIcon);
        header.appendChild(listName);

        header.addEventListener("click",()=>{
            domManipulation.displayList(listObj);
        });

        listElementContainer.appendChild(header);

        for(let i=0;i<listObj.list.length;i++){
            let item=listObj.list[i];
            listElementContainer.appendChild(domManipulation.createItemElement(item));
        }

        
        const projectdiv=document.querySelector(".projects");
        projectdiv.appendChild(listElementContainer);

        project.addToDoList(listObj);
    }

    static deleteListElement(listName){
        const projectdiv=document.querySelector(".projects");
        project.deleteToDoList(listName);

        for(let i=0;i<projectdiv.childNodes.length;i++){
            const child=projectdiv.childNodes[i];
            if(child.className===listName){
                projectdiv.removeChild(child);
                return true;
            }
        }
        return false;
    }

    static createItemElement(item){
        const itemElementContainer=document.createElement("div");
        itemElementContainer.className="item-element-container";

        const itemIcon=new Image();
        itemIcon.src=cubeIcon;
        itemIcon.className="item-icon";
        
        const itemName=document.createElement("div");
        itemName.textContent=item.title;
        itemName.className="item-title";

        itemElementContainer.appendChild(itemIcon);
        itemElementContainer.appendChild(itemName);
        return itemElementContainer;
    }


    static applyAddingList(){
        const inputText=document.querySelector(".add-list-input");
        const name=inputText.value;
        if(name==="") return ;
        const newList=new List(name);
        domManipulation.appendListElement(newList);    
        inputText.value="";
        return newList;
    }

    static displayList(listObj){
        const displayContainer=document.createElement("div");
        displayContainer.className="display-container";

        const projectName=document.createElement("div");
        projectName.className="project-name";
        projectName.textContent=listObj.name;

        const addItemButton=document.createElement("button");
        addItemButton.className="add-item-button";
        addItemButton.textContent="+ Add Item";
        addItemButton.addEventListener("click",()=>{
            domManipulation.showItemForm(listObj);
        });


        displayContainer.appendChild(projectName);
        displayContainer.appendChild(addItemButton);
        
        for(let i=0;i<listObj.list.length;i++){
            displayContainer.appendChild(domManipulation.displayItem(listObj.list[i]));
        }

        const infoArea=document.querySelector(".info-area");
        while(infoArea.childNodes[0]!==undefined){
            infoArea.removeChild(infoArea.childNodes[0]);
        }
        infoArea.appendChild(displayContainer);
    }

    static displayItem(itemObj){
        const itemContainer=document.createElement("div");
        itemContainer.className="item-container";

        const itemTitle=document.createElement("div");
        itemTitle.className="item-title-display";
        itemTitle.textContent=itemObj.title;

        const itemDescription=document.createElement("div");
        itemDescription.className="item-description-display";
        itemDescription.textContent="DESCRIPTION: "+itemObj.description;

        const itemPriority=document.createElement("div");
        itemPriority.className="item-priority-display";
        itemPriority.textContent="Priority: "+itemObj.priority;

        const itemDueDate=document.createElement("div");
        itemDueDate.className="item-dueDate-display";
        itemDueDate.textContent="DueDate: "+itemObj.dueDate;

        const itemStatus=document.createElement("div");
        itemStatus.className="item-status-display";
        itemStatus.textContent="STATUS: " +itemObj.status;
        console.log(itemStatus);
        if(itemObj.status==="Done") itemStatus.classList.add("toggling");
        else itemStatus.classList.remove("toggling");
        domManipulation.statusColor(itemStatus,itemObj);

        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPriority);
        itemContainer.appendChild(itemStatus);
        itemContainer.appendChild(itemDueDate);

        return itemContainer;
    }

    static statusColor(itemStatus,itemObj){

        itemStatus.addEventListener("click",()=>{
            console.log(itemObj);
            if(itemStatus.textContent==="STATUS: To Do"){
                itemStatus.textContent="STATUS: Done";
                itemObj.status="Done";
                itemStatus.classList.add("toggling");
            }
            else{
                itemStatus.textContent="STATUS: To Do";
                itemObj.status="To Do";
                itemStatus.classList.remove("toggling");
            }
        });
    }

    static showItemForm(listObj){
        const form=document.createElement("form");
        form.className="item-form";


        const title=document.createElement("input");
        title.placeholder="Title";
        title.name="Title";
        title.required=true;
        
        const description=document.createElement("input");
        description.placeholder="Description";
        description.name="Description";
        description.required=true;
        
        
        const priority=document.createElement("input");
        priority.placeholder="Priority";
        priority.name="Priority";
        priority.required=true;
        priority.type="number";

        const dueDate=document.createElement("input");
        dueDate.name="dueDate";
        dueDate.required=true;
        dueDate.type="date";

        const button=document.createElement("button");
        button.textContent="Add Item";
        button.name="Add Item";

        form.appendChild(title);
        form.appendChild(description);
        form.appendChild(priority);
        form.appendChild(dueDate);
        form.appendChild(button);
        
        
        const body=document.querySelector("body");
        body.appendChild(form);

        let itemobj;
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            itemobj=new Item(e.currentTarget.Title.value,e.currentTarget.Description.value ,e.currentTarget.Priority.value,e.currentTarget.dueDate.value);
            listObj.list.push(itemobj);
            let item=domManipulation.displayItem(itemobj);
            const container=document.querySelector(".display-container");
            container.appendChild(item);

            const body=document.querySelector("body");
            body.removeChild(form);
        });
    }
}