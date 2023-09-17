"use client"

import axios, {Axios} from "axios";
import {useEffect} from "react";


export default function Home() {

    let inputNodes : Node[] = [];

    function getNamedInputs(baseElement: Node) : Node[] {
        let elements = baseElement.childNodes;
        let foundElements : Node[] = [];
        elements.forEach( x =>
        {
            let result = getNamedInputs(x);
            foundElements =  foundElements.concat(result);
        });
        if(baseElement.nodeName == "INPUT")
        {
            foundElements.push(baseElement);
        }
        return foundElements;
    }

    function initialize() {
        console.log("initializing");
        let elements = document.childNodes;
        let foundElements : Node[] = []
        for (let element of elements)
        {
            let result = getNamedInputs(element);
            foundElements = foundElements.concat(result);
        }

        inputNodes = foundElements;
    }

    useEffect(() => {
        initialize();
    });

    class Inputs {
       square: string;
       value: string;
       constructor(square: string, value: string)
       {
           this.square = square;
           this.value = value;
       }
    }

    function resetBoard() {
        for(let node of inputNodes)
        {
            let inputTag = node as HTMLInputElement;
            inputTag.value = "";
            inputTag.classList.remove("answered")
        }
    }

    function getSolution() {

        let submission : Inputs[] = [];

        // get the values from the input nodes
        for(let node of inputNodes)
        {
            let inputTag = node as HTMLInputElement;
            submission.push(new Inputs(inputTag.name, inputTag.value))
        }

        console.log("Submitting")
        axios.post("https://localhost:7236/Solver", submission)
             .then(x => processSolverResults(x.data))
    }

    function processSolverResults (returnResponse: any) {
        console.log("processing results")
        for(let node of inputNodes)
        {
            let inputTag = node as HTMLInputElement;
            // get the matching name from the return response.
           let match = returnResponse.updatedValues.find(x  => x.square == inputTag.name)
            if(match != undefined)
            {
                inputTag.classList.add("answered");
                inputTag.value = match.value;
            }
        }
    }


  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex-row">
          <input className="numberinput" type="text" maxLength={1} name="x-1-y-1"></input>
          <input className="numberinput" type="text" maxLength={1} name="x-2-y-1"></input>
          <input className="numberinput" type="text" maxLength={1} name="x-3-y-1"></input>
          <div className="vdivider"/>
          <input className="numberinput" type="text" maxLength={1} name="x-4-y-1"></input>
          <input className="numberinput" type="text" maxLength={1} name="x-5-y-1"></input>
          <input className="numberinput" type="text" maxLength={1} name="x-6-y-1"></input>
          <div className="vdivider"/>
          <input className="numberinput" type="text" maxLength={1} name="x-7-y-1"></input>
          <input className="numberinput" type="text" maxLength={1} name="x-8-y-1"></input>
          <input className="numberinput" type="text" maxLength={1} name="x-9-y-1"></input>
      </div>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-2"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-2"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-2"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-2"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-2"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-2"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-2"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-2"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-2"></input>
        </div>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-3"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-3"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-3"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-3"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-3"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-3"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-3"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-3"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-3"></input>
        </div>
        <div className="hdivider"/>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-4"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-4"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-4"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-4"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-4"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-4"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-4"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-4"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-4"></input>
        </div>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-5"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-5"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-5"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-5"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-5"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-5"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-5"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-5"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-5"></input>
        </div>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-6"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-6"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-6"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-6"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-6"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-6"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-6"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-6"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-6"></input>
        </div>
        <div className="hdivider"/>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-7"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-7"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-7"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-7"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-7"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-7"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-7"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-7"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-7"></input>
        </div>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-8"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-8"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-8"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-8"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-8"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-8"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-8"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-8"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-8"></input>
        </div>
        <div className="inputrow">
            <input className="numberinput" type="text" maxLength={1} name="x-1-y-9"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-2-y-9"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-3-y-9"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-4-y-9"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-5-y-9"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-6-y-9"></input>
            <div className="vdivider"/>
            <input className="numberinput" type="text" maxLength={1} name="x-7-y-9"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-8-y-9"></input>
            <input className="numberinput" type="text" maxLength={1} name="x-9-y-9"></input>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div><button className="solver" name="solveButton" onClick={(_ => getSolution())} >Solve</button>
            <span>&nbsp;&nbsp;</span>
        <button className="solver" name="resetButton" onClick={(_ => resetBoard())}>Reset</button>
        </div>
    </main>
  )

}
