export default class Contact {
    constructor(gender, lastname, firstname, birthdate, phoneNb, email) {
        this.gender = gender,
        this.lastname = lastname,
        this.firstname = firstname,
        this.birthdate = birthdate,
        this.phoneNb = phoneNb,
        this.email = email
    }

    display () {
        return `<tr>
        <td>${this.gender}</td>
        <td>${this.lastname}</td>
        <td>${this.firstname}</td>
        <td>${this.birthdate}</td>
        <td>${this.phoneNb}</td>
        <td>${this.email}</td>
        </tr>
        `        
    }
}