import Link from "next/link"

function Contacts() {

    return (
        <div>
            <div className="text-xl text-white bg-slate-500 ">
                <ul className="p-10 ">
                    <li>
                        <Link href="/"> home</Link>
                    </li>
                    <li>
                        <Link href="/details"> detail</Link>
                    </li>
                    <li className="text-3xl text-cyan-200">contacts</li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts