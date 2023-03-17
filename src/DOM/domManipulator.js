import { List } from "../classes/List";
import cubeIcon from "./images/cube.svg";
import circleIcon from "./images/circle.svg";

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

        listElementContainer.appendChild(header);

        for(let i=0;i<listObj.list.length;i++){
            let item=listObj.list[i];
            listElementContainer.appendChild(domManipulation.createItemElement(item));
        }

        
        const project=document.querySelector(".projects");
        project.appendChild(listElementContainer);
    }

    static deleteListElement(listName){
        const project=document.querySelector(".projects");

        for(let i=0;i<project.childNodes.length;i++){
            const child=project.childNodes[i];
            if(child.className===listName){
                project.removeChild(child);
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
    }
}