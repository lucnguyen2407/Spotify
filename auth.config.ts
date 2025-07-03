import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                return isLoggedIn; // Chỉ cho phép vào dashboard nếu đã đăng nhập
            }
            return true; // Các route khác không cần bảo vệ
        },
    },
    providers: [Credentials({})], // Add providers with an empty array for now
} satisfies NextAuthConfig;