import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className='settingsForm' >
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?pid=ImgDet&rs=1" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id='fileInput' style={{display:'none'}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Safal'/>
            <label>Email</label>
            <input type="email" placeholder='Safal@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
          <Sidebar/>
    </div>
  )
}
