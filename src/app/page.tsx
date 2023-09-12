import Link from "next/link"
import Loader from "../../public/loading.gif"

function Home() {

  return (
    <div>

      <div className="text-xl text-white bg-slate-500 ">
        <ul className="p-10 ">
          <li className="text-3xl text-cyan-200">homepage</li>
          <li>
            <Link href="/details"> detail</Link>
          </li>
          <li>
            <Link href="/contacts"> contacts</Link>
          </li>
        </ul>
      </div>

      <div className="pt-10 px-28">
        <div className="grid grid-cols-7 bg-orange-400">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>

      <div>
        <img src="Loader" alt="this is loading" />
      </div>
    </div>
  )
}

export default Home