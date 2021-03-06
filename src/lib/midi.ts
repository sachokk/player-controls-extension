export const requestMIDIAccess = () => {
  //@ts-ignore
  return navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
};

function onMIDIFailure() {
  console.log("Could not access your MIDI devices.");
}

function onMIDISuccess(midiAccess) {
  for (var input of midiAccess.inputs.values())
    input.onmidimessage = getMIDIMessage;
}

function getMIDIMessage(midiMessage) {
  console.log(midiMessage);
}
