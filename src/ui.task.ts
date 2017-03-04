class UITask {

    public onDragStart = function(taskId: string, event: DragEvent) { return true; };

    _elementId: string;

    constructor(domTaskElement: HTMLElement) {

        if(domTaskElement.id == null || domTaskElement.id == '')
            throw "UITask: HTML Element has no ID property";

        this._elementId = domTaskElement.id;

        domTaskElement.addEventListener('dragstart', ev => {
            
            let allowDrag = this.onDragStart(this._elementId, ev);

            if(allowDrag)
            {
                ev.dataTransfer.setData('text', this._elementId);
            }
            else
            {
                ev.preventDefault();
            }
        });
        
        domTaskElement.draggable = true;
    }

}

// Setup
var tasks : any = document.querySelectorAll('.task');
tasks.forEach( task => new UITask(task) );   

