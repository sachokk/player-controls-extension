import {
  LOOP_BORDERS_STYLES,
  YOUTUBE_PROGRESS_BAR_SELECTOR,
} from "./constants";

export class Points {
  private startElement: HTMLDivElement;
  private endElement: HTMLDivElement;
  private readonly parentElement: HTMLDivElement;
  private readonly videoDuration: number;

  constructor(videoDuration) {
    this.parentElement = document.querySelector(YOUTUBE_PROGRESS_BAR_SELECTOR);
    this.videoDuration = videoDuration;
    this.drawLoopPoints();
  }

  public resetPositions = () => {
    this.startElement.style.left = "0px";
    this.endElement.style.left = `${this.parentElement.offsetWidth}px`;
  };

  getPointLeftPosition = (videoCurrentTime) => {
    return `${
      (videoCurrentTime * this.parentElement.offsetWidth) / this.videoDuration
    }px`;
  };

  public setStart = (videoCurrentTime) => {
    this.startElement.style.left = this.getPointLeftPosition(videoCurrentTime);
  };

  public setEnd = (videoCurrentTime) => {
    this.endElement.style.left = this.getPointLeftPosition(videoCurrentTime);
  };

  private drawLoopPoints = () => {
    const styles = document.createElement("style");
    styles.innerHTML = LOOP_BORDERS_STYLES;
    this.parentElement.appendChild(styles);

    this.startElement = document.createElement("div");
    this.startElement.classList.add("loop-start-point", "loop-border");
    this.parentElement.appendChild(this.startElement);

    this.endElement = document.createElement("div");
    this.endElement.classList.add("loop-end-point", "loop-border");
    this.parentElement.appendChild(this.endElement);

    this.resetPositions();
  };
}
