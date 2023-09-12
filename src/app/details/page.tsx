import Link from "next/link"

function Details() {

    return (
        <div>
            <div className="text-xl text-white bg-slate-500 ">
                <ul className="p-10 ">
                    <li>
                        <Link href="/"> home</Link>
                    </li>
                    <li className="text-3xl text-cyan-200">details</li>
                    <li>
                        <Link href="/contacts"> contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Details