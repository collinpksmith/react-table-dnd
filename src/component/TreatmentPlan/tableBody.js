const tableBody = {
  'item-1': {
    id: 'item-1',
    local: '',
    soins: {
      value: 'consultation',
      color: 'lightgreen',
    },
    category: {
      text: 'examen',
      backgroundColor: '#edf8e5',
      color: '#25440d',
    },
    duration: 30,
    devis: false,
    praticien: 'Dr Jerradi',
  },
  'item-2': {
    id: 'item-2',
    local: '',
    soins: {
      value: 'detartrage',
      color: 'lightgreen',
    },
    category: {
      text: 'maintenance',
      backgroundColor: '#edf8e5',
      color: '#25440d',
    },
    duration: '',
    devis: false,
    praticien: 'Dr Jerradi',
  },
  'item-3': {
    id: 'item-3',
    local: 16,
    soins: {
      value: 'provisoire',
      color: 'lightgreen',
    },
    category: {
      text: 'prothese fixe',
      backgroundColor: '#c3c7ff',
      color: 'yellow',
    },
    duration: 60,
    devis: false,
    praticien: 'Dr Berrada',
  },
  'item-4': {
    id: 'item-4',
    local: 14,
    soins: {
      value: 'extraction',
      color: 'lightgreen',
    },
    category: {
      text: 'extraction',
      backgroundColor: '#ffcbc7',
      color: 'red',
    },
    duration: 30,
    devis: false,
    praticien: 'Dr Jerradi',
  },
  'item-5': {
    id: 'item-5',
    local: 14,
    soins: {
      value: 'hemostatique local apres extraction',
      color: 'lightgreen',
    },
    category: {
      text: 'extraction',
      backgroundColor: '#ffcbc7',
      color: 'red',
    },
    duration: '',
    devis: false,
    praticien: 'Dr Jerradi',
  },
  'item-6': {
    id: 'item-6',
    local: 16,
    soins: {
      value: 'couronne ceramo-ceramique',
    },
    category: {
      text: 'prothese fixe',
      backgroundColor: '#c3c7ff',
      color: 'yellow',
    },
    duration: 30,
    devis: false,
    praticien: 'Dr Berrada',
  },
  'item-7': {
    id: 'item-7',
    local: 16,
    soins: {
      value: 'traitement canalaire groupe molaires',
    },
    category: {
      text: 'endo',
      backgroundColor: '#ffff19',
      color: '#e26e11',
    },
    duration: 45,
    devis: false,
    praticien: 'Dr Berrada',
  },
  'item-8': {
    id: 'item-8',
    local: 16,
    soins: {
      value: 'composite 3 faces',
    },
    category: {
      text: 'obturation',
      backgroundColor: '#002451',
      color: '#8df6fa',
    },
    duration: 30,
    devis: false,
    praticien: 'Dr Jerradi',
  },
  'item-9': {
    id: 'item-9',
    local: 14,
    soins: {
      value: 'laser ou piezochirugie',
    },
    category: {
      text: 'extraction',
      backgroundColor: '#ffcbc7',
      color: 'red',
    },
    duration: '',
    devis: false,
    praticien: 'Dr Jerradi',
  }
}

const tableIds = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9']

export {
  tableBody,
  tableIds
}
