import {TOKEN_DB} from "../../plugins/token-storage";
import {Token} from "../../model/Token";

export default defineEventHandler(async (event) => {
    const {value} = event.context.params
    console.log(`Checking token ${value}`)
    const token = await useStorage<Token>(TOKEN_DB).getItem(value)
    if(!token) {
        setResponseStatus(event, 404)
        return { error: `Token ${value} not found` }
    }
    if(token.consumed) {
        setResponseStatus(event, 400)
        return { error: `Token ${value} already consumed` }
    }
    return {
        token: value,
        owner: token.owner,
        email: token.email
    }
})
