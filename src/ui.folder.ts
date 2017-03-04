class UIFolder {

    public onDrop: any;
    _folderId: string;

    constructor(domFolderElement) {

        if(domFolderElement.id == null || domFolderElement.id == '')
            throw "UIFolder: HTML Element has no ID property";

        this._folderId = domFolderElement.id;

        // Drag DURING
        domFolderElement.addEventListener('dragover', ev => {
            ev.preventDefault();
        });

        // Drag ENDS
        domFolderElement.addEventListener('drop', ev => {
            ev.preventDefault();

            var taskId = ev.dataTransfer.getData('text');

            this.onDrop(this._folderId, taskId);
        });    
    }

}


// Setup
var folders : any = document.querySelectorAll('.folder');
var i = 0;

folders.forEach( folder => {

    folder.id = "folder_id" + (i++).toString()

    var f = new UIFolder(folder);
    
    f.onDrop = function assign(targetid, data) {
        var target = document.getElementById(targetid);
        var elem = document.getElementById(data);
        target.appendChild(elem);
    };

} );  
