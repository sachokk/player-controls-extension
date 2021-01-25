import { DEFAULT_PLAYBACK_RATE, PLAYBACK_RATE_CHANGE_STEP } from "./constants";

export class Video {
  public videoElement: HTMLVideoElement;
  private startPoint: number;
  private endPoint: number;
  public duration: number;

  constructor(videoElement: HTMLVideoElement) {
    this.videoElement = videoElement;
    this.startPoint = this.videoElement.currentTime;
    this.endPoint = this.videoElement.duration;
    this.duration = this.videoElement.duration;
    this.videoElement.addEventListener("timeupdate", this.loopVideo);
  }

  private loopVideo = ({ target }) => {
    if (target.currentTime > this.endPoint) {
      target.currentTime = this.startPoint;
    }
  };

  public slowDown = () => {
    if (this.videoElement.playbackRate > PLAYBACK_RATE_CHANGE_STEP) {
      this.videoElement.playbackRate -= PLAYBACK_RATE_CHANGE_STEP;
    }
  };

  public speedUp = () => {
    this.videoElement.playbackRate += PLAYBACK_RATE_CHANGE_STEP;
  };

  public setDefaultSpeed = () => {
    this.videoElement.playbackRate = DEFAULT_PLAYBACK_RATE;
  };

  public setLoopStart = () => {
    this.startPoint = this.videoElement.currentTime;
  };

  public setLoopEnd = () => {
    this.endPoint = this.videoElement.currentTime;
  };

  public resetLoop = () => {
    this.endPoint = this.videoElement.duration;
  };
}
