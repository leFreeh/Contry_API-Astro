import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, a as renderComponent, f as renderSlot } from './astro/server_PionqS4H.mjs';
/* empty css                          */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <div class="top"> <a href="/"><h1 class="tittle">Where in the world?</h1></a> <div class="switchl"> <button type="button" class="darkMode" id="theme-toggle"> <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z" fill="currentColor"></path></svg> <span> Dark Mode</span> </button> </div> </div> </header> `;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/components/Header.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/layouts/Layout.astro", void 0);

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

export { $$Layout as $, API as A, getCountryDetails as g };
