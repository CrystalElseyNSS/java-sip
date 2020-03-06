import { employeeHTML } from './EmployeeHTML.js';
import { copyOfEmployeesArray } from './employeeDataArray.js';

const contentTarget = document.querySelector('.employeeSection');

export const employeeMaker = () => {
    const newEmployeeArray = copyOfEmployeesArray();
    for (const newEmployeeObject of newEmployeeArray) {
        const newEmployeeHTMLString = employeeHTML(newEmployeeObject);
        contentTarget.innerHTML += newEmployeeHTMLString
    }
}