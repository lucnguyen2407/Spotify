import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
export const { auth, signIn, signOut, handlers } = NextAuth({
    providers: [GitHub, Credentials({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {
            const email = "admin@example.com"
            const password = "password"
            if (credentials.email === email && credentials.password === password) {
                return { id: '1', name: "Admin", email }
            }
            else {
                throw new Error("Invalid credentials")
            }
        }
    })]
})