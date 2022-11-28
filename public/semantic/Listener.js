import JavaScriptParserListener from "../parser/JavaScriptParserListener";
import Container from "../../components/container";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";


export default class Listener extends JavaScriptParserListener {
    AllComp = ""
    varr = "<"
    enterStatement(ctx){
        console.log("Statement")
        this.AllComp += "<div style={{border: 'solid 1px green'}}>"
    }
    exitStatement(ctx){
        this.AllComp += "</div>"
    }
    enterLet_(ctx){
        console.log("let_", ctx.NonStrictLet().value)
    }
    enterIfStatement(ctx){
        this.AllComp += "<div style={{border: 'solid 1px green'}}>"
    }

    exitIfStatement(ctx){
        this.AllComp += "</div>"
    }
    
    enterVarModifier(ctx){
        this.AllComp += "<Container colorType={4}>"+ctx.getText()+"</Container>"
    }
    enterBlock(ctx){
        this.AllComp += "<Collapsible statementType='!'>"
    }
    exitBlock(ctx){
        this.AllComp += "</Collapsible>"
    }
    enterFunctionDeclaration(ctx){
        this.AllComp += "<Collapsible statementType='!'>"
    }
    exitFunctionDeclaration(ctx){
        this.AllComp += "</Collapsible>"
    }
    enterClassTail(ctx){
        this.AllComp += "<Collapsible statementType='!'>"
    }
    exitClassTail(ctx){
        this.AllComp += "</Collapsible>"
    }
    enterFunctionBody(ctx){
        this.AllComp += "<Collapsible statementType='!'>"
    }
    exitFunctionBody(ctx){
        this.AllComp += "</Collapsible>"
    }
    enterVariableStatement(ctx){
        console.log("var")
    }
    enterSingleExpression(ctx){
        console.log("single")
    }
    
    enterLiteral(ctx){
        this.AllComp += "<Container colorType={2}>"+ctx.getText()+"</Container>"
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
        || node.getText() === "." || node.getText() === "=>"
        ){
            this.AllComp += "<Container colorType={7}>"+"{"+'"'+node.getText()+'"'+"}"+"</Container>"
            
        }
        else if(node.getText() === "--" || node.getText() === "++"|| node.getText() === "+=" || node.getText() === "-="
        || node.getText() === "*-"){
            this.AllComp += "<Container colorType={3}>"+"{"+'"'+node.getText()+'"'+"}"+"</Container>"
        }
        else if(node.getText() === "<"|| node.getText() === ">"){
            this.AllComp += "<Container colorType={8}>"+"brb"+"</Container>"
        }
        else if(node.getText() === "new" || node.getText() === "return"|| node.getText() === "function" || node.getText() === "class"){
            this.AllComp += "<Container colorType={2}>"+node.getText()+"</Container>"
        }
        else if(node.getText() === "this"){
            this.AllComp += "<Container colorType={6}>"+node.getText()+"</Container>"
        }
        else if(node.getText() === "if" || node.getText() === "for" || node.getText() === "while"|| node.getText() === "do"){
            this.AllComp += "<Container colorType={5}>"+node.getText()+"</Container>"
        }
    }
    enterKeyword(ctx){
        console.log("keyword", ctx)

    }    
}
