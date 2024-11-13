import { User } from "../model/User";

declare module 'express-session' {
    interface SessionData {
        user: User;
    }
}
