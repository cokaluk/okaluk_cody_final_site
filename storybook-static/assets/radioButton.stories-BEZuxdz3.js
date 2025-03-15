import { j as a } from "./jsx-runtime-D_zvdyIk.js";
import { r as S } from "./index-DmM0KDA7.js";
import { d as v } from "./styled-components.browser.esm-Dxl9SFvD.js";
const E = v.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "pointer")};
  opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
  user-select: none;
`,
  R = v.input`
  accent-color: black;
  cursor: inherit;
`,
  s = ({
    label: e,
    name: t,
    value: f,
    disabled: l = !1,
    checked: x,
    onChange: y,
  }) =>
    a.jsxs(E, {
      disabled: l,
      children: [
        a.jsx(R, {
          type: "radio",
          name: t,
          value: f,
          disabled: l,
          checked: x,
          onChange: y,
        }),
        e,
      ],
    });
s.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "RadioButton",
  props: {
    label: { required: !0, tsType: { name: "string" }, description: "" },
    name: { required: !0, tsType: { name: "string" }, description: "" },
    value: { required: !0, tsType: { name: "string" }, description: "" },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    checked: { required: !1, tsType: { name: "boolean" }, description: "" },
    onChange: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(event: React.ChangeEvent<HTMLInputElement>) => void",
        signature: {
          arguments: [
            {
              type: {
                name: "ReactChangeEvent",
                raw: "React.ChangeEvent<HTMLInputElement>",
                elements: [{ name: "HTMLInputElement" }],
              },
              name: "event",
            },
          ],
          return: { name: "void" },
        },
      },
      description: "",
    },
  },
};
const j = {
    title: "Example/RadioButton",
    component: s,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      disabled: { control: "boolean" },
      label: { control: "text" },
      name: { control: "text" },
      value: { control: "text" },
      checked: { control: "boolean" },
      onChange: { action: "clicked" },
    },
  },
  n = {
    args: {
      disabled: !0,
      label: "disabled",
      name: "disabled",
      value: "disabled",
    },
  },
  o = {
    args: { disabled: !1, label: "enabled", name: "enabled", value: "enabled" },
  },
  r = {
    args: {
      label: "Option 1",
      name: "group1",
      value: "option1",
      disabled: !1,
      checked: !1,
    },
    render: () => {
      const [e, t] = S.useState("option1");
      return a.jsxs("div", {
        children: [
          a.jsx("h3", { children: "Select an option" }),
          a.jsx(s, {
            label: "Option 1",
            name: "group 1",
            value: "option1",
            checked: e === "option1",
            onChange: () => t("option1"),
          }),
          a.jsx(s, {
            label: "Option 2",
            name: "group 1",
            value: "option2",
            checked: e === "option2",
            onChange: () => t("option2"),
          }),
        ],
      });
    },
  };
var d, i, c;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((d = n.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    label: 'disabled',
    name: 'disabled',
    value: 'disabled'
  }
}`,
      ...((c = (i = n.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : c.source),
    },
  },
};
var p, u, m;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((p = o.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    label: 'enabled',
    name: 'enabled',
    value: 'enabled'
  }
}`,
      ...((m = (u = o.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var b, g, h;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((b = r.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Option 1',
    name: 'group1',
    value: 'option1',
    disabled: false,
    checked: false
  },
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div>\r
        <h3>Select an option</h3>\r
        <RadioButton label="Option 1" name="group 1" value="option1" checked={selected === 'option1'} onChange={() => setSelected('option1')} />\r
\r
        <RadioButton label="Option 2" name="group 1" value="option2" checked={selected === 'option2'} onChange={() => setSelected('option2')} />\r
\r
      </div>;
  }
}`,
      ...((h = (g = r.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : h.source),
    },
  },
};
const O = ["Disabled", "Enabled", "MultipleRadios"];
export {
  n as Disabled,
  o as Enabled,
  r as MultipleRadios,
  O as __namedExportsOrder,
  j as default,
};
