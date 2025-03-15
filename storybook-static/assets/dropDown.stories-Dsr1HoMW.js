import { j as l } from "./jsx-runtime-D_zvdyIk.js";
import { d as v } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const y = v.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  background-color: ${({ backgroundColor: e }) => e || "white"};
  color: ${({ disabled: e }) => (e ? "gray" : "black")};
  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "pointer")};
  opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
`,
  b = ({
    label: e,
    options: c,
    disabled: m = !1,
    backgroundColor: g,
    onChange: n,
  }) =>
    l.jsxs("div", {
      children: [
        e && l.jsx("label", { children: e }),
        l.jsx(y, {
          disabled: m,
          backgroundColor: g,
          onChange: (a) => n && n(a.target.value),
          children: c.map((a) =>
            l.jsx("option", { value: a.value, children: a.label }, a.value),
          ),
        }),
      ],
    });
b.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "DropDown",
  props: {
    label: { required: !1, tsType: { name: "string" }, description: "" },
    options: {
      required: !0,
      tsType: {
        name: "Array",
        elements: [
          {
            name: "signature",
            type: "object",
            raw: "{ value: string; label: string }",
            signature: {
              properties: [
                { key: "value", value: { name: "string", required: !0 } },
                { key: "label", value: { name: "string", required: !0 } },
              ],
            },
          },
        ],
        raw: "{ value: string; label: string }[]",
      },
      description: "",
    },
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
    onChange: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(value: string) => void",
        signature: {
          arguments: [{ type: { name: "string" }, name: "value" }],
          return: { name: "void" },
        },
      },
      description: "",
    },
  },
};
const x = {
    title: "Example/DropDown",
    component: b,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      disabled: { control: "boolean" },
      label: { control: "text" },
      backgroundColor: { control: "color" },
    },
  },
  r = {
    args: {
      label: "disabled DropDown",
      options: [
        { value: "disabled", label: "disabled" },
        { value: "disabled1", label: "disabled1" },
        { value: "disabled2", label: "disabled2" },
      ],
      disabled: !0,
    },
  },
  s = {
    args: {
      label: "is this DropDown enabled?",
      options: [
        { value: "yup", label: "yup" },
        { value: "yes", label: "yes" },
        { value: "indeed", label: "indeed" },
      ],
      disabled: !1,
    },
  };
var o, d, t;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    label: 'disabled DropDown',
    options: [{
      value: 'disabled',
      label: 'disabled'
    }, {
      value: 'disabled1',
      label: 'disabled1'
    }, {
      value: 'disabled2',
      label: 'disabled2'
    }],
    disabled: true
  }
}`,
      ...((t = (d = r.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : t.source),
    },
  },
};
var i, u, p;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((i = s.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    label: 'is this DropDown enabled?',
    options: [{
      value: 'yup',
      label: 'yup'
    }, {
      value: 'yes',
      label: 'yes'
    }, {
      value: 'indeed',
      label: 'indeed'
    }],
    disabled: false
  }
}`,
      ...((p = (u = s.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : p.source),
    },
  },
};
const h = ["Disabled", "Enabled"];
export { r as Disabled, s as Enabled, h as __namedExportsOrder, x as default };
