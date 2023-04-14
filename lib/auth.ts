import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Session } from "inspector";

const getGoogleCredentials = () =>{
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECRET')
    }

  return { clientId, clientSecret };
};


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
        })
    ],
    callbacks: {
        session({ token, session }){
            if (token){
                session.user.id = token.id
                session.user.email = token.email
                session.user.image = token.picture
                session.user.name = token.name
            }

            return session;
        },
    },
    // async jwt({token, user}){
        
    // }
}