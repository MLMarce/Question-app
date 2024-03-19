
import ShowUser from '../components/showUser'
import ShowQuestion from '../components/showQuestion'
import ShowPoints from '../components/showPoints'
import ButtonSignOut from '../components/signOut'
export default function Game() {
    return (
        <div className=" w-full h-full flex flex-col justify-around items-center pt-10 relative">
            <ShowQuestion/>
            {/* <div className='w-full flex justify-around bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                <ShowUser />
                <ShowPoints />
            </div> */}
            <ButtonSignOut />
        </div>
    )
}