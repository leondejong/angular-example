import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    const list: Array<any> = [
      { id: 1, name: 'Newton', period: '1643-1727' },
      { id: 2, name: 'Einstein', period: '1879-1955' },
      { id: 3, name: 'Maxwell', period: '1831-1879' },
      { id: 4, name: 'Planck', period: '1858-1947' },
      { id: 5, name: 'Hawking', period: '1942-2018' },
      { id: 6, name: 'Feynman', period: '1918-1988' },
      { id: 7, name: 'Bohr', period: '1885-1962' },
      { id: 8, name: 'Heisenberg', period: '1901-1976' },
      { id: 9, name: 'Schrödinger', period: '1887-1961' },
      { id: 10, name: 'Rutherford', period: '1871-1937' },
      { id: 11, name: 'Dirac', period: '1902-1984' },
      { id: 12, name: 'Faraday', period: '1791-1867' }
    ];
    return { list };
  }
}
