const jah = (msg) => msg.author.split('@')[0] === process.env.JAH_NUMBER;
const ishan = (msg) => msg.author.split('@')[0] === process.env.ISHAN_NUMBER;
const kfir = (msg) => msg.author.split('@')[0] === process.env.KFIR_NUMBER;
const yuval = (msg) => msg.author.split('@')[0] === process.env.YUVAL_NUMBER;

module.exports = {
  jah,
  ishan,
  kfir,
  yuval,
};
