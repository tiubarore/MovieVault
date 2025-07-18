import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import FilmItem from "./FilmItem";

type Props = { watchedPage: boolean };

export default function FilmList({ watchedPage }: Props) {
  const films = useSelector((state: RootState) => state.film);
  const filteredFilms = [];

  if (watchedPage) {
    filteredFilms.push(...films.filter((f) => f.watched));
  } else {
    filteredFilms.push(...films.filter((f) => !f.watched));
  }

  if (filteredFilms.length == 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 max-w-md mx-auto">
          <div className="text-6xl mb-4 opacity-50">🎬</div>
          <h3 className="text-2xl font-semibold text-gray-300 mb-2">
            Nessun film presente
          </h3>
          <p className="text-gray-500">Inizia aggiungendo il tuo primo film!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredFilms.map((film, index) => (
        <div
          key={film.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <FilmItem film={film} watchedPage={watchedPage} />
        </div>
      ))}
    </div>
  );
}
