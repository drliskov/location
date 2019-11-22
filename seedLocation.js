// {
// 	eventId:
// 	location_name:
// 	Address: {
// 		Address_1:
// 		Address_2:
// 		City:
// 		State:
// 		Zip:
// 		Country:
//     }
// Geo: {
// 		Lat:
// 		Long:
// }
// 	how_to_find_us: string
// }
​
​
const faker = require('faker')
​
var locations = [];
​

for (let i = 0; i < 100; i++) {
    let eventId = i;
    let Location_name = faker.company.companyName();
    let Address_1 = faker.address.streetAddress();
    let Address_2 = faker.address.secondaryAddress();
    let City = faker.address.city();
    let State = faker.address.stateAbbr();
    let Zip = faker.address.zipCode();
    let Country = faker.address.country();
    let Lat = faker.address.latitude();
    let Long = faker.address.longitude();
    let how_to_find_us = faker.lorem.sentence();
​
    let eventLocation = {
        eventId,
        Location_name,
        Address: {
            Address_1,
            Address_2,
            City,
            State,
            Zip,
            Country
        },
        Geo: {
            Lat,
            Long
        },
        how_to_find_us
    }
    locations.push(eventLocation);
}