// abstract for 
//  - angular
//  - react
//  - jquery

class WorkspaceModel {    

    public getDefaultWorkspaceFolder() {
    }

    public getFolders() {
    }

    public createTask(title, data) {        
    }

    public setTaskFolder(task, folder) {        
    }

}

class FolderView {
    id: string;
    name: string;
    tasks: Array<TaskView>;
}

class TaskView {    
    id: string;
    title: string;
    data: string;

    folder: FolderView;

    public updateData(title, data) {        
    }
}
