class UITask {
    _elementId: string;

    constructor(domTaskElement: HTMLElement) {

        this._elementId = domTaskElement.id;

        domTaskElement.addEventListener('dragstart', ev => {
            
            let allowDrag = this.onDragStart(this._elementId);

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

    private onDragStart(target) : boolean
    {
        return true;
    }

}

// Setup
var tasks : any = document.querySelectorAll('.task');
tasks.forEach( task => new UITask(task) );   

