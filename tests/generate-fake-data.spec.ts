import { test } from '@playwright/test'
import { fa, faker } from '@faker-js/faker'

// Install faker library with this command
//         npm install --save-dev @faker-js/faker

test('Generate fake data', async () => {


    const name = faker.person.firstName();
    console.log(name);
    console.log(faker.person.fullName());
    console.log(faker.person.gender());

    console.log(faker.location.city());
    console.log(faker.location.country());

    console.log(faker.company.name());

    console.log(faker.date.future());
    console.log(faker.date.past());

    console.log((faker.internet.email()));

    console.log((faker.internet.password()));

    console.log(faker.airline.flightNumber());
    console.log(faker.airline.airplane());

})


