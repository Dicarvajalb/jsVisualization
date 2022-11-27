import antlr4 from "antlr4";
import JavaScriptParser from "../parser/JavaScriptParser";
import JavaScriptLexer from "../lexer/JavaScriptLexer";
import Listener from "./Listener";
import Container from "../../components/container";
export default function semanticMain (){
    const [d,d2,d1] = [10,1,3]
    const input = "const [d,d2,d1] = [10,1,3]"
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
    