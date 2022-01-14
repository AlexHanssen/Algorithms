

let gridMaker = num =>  {

let nRed = Math.random()*255;
let nGreen = Math.random()*255;

document.getElementById('red').innerHTML = "The Red Value is "+Math.round(nRed);
document.getElementById('green').innerHTML = "       The Green Value is "+Math.round(nGreen);
const body = document.getElementById('theGrid');

const tbl = document.createElement('table');
let multi = 256/(num*num);
let count =0;

for (let i = 0; i<num; i++)
{
    const tr = tbl.insertRow();

    for (let j=0; j<num;j++)
    {
        let curCount=count;
        let td = document.createElement('td');
        td.style.backgroundColor = "rgb("+nRed+","+nGreen+","+multi*curCount+")";
        td.addEventListener("mouseenter", (event) => {
                td.style.textAlign = 'center';
                td.innerHTML = Math.round(multi*curCount);
                td.style.fontWeight = 900;
            })
        td.addEventListener("mouseleave", (e) =>
        {
            td.innerHTML = '';

        })
        td.style.width = 90/num +"vw";
        td.style.height = 80/num +"vh";
        tr.appendChild(td);
        
        count++;

    }
}
body.appendChild(tbl);


}

//console.log(nRed+"  "+nGreen);
gridMaker(16);