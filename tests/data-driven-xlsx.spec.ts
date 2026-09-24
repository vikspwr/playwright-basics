
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