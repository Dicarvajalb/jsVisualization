import JavaScriptParserListener from "../parser/JavaScriptParserListener";
import Container from "../../components/container";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";


export default class Listener extends JavaScriptParserListener {
    AllComp = ""
    varr = "<"
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
        this.AllComp += "<div style={{border: 'solid 1px green'}}><div>if statement</div>"
    }

    exitIfStatement(ctx){
        this.AllComp += "</div>"
    }
    enterVarModifier(ctx){
        this.AllComp += "<Container colorType={4}>"+ctx.getText()+"</Container>"
    }
    
    enterVariableStatement(ctx){
        console.log("var")
    }
    enterSingleExpression(ctx){
        console.log("single")
    }
    enterNumericLiteral(ctx){
        this.AllComp += "<Container colorType={1}>"+ctx.getText()+"</Container>"
    }
    enterIdentifier(ctx){
        this.AllComp += "<Container colorType={1}>"+ctx.getText()+"</Container>"
    }
    enterKeyword(ctx){
        this.AllComp += "<Container colorType={3}>"+ctx.getText()+"</Container>"
    }
    visitTerminal(node){
        console.log("terminales", node.getText())
        if (node.getText() === "=" || node.getText() === "," || node.getText() === "[" || node.getText() === "]"|| node.getText() === ":"|| node.getText() === ")"|| node.getText() === "("
        || node.getText() == "{" || node.getText() == "}"
        || node.getText() === "+"|| node.getText() === "-"|| node.getText() === "%"|| node.getText() === "/"|| node.getText() === "*"
        || node.getText() === ">" || node.getText() === "<" || node.getText() === ">=" || node.getText() === "<=" || node.getText() === "=="
        ){
            this.AllComp += "<Container colorType={7}>"+"{"+'"'+node.getText()+'"'+"}"+"</Container>"
            
        }
        else if(node.getText() === "<"|| node.getText() === ">"){
            this.AllComp += "<Container colorType={8}>"+"brb"+"</Container>"
        }
        else if(node.getText() === "new"|| node.getText() === "if"){
            this.AllComp += "<Container colorType={8}>"+node.getText()+"</Container>"
        }
    }
    enterKeyword(ctx){
        console.log("keyword", ctx)

    }    
}
