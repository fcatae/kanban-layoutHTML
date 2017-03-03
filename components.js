(function() {

    function initTaskComponent(task) {

        function dragstart(ev) {
            ev.dataTransfer.setData('text', ev.target.id);
        }
                
        task.draggable = true;
        task.addEventListener('dragstart', dragstart);
    }

    function initFolderComponent(folder) {

        var currentFolder = folder;

        function dragover(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData('text');

            assignTask(data);
        }

        function assignTask(data) {
            var elem = document.getElementById(data);
            currentFolder.appendChild(elem)
        }

        folder.addEventListener('dragover', dragover);
        folder.addEventListener('drop', drop);    
    }

    var tasks = $('.task');
    tasks.map(function(i, task) {
        initTaskComponent(task);
    });

    var folders = $('.folder');
    folders.map(function(i, folder) {
        initFolderComponent(folder);           
    });

})();



