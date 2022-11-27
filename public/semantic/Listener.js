import JavaScriptParserListener from "../parser/JavaScriptParserListener";
import Container from "./components/container";


export default class Listener extends JavaScriptParserListener {
    AllComp = '<Container>Hi d</Container>'
    
    enterStatement(ctx){
        
    }
    enterVarModifier(ctx){
        //this.AllComp = <this.AllComp><p>Estuve en una var modifier</p></this.AllComp>
        //console.log(<this.AllComp/>)
        console.log("keyword", ctx.let_())
    }
    enterLet_(ctx){
        console.log("let_", ctx.NonStrictLet().value)
    }
    visitTerminal(node){
        if (node.getText == "let"){
            this.AllComp.append("<BlueLetComp>let</BlueLetComp>")
        }
        
    }
    enterKeyword(ctx){
        console.log("keyword", ctx)
    }
    
}
