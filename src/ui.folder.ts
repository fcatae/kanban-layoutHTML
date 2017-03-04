class UIFolder {

    public onDrop = function(folderId: string, taskId: string, event: DragEvent) {};
    public onDragOver = function(folderId: string, taskId: string, event: DragEvent) { return true; };

    _folderId: string;

    constructor(domFolderElement) {

        if(domFolderElement.id == null || domFolderElement.id == '')
            throw "UIFolder: HTML Element has no ID property";

        this._folderId = domFolderElement.id;

        // Drag DURING
        domFolderElement.addEventListener('dragover', ev => {

            var taskId = ev.dataTransfer.getData('text');

            if( this.onDragOver(this._folderId, taskId, ev) ) {
                ev.preventDefault();
            }
        });

        // Drag ENDS
        domFolderElement.addEventListener('drop', ev => {

            var taskId = ev.dataTransfer.getData('text');

            if( this.onDragOver(this._folderId, taskId, ev) ) {
                ev.preventDefault();
                
                this.onDrop(this._folderId, taskId, ev);
            }           

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
