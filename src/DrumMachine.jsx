import { useSelector, useDispatch } from 'react-redux';
import './DrumMachine.css';

const DRUM_AUDIO = [
  {
    id: 'Q',
    clip: 'Heater 1',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
  },
  {
    id: 'W',
    clip: 'Heater 2',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
  },
  {
    id: 'E',
    clip: 'Heater 3',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
  },
  {
    id: 'A',
    clip: 'Heater 4',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
  },
  {
    id: 'S',
    clip: 'Clap',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
  },
  {
    id: 'D',
    clip: 'Open-HH',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
  },
  {
    id: 'Z',
    clip: "Kick-n'-Hat",
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
  },
  {
    id: 'X',
    clip: 'Kick',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
  },
  {
    id: 'C',
    clip: 'Closed-HH',
    audio:
      'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
  },
];

const playAudio = (url) => {
  new Audio(url).play();
};

const updateDisplay = (key) => {
  const drumPad = DRUM_AUDIO.find(
    (drumPad) => drumPad.id === key.toUpperCase()
  );
  document.getElementById('display').innerHTML = drumPad
    ? drumPad.clip
    : '&nbsp;';
};

export default function DrumMachine() {
  const handleClick = (event) => {
    const key = event.target.id.toUpperCase();
    playAudio(DRUM_AUDIO.find((drumPad) => drumPad.id === key).audio);
    updateDisplay(key);
  };

  return (
    <div id="drum-machine" className="container w-50">
      <div className="row">
        <div id="display" className="border px-3 py-2 bg-light">
          &nbsp;
        </div>
      </div>
      <div id="container" class="row row-cols-3 mt-4">
        {DRUM_AUDIO.map((drumPad) => (
          <button
            key={drumPad.id}
            id={drumPad.id}
            className="drum-pad btn btn-primary border shadow"
            onClick={handleClick}
          >
            {drumPad.id}
          </button>
        ))}
      </div>
    </div>
  );
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  const drumPad = DRUM_AUDIO.find((drumPad) => drumPad.id === key);
  if (drumPad) {
    playAudio(drumPad.audio);
  }
  updateDisplay(key);
});
