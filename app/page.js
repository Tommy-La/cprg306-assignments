import Link from 'next/link'
import StudentInfo from './StudentInfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <Link href="../week2">Week 2</Link>
        <br></br>
        <Link href="../week3">Week 3</Link>
      </div>      
    </main>
  )
}
