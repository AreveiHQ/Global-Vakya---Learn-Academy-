import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  MoveIn,
  Sticky,

} from "react-scroll-motion";

export default function ScrollMotion() {
  const FadeUp = batch(FadeIn(), MoveIn(), Sticky(),);
  return (
    <div className=" relative h-screen" >
      <ScrollContainer>
      <ScrollPage>
        <Animator animation={FadeUp}>
        <p >10+ Languages</p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
        <p>30+ Trainers</p>
        </Animator>
      </ScrollPage>

      </ScrollContainer>
    </div>
  );
}

