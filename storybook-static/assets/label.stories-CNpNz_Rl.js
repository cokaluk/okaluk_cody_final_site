import { j as m } from "./jsx-runtime-D_zvdyIk.js";
import { d as b } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const g = b.label`
  display: inline-block;
  background-color: ${({ backgroundColor: e }) => e || "transparent"};
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 5px;

  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "pointer")};
  opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};

`,
  i = ({ disabled: e = !1, backgroundColor: p, text: c, ...u }) =>
    m.jsx(g, { backgroundColor: p, disabled: e, ...u, children: c });
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Label",
  props: {
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    backgroundColor: {
      required: !1,
      tsType: { name: "string" },
      description: "",
    },
    text: { required: !0, tsType: { name: "string" }, description: "" },
  },
};
const L = {
    title: "Example/Label",
    component: i,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { backgroundColor: { control: "color" } },
  },
  a = { args: { disabled: !0, text: "Label" } },
  r = { args: { disabled: !1, text: "Label" } };
var s, t, o;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((s = a.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    text: 'Label'
  }
}`,
      ...((o = (t = a.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : o.source),
    },
  },
};
var n, d, l;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((n = r.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    text: 'Label'
  }
}`,
      ...((l = (d = r.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : l.source),
    },
  },
};
const E = ["Disabled", "Enabled"];
export { a as Disabled, r as Enabled, E as __namedExportsOrder, L as default };
