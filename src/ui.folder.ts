class UIFolder {

    public onDrop = function(folderId: string, taskId: string, event: DragEvent) {};
    public onAllowDrop = function(folderId: string, taskId: string, event: DragEvent) { return true; };

    _folderId: string;

    constructor(domFolderElement) {

        if(domFolderElement.id == null || domFolderElement.id == '')
            throw "UIFolder: HTML Element has no ID property";

        this._folderId = domFolderElement.id;

        // Attach events
        domFolderElement.addEventListener('dragover', ev => this.draggingElementOver(ev));
        domFolderElement.addEventListener('drop', ev => this.finishDrop(ev));    
    }

    private draggingElementOver(ev: DragEvent) {
        
        var taskId = ev.dataTransfer.getData('text');

        if( this.onAllowDrop(this._folderId, taskId, ev) ) {
            ev.preventDefault();
        }
    }

    private finishDrop(ev: DragEvent) {

        var taskId = ev.dataTransfer.getData('text');

        if( this.onAllowDrop(this._folderId, taskId, ev) ) {
            ev.preventDefault();
            
            this.onDrop(this._folderId, taskId, ev);
        }           
    }

}
