import { j as m } from "./jsx-runtime-D_zvdyIk.js";
import { d as b } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const g = b.button`
  background-color: ${({ backgroundColor: r }) => r || "transparent"};
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,
  c = ({ disabled: r = !1, backgroundColor: i, text: l, ...u }) =>
    m.jsx(g, {
      type: "button",
      backgroundColor: i,
      disabled: r,
      ...u,
      children: l,
    });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
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
const B = {
    title: "Example/Button",
    component: c,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { backgroundColor: { control: "color" } },
  },
  e = { args: { disabled: !0, text: "Button" } },
  t = { args: { disabled: !1, text: "Button" } };
var o, s, a;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    text: 'Button'
  }
}`,
      ...((a = (s = e.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : a.source),
    },
  },
};
var n, d, p;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    text: 'Button'
  }
}`,
      ...((p = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : p.source),
    },
  },
};
const E = ["Disabled", "Enabled"];
export { e as Disabled, t as Enabled, E as __namedExportsOrder, B as default };
