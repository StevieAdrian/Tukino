interface ButtonProps {
  children: React.ReactNode;
  color: string;
}
const Button = (props: ButtonProps) => {
  const {children, color} = props;
  return (
    <button style={{backgroundColor: color}} className="w-full py-2 text-lg font-semibold text-white rounded-md">{children}</button>
  )
}

export default Button;