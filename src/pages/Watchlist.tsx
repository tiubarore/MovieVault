import FilmList from "../components/FilmList";

type Props = { watched: boolean };

export default function Watchlist({ watched }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Watchlist
          </h1>
          <p className="text-gray-300 text-lg">I tuoi film da guardare</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <FilmList watchedPage={watched} />
        </div>
      </div>
    </div>
  );
}
