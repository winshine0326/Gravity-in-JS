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
        engine.gravity.y = 1.5
        
        //렌더 설정
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                width:800,
                height:600,
                wireframes:false, //색까지 칠하기
                background: "F5EBE0"
            }
        });
        
        // 바닥&벽 만들고 world에 추가
        const ground = Bodies.rectangle(400,590,810,60,{isStatic:true});
        const wallLeft = Bodies.rectangle(0,300,60,600,{isStatic:true});
        const wallRight = Bodies.rectangle(800,300,60,600,{isStatic:true});
        World.add(world,[ground,wallLeft,wallRight]);

    })
    return(
        <div>
            <canvas ref={canvasRef}/>
        </div>
    );
}
export default Canvas;