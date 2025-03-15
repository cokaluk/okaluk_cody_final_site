import { j as u } from "./jsx-runtime-D_zvdyIk.js";
import { d as x } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const b = x.th`
color: ${({ disabled: e, color: r }) => (e ? "gray" : r || "black")};
font-size: ${({ fontSize: e }) => e || "16px"};
font-weight: bold;
padding: 10px;
text-align: left;
opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
user-select: ${({ disabled: e }) => (e ? "none" : "auto")};
cursor: ${({ disabled: e }) => (e ? "not-allowed" : "auto")};
border: 2px solid black;
`,
  c = ({ disabled: e = !1, color: r, fontSize: p, text: m }) =>
    u.jsx(b, { color: r, fontSize: p, disabled: e, children: m });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableHeader",
  props: {
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    color: { required: !1, tsType: { name: "string" }, description: "" },
    fontSize: { required: !1, tsType: { name: "string" }, description: "" },
    text: { required: !0, tsType: { name: "string" }, description: "" },
  },
};
const T = {
    title: "Example/TableHeader",
    component: c,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { color: { control: "color" } },
  },
  t = { args: { disabled: !0, text: "this is some text" } },
  s = { args: { disabled: !1, text: "this is some text" } };
var a, o, d;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((a = t.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    text: 'this is some text'
  }
}`,
      ...((d = (o = t.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var n, i, l;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((n = s.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    text: 'this is some text'
  }
}`,
      ...((l = (i = s.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : l.source),
    },
  },
};
const h = ["Disabled", "Enabled"];
export { t as Disabled, s as Enabled, h as __namedExportsOrder, T as default };
