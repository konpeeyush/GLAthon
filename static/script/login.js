const form = document.getElementById('form');
const Languages = [];
const softSkills = [];
const hardSkills = [];
const extra = [];
let cpi = 0;
let gdpi = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Languages

    const java = document.getElementById('java');
    const c = document.getElementById('c');
    const python = document.getElementById('python');
    const html = document.getElementById('html');
    const js = document.getElementById('js');

    if (java.checked) {
        Languages.push(java.value);
    }
    if (c.checked) {
        Languages.push(c.value);
    }
    if (python.checked) {
        Languages.push(python.value);
    }
    if (html.checked) {
        Languages.push(html.value);
    }
    if (js.checked) {
        Languages.push(js.value);
    }

    // Soft Skills


    const communication = document.getElementById('communicationSkills');
    const timeManagement = document.getElementById('timeManagement');
    const leadership = document.getElementById('leadership');
    const problemSolving = document.getElementById('problemSolving');

    if (communication.checked) {
        softSkills.push(communication.value);
    }
    if (timeManagement.checked) {
        softSkills.push(timeManagement.value);
    }
    if (leadership.checked) {
        softSkills.push(leadership.value);
    }
    if (problemSolving.checked) {
        softSkills.push(problemSolving.value);
    }

    // hard Skills
    const dsa = document.getElementById('dsa');
    const android = document.getElementById('androidNative');
    const machineLearning = document.getElementById('machineLearning');
    const flutter = document.getElementById('flutter');
    const webD = document.getElementById('webDevelopment');
    const blockChain = document.getElementById('blockChain');
    if (dsa.checked) {
        hardSkills.push(dsa.value);
    }
    if (android.checked) {
        hardSkills.push(android.value);
    }
    if (machineLearning.checked) {
        hardSkills.push(machineLearning.value);
    }
    if (flutter.checked) {
        hardSkills.push(flutter.value);
    }
    if (webD.checked) {
        hardSkills.push(webD.value);
    }
    if (blockChain.checked) {
        hardSkills.push(blockChain.value);
    }


    // Extra Curriculars

    const leetCode = document.getElementById('leetCode');
    const codeForces = document.getElementById('codeForces');
    const codeChef = document.getElementById('codeChef');
    const codingNinjas = document.getElementById('codingNinjas');

    // if (leetCode.checked) {
    //     extra.push(leetCode.value);
    // }
    if (codeForces.checked) {
        extra.push(codeForces.value);
    }
    if (codeChef.checked) {
        extra.push(codeChef.value);
    }
    if (codingNinjas.checked) {
        extra.push(codingNinjas.value);
    }


    // CPI and GDPI
    cpi = document.getElementById('cpi').value;
    gdpi = document.getElementById('gdpi').value;

    // API Call

});


