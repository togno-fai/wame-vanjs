const { input, span, p, div, img } = van.tags;

const wameGenerator = () => {
  const original = van.state("");
  const wame = van.derive(() => "wa.me/" + original.val.replace(/\D/g, "")); // only numbers
  return div({ display: "flex", style: "margin:5px" },
    img({ src: "favicon.png", flex: "50%", style: "max-height:150px" }),
    div({ flex: "50%" },
      div({ style: "margin:5px" }, "wame"),
      div(input({
        type: "text",
        value: original,
        oninput: (e) => (original.val = e.target.value),
        onfocus: (e) => e.target.select(),
        style: "margin:5px"
      })),
      div(input({
        type: "text",
        value: wame,
        readonly: "readonly",
        onfocus: (e) => e.target.select(),
        style: "margin:5px"
      }))
    ))
};

van.add(document.body, wameGenerator());
