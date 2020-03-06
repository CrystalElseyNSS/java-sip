export const employeeHTML = (employeeObject) => {
    return `
        <div class="employee">
            <p>Name: ${employeeObject.firstName} ${employeeObject.lastName}</p>
            <p>Job Title: ${employeeObject.jobTitle}</p>
            <p>Hours Scheduled this Month: ${employeeObject.hoursScheduled}</p>
        </div>
    `
}