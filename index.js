(function() {

// Setup
var tasks = document.querySelectorAll('.task');
tasks.forEach( task => new UITask(task) );   

var folders = document.querySelectorAll('.folder');
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

})();