const numberOfFiles = 9;
const path = './assets/projects/code/project_';

var response = Array(numberOfFiles);

function readFile(fileLocation, index) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileLocation, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var text = xhr.responseText;
            response[index] = text;
        }
    };
    xhr.send();
}

for (var i = 0; i < numberOfFiles; i++) {
    var newPath = path + (1 + Math.floor(i / 3)) + '_' + (1 + i % 3) + '.html'; 
    //console.log(newPath);
    readFile(newPath, i);
}