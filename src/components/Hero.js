import React, { useLayoutEffect, Suspense, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const parent = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let Timeline = gsap.timeline({ delay: 2 });
      Timeline.to(".TextHeader1", { opacity: 1, delay: 2.1 });
      Timeline.to(".TextHeader2", { opacity: 1, delay: 0.5 });
      Timeline.to(".TextParagraph", { opacity: 1, delay: 0 });
      Timeline.to(".ActionButton", { opacity: 1, delay: 1 });

      gsap.from(".TextHeader1", {
        y: -150,
        delay: 4.2,
        duration: 1.2,
      });

      gsap.from(".TextHeader2", {
        y: -200,
        delay: 5,
        duration: 1.2,
      });
      gsap.from(".TextParagraph", {
        y: 120,
        delay: 5,
        duration: 1.8,
      });
    }, parent);
    return () => ctx.revert();
  }, []);

  return (
    <div className="HeroSection">
      <div className="HeroText app" ref={parent}>
        <div>
          <h2 className="TextHeader1">Solving hard problems in easy ways,</h2>
          <h2 className="TextHeader2">is what makes me tick...</h2>
        </div>
        <div className="containerSpline">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              className="Spline"
              scene="https://prod.spline.design/kWU1bI4HIauKnNVc/scene.splinecode"
            />
          </Suspense>
        </div>
        <div className="TextParagraphButton">
          <p className="TextParagraph">
            After a short career as a chemical engineer,
            <s>and countless hobbies,</s> I've decided to change gears and make
            web development my new creative playground. Say hello or scroll down
            to see my portfolio and get to know me better.
          </p>
          <button className="ActionButton">Say Hello</button>
        </div>
      </div>
    </div>
  );
}
