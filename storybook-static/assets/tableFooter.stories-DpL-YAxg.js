import { j as o } from "./jsx-runtime-D_zvdyIk.js";
import { R as C } from "./index-DmM0KDA7.js";
import { d as T } from "./styled-components.browser.esm-Dxl9SFvD.js";
import { T as l } from "./tableCell-DpJwDz4v.js";
const F = T.tfoot`
background-color: ${({ backgroundColor: e }) => e || "transparent"};
border-bottom: 1px solid black;
opacity: ${({ disabled: e }) => (e ? 0.5 : 1)};
user-select: ${({ disabled: e }) => (e ? "none" : "auto")};
cursor: ${({ disabled: e }) => (e ? "not-allowed" : "auto")};
`,
  i = ({ disabled: e = !1, backgroundColor: m, cells: p }) => {
    const u = p.map((x) => C.cloneElement(x, { disabled: e }));
    return o.jsx(F, { disabled: e, backgroundColor: m, children: u });
  };
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableFooter",
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
    cells: {
      required: !0,
      tsType: {
        name: "Array",
        elements: [
          {
            name: "ReactReactElement",
            raw: "React.ReactElement<TableCellProps>",
            elements: [{ name: "TableCellProps" }],
          },
        ],
        raw: "React.ReactElement<TableCellProps>[]",
      },
      description: "",
    },
  },
};
const k = {
    title: "Example/TableFooter",
    component: i,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { backgroundColor: { control: "color" } },
  },
  t = {
    args: {
      disabled: !0,
      cells: [
        o.jsx(l, { text: "Disabled Footer, Col 1" }, 1),
        o.jsx(l, { text: "Disabled Footer, Col 2" }, 1),
        o.jsx(l, { text: "Disabled Footer, Col 3" }, 1),
      ],
    },
  },
  a = {
    args: {
      disabled: !1,
      cells: [
        o.jsx(l, { text: "Enabled Footer, Col 1" }, 1),
        o.jsx(l, { text: "Enabled Footer, Col 2" }, 1),
        o.jsx(l, { text: "Enabled Footer, Col 3" }, 1),
      ],
    },
  };
var r, s, n;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((r = t.parameters) == null ? void 0 : r.docs),
    source: {
      originalSource: `{
  args: {
    disabled: true,
    cells: [<TableCell key={1} text="Disabled Footer, Col 1" />, <TableCell key={1} text="Disabled Footer, Col 2" />, <TableCell key={1} text="Disabled Footer, Col 3" />]
  }
}`,
      ...((n = (s = t.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var d, c, b;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((d = a.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    disabled: false,
    cells: [<TableCell key={1} text="Enabled Footer, Col 1" />, <TableCell key={1} text="Enabled Footer, Col 2" />, <TableCell key={1} text="Enabled Footer, Col 3" />]
  }
}`,
      ...((b = (c = a.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : b.source),
    },
  },
};
const j = ["Disabled", "Enabled"];
export { t as Disabled, a as Enabled, j as __namedExportsOrder, k as default };
