// Compiled using marko@4.14.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-fundamentals$1.0.0/src/app/views/book/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>New book</title><link rel=\"stylesheet\" href=\"/public/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<main class=\"wrapper center\"> <h1>Add a new book</h1><form action=\"/book\" method=\"post\">");

  if (data.book.id) {
    out.w("<input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.book.id) +
      ">");
  }

  out.w("<div><label for=\"title\">Title</label><input type=\"text\" id=\"title\" name=\"title\"" +
    marko_attr("value", "" + (data.book.title || "")) +
    " autofocus></div><div><label for=\"price\">Price</label><input type=\"number\" id=\"price\" name=\"price\" step=\".01\"" +
    marko_attr("value", "" + (data.book.price || "")) +
    "></div><div><label for=\"description\">Description</label><textarea id=\"description\" name=\"description\" cols=\"20\" rows=\"5\">" +
    marko_escapeXml(data.book.description) +
    "</textarea></div><input class=\"button uppercase\" type=\"submit\" value=\"Save\"></form></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejs-fundamentals$1.0.0/src/app/views/book/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
