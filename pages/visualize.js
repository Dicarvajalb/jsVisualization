import cx from 'classnames';
import styles from '../styles/visualize.module.css'
import React from 'react';
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';

export default Visualize;

function Visualize() {
  return (
    <>
<div className={styles["app-whole"]}>
			<div className={styles["app-header"]}>
				<head>
					<title>Visualizer</title>
				</head>
                <h2 className="header"> <font color='white'>Please enter your Javascript code to visualize</font></h2>
            </div>

            <div className={styles['app-body']}>
                <div>

                    <Form>
						<div className={styles["visualizer"]}>
							<div>
								<Form.Field
                            		control={TextArea}
                            		placeholder='    Your code here..'
									className={styles["visualizerInput"]}
                        		/>
							</div>
							
							<div>
								<Button
                            	color="orange"
                            	size="large"
								className={styles["button-21"]}
                        		>
                            	<Icon name='translate' />
                            	⥂</Button>
							</div>
							<div>
								<Form.Field
                            		control={TextArea}
                            		placeholder='   '
									className={styles["visualizerOutput"]}
                        		/>
							</div>
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