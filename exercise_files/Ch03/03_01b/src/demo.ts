type ContactName = string;

type ContactStatus = "active" | "inactive" | "new";

type ContactBirthDate = Date | number | string;

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

interface Contact extends Address {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

type AddressableContact = Contact & Address;
    
function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
    line1: "123 Street",
    line2: "Apt 4B",
    province: "Some Province",
    region: "Some Region",
    postalCode: "123456"
};
