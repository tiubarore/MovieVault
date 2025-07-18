import { useDispatch } from "react-redux";
import { type AppDispatch } from "../redux/store";
import { useState } from "react";
import { aggiungiFilm } from "../redux/filmsSlice";
import Alert from '@mui/material/Alert';

export default function FilmForm() {
    const dispatch = useDispatch<AppDispatch>();
    const [titleInput, setTitleInput] = useState("");
    const [descrInput, setDescrInput] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (titleInput.trim() !== "" && descrInput.trim() !== "") {
            const newFilmPayload = { 
                titolo: titleInput, 
                descr: descrInput
            }
            dispatch(aggiungiFilm(newFilmPayload));
            setTitleInput("");
            setDescrInput("");
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            {showAlert && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium">Film aggiunto con successo!</span>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                value={titleInput}
                                onChange={(e) => setTitleInput(e.target.value)}
                                placeholder="Titolo del film"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none peer-focus:opacity-100"></div>
                        </div>
                        
                        <div className="relative">
                            <textarea
                                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 min-h-[120px] resize-none"
                                value={descrInput}
                                onChange={(e) => setDescrInput(e.target.value)}
                                placeholder="Descrizione del film..."
                            />
                        </div>
                        
                        <button 
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95" 
                            type="submit"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <span>Aggiungi Film</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}