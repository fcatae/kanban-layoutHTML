(function() {

    function initTaskComponent(domTaskElement) {

        // Drag START
        domTaskElement.addEventListener('dragstart', function dragstart(ev) {
            ev.dataTransfer.setData('text', ev.target.id);
        });
        
        domTaskElement.draggable = true;
    }

    function initFolderComponent(domFolderElement, callback) {

        var DOMElem = domFolderElement;
        var DOMcallback = callback;
        
        // Drag DURING
        domFolderElement.addEventListener('dragover', function dragover(ev) {
            ev.preventDefault();
        });

        // Drag ENDS
        domFolderElement.addEventListener('drop', function drop(ev, callback) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData('text');

            DOMcallback(DOMElem, data);
        });    
    }

    function assign(target, data) {
        var elem = document.getElementById(data);
        target.appendChild(elem)
    }

    var tasks = $('.task');
    tasks.map(function(i, task) {
        initTaskComponent(task);
    });

    var folders = $('.folder');
    folders.map(function(i, folder) {
        initFolderComponent(folder, assign);           
    });

})();



