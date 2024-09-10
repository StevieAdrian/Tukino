
const Sidebar = () => {

  return (
    <aside style={{backgroundColor: '#1B1919', opacity: 0.95}} className="w-1/5 h-full p-4">
      <nav>
        <ul className="font-bold">
          <li className="flex items-center mb-4 text-gray-400">
            {/* <img src={close} alt="" className="w-6 mr-1"/> */}
            <i className="mr-2"></i> User
          </li>
          <li style={{color: '#EA4C88'}} className="flex items-center mb-4 ">
            <i className="mr-2"></i> Anime
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar