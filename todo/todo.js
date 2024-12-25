const fs = require('fs') ;
const filePath  = "./tasks.json" ;

const loadTasks = () => {
    try {
        dataBuffer = fs.readFileSync(filePath);
        dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
    console.log("Task added", task)
}
const addTask = (task) =>{
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
}

const command = process.argv[2] ;
const argument = process.argv[3] ;

if(command === "add"){
    addTask(argument);
}else if(command === "list"){
    listTasks();        
}else if(command === "remove"){
    removeTask(parseInt(argument));
}else{
    console.log("Unknown command");
}