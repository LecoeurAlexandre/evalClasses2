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
        return `${this.brand} - ${this.model} - ${this.km} - ${this.year}`
    }
}