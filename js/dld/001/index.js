// If you label each edge then you can connect then directly

// ==============================================
// ==============================================

const edges = {
  'A1': { 'val': 1, src: true },
  'A2': { 'val': 1, src: true },
  'A3': { 'val': 1, src: true },
  'B1': { 'val': 1, src: true },
  'B2': { 'val': 1, src: true },
  'C1': { 'val': null, src: false },
  'C2': { 'val': null, src: false },
  'D1': { 'val': null, src: false },
};

// ==============================================
// ==============================================

const nodes = {
  'AND1': {
    val: null,
    edges: {
      in: ['A1', 'A2', 'A3'],
      out: ['C1']
    }
  },
  'AND1': {
    val: null,
    edges: {
      in: ['B1', 'B2'],
      out: ['C1']
    }
  },
  'OR1': {
    val: null,
    edges: {
      in: ['C1', 'C2'],
      out: ['D1']
    }
  },
};

// ==============================================
// ==============================================

