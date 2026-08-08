import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: any | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    isLoading: false,
    error: null,
};

// --- REGISTER THUNK ---
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData: any, thunkAPI) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            // Fetch doesn't throw errors on 400/500, so we check response.ok
            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Registration failed");
            }

            return data; // This is { user, token } from your backend
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Server connection failed");
        }
    }
);

// --- LOGIN THUNK ---
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials: any, thunkAPI) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Login failed");
            }

            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Server connection failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            if (typeof window !== "undefined") {
                localStorage.removeItem("token");
            }
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                if (typeof window !== "undefined") {
                    localStorage.setItem("token", action.payload.token);
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // Login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                if (typeof window !== "undefined") {
                    localStorage.setItem("token", action.payload.token);
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;