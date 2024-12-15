import Link from "next/link"
export default function PageNotFound() {
    return(
        <div>
            <h1 className="text-3xl font-bold underline">Oops This Page is not Found ! 404</h1>
            <br />
            <p className="ml-5">Please check your URL</p>
            <br />
            <Link href="/" className="ml-5">Or click here to go <b>Home Page!</b></Link>
        </div>
    )
}