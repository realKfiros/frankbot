const man_utd = (msg) => {
  return (
    msg.body.toLowerCase().includes('man utd') ||
    msg.body.toLowerCase().includes('manchester utd') ||
    msg.body.toLowerCase().includes('man united') ||
    msg.body.toLowerCase().includes('manchester united') ||
    msg.body.toLowerCase().includes('manu') ||
    msg.body.toLowerCase().includes('scum')
  );
};

const united = (msg) => {
  return (
    msg.body.toLowerCase().includes('united') ||
    msg.body.toLowerCase().includes('utd')
  );
};

const chelsea = (msg) => msg.body.toLowerCase().includes('chelsea');

const arsenal = (msg) => {
  return (
    msg.body.toLowerCase().includes('arsenal') ||
    msg.body.toLowerCase().includes('assna') ||
    msg.body.toLowerCase().includes('ass na')
  );
};

const sheffield = (msg) => msg.body.toLowerCase().includes('sheffield united');

const man_city = (msg) => {
  return (
    msg.body.toLowerCase().includes('man city') ||
    msg.body.toLowerCase().includes('manchester city') ||
    msg.body.toLowerCase().includes('manc')
  );
};

const southamption = (msg) => {
  return (
    msg.body.toLowerCase().includes('southampton') ||
    msg.body.toLowerCase().includes('soton')
  );
};

const tottenham = (msg) => {
  return (
    msg.body.toLowerCase().includes('tottenham') ||
    msg.body.toLowerCase().includes('spurs') ||
    msg.body.toLowerCase().includes('hotspurs') ||
    msg.body.toLowerCase().includes('tot')
  );
};

const bayern = (msg) => msg.body.toLowerCase().includes('bayern');

const or = (msg) => {
  return (
    msg.body.toLowerCase().includes('or') ||
    msg.body.toLowerCase().includes('second') ||
    msg.body.toLowerCase().includes('third') ||
    msg.body.toLowerCase().includes('fourth') ||
    msg.body.toLowerCase().includes('fifth')
  );
};

module.exports = {
  man_utd,
  united,
  chelsea,
  arsenal,
  sheffield,
  man_city,
  southamption,
  tottenham,
  bayern,
  or,
};
