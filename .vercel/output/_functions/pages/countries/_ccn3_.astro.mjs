import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_PionqS4H.mjs';
import { g as getCountryDetails, A as API, $ as $$Layout } from '../../chunks/CountryData_DXrXNriU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const countries = await API();
  const validCountries = countries.filter((country) => country.ccn3);
  return validCountries.map((country) => ({
    params: { ccn3: country.ccn3 }
  }));
}
const $$ccn3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ccn3;
  const { ccn3 } = Astro2.params;
  const country = await getCountryDetails(ccn3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="containter-info"> <button> <a href="/" class="back-btn"> <svg class="dropdown" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path class="dropdown" fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" fill="currentColor"></path> </svg> <span>Back</span> </a> </button> <div class="country-data"> <div class="container-flag"> <img class="flag"${addAttribute(country.flag, "src")}${addAttribute(`Flag of ${country.name}`, "alt")}> </div> <div class="country-details"> <h1 class="tittle">${country.name}</h1> <div class="container-details"> <div class="details"> <p><b>Native Name: </b>${country.official}</p> <p><b>Population: </b> ${country.population.toLocaleString()}</p> <p><b>Region: </b> ${country.region}</p> <p><b>Sub Region: </b> ${country.subregion}</p> <p><b>Capital: </b> ${country.capital}</p> </div> <div class="details"> <p><b>Top Level Domain: </b> ${country.domain}</p> <p> <b>Currencies:</b> ${Object.values(country.currencies)[0]?.name} </p> <p> <b>Languages:</b> ${Object.values(country.languages).join(", ")} </p> </div> </div> <div class="border-list"> <p><b>Border Countries:</b></p> <div class="list"> ${country.borders?.map((border) => renderTemplate`<a href="#" class="border-country"${addAttribute(border, "data-cca3")}> ${border} </a>`)} </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/pages/countries/[ccn3].astro", void 0);

const $$file = "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/pages/countries/[ccn3].astro";
const $$url = "/countries/[ccn3]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ccn3,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
