import { equipmentHTML } from './EquipmentHTML.js';
import { copyOfEquipmentArray } from './equipmentDataArray.js';

const contentTarget = document.querySelector('.equipmentSection');

export const equipmentMaker = () => {
    const newEquipmentArray = copyOfEquipmentArray();
    for (const newEquipmentObject of newEquipmentArray) {
        const newEquipmentHTMLString = equipmentHTML(newEquipmentObject);
        contentTarget.innerHTML += newEquipmentHTMLString
    }
}