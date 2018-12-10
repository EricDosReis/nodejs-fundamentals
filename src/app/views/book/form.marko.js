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
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>New book</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Add a new book</h1><form action=\"/book\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\"><div><label for=\"title\">Title</label><input type=\"text\" id=\"title\" name=\"title\"></div><div><label for=\"price\">Price</label><input type=\"number\" id=\"price\" name=\"price\"></div><div><label for=\"description\">Description</label><textarea id=\"description\" name=\"description\" cols=\"20\" rows=\"10\"></textarea></div><input type=\"submit\" value=\"Add\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

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
