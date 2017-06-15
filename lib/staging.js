const lookup = require('./staging_lookup');

// Computes the prognostic stage of breast cancer given T, N, M.
// Uses the 7th staging edition, see:
// https://cancerstaging.org/references-tools/quickreferences/Documents/BreastMedium.pdf
exports.breastCancerPrognosticStage = (t, n, m) => {
  // Regardless of edition, metastatic cancer is always stage IV
  if (m.toString().toUpperCase() == 'M1') {
    return 'IV';
  }

  // 7th edition staging, lookup[T][N]
  // null return values mean the staging is undefined for those T,N,M values
  const ti = (lookup.getTsForEdition(7)).indexOf(t.toString().toUpperCase());
  const ni = (lookup.getNsForEdition(7)).indexOf(n.toString().toUpperCase());

  if (ti === -1 || ni === -1) {
    // Urecognized T or N value
    return null;
  }
  return lookup.getTableForEdition(7)[ti][ni];
};


// Converts a prognostic stage (e.g. 'IIIA') into a list of possible T,N,M
// values based on the specified staging edition. If none specified, defaults
// to the 7th edition.
exports.breastCancerPossibleTNM = (prognosticStage, edition = 7) => {
  let values = [];

  // Lookup the needed values for the specified edition
  const ed = parseInt(edition);
  const ts = lookup.getTsForEdition(ed);
  const ns = lookup.getNsForEdition(ed);
  const table = lookup.getTableForEdition(ed);

  // Regardless of edition, stage IV is handled the same way
  const stage = prognosticStage.toString().toUpperCase();

  if (stage === 'IV') {
    ts.forEach((t) => {
      ns.forEach((n) => {
        values.push([t, n, 'M1']);
      });
    });
    return values;
  }

  // No lookup means an invalid or unsupported edition
  if (!table) {
    return [];
  }

  // Find all T,N,M matches for the prognostic stage specified
  table.forEach((row, t) => {
    row.forEach((el, n) => {
      if (el === stage) {
        values.push([ts[t], ns[n], 'M0']);
      }
    });
  });
  return values;
};