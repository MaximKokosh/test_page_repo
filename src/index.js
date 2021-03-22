import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {injectWidget, injectWidgetCSS, injectWidgetJS} from "./widget-utils/widgetInjectables";
import SoccerEvent from "./customizable/SoccerEvent";
import StatsStanding from "./customizable/StatsStanding";
import {AdPostComponent} from "./customizable/AdPostComponent";
import {renderSponsor} from "./widget-utils/postFunctions";

//Define the inject custom sdk function before everything else
window.InjectCustomSdk = () => {
  return {
    adPostComponent: AdPostComponent,
    postParts: {
      soccer_event: SoccerEvent,
      stats: StatsStanding,
      standings: StatsStanding
    },
    post_functions: {
      renderSponsor
    },
    analytics: {
      trackEvent: [
        event => {
          console.group("My Custom Tracking system");
          console.log(`Got event of type : ${event.type}`);
          console.log(event.data);
          console.groupEnd();
        }
      ]
    }
  }
};

const queryParams = new URLSearchParams(window.location.search);
const culture = queryParams.get("culture");
const slug = queryParams.get("slug");

const blog = {culture: culture || "en-GB", slug: slug || "workshop-blog"};
document.title = `${blog.culture}/${blog.slug}`;

//Inject the widget before injecting the js
injectWidget("https://dapi-liveblogging.cfc-dev.deltatre.digital", blog.culture, blog.slug, "lb-widget");

//Inject this after injecting the widget
injectWidgetCSS("https://liveblogging.cfc-dev.deltatre.digital/widget/static/css/liveblog.widget.css");
injectWidgetJS("https://liveblogging.cfc-dev.deltatre.digital/widget/static/js/liveblog.main.js");


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
