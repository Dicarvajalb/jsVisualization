import cx from 'classnames';
import styles from '../styles/visualize.module.css'
import React from 'react';
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';
import semanticMain from '../public/semantic/main';
import JsxParser from 'react-jsx-parser';
import Container from '../components/Container';
import Collapsible from '../components/Collapsible';
import {useState} from 'react';
import Image from 'next/image'
import mypic from '../styles/js2.png'

export default Visualize;

function Visualize() {	

	let [message, setMessage] = useState('');

	let [Comp, setComp] = useState('');	

	const handleClick = event => {
/*  */
		console.log(event.target.value);
		setComp(semanticMain(event.target.value))
		//Comp = semanticMain(event.target.value)
		console.log(Comp);
	  };

	  const handleMessageChange = event => {
		setMessage(event.target.value);

	  };

  return (
    <>
<div className={styles["app-whole"]}>
	
			<div className={styles["app-header"]}>
				
				<Image
    			  src={mypic}
    			  alt="Picture of the author"
    			  width="50px"
    			  height="10px"
				  className={styles["app-image"]}
    			/>
                <h2 className="header"> <font color='black'>Visual.js</font></h2>
            </div>
			<div className={styles["app-useful"]}></div>
			<div className={styles["app-title"]}>
                <h2 className="header"> <font color='black'>Insert your JavaScript code</font></h2>
            </div>

            <div className={styles['app-body']}>
                <div>

                    <Form>
						<div className={styles["visualizer"]}>
							<div>
								<Form.Field
        							id="message"
        							name="message"
        							value={message}
                            		control={TextArea}
                            		placeholder='    Your code here..'
									onChange={handleMessageChange}
									className={styles["visualizerInput"]}
                        		/>
							</div> 
							
							<div>
								<Button
								onClick={handleClick}
                            	color="orange"
                            	size="large"
								value={message}
								className={styles["button-21"]}
                        		>
                            	<Icon name='translate' />
                            	⥂</Button>
							</div>
							<div className={styles["visualizerOutput"]}>
								<h1 className={styles.title}>
        						  <JsxParser components={{Container, Collapsible}} jsx={Comp}/>
        						</h1>
							</div>
							{/* <div>
								<Form.Field
                            		control={TextArea}
                            		placeholder='   '
									value={message}
									className={styles["visualizerOutput"]}
                        		/>
								{Comp}
							</div> */}
						</div>

                        {/* <select className={styles["language-select"]}>
                            <option>Please Select Language..</option>
                        </select> */}

                    </Form>


                </div>
            </div>
			</div>


    </>
  )
}