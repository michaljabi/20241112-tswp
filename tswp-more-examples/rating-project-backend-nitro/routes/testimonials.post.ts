import {TOKEN_DB} from "../plugins/token-storage";
import {Token} from "../model/Token";
import {TestimonialDto, testimonialSchema} from "../model/testimonial.schema";


export default defineEventHandler(async (event) => {

    const testimonial = await readBody<TestimonialDto>(event);
    try {
        testimonialSchema.parse(testimonial);
    } catch (e) {
        setResponseStatus(event, 422)
        return { error: 'Invalid body', ...e }
    }

    const tokenStore = useStorage<Token>(TOKEN_DB);
    const token = await tokenStore.getItem(testimonial.token)
    if(!token) {
        setResponseStatus(event, 404)
        return { error: `Token ${testimonial.token} not found` }
    }
    if(token.consumed) {
        setResponseStatus(event, 400)
        return { error: `Token ${testimonial.token} already consumed` }
    }

    // Consume Token:
    await tokenStore.setItem(token.id, {...token, consumed: true})

    return { message: 'Testimonial saved' }
})
