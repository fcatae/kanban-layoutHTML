// abstract calls
//  eg. call Kanban REST API

class WorkspaceProxy {    

    // GET workspaces/<wid>/folders/default
    public getDefaultFolderId() : string {
        return 'default';
    }

    // GET workspaces/<wid>/folders
    public getFolderIds() : Array<string> {
        return new Array<string>();
    }

    // GET workspaces/<wid>/folders/<fid>/tasks
    public getTasks() {
    }

    // POST workspace/<wid>/folders/<fid>/tasks
    public createTask(id, title, data) : TaskProxy {
        return new TaskProxy();
    }

    // POST workspaces/<wid>/folders/<fid>/tasks/<tid>/move ? to=<fid>
    public setTaskFolder(task, folder) {        
    }

    // GET workspaces/<wid>/folders/<fid>/tasks/<tid>
    public getData(id) : string {        
        return '';
    }

    // GET workspaces/<wid>/folders/<fid>/tasks/<tid>
    public updateData(id, title, data) : TaskProxy {
        return new TaskProxy();
    }    
}

class WorkspaceFolderProxy {
    workspaceId: string;
    folderId: string;
    taskFolderId: string;
    name: string;
}

class TaskCollectionProxy {
    id: string;
    tasks: Array<TaskProxy>;
    next: TaskCollectionProxy | null;
}

class TaskProxy {    
    id: string;
    title: string;
    preview: string;
}

class TaggedTaskProxy {    
    id: string;
    title: string;
    preview: string;
    tag: string;
    tag_data: string;
} // technology , metric , etc

