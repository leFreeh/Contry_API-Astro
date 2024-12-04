import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_PionqS4H.mjs';
import { A as API, $ as $$Layout } from '../chunks/CountryData_DXrXNriU.mjs';
export { renderers } from '../renderers.mjs';

const $$Browser = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="searchBrowser"> <div class="browser"> <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z" fill="currentColor"></path></svg> <input class="searchInput" type="text" placeholder="Search for a country..." id="searchInput"> </div> </div> `;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/components/Browser.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dropdown dropdownContainer" id="showButton"> <button type="button" class="dropdown dropdownButton"> <span class="dropdown">Filter by Region</span> <svg class="dropdown" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path class="dropdown" fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" fill="currentColor"></path> </svg> </button> <ul class="dropdown-menu" id="dropdown-menu"> <li class="dropdown dropdown-menu-item" id="Africa"> <a class="dropdown" href="#Africa">Africa</a> </li> <li class="dropdown dropdown-menu-item" id="America"> <a class="dropdown" href="#Americas">America</a> </li> <li class="dropdown dropdown-menu-item" id="Asia"> <a class="dropdown" href="#Asia">Asia</a> </li> <li class="dropdown dropdown-menu-item" id="Europe"> <a class="dropdown" href="#Europe">Europe</a> </li> <li class="dropdown dropdown-menu-item" id="Oceania"> <a class="dropdown" href="#Oceania">Oceania</a> </li> </ul> </div> `;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/components/Menu.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, flag, name, population, region, capital } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="card"> <a${addAttribute(`/countries/${id}`, "href")} class="card"> <div${addAttribute(region, "class")}> <img class="card-flag"${addAttribute(flag, "src")}${addAttribute(`Flag of ${name}`, "alt")}> <div class="country_description"> <h3 class="Country_Name">${name}</h3> <div class="info"> <p><b>Population: </b>${population.toLocaleString()}</p> <p><b>Region: </b>${region}</p> <p><b>Capital: </b>${capital}</p> </div> </div> </div> </a> </div>`;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/components/Card.astro", void 0);

const $$Countrys = createComponent(async ($$result, $$props, $$slots) => {
  const countries = await API();
  return renderTemplate`${maybeRenderHead()}<div class="countrys"> ${countries.map(
    (country) => country ? renderTemplate`${renderComponent($$result, "Card", $$Card, { "id": country.ccn3, "flag": country.flags.png, "name": country.name.common, "population": country.population, "region": country.region, "capital": country.capital ? country.capital[0] : "No capital" })}` : renderTemplate`<div class="error">Country not found</div>`
  )} </div>`;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/components/Countrys.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="navbar"> ${renderComponent($$result2, "Browser", $$Browser, {})} ${renderComponent($$result2, "Menu", $$Menu, {})} </div> ${renderComponent($$result2, "Countrys", $$Countrys, {})} </main> ` })}`;
}, "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/leFreeh/Desktop/Proyect/Country_API-Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
