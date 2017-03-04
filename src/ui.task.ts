class UITask {

    public onDragStart = function(taskId: string, event: DragEvent) { return true; };

    _elementId: string;
    _element: HTMLElement;

    constructor(domTaskElement: HTMLElement) {

        if(domTaskElement.id == null || domTaskElement.id == '')
            throw "UITask: HTML Element has no ID property";

        this._element = domTaskElement;
        this._elementId = domTaskElement.id;

        // Listen to 'dragstart' event
        domTaskElement.addEventListener('dragstart', ev => this.startDraggingElement(ev));
        
        // Allow element to be dragged around
        domTaskElement.draggable = true;
    }

    private startDraggingElement(ev: DragEvent) {
        
        let allowDrag = this.onDragStart(this._elementId, ev);

        if(allowDrag)
        {
            ev.dataTransfer.setData('text', this._elementId);
        }
        else
        {
            ev.preventDefault();
        }
    }

}
