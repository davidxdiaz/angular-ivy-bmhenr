import { Hero } from '../interfaces/hero';

const heroes: Hero[] = [
  {
    id: '1',
    name: 'Elizabeth',
    power: {
      description: 'Feminist defense',
      isDefense: true,
      powerEffect: 20,
    },
    attack: 15,
    life: 50,
  },
  {
    id: '2',
    name: 'Rigo',
    power: {
      description: 'Block attack',
      isDefense: true,
      powerEffect: 10,
    },
    attack: 30,
    life: 80,
  },
  {
    id: '3',
    name: 'Jaime',
    power: {
      description: 'Increment attack',
      isDefense: false,
      powerEffect: 10,
    },
    attack: 25,
    life: 70,
  },
  {
    id: '4',
    name: 'David',
    power: {
      description: 'Laughing attack',
      isDefense: false,
      powerEffect: 15,
    },
    attack: 15,
    life: 60,
  },
  {
    id: '5',
    name: 'Jose',
    power: {
      description: 'Coach defense',
      isDefense: true,
      powerEffect: 5,
    },
    attack: 20,
    life: 100,
  },
];

export default heroes;
