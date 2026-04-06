import SearchForm from "../search/SearchForm"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-amber-400 text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg')] bg-cover bg-center" />

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium tracking-wide">
          Powered by TheMealDB
        </span>

        <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight drop-shadow sm:text-6xl">
          Discover Your Next <br />
          <span className="text-yellow-200">Favorite Meal</span>
        </h1>

        <p className="mb-8 text-lg text-white/90 sm:text-xl">
          Search thousands of recipes from around the world — find meals by
          name, browse by category, or let us surprise you with a random dish.
        </p>

        <div className="mx-auto max-w-xl">
          <SearchForm />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span>300+ meal categories</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <span>Cuisines from every region</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span>Save your favorites</span>
          </div>
        </div>
      </div>
    </section>
  )
}
