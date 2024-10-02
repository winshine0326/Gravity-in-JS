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
        const engine = Engine.create(); //엔진 생성
        const world = engine.world;
        engine.gravity.y = 1.5;
        const runner = Matter.Runner.create();
        
        //렌더 설정
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                width:800,
                height:600,
                isStatic:false,
                wireframes:false, //색까지 칠하기
                background: "white"
            }
        });
        
        // 바닥&벽 만들고 world에 추가
        const ground = Bodies.rectangle(400,590,810,20,{isStatic:true});
        const wallLeft = Bodies.rectangle(0,300,30,600,{isStatic:true});
        const wallRight = Bodies.rectangle(800,300,30,600,{isStatic:true});
        World.add(world,[ground,wallLeft,wallRight]);


        //마우스 드래그 기능
        const mouse = Matter.Mouse.create(render.canvas) //마우스 객체 생성
        const mouseConstraint = Matter.MouseConstraint.create(engine,{ //마우스로 화면에서 바디를 클릭, 드래그 할 수 있도록 함
                mouse: mouse,
                constraint: {
                    stiffness: 0.2, // 탄성정도
                    render:{
                        visible: false //마우스 드래그 시 제약조건 보이기X
                    }
                }
            })
        World.add(world,mouseConstraint)



        //엔진 구동 및 렌더 진행
        Matter.Runner.run(runner,engine);
        Render.run(render);
        
        // 위치와 모양이 랜덤인 바디 6개 생성
        for(let i=0;i<=5;i++){
            let x = Math.random()*400+300;
            let y = Math.random()*150;
            let shape = (Math.random() <= 0.5) ? 
            (Bodies.rectangle(x,y,40,40)):(Bodies.circle(x,y,40,40));
            World.add(world,shape);
        }

        
        return () => {
            Render.stop(render);
            World.clear(world, false);
            Engine.clear(engine);
            render.canvas.remove();
          }; // 컴포넌트가 unmount 될 때 초기화

    },[]);
    return(
        <div ref={canvasRef}>
        </div>
    );
}
export default Canvas;