import {Token} from "../model/Token";
import { faker } from '@faker-js/faker';

export const TOKEN_DB = 'tokens';

const staticTokens = [
    't3st', '4h4ecwrdp', 'rEapYrU6G', 'tuTWrx68d', '3ANZczVcm', 'J0100a4oA'
]

export default defineNitroPlugin(async () => {
    const tokenStore= useStorage<Token>(TOKEN_DB)
    for(const token of staticTokens) {
        const fullName = faker.person.fullName();
        const [firstName, lastName] = fullName.split(' ');
        await tokenStore.setItem(token, {
            id: token,
            consumed: false,
            owner: fullName,
            email: faker.internet.email({firstName, lastName}).toLowerCase()
        })
    }
    console.log('Token storage initialized');
    console.log(`Valid tokens are: ${await tokenStore.getKeys()}`)
})
