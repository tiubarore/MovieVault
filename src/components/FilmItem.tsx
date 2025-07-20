import { useDispatch } from "react-redux";
import {
  rimuoviFilm,
  toggleFavorite,
  toggleWatched,
  updateRating,
  type Film,
} from "../redux/filmsSlice";
import StarRating from "../components/StarRating";
import { type AppDispatch } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faTrashCan as farTrashCan,
  faEye as farEye,
  faEyeSlash as farEyeSlash,
} from "@fortawesome/free-regular-svg-icons";

type Props = { film: Film; watchedPage: boolean };

export default function FilmItem({ film, watchedPage }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white mb-2 truncate group-hover:text-purple-300 transition-colors duration-300">
            {film.titolo}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">{film.descr}</p>
        </div>

        <div className="flex items-center gap-3 ml-6">
          <button
            onClick={() => dispatch(toggleWatched(film.id))}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group/btn"
          >
            <FontAwesomeIcon
              icon={!film.watched ? farEye : farEyeSlash}
              className="text-lg text-gray-400 group-hover/btn:text-blue-400 transition-colors duration-300"
            />
          </button>

          <button
            onClick={() => dispatch(rimuoviFilm(film.id))}
            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 transition-all duration-300 hover:scale-110 group/btn"
          >
            <FontAwesomeIcon
              icon={farTrashCan}
              className="text-lg text-gray-400 group-hover/btn:text-red-400 transition-colors duration-300"
            />
          </button>

          {film.watched && watchedPage && (
            <>
              <button
                onClick={() => dispatch(toggleFavorite(film.id))}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group/btn"
              >
                <FontAwesomeIcon
                  icon={film.favorite ? fasHeart : farHeart}
                  className={`text-lg transition-all duration-300 ${
                    film.favorite
                      ? "text-red-500 group-hover/btn:text-red-400"
                      : "text-gray-400 group-hover/btn:text-red-400"
                  }`}
                />
              </button>

              <div className="bg-white/5 rounded-full p-2 hover:bg-white/10 transition-all duration-300">
                <StarRating
                  initialRating={film.rating}
                  onRatingChange={(newRating) =>
                    dispatch(updateRating({ id: film.id, rating: newRating }))
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
