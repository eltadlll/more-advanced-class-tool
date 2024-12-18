// Show and hide sections with dynamic backgrounds
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    const appContainer = document.body;
    switch (sectionId) {
        case 'signup':
            appContainer.style.backgroundImage = "url('signup-bg.jpg')";
            break;
        case 'calculator':
            appContainer.style.backgroundImage = "url('calculator-bg.jpg')";
            break;
        case 'book-reader':
            appContainer.style.backgroundImage = "url('book-reader-bg.jpg')";
            break;
        case 'notes':
            appContainer.style.backgroundImage = "url('notes-bg.jpg')";
            break;
        case 'google-search':
            appContainer.style.backgroundImage = "url('google-search-bg.jpg')";
            break;
        case 'ask-ai':
            appContainer.style.backgroundImage = "url('ask-ai-bg.jpg')";
            break;
        default:
            appContainer.style.backgroundImage = "url('default-bg.jpg')";
    }
}

// Calculator logic
let currentInput = '';
function pressKey(key) {
    currentInput += key;
    document.getElementById('calc-display').value = currentInput;
}

function clearCalc() {
    currentInput = '';
    document.getElementById('calc-display').value = '';
}

function calculate() {
    try {
        document.getElementById('calc-display').value = eval(currentInput);
    } catch {
        document.getElementById('calc-display').value = 'Error';
    }
    currentInput = '';
}

// Book reader
function readBook() {
    const file = document.getElementById('file-upload').files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        document.getElementById('book-content').innerText = event.target.result;
    };

    if (file && file.type === 'application/pdf') {
        document.getElementById('book-content').innerHTML = `<iframe src="${URL.createObjectURL(file)}" width="100%" height="600px"></iframe>`;
    } else {
        reader.readAsText(file);
    }
}

// AI Interaction - allows upload of image and voice
function askAI() {
    const query = document.getElementById('ai-input').value;
    const file = document.getElementById('image-upload').files[0];
    
    if (query || file) {
        document.getElementById('ai-response').innerText = `You asked: ${query}. Analyzing image...`;
    }
}
