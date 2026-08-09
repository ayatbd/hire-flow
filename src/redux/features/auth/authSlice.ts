import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: any | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: any; token: string | null }>) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            if (token) {
                localStorage.setItem("token", token);
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;