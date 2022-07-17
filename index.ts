import { parse, bold } from './deps.ts'
import { parseValidFlags, runScript } from './utils.ts'

const ARGS = parse(Deno.args)
const scriptName:string = <string>ARGS["_"][0]

const FLAGFILE = "./.flags" 

simple string
const decoder = mew TextDecoder('UTF-8')
let secFlags = ""
try{
    const flags = await Deno.readFile(FLAGFILE)
    secFlags = decoder.decode(flags)
} catch (e) {
    console.log(bold("No flags file detected, running scripts without privileges"))
}

let validFlags:string[] = parseValidFlags(secFlags)
runScript(validFlags,scriptName)