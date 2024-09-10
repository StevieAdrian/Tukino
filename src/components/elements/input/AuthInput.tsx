interface inputProps {
  placeholder?: string;
  image?: string;
  type?: string;
}

const InputForm = (props: inputProps) => { 
  const {placeholder, image, type} = props;
  return (
    <div className="mb-6 rounded-lg">
      <div style={{backgroundColor: '#3B4148'}} className="flex items-center rounded-lg">
        <div style={{backgroundColor: '#363B41'}} className="p-2 rounded-1-md">
          <img src={image} className='w-8 h-8' alt="" />
        </div>
        <input type={type} placeholder={placeholder} className="w-full p-2 text-gray-400 bg-transparent focus:outline-none" />
      </div>
    </div>
  )
}

export default InputForm;
