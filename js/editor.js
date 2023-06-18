const grammar = String.raw`
start = m:header n:(br section)* o:(br subsection)* br? {return {...m, sections: Object.fromEntries(n.map(s => s[1])), sides: Object.fromEntries(o.map(s => s[1]))}}

header = m:param+ {return Object.fromEntries(m)}
section = m:h2 n:(subsection)* {return [m, Object.fromEntries(n)]}
subsection = m:h3 h:header? d:details? lb* {return [m, {header: h, details: d}]}
details = m:detail n:(lb detail)* {return [m, ...n.map(a => a[1])]}
detail = "- " m:text {return m}

h2 = "## " m:text lb+ {return m}
h3 = "### " m:text lb+ {return m}

param = k:label ":" v:text lb? {return [k,  v]}
label = m:[^\n:-]+ {return m.join('').trim()}
text = m:[^\n]+ {return m.join('').trim()}
br = lb* "---" lb*
lb = "\n"
`;
const parser = peg.generate(grammar)

const app = new Vue({
  el: '#app',
  data: {
    text: '',
  },
  computed: {
    data() {
      return parser.parse(this.text)
    }
  }
})


// Fetch the Markdown file content
fetch('resume.md')
  .then(response => response.text())
  .then(markdown => {
    app.text = markdown;
  })