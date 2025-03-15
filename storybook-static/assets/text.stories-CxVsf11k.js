import { j as u } from "./jsx-runtime-D_zvdyIk.js";
import { d as x } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const f = x.span`
  color: ${({ disabled: e, color: r }) => (e ? "gray" : r || "black")};
  font-size: ${({ fontSize: e }) => e || "16px"};
  font-weight: normal;

  opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
  user-select: ${({ disabled: e }) => (e ? "none" : "auto")};
  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "auto")};
`,
  c = ({ color: e, fontSize: r, text: p, disabled: m = !1 }) =>
    u.jsx(f, { color: e, fontSize: r, disabled: m, children: p });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Text",
  props: {
    color: { required: !1, tsType: { name: "string" }, description: "" },
    fontSize: { required: !1, tsType: { name: "string" }, description: "" },
    text: { required: !1, tsType: { name: "string" }, description: "" },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
  },
};
const T = {
    title: "Example/Text",
    component: c,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { color: { control: "color" } },
  },
  s = { args: { disabled: !0, text: "this is some text" } },
  t = { args: { disabled: !1, text: "this is some text" } };
var a, o, n;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((a = s.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    text: 'this is some text'
  }
}`,
      ...((n = (o = s.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var i, d, l;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    text: 'this is some text'
  }
}`,
      ...((l = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : l.source),
    },
  },
};
const h = ["Disabled", "Enabled"];
export { s as Disabled, t as Enabled, h as __namedExportsOrder, T as default };
