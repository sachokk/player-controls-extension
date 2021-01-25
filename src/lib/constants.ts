export const YOUTUBE_MAIN_VIDEO_SELECTOR = ".video-stream.html5-main-video";
export const YOUTUBE_PROGRESS_BAR_SELECTOR = ".ytp-progress-bar-container";

export const LOOP_BORDERS_STYLES = `
  .loop-border {
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 30px;
  }
  
  .loop-start-point {
    background: green;
  }
  
  .loop-end-point {
    background: red;
  }
`;

export const PLAYBACK_RATE_CHANGE_STEP = 0.1;
export const DEFAULT_PLAYBACK_RATE = 1;

export enum KEYBOARD_COMMANDS {
  SLOWER = "KeyA",
  FASTER = "KeyS",
  DEFAULT_SPEED = "KeyD",
  SET_START = "KeyQ",
  SET_END = "KeyW",
  RESET = "KeyE",
}

export enum MIDI_COMMANDS {}
