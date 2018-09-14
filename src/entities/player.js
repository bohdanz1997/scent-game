import StateMachine from 'javascript-state-machine'

import {
  pipeHOCs,
  withDisplay,
  withComponents,
} from '../components/hoc'
import * as c from '../components'

import { expolorer } from '../assets/atlas/treasureHunter'

const withFSM = (entity) => {
  const fsm = new StateMachine({
    init: 'idle',
    transitions: [
      { name: 'alerted', from: 'idle', to: 'alert' },
      { name: 'attacked', from: 'alert', to: 'attack' },
      { name: 'idled', from: 'attack', to: 'idle' },
    ],
  })

  return entity.add(c.FSM({ fsm }))
}

export default ({ x, y, width, height, speed, health, damage }) => (
  pipeHOCs(
    withComponents(
      c.Player(),
      c.Position({ x, y }),
      c.Motion(),
      c.Collision({ width, height }),
      c.Control({ dx: speed, dy: speed }),
      c.Damage({ damage }),
      c.Health({ health }),
    ),
    withFSM,
    withDisplay(expolorer),
  )
)
