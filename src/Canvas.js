import React,{ useRef, useEffect} from 'react'
import Matter from 'matter-js'

function Canvas(){
    const containerRef = useRef();
    const canvasRef = useRef();
    
    useEffect(()=>{
        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const engine = Engine.create() //엔진 생성
        
    })
    return(
        <div></div>
    );
}
export default Canvas;