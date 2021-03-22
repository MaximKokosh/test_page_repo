export function injectWidget(baseUrl, culture, slug, classRoot) {
  const widgetComponent = document.createElement('liveblog-widget');
  widgetComponent.setAttribute('class', "liveblog-embed");
  widgetComponent.setAttribute('data-config', `
    {"baseUrl":"${baseUrl}", "culture": "${culture}", "slug" : "${slug}"}
  `);

  if(classRoot) {
    document.getElementsByClassName(classRoot)[0].appendChild(widgetComponent);
  }else{
    console.warn("Could not find classRoot for widget");
  }
}

export function injectWidgetCSS(src) {
  const linkElement = document.createElement("link");
  linkElement.type = "text/css";
  linkElement.rel = "stylesheet";
  linkElement.href = src;
  document.head.appendChild(linkElement);
}

export function injectWidgetJS(src) {
  const scriptElement = document.createElement('script');
  scriptElement.setAttribute('src', src);
  scriptElement.async = true;
  document.body.appendChild(scriptElement);
}