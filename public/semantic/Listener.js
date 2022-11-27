import JavaScriptParserListener from "../parser/JavaScriptParserListener";
import Container from "../../components/container";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";


export default class Listener extends JavaScriptParserListener {
    AllComp = ""
    
    enterStatement(ctx){
        console.log("Statement")
        this.AllComp += "<div style={{border: 'solid 1px green'}}><div>Statement content</div>"
    }
    exitStatement(ctx){
        this.AllComp += "</div>"
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
    
    enterVarModifier(ctx){
        this.AllComp += "<Container colorType={4}>"+ctx.getText()+"</Container>"
    }
    enterAssignable(ctx){
        this.AllComp += "<Container colorType={2}>"+ctx.getText()+"</Container>"
    }
    enterVariableStatement(ctx){
        console.log("var")
    }
    enterSingleExpression(ctx){
        console.log("single")
    }
    visitTerminal(node){
        console.log("terminales", node.getText())
        if (node.getText() === "="){
            this.AllComp += "<Container colorType={1}>=</Container>"
            
        }
       
        if (node.getText() == "let"){
            //this.AllComp += "<Container colorType={4}>let</Container>"
            
        }
        else if (node.getText == "if"){
            AllComp += "<h1>if</h1>"
        
    }
    }
    enterKeyword(ctx){
        console.log("keyword", ctx)

    }
    
}
