
interface CreateProp {
  type: string;
  children: React.ReactNode;
}
const CreateForm = (props: CreateProp) => {
  const { type, children } = props;
  return (
    <div className="flex p-4 ml-4">
      <form action="">
        <div className="w-full">
          <label className="block text-gray-700">{children}<span className="text-red-500">*</span></label>
          <input type={type} style={{borderColor: '#EA4C88', backgroundColor: '#f7f5f2'}} className="w-full pr-24 text-gray-600 border-b-2 appearance-none focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;