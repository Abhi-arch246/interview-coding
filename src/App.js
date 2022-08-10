import './App.css';
import icon from './icon.png'
import home from './home.png'
import purse from './purse.png'
import pie from './pie.png'
import menu from './menu.png'


function App() {
  return (
    <div className='screen'>
      <h1 className='head'>Saving Plans</h1>
      <p className='para'>Create new plan and save towards that big goal.</p>
      <div className='container'>
        <div className='first'>
          <img src={icon} className="asset" alt="" />
          <h2 className='text'>Tesla goals</h2>
          <div className='rect1'></div>
          <div className='rect2'></div>
        </div>
        <div className='second'>
          <img src={icon} className="asset" alt="" />
          <h2 className='text'>Macbook 220x</h2>
          <div className='rect1'></div>
          <div className='rect2'></div>
        </div>
      </div>

      <div className='container3'>
        <div className='first'>
          <img src={icon} className="asset" alt="" />
          <h2 className='text'>Avoid see finish for village</h2>
          <div className='rect1'></div>
          <div className='rect2'></div>
        </div>
        <div className='second'>
          <img src={icon} className="asset" alt="" />
          <h2 className='text'>Maldives way</h2>
          <div className='rect1'></div>
          <div className='rect2'></div>
        </div>
      </div>

      <div className='container4'>
        <div className='first'>
          <img src={icon} className="asset" alt="" />
          <h2 className='text'>iphone X</h2>
          <div className='rect1'></div>
          <div className='rect2'></div>
        </div>
        <div className='second'>
          <img src={icon} className="asset" alt="" />
          <h2 className='text'>God When</h2>
          <div className='rect1'></div>
          <div className='rect2'></div>
        </div>
      </div>

      <footer>
        <img src={home} className="one" alt="" />
        <img src={purse} className="two" alt="" />
        <img src={pie} className="three" alt="" />
        <img src={menu} className="four" alt="" />

      </footer>
    </div>
  );
}

export default App;
