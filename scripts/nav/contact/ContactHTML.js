export const contactInfoHTML = (contactInfoObject) => {
    return `
        <div class="contactInfo">
            ${contactInfoObject.infoType}: ${contactInfoObject.info}
        </div>
    `
}