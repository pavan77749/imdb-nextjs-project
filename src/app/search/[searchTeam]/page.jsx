import Results from "@/components/Results";


export default async function SearchPage({params}) {
    const searchTeam = params.searchTeam;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTeam}&language=en-US&page=1&include_adult=false`)
    const data = await res.json()
    const results = data.results
  return (
    <div>
        {
            results && results.length ===  (
                <h1 className="text-center pt-6">No result found</h1>
            )
        }
        {
            results && <Results results={results}/>
        }
    </div>
  )
}
