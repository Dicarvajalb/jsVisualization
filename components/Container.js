import styles from "../styles/container.module.css"
const Container = ({children, colorType}) =>{
    const colors = {
        1:"#ffadadff",
        2:"#ffd6a5ff",
        3:"#fdffb6ff",
        4:"#caffbfff",
        5:"#9bf6ffff",
        6:"#a0c4ffff",
        7:"#bdb2ffff",
        8:"#ffc6ffff",
        9:"#fffffcff"
    }
return(
    <span className={styles["container"]} >
        <p style={{fontWeight:"bold", fontSize:"20px", padding: "0.1em", backgroundColor:colors[colorType?colorType:0]}} >{children}</p></span>
)

}

export default Container