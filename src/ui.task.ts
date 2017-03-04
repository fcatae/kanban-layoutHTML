
(function() {

    function onDragStart(target) : boolean
    {
        return true;
    }

    function attach(domTaskElement) {

        let element_id = domTaskElement.id;

        // Drag START
        domTaskElement.addEventListener('dragstart', function dragstart(ev) {
            
            let allowDrag = onDragStart(element_id);

            if(allowDrag)
            {
                ev.dataTransfer.setData('text', element_id);
            }
            else
            {
                ev.preventDefault();
            }
        });
        
        domTaskElement.draggable = true;
    }

    var tasks : Array<Element> = document.querySelectorAll('.task') as any;
    tasks.forEach( task => attach(task) );    

})();



