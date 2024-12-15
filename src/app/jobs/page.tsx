import Link from "next/link"
export default function Jobs () {
    return (
        <div>
            <h1 className="underline font-bold text-4xl ">Jobs Page!</h1>
            <br />
            <Link href="jobs/programing" className="ml-5">Go To Programing Jobs</Link>
        </div>
    )
}