// Compiled using marko@4.14.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-fundamentals$1.0.0/src/app/views/book/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>See our books</title><link rel=\"stylesheet\" href=\"/public/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<main class=\"wrapper center\"><h1>Books</h1><table id=\"books\"><thead><tr><th>Title</th><th>Price</th><th>Actions</th></tr></thead><tbody>");

  var for__14 = 0;

  marko_forEach(data.books, function(book) {
    var keyscope__15 = "[" + ((for__14++) + "]");

    out.w("<tr" +
      marko_attr("id", "book-" + book.id) +
      "><td>" +
      marko_escapeXml(book.title) +
      "</td><td>" +
      marko_escapeXml(book.price) +
      "</td><td><button type=\"button\" class=\"button m-0 mr-1 uppercase\"" +
      marko_attr("data-ref", "" + book.id) +
      " data-action=\"edit\">Edit</button><button type=\"button\" class=\"button m-0 uppercase\"" +
      marko_attr("data-ref", "" + book.id) +
      " data-action=\"remove\">Remove</button></td></tr>");
  });

  out.w("</tbody></table></main><script src=\"/public/js/books-controller.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejs-fundamentals$1.0.0/src/app/views/book/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
