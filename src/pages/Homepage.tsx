import FilmForm from './../components/FilmForm';

export default function Homepage(){
    return(
    <div className="min-h-screen text-white w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            MovieVault
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Gestisci la tua lista di film in modo elegante e moderno
          </p>
        </div>
        <main className="flex items-center justify-center w-full max-w-4xl px-4">
          <FilmForm /> 
        </main>
    </div>
  );
}