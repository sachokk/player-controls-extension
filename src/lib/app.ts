import { KEYBOARD_COMMANDS, YOUTUBE_MAIN_VIDEO_SELECTOR } from "./constants";
import { requestMIDIAccess } from "./midi";
import { Video } from "./video";
import { Points } from "./points";

export class App {
  private video: Video;
  private points: Points;
  private hasError: boolean = false;
  constructor() {
    console.log("constructor");
    this.initApp();

    this.video = new Video(document.querySelector(YOUTUBE_MAIN_VIDEO_SELECTOR));
    this.points = new Points(this.video.duration);
    // //@ts-ignore
    // if (navigator.requestMIDIAccess) {
    //   console.log("This browser supports WebMIDI!");
    //   requestMIDIAccess();
    // } else {
    //   console.log("WebMIDI is not supported in this browser.");
    // }
  }

  private initControls = () => {
    document.addEventListener("keydown", this.onKeyboardKeyDown);
  };

  private initApp = () => {
    console.log("initApp");

    this.initControls();
  };

  private onKeyboardKeyDown = (event) => {
    switch (event.code) {
      case KEYBOARD_COMMANDS.SLOWER:
        this.video.slowDown();
        break;
      case KEYBOARD_COMMANDS.FASTER:
        this.video.speedUp();
        break;
      case KEYBOARD_COMMANDS.DEFAULT_SPEED:
        this.video.setDefaultSpeed();
        break;
      case KEYBOARD_COMMANDS.SET_START:
        this.video.setLoopStart();
        this.points.setStart(this.video.videoElement.currentTime);
        break;
      case KEYBOARD_COMMANDS.SET_END:
        this.points.setEnd(this.video.videoElement.currentTime);
        this.video.setLoopEnd();
        break;
      case KEYBOARD_COMMANDS.RESET:
        this.points.resetPositions();
        this.video.resetLoop();
        break;
    }
  };
}
