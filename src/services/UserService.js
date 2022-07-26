import GenericServices from "./GenericServices";


class UserService extends GenericServices{

    constructor(){
        super();
    }

    getCourse = (page) => this.get("/paginationData?page="+page);
    updateCourse = (id, data) => this.put("/update/"+id, data);
    deleteCourse = (id)=> this.delete("/delete/"+id);
    
}

let userService = new UserService();
export default userService;