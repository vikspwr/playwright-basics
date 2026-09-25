
// install 
// npm install xlsx

// add xlsx plugin/extension to view xlsx from vs code (optional)
// Note - if you don’t install it, you cannot view xlsx file inside vs code, to view the xlsx you need to open it from file explorer.


import { test } from '@playwright/test'
import XLSX from 'xlsx'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userDataFile = path.join(__dirname, '../loginData1.xlsx');

type userData = {
    username: string,
    password: string
}

test('Data Driven using Excel', () => {

    const wb = XLSX.readFile(userDataFile);

    const ws = wb.SheetNames[0];
    if (!ws) {
        throw new Error("");
    }

    const worksheet = wb.Sheets[ws];
    if (!worksheet) {
        throw new Error("");
    }

    const xlsxToJson = XLSX.utils.sheet_to_json<userData>(worksheet);

    for (const data of xlsxToJson) {
        console.log(data.username);
        console.log(data.password);
    }

})

//////////////////// I have given lecture about laziness, not having much interest, never asking for mock interviews, never doing preparations.
// this dose will be valid for only 4-5 days. then I have to give lecture again!!!!!    Date- 24 Sept 2026