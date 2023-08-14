import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        createUser: (state, action) => {
            // console.log(action.payload); // payload é aonde a gente pegar a informações.
            
            return { 
                ...state,
                user: {
                    nome: action.payload.nome,
                    email: action.payload.email,
                    endereco: null
                }
             }
        }
    }
})

export const { createUser } = userSlice.actions
export default userSlice.reducer;