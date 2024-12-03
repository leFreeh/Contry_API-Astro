let cacheData = null;

async function API(forceUpdate = false) {
  try {
    if (!cacheData || forceUpdate) {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      cacheData = await res.json();
    }
    return cacheData;
  } catch (error) {
    console.error("Error fetching API data:", error);
    return [];
  }
}

async function getCountryDetails(ccn3) {
  try {
    const data = await API();
    const countryData = data.find((country) => country.ccn3 === ccn3);

    if (countryData) {
      return {
        id: countryData.ccn3,
        flag: countryData.flags.png,
        name: countryData.name.common || ["No have"],
        official: countryData.name.official || ["No have"],
        population: countryData.population || ["No have"],
        region: countryData.region || ["No have"],
        subregion: countryData.subregion || ["No have"],
        capital: countryData.capital || ["No have"],
        domain: countryData.tld || ["No have"],
        currencies: countryData.currencies || ["No have"],
        languages: countryData.languages || ["No have"],
        borders: countryData.borders,
      };
    }
    console.warn(`Country details for ccn3 ${ccn3} not found.`);
    return null;
  } catch (error) {
    console.error("Error fetching detailed country data:", error);
    return null;
  }
}

async function getCcn3FromCca3(cca3) {
  try {
    const data = await API();
    const country = data.find((country) => country.cca3 === cca3);
    return country ? country.ccn3 : null;
  } catch (error) {
    console.error("Error finding ccn3 from cca3:", error);
    return null;
  }
}

export { API, getCountryDetails, getCcn3FromCca3 };
