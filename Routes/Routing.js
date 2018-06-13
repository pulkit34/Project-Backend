const config = require("./../App-Configuration/Configuration");
const controller = require("./../Controllers/User-Management");
const control = require("./../Controllers/Task-Controller");
let setRouters = (app) => {
    let baseURL = config.apiVersion;


    //User-Management:

    app.post(`${baseURL}/login`, controller.loginFunction);
    app.post(`${baseURL}/signup`, controller.signupFunction);
    app.post(`${baseURL}/restore`, controller.forgotPasswordFunction);
    app.get(`${baseURL}/all`,controller.getallusers);
    app.delete(`${baseURL}/deleteuser/:id`,controller.removeAccount);

    //Lists:

    app.post(`${baseURL}/create`, control.createToDo);
    app.delete(`${baseURL}/delete/:id`, control.deleteToDo);
    app.get(`${baseURL}/single/:id`, control.singletoDo);
    app.get(`${baseURL}/alltodo`, control.alltoDo);

    //Tasks:

    app.post(`${baseURL}/createtask`,control.createTask);
    app.get(`${baseURL}/alltask`,control.alltasks);
    app.delete(`${baseURL}/deletetask/:id`,control.deleteSingletask);
    app.delete(`${baseURL}/deletemany/:id`,control.deletetasks);
}
module.exports = {
    setRouters: setRouters
}
