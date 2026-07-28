require('dotenv').config();

let tasks = [
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Finish JS drills", done: false }
];


function addTask(text,done =false){
    const current_id=Math.max(...tasks.map( task=>task.id))
    const task={}
    task.id=current_id+1
    task.text=text
    task.done=done
    return task

}
tasks.push(addTask("mau",true))

tasks.push(addTask("why"))
//console.log(tasks)

function listTasks(){
    for(let i=0;i < tasks.length;i++  ){
        if(tasks[i].done===false){
            console.log(`${tasks[i].id} [  ]`+tasks[i].text)
        }
        else{
            console.log( `${tasks[i].id}[ x ]`+ tasks[i].text)
        }
    }
}
//listTasks()
function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task === undefined) {
        console.log("id invalid");
    } else {
        task.done = true;
    }
}

//completeTask(2);
listTasks(); // task 2 should now show [x]


function deleteTask(id) {
    tasks = tasks.filter(task=>task.id!==id);

}

deleteTask(1);
listTasks(); // task 1 should be gone, only 2 tasks remain

const readline=require('readline')
const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout,
    }
);
rl.on('line', (input) => {
    const parts=input.split(' ')
    const command=parts[0]
    const rest= parts.slice(1).join(' ')

    if (command==="add"){
        tasks.push(addTask(rest))
    }

    else if(command==='list'){
        listTasks()
    }
    else if (command==='complete'){
        completeTask(Number(rest))
    }

    else if(command==='delete'){
        deleteTask(Number(rest))
    }
    else {
        console.log("Unknown command. Try: add, list, complete, delete");
    }
});

async function parseTaskWithApi(rawText){

    const response=await fetch(
         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
         {
            method:'post',
            headers:{'Content-Type':`Application/json`}
            body: JSON.stringify(
                conent
            )
         }
    )
}