// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const Message = isLoggedIn ? 'Welcome USer' : 'Plase Login'
  return <h1 className="Message">{Message}</h1>
}
export default Message
