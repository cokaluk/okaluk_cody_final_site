import { j as f } from "./jsx-runtime-D_zvdyIk.js";
import { d as h } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const l = "" + new URL("computer-DTKsqEPK.jpg", import.meta.url).href,
  b = h.img`
  width: ${({ width: e }) => e || "auto"};
  height: ${({ height: e }) => e || "auto"};
  opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
  user-select: ${({ disabled: e }) => (e ? "none" : "auto")};
  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "default")};
  filter: ${({ disabled: e }) => (e ? "grayscale(50%)" : "none")};
`,
  c = ({ src: e, alt: m = "", disabled: p = !1, width: u, height: g }) =>
    f.jsx(b, { src: e, alt: m, disabled: p, height: g, width: u });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Img",
  props: {
    src: { required: !0, tsType: { name: "string" }, description: "" },
    alt: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '""', computed: !1 },
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    height: { required: !1, tsType: { name: "string" }, description: "" },
    width: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
const w = {
    title: "Example/Img",
    component: c,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      disabled: { control: "boolean" },
      width: { control: "text" },
      height: { control: "text" },
    },
  },
  t = { args: { src: l, disabled: !0, alt: "disabled img" } },
  a = {
    args: {
      src: l,
      disabled: !1,
      width: "250px",
      height: "250x",
      alt: "enabled img",
    },
  };
var r, s, o;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((r = t.parameters) == null ? void 0 : r.docs),
    source: {
      originalSource: `{
  args: {
    src: computerImg,
    disabled: true,
    alt: 'disabled img'
  }
}`,
      ...((o = (s = t.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : o.source),
    },
  },
};
var d, n, i;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((d = a.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    src: computerImg,
    disabled: false,
    width: '250px',
    height: '250x',
    alt: 'enabled img'
  }
}`,
      ...((i = (n = a.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : i.source),
    },
  },
};
const T = ["Disabled", "Enabled"];
export { t as Disabled, a as Enabled, T as __namedExportsOrder, w as default };
