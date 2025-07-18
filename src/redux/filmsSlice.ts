import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Film = {            // crep il tipo Film
    id: number;
    titolo: string;
    descr: string;
    favorite: boolean;
    watched: boolean;
    rating: number;
};

const initialState: Film[] = [];        // stato iniziale del Film

const filmsSlice = createSlice({                 //creo lo slice
    name: 'films',                               // nome dello slice
    initialState,                       //prendo lo stato iniziale dalla costante creata
    reducers: {                         //creo i reducers   
        aggiungiFilm: (state, action: PayloadAction<{descr: string, titolo: string}>) => {   //ogni reducers ha sempre bisogno dello state, il payload <string> è il dato in input
            state.push({    // vado ad aggiornare l'array di todos
                id: Date.now(),
                descr: action.payload.descr,
                titolo: action.payload.titolo,
                favorite: false,
                watched: false,
                rating: 0
                });
        },
        rimuoviFilm: (state, action: PayloadAction<number>) => { // in questo caso in input voglio l'id da cancellare
            return state.filter(film => film.id !== action.payload); // ho bisogno del return perché voglio sovrascrivere l'array todos con quello filtrato senza l'oggetto da eliminare
        },
        toggleWatched: (state, action: PayloadAction<number>) => { // ho di nuovo bisogno dell'id
            const film = state.find(f => f.id === action.payload);  // cerco l'id corrispondente e cambio il boolean completato
            if (film) {
                film.watched = !film.watched;
            }
        },
        toggleFavorite: (state, action: PayloadAction<number>) => { // ho di nuovo bisogno dell'id
            const film = state.find(f => f.id === action.payload);  // cerco l'id corrispondente e cambio il boolean completato
            if (film) {
                film.favorite = !film.favorite;
            }
        },
        updateRating: (state, action: PayloadAction<{id: number, rating: number}>) => { // ho di nuovo bisogno dell'id
            const film = state.find(f => f.id === action.payload.id);  // cerco l'id corrispondente e cambio il boolean completato
            if (film) {
                film.rating = action.payload.rating;
            }
        }
    }
});

// esporto il reducer e le sue actions

export const { aggiungiFilm, rimuoviFilm,toggleWatched, toggleFavorite, updateRating} = filmsSlice.actions;
export default filmsSlice.reducer;
