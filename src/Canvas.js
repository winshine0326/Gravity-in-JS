import React,{ useRef, useEffect } from 'react'
import Matter from 'matter-js'

function Canvas(){
    const canvasRef = useRef();
    
    useEffect(()=>{
        //기초 설정
        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Render = Matter.Render
        const engine = Engine.create() //엔진 생성
        const world = engine.world;
        
        //렌더 설정
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                width:800,
                height:600,
                wireframes:false, //색까지 칠하기
            }
        });
    })
    return(
        <div ref={canvasRef}>
        </div>
    );
}
export default Canvas;