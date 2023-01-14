// import 'App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';

function LinkBtn(props) {
    return (
      <form className='link-button' action={props.link} target={props.target}>
        <button className='border-2 border-white my-3 p-3 hover:p-5 hover:border-[#349eeb] rounded-lg transition-all'>{props.text}</button>
      </form>
    )
  }
  
function PageBtn(props) {
return (
    <Link className='link-button' to={props.link}>
        <button className='border-2 border-white my-3 p-3 hover:p-5 hover:border-[#349eeb] rounded-lg transition-all'>{props.text}</button>
    </Link>
)
}

export {LinkBtn,PageBtn};