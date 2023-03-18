const xLabelsLanguage = [];
const yLabelsLanguage = [];

const xLabelsTechStack = [];
const yLabelsTechStack = [];

const xLabelsLeetcode = [];
const yLabelsLeetcode = [];

const xLabelsGdpi = [];
const yLabelsGdpi = [];

let languagePath = '/static/assets/data/language.csv';
let techStackPath = '/static/assets/data/techStack.csv';
let leetcodePath = '/static/assets/data/leetcode.csv';
let gdpiPath = '/static/assets/data/gdpi.csv';

async function getLanguageData(path) {
    const respone = await fetch(path);
    const data = await respone.text();
    const table = data.split('\n').slice(1);
    table.forEach((row) => {
        const column = row.split(',');
        const language = column[0];
        const count = column[1];
        xLabelsLanguage.push(language);
        yLabelsLanguage.push(count);
    })
}

async function getTechStackData(path) {
    const respone = await fetch(path);
    const data = await respone.text();
    const table = data.split('\n').slice(1);
    table.forEach((row) => {
        const column = row.split(',');
        const skill= column[0];
        const count = column[1];
        xLabelsTechStack.push(skill);
        yLabelsTechStack.push(count);
    })
}

async function getLeetcodeData(path) {
    const respone = await fetch(path);
    const data = await respone.text();
    const table = data.split('\n').slice(1);
    table.forEach((row) => {
        const column = row.split(',');
        console.log(column)
        xLabelsLeetcode.push(column[0]);
        yLabelsLeetcode.push(column[1]);
    })
}

async function getGdpidata(path) {
    const respone = await fetch(path);
    const data = await respone.text();
    const table = data.split('\n').slice(1);
    table.forEach((row) => {
        const column = row.split(',');
        const language = column[0];
        const count = column[1];
        xLabelsGdpi.push(language);
        yLabelsGdpi.push(count);
    })
}

async function languageChart() {
    await getLanguageData(languagePath);
    const ctx = document.querySelector('#language');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabelsLanguage,
            datasets: [{
                label: 'Preffered Language',
                data: yLabelsLanguage,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
    });
}

async function techStackGraph() {
    await getTechStackData(techStackPath);
    const ctx = document.querySelector('#techStack');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabelsTechStack,
            datasets: [{
                label: 'Tech Stack',
                data: yLabelsTechStack,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
    });
}

async function leetcodeGraph() {
    await getLeetcodeData(leetcodePath);
    const ctx = document.querySelector('#leetcode');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabelsLeetcode,
            datasets: [{
                label: 'Leetcode Score',
                data: yLabelsLeetcode,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
    });
}

async function gdpiGraph() {
    await getGdpidata(gdpiPath);
    const ctx = document.querySelector('#gdpi');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabelsGdpi,
            datasets: [{
                label: 'GDPI Score',
                data: yLabelsGdpi,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
    });
}
languageChart();
techStackGraph();
leetcodeGraph();
gdpiGraph();