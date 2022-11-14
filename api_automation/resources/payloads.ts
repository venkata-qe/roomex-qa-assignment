import { faker } from "@faker-js/faker"

export const createUserPayload = {
    "title": faker.name.jobTitle(),
    "body": faker.random.word(),
    "userId": faker.random.numeric()
}