export const equipmentHTML = (equipmentObject) => {
    return `
        <div class="equipment">
            <p>Model: ${equipmentObject.model}</p>
            <p>Serial Number: ${equipmentObject.serialNumber}</p>
            <p>In Working Order: ${equipmentObject.isFunctional ? "✅" : "🚫"}</p>
            <p>Under Warranty: ${equipmentObject.isUnderWarranty ? "✅" : "🚫"}</p>
        </div>
        `  
}