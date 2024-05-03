import Link from "next/link"
import data from "@/app/data/myList.json"

const page = () => {
  return (
    <>
      <Link href='/' className="btn btn-outline">click me</Link>
      <form>
      <label htmlFor="pokemon">Choose <mark>your</mark> starter <code>Pokemon</code>: </label>
      <input list="starter-pokemon" id="pokemon" name="pokemon" placeholder=" choose .." />
      <datalist id="starter-pokemon">
        {/* <option value="Bulbasaur"><a href="www.google.com"></a></option>
        <option value="pikachu"></option> */}
        {data.map(
          (pokemon: string,index) => <option key={index} value={pokemon}></option> )
}
      </datalist>
      </form>
    </>

  )
}

export default page