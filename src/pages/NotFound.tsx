import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly'>
        <h1 className='text-5xl font-semibold'>Page introuvable</h1>
        <Link to="/" className='p-3 rounded-sm'>Revenir à l'accueil</Link>
    </div>
  )
}

export default NotFound
