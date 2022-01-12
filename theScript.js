//let target = Document.getElementByID("container");

// enter an integer between 1 and 16

let gridMaker = num =>  {
   
const body = document.getElementsByTagName('body')[0];
const tbl = document.createElement('table');
let multi = 256/(num*num);
let count =0;
for (let i = 0; i<num; i++)
{
    const tr = tbl.insertRow();

    for (let j=0; j<num;j++)
    {
        let td = document.createElement('td');
        td.style.backgroundColor = "rgb(189,0,"+multi*count+")";
        tr.appendChild(td);
        
        count++;

    }
}
body.appendChild(tbl);


}
gridMaker(16);