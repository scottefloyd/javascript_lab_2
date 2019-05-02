"use strict";

class AddressBook {
	constructor() {
		this.contacts = [new Contact("scott", "scott@gmail.com", 7450098, "Me"), 
		new Contact("ralph", "ralph@gmail.com", 5529980, "Friend")];
	}

	add(info){
		this.contacts.push(info);
	}

	deleteAt(index) {
		this.contacts.splice(index, 1);
	}

	print() {
		for (let i = 0; i < this.contacts.length; i++) {

			console.log(`Index: ${i}, Name: ${this.contacts[i].name}, 
				Email: ${this.contacts[i].email}, 
				Phone: ${this.contacts[i].phone}, 
				Relation: ${this.contacts[i].relation}`);
				
		}
	}

}


class Contact {
	constructor(name, email, phone, relation){
		this.name = name,
		this.email = email,
		this.phone = phone,
		this.relation = relation
	}
}

const book = new AddressBook();


	while(true){

		let userChoice = prompt("Would you like to add, delete, print, or quit?");
		if (userChoice === "quit") {
			break;
		} 
		else if (userChoice === "add"){
			book.add(new Contact(
				prompt("Enter a name."),
				prompt("Enter an email."),
				prompt("Enter a phone number."),
				prompt("Enter a relation")
			));
		
		} 
		else if (userChoice === "delete"){
			book.deleteAt(prompt("Which index number?"));
		} 
		else if (userChoice === "print"){
			book.print();
		}
	}


	







