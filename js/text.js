var quill = new Quill('#page-1', {
    modules: {
        syntax: true,
        toolbar: [
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'direction': 'rtl' },{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['blockquote', 'code-block','link', 'image', 'video', 'formula'],
        ],
    },
    theme: 'snow',
    preserveWhitespace: false
});

paper.setup(canvas);

var tool = new paper.Tool();

var currentPath;
var strokeColor = 'black';
var strokeWidth = 1;

/*
var previewCircle = new paper.Path.Circle({
    center: [0, 0],
    radius: strokeWidth,
    fillColor: strokeColor,
    opacity: 1,
    visible: true
});
*/

tool.onMouseDown = function (event) {
    currentPath = new paper.Path();
    currentPath.strokeColor = strokeColor;
    currentPath.strokeWidth = strokeWidth;
    currentPath.strokeCap = 'round';
    currentPath.strokeJoin = 'round';
    currentPath.add(event.point);
};

/*
tool.onMouseMove = function (event) {
    previewCircle.position = event.point;
    previewCircle.radius = strokeWidth / 2;
};
*/

tool.onMouseDrag = function (event) {
    currentPath.add(event.point);
};

tool.onMouseUp = function (event) {
    currentPath.smooth();
    currentPath.simplify(5);
};

/*
document.querySelector('.width-scrollbar').addEventListener('input', function () {
    strokeWidth = this.value;
    previewCircle.remove();
    previewCircle = new paper.Path.Circle({
        center: [0, 0],
        radius: strokeWidth / 2,
        fillColor: strokeColor,
        opacity: 1,
        visible: true
    });
});
*/

// Event listener for the eraser button
var eraserBtn = document.querySelector('.eraser-btn');
eraserBtn.addEventListener('click', function () {
    strokeColor = 'white';
    previewCircle.fillColor = strokeColor;
});

// Title input element
var titleInput = document.querySelector('.title');

var saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', function () {
    var title = titleInput.value.trim();
    var data = {
        title: title,
        text: quill.root.innerHTML,
    };
    
    var json = JSON.stringify(data);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'my-file.denote';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});


var uploadBtn = document.querySelector('.upload-btn');
uploadBtn.addEventListener('click', function () {
    document.querySelector('#upload-input').click();
});

var uploadInput = document.querySelector('#upload-input');
uploadInput.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var contents = event.target.result;
        var data = JSON.parse(contents);
        quill.root.innerHTML = data.text;
        titleInput.value = data.title || '';
    };
    reader.readAsText(file);
});


var exportBtn = document.querySelector('.export-btn');
exportBtn.addEventListener('click', function () {
    // Get the HTML content of the Quill editor
    var html = quill.root.innerHTML;

    // Set up the options for html2pdf
    var options = {
        margin: 20,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    // Create a PDF from the HTML content using html2pdf.js with the specified options
    html2pdf().set(options).from(html).save('my-file.pdf');
});