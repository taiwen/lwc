import { registerTemplate } from "lwc";

function tmpl($api, $cmp, $slotset, $ctx) {
  const { t: api_text, h: api_element } = $api;
  return [
    $cmp.isTrue
      ? api_element(
          "p",
          {
            key: 0
          },
          [api_text("1")]
        )
      : null,
    $cmp.isTrue
      ? api_element(
          "p",
          {
            key: 1
          },
          [api_text("2")]
        )
      : null,
    $cmp.isTrue
      ? api_element(
          "p",
          {
            key: 2
          },
          [api_text("3")]
        )
      : null
  ];
}

export default registerTemplate(tmpl);
tmpl.stylesheets = [];
