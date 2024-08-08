import { v4 as uuidv4 } from 'uuid';

const defaultteams = [
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82cffa',
    },
    {
      id: uuidv4(),
      name: 'Data Sciense',
      color: '#a6d157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#e06b69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    }
  ]

  export{ defaultteams}