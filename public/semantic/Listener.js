import JavaScriptParserListener from "../parser/JavaScriptParserListener";
import Container from "./components/container";


export default class Listener extends JavaScriptParserListener {
    AllComp = '<Container>Hi d</Container>'
    
    enterStatement(ctx){
        
    }
    enterVarModifier(ctx){
        //this.AllComp = <this.AllComp><p>Estuve en una var modifier</p></this.AllComp>
        //console.log(<this.AllComp/>)
    }
    
}
