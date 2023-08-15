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
        },
        lougoutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        },
        AdicionarEndereco: (state, action) => {

            if(action.payload.local === '' || action.payload.numero === ''){
                alert('Prencha todos os campos')
                return { 
                    ...state
                }
            }
            if(state.user === null){
                alert('Faça login para colocar endereço')
                return{
                    ...state
                }
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    endereco: {
                        local: action.payload.local,
                        numero: action.payload.numero
                    }
                }
            }
        },
        deletarEndereco: (state) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    endereco: null
                }
            }
        }
    }
})

export const { createUser, lougoutUser, AdicionarEndereco, deletarEndereco } = userSlice.actions
export default userSlice.reducer;