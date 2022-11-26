import cx from 'classnames';
import styles from '../styles/visualize.module.css'

export default Visualize;

function Visualize() {
  return (
    <>

      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
	  
        <form>
		<div style={{borderRadius: '5px', overflow: 'hidden',  background: '#FFC0CB', width: '400px', height: '250px'}}>
          <h1 className="h3 mb-3 fw-normal">Please enter your Javascript code to visualize</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="codeInput" placeholder="Code to visualize" width= '20px' height= '200px'/>
            <label htmlFor="floatingInput"></label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Visualize</button>
          <div className="form-floating">
            <text type="text" className="form-control" id="codeVisualized" placeholder="Password" />
            <label htmlFor="floatingPassword"></label>
          </div>
		  </div>
        </form>
      </main>
    </>
  )
}