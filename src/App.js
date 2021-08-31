
import imgsrc from './imageInSrc.jpg'
import video from './myVideo.mp4'
import './style.css'
function App() {
  return (
    <div>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Cheikh GUEYE</h1>

<br />

<img src={imgsrc} style={{height:'250px'}}/>

<br />

<img src={'/imageInPublic.jpg'} />

</div>

<video width="320" height="240" src={video} controls="controls" autoplay="true"/>
    </div>
  )
}

export default App
