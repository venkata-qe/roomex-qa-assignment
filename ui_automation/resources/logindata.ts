import { faker } from '@faker-js/faker';

const herokuappBase64EncodedPassword = "U3VwZXJTZWNyZXRQYXNzd29yZCE=";

export const herokuappLoginData = {
    validUserName: 'tomsmith',
    invalidUserName: faker.internet.userName(),
    invalidPassword: faker.internet.password(6)
}