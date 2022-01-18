import styles from './App.module.scss'
import Card from './Card'
const App = () => {
  return (
    <div className={styles.main}>
      <div>
      <h1>3D Simulations</h1>
      <p><pre>Enhance your teaching and engage your students with <br />
        cutting edge 3D Simulations -all at zero cost to you!</pre></p>
      </div>
      <img src="https://www.genome.gov/sites/default/files/media/images/2020-08/DNA_dynamic2020-01.jpg" alt="" className={styles.image} />
      <div className={styles.childDiv1}>
        <div className={styles.cd11}>
          <h6>DNA Replication</h6>
          <button>Lorem-ipsum</button>
        <div className={styles.cd12}> 
        <div>
          <button id={styles.share}>Share</button>
          </div>
          <div>
          <button id={styles.view}>View</button>
        </div>
        </div>
      </div>
      <div className={styles.cd13}>
        <p>Understand the semi-conservative<br/>mechanism of replication,the functions of <br/>the enzymes that play a rolw in the process.</p>
      </div>
        </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    
    </div>
  )
}

export default App