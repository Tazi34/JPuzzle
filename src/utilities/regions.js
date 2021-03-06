export const regions = [
  { id: "JPN1821", name: "Hiroshima" },
  { id: "JPN1822", name: "Okayama" },
  { id: "JPN1824", name: "Shimane" },
  { id: "JPN1825", name: "Tottori" },
  { id: "JPN1826", name: "Yamaguchi" },
  { id: "JPN1827", name: "Saga" },
  { id: "JPN1829", name: "Fukuoka" },
  { id: "JPN1830", name: "Kumamoto" },
  { id: "JPN1831", name: "Miyazaki" },
  { id: "JPN1832", name: "Ehime" },
  { id: "JPN1833", name: "Kagawa" },
  { id: "JPN1834", name: "Kochi" },
  { id: "JPN1835", name: "Oita" },
  { id: "JPN1836", name: "Tokushima" },
  { id: "JPN1840", name: "Aichi" },
  { id: "JPN1841", name: "Gifu" },
  { id: "JPN1842", name: "Ishikawa" },
  { id: "JPN1843", name: "Mie" },
  { id: "JPN1844", name: "Nagano" },
  { id: "JPN1845", name: "Shizuoka" },
  { id: "JPN1846", name: "Toyama" },
  { id: "JPN1847", name: "Hokkaido" },
  { id: "JPN1848", name: "Fukui" },
  { id: "JPN1849", name: "Hyōgo" },
  { id: "JPN1850", name: "Kyoto" },
  { id: "JPN1851", name: "Nara" },
  { id: "JPN1852", name: "Osaka" },
  { id: "JPN1853", name: "Shiga" },
  { id: "JPN1854", name: "Wakayama" },
  { id: "JPN1855", name: "Chiba" },
  { id: "JPN1856", name: "Ibaraki" },
  { id: "JPN1857", name: "Kanagawa" },
  { id: "JPN1858", name: "Saitama" },
  { id: "JPN1859", name: "Tochigi" },
  {id: "JPN1860", name: "Tokyo"},
  {id: "JPN1861", name: "Yamanashi"},
  {id: "JPN1862", name: "Akita"},
  {id: "JPN1863", name: "Aomori"},
  {id: "JPN1864", name: "Fukushima"},
  {id: "JPN1865", name: "Iwate"},
  {id: "JPN1866", name: "Miyagi"},
  {id: "JPN1867", name: "Niigata"},
  {id: "JPN1868", name: "Yamagata"},
  {id: "JPN3500", name: "Nagasaki"},
  {id: "JPN3501", name: "Kagoshima"},
  {id: "JPN3502", name: "Okinawa"},
  {id: "JPN3503", name: "Gunma"}
];

export const getRegion = id => {
  var svg = document.getElementById("map").contentDocument;
  var path = svg.getElementById(id);
  return path;
};

export const getRandomRegion = () => {
  return regions[Math.floor(Math.random() * regions.length)];
};

export const loadRegions = mapSvg => {
  let regions;
  //if doc didnt load yet --- added to fix firefox bug
  try {
    regions = mapSvg.contentDocument.getElementsByTagName("path");
  } catch (e) {
    return [];
  }
  return regions;
};

export const setupRegions = (regions, fun) => {
  for (let region of regions) {
    fun(region);
  }
};
