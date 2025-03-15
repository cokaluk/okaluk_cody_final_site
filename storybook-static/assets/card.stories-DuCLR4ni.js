import { j as r } from "./jsx-runtime-D_zvdyIk.js";
import { d as s } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const x = s.div.attrs({ role: "article" })`
  background-color: ${({ backgroundColor: e }) => e || "transparent"};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "pointer")};
  opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
`,
  h = s.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,
  C = s.div`
  padding: 16px;
`,
  T = s.h3`
  margin: 0;
  font-size: 1.5rem;
`,
  y = s.p`
  font-size: 1rem;
  color: #555;
`,
  j = s.div`
  padding: 8px 16px;
  background-color: #f7f7f7;
  text-align; right;
  font-size: 0.9rem;
`,
  u = ({
    title: e,
    description: b,
    backgroundColor: g,
    image: a,
    footer: n,
    disabled: f = !1,
  }) =>
    r.jsxs(x, {
      disabled: f,
      backgroundColor: g,
      children: [
        a && r.jsx(h, { src: a, alt: e }),
        r.jsxs(C, {
          children: [r.jsx(T, { children: e }), r.jsx(y, { children: b })],
        }),
        n && r.jsx(j, { children: n }),
      ],
    });
u.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Card",
  props: {
    title: { required: !0, tsType: { name: "string" }, description: "" },
    description: { required: !0, tsType: { name: "string" }, description: "" },
    backgroundColor: {
      required: !1,
      tsType: { name: "string" },
      description: "",
    },
    image: { required: !1, tsType: { name: "string" }, description: "" },
    footer: { required: !1, tsType: { name: "string" }, description: "" },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
  },
};
const D = {
    title: "Example/Card",
    component: u,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      disabled: { control: "boolean" },
      title: { control: "text" },
      description: { control: "text" },
      backgroundColor: { control: "color" },
    },
  },
  t = {
    args: {
      disabled: !0,
      title: "Disabled",
      description: "This is a disabled card component",
    },
  },
  o = {
    args: {
      disabled: !1,
      title: "Enabled",
      description: "This is an enabled card component",
    },
  };
var i, d, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    title: 'Disabled',
    description: 'This is a disabled card component'
  }
}`,
      ...((c = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : c.source),
    },
  },
};
var l, p, m;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((l = o.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    title: 'Enabled',
    description: 'This is an enabled card component'
  }
}`,
      ...((m = (p = o.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : m.source),
    },
  },
};
const k = ["Disabled", "Enabled"];
export { t as Disabled, o as Enabled, k as __namedExportsOrder, D as default };
