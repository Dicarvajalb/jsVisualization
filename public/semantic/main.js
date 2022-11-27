import antlr4 from "antlr4";
import JavaScriptParser from "../parser/JavaScriptParser";
import JavaScriptLexer from "../lexer/JavaScriptLexer";
import Listener from "./Listener";
import Container from "../../components/container";
export default function semanticMain (){
    const {ds,d1} = new Array
    let varr = 10+2+3
    if(varr > 2){

    }
    const input = "const [10,2] = [10,2] const da = [10,2] const da,db = [10,2] const {ds,d1} = 10 const {ds,d1} = new Array let varr = 10+2+3 if(varr == (1==1)){let d = 10}"
    const chars = new antlr4.InputStream(input);
    const lexer = new JavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    
    
    parser.buildParseTrees = true;
    const tree = parser.program()
    const printer = new Listener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
    return printer.AllComp;
}
    