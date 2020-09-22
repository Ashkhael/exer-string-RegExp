var template = "== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==";
var content =
  "Erat quibusdam blandit,    consequatur cupiditate? Adipisicing pretium donec nonummy? Nibh, nullam faucibus hac adipiscing culpa egestas! Magnis viverra sollicitudin repellendus? Sodales    repellendus! Aliquet XXXomnisXXX exercitation! Pharetra accumsan pariatur, nostrum praesentium? Maxime mollis? A distinctio placerat adipisci, autem amet tenetur auctor, massa inceptos interdum conubia quam    cupiditate iure maxime. Cupidatat elit semper, eum dicta maecenas, eleifend    sodales nec cras nam magna fermentum nobis XXXdistinctio, delenitiXXX? Dui tempora porttitor lorem recusandae rerum    veritatis vehicula cursus qui aliqua sociis facilisi vero cum blandit,    rerum blanditiis porta a, necessitatibus, sociosqu torquent    quisque odio natus integer accusantium wisi aliqua minus! Eum. Elit mattis massa etiam velit cum class curabitur, aliquam    ullamco provident    repellendus at commodo corrupti sociis! Beatae eius tristique inventore. Eos soluta penatibus ac, cras facilisis? XXXAnim vitae vulputateXXX aenean eum scelerisque laudantium nemo    bibendum perspiciatis    exercitation XXXarchitectoXXX? Purus voluptas. Excepturi error.    Placerat accusantium mattis, ducimus, soluta veritatis.";

function prepareConfidentialDocument(content, template) {
  let regEx = new RegExp(/XXX(.*?)XXX/g);
  let regEx2 = new RegExp(/::(.*?)::/g);
  let regEx3 = new RegExp(/\s\s+/g);
  var content = content.replace(regEx, "[REDACTED]").replace(regEx3, " ");
  var template = template.replace(regEx2, content);
  return template;
}

console.log(prepareConfidentialDocument(content, template));
