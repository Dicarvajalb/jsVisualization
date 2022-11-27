import JavaScriptParserListener from "../parser/JavaScriptParserListener";
import Container from "../../components/container";


export default class Listener extends JavaScriptParserListener {
    AllComp = ""
    
    enterStatement(ctx){
        this.AllComp += "<div style={{border: 'solid 1px green'}}><div>Statement content</div>"
    }
    exitStatement(ctx){
        this.AllComp += "</div>"
    }
    enterIdentifier(ctx){
        this.AllComp += "<Container colorType={2}>"+ctx.getText()+"</Container>"
    }
    enterVarModifier(ctx){
        console.log("keyword", ctx.let_())
    }
    enterLet_(ctx){
        console.log("let_", ctx.NonStrictLet().value)
    }
    enterIfStatement(ctx){
        this.AllComp += "<Container colorType={4}>"
    }

    exitIfStatement(ctx){
        this.AllComp += "</Container>"
    }
    enterNumericLiteral(ctx){
        this.AllComp += "<Container colorType={1}>"+ctx.getText()+"</Container>"
    }
    visitTerminal(node){
        console.log("terminales", node.getText())
        if (node.getText() === "="){
            this.AllComp += "<Container colorType={1}>=</Container>"
            console.log("terminal", this.AllComp)
        }
        if (node.getText() == "let"){
            this.AllComp += "<Container colorType={4}>let</Container>"
            console.log("terminal", this.AllComp)
        }
        else if (node.getText == "if"){
            AllComp += "<h1>if</h1>"
        
    }
    }
    enterKeyword(ctx){
        console.log("keyword", ctx)

    }
    
}
