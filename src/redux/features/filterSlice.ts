import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    type: string[];
    experience: string[];
    salaryRange: number[];
    page: number;
    limit: number;
}

const initialState: FilterState = {
    type: [], // e.g., ["Full-time", "Contract"]
    experience: [], // e.g., ["Entry Level"]
    salaryRange: [0, 200], // [min, max] in 'k'
    page: 1,
    limit: 6, // Number of jobs per page
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        // Toggles a filter value in an array (used for Checkboxes)
        toggleFilter: (
            state,
            action: PayloadAction<{ group: "type" | "experience"; value: string }>
        ) => {
            const { group, value } = action.payload;
            const index = state[group].indexOf(value);

            if (index > -1) {
                // Remove if exists
                state[group].splice(index, 1);
            } else {
                // Add if doesn't exist
                state[group].push(value);
            }

            // Reset to page 1 whenever filters change
            state.page = 1;
        },

        // Updates the salary range [min, max]
        setSalaryRange: (state, action: PayloadAction<number[]>) => {
            state.salaryRange = action.payload;
            // Reset to page 1 whenever filters change
            state.page = 1;
        },

        // Updates the current page
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        // Resets all filters to initial state
        resetFilters: (state) => {
            state.type = [];
            state.experience = [];
            state.salaryRange = [0, 200];
            state.page = 1;
        },
    },
});

export const { toggleFilter, setSalaryRange, setPage, resetFilters } =
    filterSlice.actions;

export default filterSlice.reducer;