import {
  accordionAnatomy,
  alertAnatomy,
  avatarAnatomy,
  breadcrumbAnatomy,
  calc2 as calc,
  cardAnatomy,
  checkboxAnatomy,
  createMultiStyleConfigHelpers,
  cssVar,
  cssVar2,
  defineCssVars,
  defineStyle,
  defineStyleConfig,
  drawerAnatomy,
  editableAnatomy,
  formAnatomy,
  formErrorAnatomy,
  generateStripe,
  getColor,
  inputAnatomy,
  isDark,
  isObject,
  listAnatomy,
  menuAnatomy,
  modalAnatomy,
  mode,
  numberInputAnatomy,
  orient,
  popoverAnatomy,
  progressAnatomy,
  radioAnatomy,
  randomColor,
  require_lodash,
  selectAnatomy,
  sliderAnatomy,
  statAnatomy,
  switchAnatomy,
  tableAnatomy,
  tabsAnatomy,
  tagAnatomy,
  transparentize
} from "./chunk-FFLO7VTN.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@chakra-ui/theme/dist/chunk-P56GPN75.mjs
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}

// node_modules/@chakra-ui/theme/dist/chunk-SIH73G3H.mjs
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition;

// node_modules/@chakra-ui/theme/dist/chunk-45VJLTIL.mjs
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;

// node_modules/@chakra-ui/theme/dist/chunk-B75T2J64.mjs
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;

// node_modules/@chakra-ui/theme/dist/chunk-TXLFBUTF.mjs
var breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints;

// node_modules/@chakra-ui/theme/dist/chunk-E47HH2QS.mjs
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;

// node_modules/@chakra-ui/theme/dist/chunk-VIVTPWHP.mjs
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;

// node_modules/@chakra-ui/theme/dist/chunk-IZUFFCXS.mjs
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;

// node_modules/@chakra-ui/theme/dist/chunk-HQ6WXDYV.mjs
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;

// node_modules/@chakra-ui/theme/dist/chunk-6XA2KDUD.mjs
var typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography;

// node_modules/@chakra-ui/theme/dist/chunk-V7WMN6TQ.mjs
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// node_modules/@chakra-ui/theme/dist/chunk-NJCYBKFH.mjs
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes;

// node_modules/@chakra-ui/theme/dist/chunk-3WO5B3NB.mjs
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};

// node_modules/@chakra-ui/theme/dist/chunk-Q5NOVGYN.mjs
var { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]);
var $size = cssVar("stepper-indicator-size");
var $iconSize = cssVar("stepper-icon-size");
var $titleFontSize = cssVar("stepper-title-font-size");
var $descFontSize = cssVar("stepper-description-font-size");
var $accentColor = cssVar("stepper-accent-color");
var baseStyle = definePartsStyle(({ colorScheme: c }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [$accentColor.variable]: `colors.${c}.500`,
    _dark: {
      [$accentColor.variable]: `colors.${c}.200`
    }
  },
  title: {
    fontSize: $titleFontSize.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: $descFontSize.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: $titleFontSize.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: $iconSize.reference,
    height: $iconSize.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: $size.reference,
    height: $size.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: $accentColor.reference
    },
    "&[data-status=complete]": {
      bg: $accentColor.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: $accentColor.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${$size.reference} - 8px)`,
      top: `calc(${$size.reference} + 4px)`,
      insetStart: `calc(${$size.reference} / 2 - 1px)`
    }
  }
}));
var stepperTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    xs: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.4",
        [$iconSize.variable]: "sizes.3",
        [$titleFontSize.variable]: "fontSizes.xs",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    sm: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.6",
        [$iconSize.variable]: "sizes.4",
        [$titleFontSize.variable]: "fontSizes.sm",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    md: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.8",
        [$iconSize.variable]: "sizes.5",
        [$titleFontSize.variable]: "fontSizes.md",
        [$descFontSize.variable]: "fontSizes.sm"
      }
    }),
    lg: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.10",
        [$iconSize.variable]: "sizes.6",
        [$titleFontSize.variable]: "fontSizes.lg",
        [$descFontSize.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-SG67NFYS.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig2, definePartsStyle: definePartsStyle2 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar2("switch-track-width");
var $height = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar2("switch-thumb-x");
var $bg = cssVar2("switch-bg");
var baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg.variable]: "colors.gray.300",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg.variable]: `colors.${c}.500`,
      _dark: {
        [$bg.variable]: `colors.${c}.200`
      }
    },
    bg: $bg.reference
  };
});
var baseStyleThumb = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle2 = definePartsStyle2((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString()
    }
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb
}));
var sizes2 = {
  sm: definePartsStyle2({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle2({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle2({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  sizes: sizes2,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-QWN3S45W.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig3, definePartsStyle: definePartsStyle3 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle3 = definePartsStyle3({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes3 = {
  sm: definePartsStyle3({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle3({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle3({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  variants,
  sizes: sizes3,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-GYISOX2E.mjs
var $fg = cssVar("tabs-color");
var $bg2 = cssVar("tabs-bg");
var $border = cssVar("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig4, definePartsStyle: definePartsStyle4 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle4 = definePartsStyle4((props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes4 = {
  sm: definePartsStyle4({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle4({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle4({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle4((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = isVertical ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg.variable]: `colors.${c}.600`,
        _dark: {
          [$fg.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg2.variable]: "colors.gray.200",
        _dark: {
          [$bg2.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg.reference,
      bg: $bg2.reference
    }
  };
});
var variantEnclosed = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border.variable]: "transparent",
      _selected: {
        [$fg.variable]: `colors.${c}.600`,
        [$border.variable]: `colors.white`,
        _dark: {
          [$fg.variable]: `colors.${c}.300`,
          [$border.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border.reference
      },
      color: $fg.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg2.variable]: "colors.gray.50",
      _dark: {
        [$bg2.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg2.variable]: "colors.white",
        [$fg.variable]: `colors.${c}.600`,
        _dark: {
          [$bg2.variable]: "colors.gray.800",
          [$fg.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg.reference,
      bg: $bg2.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle4((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg.variable]: "colors.gray.600",
      _dark: {
        [$fg.variable]: "inherit"
      },
      _selected: {
        [$fg.variable]: "colors.white",
        [$bg2.variable]: `colors.${c}.600`,
        _dark: {
          [$fg.variable]: "colors.gray.800",
          [$bg2.variable]: `colors.${c}.300`
        }
      },
      color: $fg.reference,
      bg: $bg2.reference
    }
  };
});
var variantUnstyled = definePartsStyle4({});
var variants2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var tabsTheme = defineMultiStyleConfig4({
  baseStyle: baseStyle4,
  sizes: sizes4,
  variants: variants2,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-ZQMLTFF3.mjs
var vars = defineCssVars("badge", ["bg", "color", "shadow"]);
var baseStyle5 = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var variantSolid = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize(`${c}.500`, 0.6)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    _dark: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`
    }
  };
});
var variantSubtle = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    _dark: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`
    }
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize(`${c}.200`, 0.8)(theme2);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var variants3 = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle5,
  variants: variants3,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-7RVLYCMR.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig5, definePartsStyle: definePartsStyle5 } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var $bg3 = cssVar("tag-bg");
var $color = cssVar("tag-color");
var $shadow = cssVar("tag-shadow");
var $minH = cssVar("tag-min-height");
var $minW = cssVar("tag-min-width");
var $fontSize = cssVar("tag-font-size");
var $paddingX = cssVar("tag-padding-inline");
var baseStyleContainer = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [$color.variable]: vars.color.reference,
  [$bg3.variable]: vars.bg.reference,
  [$shadow.variable]: vars.shadow.reference,
  color: $color.reference,
  bg: $bg3.reference,
  boxShadow: $shadow.reference,
  borderRadius: "md",
  minH: $minH.reference,
  minW: $minW.reference,
  fontSize: $fontSize.reference,
  px: $paddingX.reference,
  _focusVisible: {
    [$shadow.variable]: "shadows.outline"
  }
});
var baseStyleLabel = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle6 = definePartsStyle5({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
});
var sizes5 = {
  sm: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.5",
      [$minW.variable]: "sizes.5",
      [$fontSize.variable]: "fontSizes.xs",
      [$paddingX.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.6",
      [$minW.variable]: "sizes.6",
      [$fontSize.variable]: "fontSizes.sm",
      [$paddingX.variable]: "space.2"
    }
  }),
  lg: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.8",
      [$minW.variable]: "sizes.8",
      [$fontSize.variable]: "fontSizes.md",
      [$paddingX.variable]: "space.3"
    }
  })
};
var variants4 = {
  subtle: definePartsStyle5((props) => {
    var _a6;
    return {
      container: (_a6 = badgeTheme.variants) == null ? void 0 : _a6.subtle(props)
    };
  }),
  solid: definePartsStyle5((props) => {
    var _a6;
    return {
      container: (_a6 = badgeTheme.variants) == null ? void 0 : _a6.solid(props)
    };
  }),
  outline: definePartsStyle5((props) => {
    var _a6;
    return {
      container: (_a6 = badgeTheme.variants) == null ? void 0 : _a6.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig5({
  variants: variants4,
  baseStyle: baseStyle6,
  sizes: sizes5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-ICL3HPTT.mjs
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var $height2 = cssVar("input-height");
var $fontSize2 = cssVar("input-font-size");
var $padding = cssVar("input-padding");
var $borderRadius = cssVar("input-border-radius");
var baseStyle7 = definePartsStyle6({
  addon: {
    height: $height2.reference,
    fontSize: $fontSize2.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference
  },
  field: {
    width: "100%",
    height: $height2.reference,
    fontSize: $fontSize2.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    [$fontSize2.variable]: "fontSizes.lg",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height2.variable]: "sizes.12"
  }),
  md: defineStyle({
    [$fontSize2.variable]: "fontSizes.md",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height2.variable]: "sizes.10"
  }),
  sm: defineStyle({
    [$fontSize2.variable]: "fontSizes.sm",
    [$padding.variable]: "space.3",
    [$borderRadius.variable]: "radii.sm",
    [$height2.variable]: "sizes.8"
  }),
  xs: defineStyle({
    [$fontSize2.variable]: "fontSizes.xs",
    [$padding.variable]: "space.2",
    [$borderRadius.variable]: "radii.sm",
    [$height2.variable]: "sizes.6"
  })
};
var sizes6 = {
  lg: definePartsStyle6({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle6({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle6({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle6({
    field: size.xs,
    group: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline2 = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled2 = definePartsStyle6({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants5 = {
  outline: variantOutline2,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled2
};
var inputTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle7,
  sizes: sizes6,
  variants: variants5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-KJ26FGJD.mjs
var _a;
var baseStyle8 = defineStyle({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a2;
var _b;
var variants6 = {
  outline: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.outline(props).field) != null ? _b32 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.flushed(props).field) != null ? _b32 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.filled(props).field) != null ? _b32 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var _a3;
var _b2;
var _c;
var _d;
var _e;
var _f;
var _g;
var _h;
var sizes7 = {
  xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
  sm: (_d = (_c = inputTheme.sizes) == null ? void 0 : _c.sm.field) != null ? _d : {},
  md: (_f = (_e = inputTheme.sizes) == null ? void 0 : _e.md.field) != null ? _f : {},
  lg: (_h = (_g = inputTheme.sizes) == null ? void 0 : _g.lg.field) != null ? _h : {}
};
var textareaTheme = defineStyleConfig({
  baseStyle: baseStyle8,
  sizes: sizes7,
  variants: variants6,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-R7ZISUMV.mjs
var $bg4 = cssVar2("tooltip-bg");
var $fg2 = cssVar2("tooltip-fg");
var $arrowBg = cssVar2("popper-arrow-bg");
var baseStyle9 = defineStyle({
  bg: $bg4.reference,
  color: $fg2.reference,
  [$bg4.variable]: "colors.gray.700",
  [$fg2.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg4.variable]: "colors.gray.300",
    [$fg2.variable]: "colors.gray.900"
  },
  [$arrowBg.variable]: $bg4.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle9
});

// node_modules/@chakra-ui/theme/dist/chunk-37MNRBP2.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig7, definePartsStyle: definePartsStyle7 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel2 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack2 = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle10 = definePartsStyle7((props) => ({
  label: baseStyleLabel2,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack2(props)
}));
var sizes8 = {
  xs: definePartsStyle7({
    track: { h: "1" }
  }),
  sm: definePartsStyle7({
    track: { h: "2" }
  }),
  md: definePartsStyle7({
    track: { h: "3" }
  }),
  lg: definePartsStyle7({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig7({
  sizes: sizes8,
  baseStyle: baseStyle10,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-UV3F75RF.mjs
var isFunction = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// node_modules/@chakra-ui/theme/dist/chunk-XHYVH6UO.mjs
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size2 = cssVar("checkbox-size");
var baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size2.reference,
    h: $size2.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer2 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel3 = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle11 = definePartsStyle8((props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer2,
  control: runIfFn(baseStyleControl, props),
  label: baseStyleLabel3
}));
var sizes9 = {
  sm: definePartsStyle8({
    control: { [$size2.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle8({
    control: { [$size2.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle8({
    control: { [$size2.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig8({
  baseStyle: baseStyle11,
  sizes: sizes9,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-VZUATZ4E.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig9, definePartsStyle: definePartsStyle9 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl2 = defineStyle((props) => {
  var _a6;
  const controlStyle = (_a6 = runIfFn(checkboxTheme.baseStyle, props)) == null ? void 0 : _a6.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle12 = definePartsStyle9((props) => {
  var _a6, _b5, _c3, _d3;
  return {
    label: (_b5 = (_a6 = checkboxTheme).baseStyle) == null ? void 0 : _b5.call(_a6, props).label,
    container: (_d3 = (_c3 = checkboxTheme).baseStyle) == null ? void 0 : _d3.call(_c3, props).container,
    control: baseStyleControl2(props)
  };
});
var sizes10 = {
  md: definePartsStyle9({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle9({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle9({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig9({
  baseStyle: baseStyle12,
  sizes: sizes10,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-NNA4E64A.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig10, definePartsStyle: definePartsStyle10 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var $bg5 = cssVar("select-bg");
var _a4;
var baseStyleField = defineStyle({
  ...(_a4 = inputTheme.baseStyle) == null ? void 0 : _a4.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg5.reference,
  [$bg5.variable]: "colors.white",
  _dark: {
    [$bg5.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg5.reference
  }
});
var baseStyleIcon2 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle13 = definePartsStyle10({
  field: baseStyleField,
  icon: baseStyleIcon2
});
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a22;
var _b3;
var _c2;
var _d2;
var _e2;
var _f2;
var _g2;
var _h2;
var sizes11 = {
  lg: {
    ...(_a22 = inputTheme.sizes) == null ? void 0 : _a22.lg,
    field: {
      ...(_b3 = inputTheme.sizes) == null ? void 0 : _b3.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c2 = inputTheme.sizes) == null ? void 0 : _c2.md,
    field: {
      ...(_d2 = inputTheme.sizes) == null ? void 0 : _d2.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e2 = inputTheme.sizes) == null ? void 0 : _e2.sm,
    field: {
      ...(_f2 = inputTheme.sizes) == null ? void 0 : _f2.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g2 = inputTheme.sizes) == null ? void 0 : _g2.xs,
    field: {
      ...(_h2 = inputTheme.sizes) == null ? void 0 : _h2.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig10({
  baseStyle: baseStyle13,
  sizes: sizes11,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-X6XFE4TF.mjs
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var baseStyle14 = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle14
});

// node_modules/@chakra-ui/theme/dist/chunk-ZREGO6US.mjs
var $bg6 = cssVar("skip-link-bg");
var baseStyle15 = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg6.variable]: "colors.white",
    _dark: {
      [$bg6.variable]: "colors.gray.700"
    },
    bg: $bg6.reference
  }
});
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle15
});

// node_modules/@chakra-ui/theme/dist/chunk-5FA7Y3RP.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig11, definePartsStyle: definePartsStyle11 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar("slider-thumb-size");
var $trackSize = cssVar("slider-track-size");
var $bg7 = cssVar("slider-bg");
var baseStyleContainer3 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack3 = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg7.variable]: "colors.gray.200",
    _dark: {
      [$bg7.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg7.variable]: "colors.gray.300",
      _dark: {
        [$bg7.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg7.reference
  };
});
var baseStyleThumb2 = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg7.variable]: `colors.${c}.500`,
    _dark: {
      [$bg7.variable]: `colors.${c}.200`
    },
    bg: $bg7.reference
  };
});
var baseStyle16 = definePartsStyle11((props) => ({
  container: baseStyleContainer3(props),
  track: baseStyleTrack3(props),
  thumb: baseStyleThumb2(props),
  filledTrack: baseStyleFilledTrack2(props)
}));
var sizeLg = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes12 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig11({
  baseStyle: baseStyle16,
  sizes: sizes12,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-L3YAB6CV.mjs
var $size3 = cssVar2("spinner-size");
var baseStyle17 = defineStyle({
  width: [$size3.reference],
  height: [$size3.reference]
});
var sizes13 = {
  xs: defineStyle({
    [$size3.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size3.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size3.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size3.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size3.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle17,
  sizes: sizes13,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-2KWJXISX.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel4 = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon3 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle18 = definePartsStyle12({
  container: {},
  label: baseStyleLabel4,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon3
});
var sizes14 = {
  md: definePartsStyle12({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig12({
  baseStyle: baseStyle18,
  sizes: sizes14,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-AFCBUAM5.mjs
var $bg8 = cssVar("kbd-bg");
var baseStyle19 = defineStyle({
  [$bg8.variable]: "colors.gray.100",
  _dark: {
    [$bg8.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg8.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle19
});

// node_modules/@chakra-ui/theme/dist/chunk-V5KSHSOQ.mjs
var baseStyle20 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle20
});

// node_modules/@chakra-ui/theme/dist/chunk-MGNM2WZQ.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig13, definePartsStyle: definePartsStyle13 } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon4 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle21 = definePartsStyle13({
  icon: baseStyleIcon4
});
var listTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle21
});

// node_modules/@chakra-ui/theme/dist/chunk-N2GP2AF7.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig14, definePartsStyle: definePartsStyle14 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var $bg9 = cssVar("menu-bg");
var $shadow2 = cssVar("menu-shadow");
var baseStyleList = defineStyle({
  [$bg9.variable]: "#fff",
  [$shadow2.variable]: "shadows.sm",
  _dark: {
    [$bg9.variable]: "colors.gray.700",
    [$shadow2.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg9.reference,
  boxShadow: $shadow2.reference
});
var baseStyleItem = defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg9.variable]: "colors.gray.100",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg9.variable]: "colors.gray.200",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg9.variable]: "colors.gray.100",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg9.reference
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleIcon5 = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle22 = definePartsStyle14({
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  icon: baseStyleIcon5,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle22
});

// node_modules/@chakra-ui/theme/dist/chunk-JN6QBAR6.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig15, definePartsStyle: definePartsStyle15 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var $bg10 = cssVar("modal-bg");
var $shadow3 = cssVar("modal-shadow");
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    borderRadius: "md",
    color: "inherit",
    my: isCentered ? "auto" : "16",
    mx: isCentered ? "auto" : void 0,
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [$bg10.variable]: "colors.white",
    [$shadow3.variable]: "shadows.lg",
    _dark: {
      [$bg10.variable]: "colors.gray.700",
      [$shadow3.variable]: "shadows.dark-lg"
    },
    bg: $bg10.reference,
    boxShadow: $shadow3.reference
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle23 = definePartsStyle15((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: runIfFn(baseStyleDialogContainer, props),
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton2,
  body: runIfFn(baseStyleBody, props),
  footer: baseStyleFooter
}));
function getSize(value) {
  if (value === "full") {
    return definePartsStyle15({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle15({
    dialog: { maxW: value }
  });
}
var sizes15 = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full")
};
var modalTheme = defineMultiStyleConfig15({
  baseStyle: baseStyle23,
  sizes: sizes15,
  defaultProps: { size: "md" }
});

// node_modules/@chakra-ui/theme/dist/chunk-57T4IAPW.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle16 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
var $bg11 = cssVar2("number-input-bg");
var $fg3 = cssVar2("number-input-color");
var $border2 = cssVar2("number-input-border-color");
var baseStyleRoot2 = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField2 = defineStyle(
  (props) => {
    var _a6, _b5;
    return (_b5 = (_a6 = runIfFn(inputTheme.baseStyle, props)) == null ? void 0 : _a6.field) != null ? _b5 : {};
  }
);
var baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
var baseStyleStepper = defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border2.reference,
  color: $fg3.reference,
  bg: $bg11.reference,
  [$fg3.variable]: "colors.chakra-body-text",
  [$border2.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg3.variable]: "colors.whiteAlpha.800",
    [$border2.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg11.variable]: "colors.gray.200",
    _dark: {
      [$bg11.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle24 = definePartsStyle16((props) => {
  var _a6;
  return {
    root: baseStyleRoot2,
    field: (_a6 = runIfFn(baseStyleField2, props)) != null ? _a6 : {},
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper
  };
});
function getSize2(size2) {
  var _a6, _b5, _c3;
  const sizeStyle = (_a6 = inputTheme.sizes) == null ? void 0 : _a6[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = (_c3 = (_b5 = sizeStyle.field) == null ? void 0 : _b5.fontSize) != null ? _c3 : "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle16({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes16 = {
  xs: getSize2("xs"),
  sm: getSize2("sm"),
  md: getSize2("md"),
  lg: getSize2("lg")
};
var numberInputTheme = defineMultiStyleConfig16({
  baseStyle: baseStyle24,
  sizes: sizes16,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-OEFJDLVS.mjs
var _a5;
var baseStyle25 = defineStyle({
  ...(_a5 = inputTheme.baseStyle) == null ? void 0 : _a5.field,
  textAlign: "center"
});
var sizes17 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a23;
var _b4;
var variants7 = {
  outline: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn((_a32 = inputTheme.variants) == null ? void 0 : _a32.outline, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn((_a32 = inputTheme.variants) == null ? void 0 : _a32.flushed, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn((_a32 = inputTheme.variants) == null ? void 0 : _a32.filled, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  unstyled: (_b4 = (_a23 = inputTheme.variants) == null ? void 0 : _a23.unstyled.field) != null ? _b4 : {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle25,
  sizes: sizes17,
  variants: variants7,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-U3INMHUO.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig17, definePartsStyle: definePartsStyle17 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar2("popper-bg");
var $arrowBg2 = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({ zIndex: 10 });
var baseStyleContent = defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg2.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader2 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody2 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter2 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton3 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle26 = definePartsStyle17({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader2,
  body: baseStyleBody2,
  footer: baseStyleFooter2,
  closeButton: baseStyleCloseButton3
});
var popoverTheme = defineMultiStyleConfig17({
  baseStyle: baseStyle26
});

// node_modules/@chakra-ui/theme/dist/chunk-VWP3ZVQT.mjs
var { definePartsStyle: definePartsStyle18, defineMultiStyleConfig: defineMultiStyleConfig18 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg12 = cssVar("drawer-bg");
var $bs = cssVar("drawer-box-shadow");
function getSize3(value) {
  if (value === "full") {
    return definePartsStyle18({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle18({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay2 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer2 = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog2 = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg12.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg12.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg12.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader3 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton4 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody3 = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter3 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle27 = definePartsStyle18((props) => ({
  overlay: baseStyleOverlay2,
  dialogContainer: baseStyleDialogContainer2,
  dialog: runIfFn(baseStyleDialog2, props),
  header: baseStyleHeader3,
  closeButton: baseStyleCloseButton4,
  body: baseStyleBody3,
  footer: baseStyleFooter3
}));
var sizes18 = {
  xs: getSize3("xs"),
  sm: getSize3("md"),
  md: getSize3("lg"),
  lg: getSize3("2xl"),
  xl: getSize3("4xl"),
  full: getSize3("full")
};
var drawerTheme = defineMultiStyleConfig18({
  baseStyle: baseStyle27,
  sizes: sizes18,
  defaultProps: {
    size: "xs"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-D6DZ26HA.mjs
var { definePartsStyle: definePartsStyle19, defineMultiStyleConfig: defineMultiStyleConfig19 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle28 = definePartsStyle19({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig19({
  baseStyle: baseStyle28
});

// node_modules/@chakra-ui/theme/dist/chunk-O6GGGS4Y.mjs
var { definePartsStyle: definePartsStyle20, defineMultiStyleConfig: defineMultiStyleConfig20 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg4 = cssVar("form-control-color");
var baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg4.variable]: "colors.red.500",
  _dark: {
    [$fg4.variable]: "colors.red.300"
  },
  color: $fg4.reference
});
var baseStyleHelperText = defineStyle({
  mt: "2",
  [$fg4.variable]: "colors.gray.600",
  _dark: {
    [$fg4.variable]: "colors.whiteAlpha.600"
  },
  color: $fg4.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle29 = definePartsStyle20({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig20({
  baseStyle: baseStyle29
});

// node_modules/@chakra-ui/theme/dist/chunk-SRBDDT7F.mjs
var { definePartsStyle: definePartsStyle21, defineMultiStyleConfig: defineMultiStyleConfig21 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg5 = cssVar("form-error-color");
var baseStyleText = defineStyle({
  [$fg5.variable]: `colors.red.500`,
  _dark: {
    [$fg5.variable]: `colors.red.300`
  },
  color: $fg5.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon6 = defineStyle({
  marginEnd: "0.5em",
  [$fg5.variable]: `colors.red.500`,
  _dark: {
    [$fg5.variable]: `colors.red.300`
  },
  color: $fg5.reference
});
var baseStyle30 = definePartsStyle21({
  text: baseStyleText,
  icon: baseStyleIcon6
});
var formErrorTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle30
});

// node_modules/@chakra-ui/theme/dist/chunk-VHM7WLW6.mjs
var baseStyle31 = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = defineStyleConfig({
  baseStyle: baseStyle31
});

// node_modules/@chakra-ui/theme/dist/chunk-WXARPSDQ.mjs
var baseStyle32 = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes19 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle32,
  sizes: sizes19,
  defaultProps: {
    size: "xl"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-FU5DDBRC.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig22, definePartsStyle: definePartsStyle22 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var $decor = cssVar("breadcrumb-link-decor");
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [$decor.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
});
var baseStyle33 = definePartsStyle22({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig22({
  baseStyle: baseStyle33
});

// node_modules/@chakra-ui/theme/dist/chunk-MBVM6PEK.mjs
var baseStyle34 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid2 = defineStyle((props) => {
  var _a6;
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = (_a6 = accessibleColorMap[c]) != null ? _a6 : {};
  const background = mode(bg, `${c}.200`)(props);
  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled3 = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants8 = {
  ghost: variantGhost,
  outline: variantOutline3,
  solid: variantSolid2,
  link: variantLink,
  unstyled: variantUnstyled3
};
var sizes20 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = defineStyleConfig({
  baseStyle: baseStyle34,
  variants: variants8,
  sizes: sizes20,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-F7CKIHPM.mjs
var { definePartsStyle: definePartsStyle23, defineMultiStyleConfig: defineMultiStyleConfig23 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg13 = cssVar("card-bg");
var $padding2 = cssVar("card-padding");
var $shadow4 = cssVar("card-shadow");
var $radius = cssVar("card-radius");
var $border3 = cssVar("card-border-width", "0");
var $borderColor = cssVar("card-border-color");
var baseStyle35 = definePartsStyle23({
  container: {
    [$bg13.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg13.reference,
    boxShadow: $shadow4.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border3.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding2.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding2.reference
  },
  footer: {
    padding: $padding2.reference
  }
});
var sizes21 = {
  sm: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.base",
      [$padding2.variable]: "space.3"
    }
  }),
  md: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.md",
      [$padding2.variable]: "space.5"
    }
  }),
  lg: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding2.variable]: "space.7"
    }
  })
};
var variants9 = {
  elevated: definePartsStyle23({
    container: {
      [$shadow4.variable]: "shadows.base",
      _dark: {
        [$bg13.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle23({
    container: {
      [$border3.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle23({
    container: {
      [$bg13.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding2.variable]: 0
    },
    header: {
      [$padding2.variable]: 0
    },
    footer: {
      [$padding2.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle35,
  variants: variants9,
  sizes: sizes21,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-OB7MMEC3.mjs
var $size4 = cssVar2("close-button-size");
var $bg14 = cssVar2("close-button-bg");
var baseStyle36 = defineStyle({
  w: [$size4.reference],
  h: [$size4.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg14.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg14.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg14.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg14.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg14.reference
});
var sizes22 = {
  lg: defineStyle({
    [$size4.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size4.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size4.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle36,
  sizes: sizes22,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-K3RH7Y2L.mjs
var { variants: variants10, defaultProps } = badgeTheme;
var baseStyle37 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle37,
  variants: variants10,
  defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-TECE6HDR.mjs
var baseStyle38 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle38
});

// node_modules/@chakra-ui/theme/dist/chunk-5S44M2O4.mjs
var baseStyle39 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid3 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants11 = {
  solid: variantSolid3,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle39,
  variants: variants11,
  defaultProps: {
    variant: "solid"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-J7AGDWFO.mjs
var { definePartsStyle: definePartsStyle24, defineMultiStyleConfig: defineMultiStyleConfig24 } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var baseStyleContainer4 = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton2 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon7 = defineStyle({
  fontSize: "1.25em"
});
var baseStyle40 = definePartsStyle24({
  container: baseStyleContainer4,
  button: baseStyleButton2,
  panel: baseStylePanel,
  icon: baseStyleIcon7
});
var accordionTheme = defineMultiStyleConfig24({ baseStyle: baseStyle40 });

// node_modules/@chakra-ui/theme/dist/chunk-BNQWYFTH.mjs
var { definePartsStyle: definePartsStyle25, defineMultiStyleConfig: defineMultiStyleConfig25 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg6 = cssVar("alert-fg");
var $bg15 = cssVar("alert-bg");
var baseStyle41 = definePartsStyle25({
  container: {
    bg: $bg15.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg6.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg6.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
var variantSubtle2 = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg6.reference
    }
  };
});
var variantTopAccent = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg6.reference
    }
  };
});
var variantSolid4 = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg6.variable]: `colors.white`,
      [$bg15.variable]: `colors.${c}.600`,
      _dark: {
        [$fg6.variable]: `colors.gray.900`,
        [$bg15.variable]: `colors.${c}.200`
      },
      color: $fg6.reference
    }
  };
});
var variants12 = {
  subtle: variantSubtle2,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid4
};
var alertTheme = defineMultiStyleConfig25({
  baseStyle: baseStyle41,
  variants: variants12,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-Q5ZQE4MD.mjs
var { definePartsStyle: definePartsStyle26, defineMultiStyleConfig: defineMultiStyleConfig26 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border4 = cssVar("avatar-border-color");
var $bg16 = cssVar("avatar-bg");
var $fs = cssVar("avatar-font-size");
var $size5 = cssVar("avatar-size");
var baseStyleBadge = defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: $border4.reference,
  [$border4.variable]: "white",
  _dark: {
    [$border4.variable]: "colors.gray.800"
  }
});
var baseStyleExcessLabel = defineStyle({
  bg: $bg16.reference,
  fontSize: $fs.reference,
  width: $size5.reference,
  height: $size5.reference,
  lineHeight: "1",
  [$bg16.variable]: "colors.gray.200",
  _dark: {
    [$bg16.variable]: "colors.whiteAlpha.400"
  }
});
var baseStyleContainer5 = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color = "white";
  if (!isBgDark)
    color = "gray.800";
  return {
    bg: $bg16.reference,
    fontSize: $fs.reference,
    color,
    borderColor: $border4.reference,
    verticalAlign: "top",
    width: $size5.reference,
    height: $size5.reference,
    "&:not([data-loaded])": {
      [$bg16.variable]: bg
    },
    [$border4.variable]: "colors.white",
    _dark: {
      [$border4.variable]: "colors.gray.800"
    }
  };
});
var baseStyleLabel5 = defineStyle({
  fontSize: $fs.reference,
  lineHeight: "1"
});
var baseStyle42 = definePartsStyle26((props) => ({
  badge: runIfFn(baseStyleBadge, props),
  excessLabel: runIfFn(baseStyleExcessLabel, props),
  container: runIfFn(baseStyleContainer5, props),
  label: baseStyleLabel5
}));
function getSize4(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle26({
    container: {
      [$size5.variable]: themeSize != null ? themeSize : size2,
      [$fs.variable]: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    },
    excessLabel: {
      [$size5.variable]: themeSize != null ? themeSize : size2,
      [$fs.variable]: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    }
  });
}
var sizes23 = {
  "2xs": getSize4(4),
  xs: getSize4(6),
  sm: getSize4(8),
  md: getSize4(12),
  lg: getSize4(16),
  xl: getSize4(24),
  "2xl": getSize4(32),
  full: getSize4("100%")
};
var avatarTheme = defineMultiStyleConfig26({
  baseStyle: baseStyle42,
  sizes: sizes23,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-P7SDT22G.mjs
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
  Card: cardTheme,
  Stepper: stepperTheme
};

// node_modules/@chakra-ui/theme/dist/chunk-5GOSZLB7.mjs
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};

// node_modules/@chakra-ui/theme/dist/chunk-3F7U33P5.mjs
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
};

// node_modules/@chakra-ui/theme/dist/index.mjs
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
var baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
};

// node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs
var import_lodash = __toESM(require_lodash(), 1);
function isFunction2(value) {
  return typeof value === "function";
}
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
var createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if (isChakraTheme(activeTheme) && // this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction2(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
var extendTheme = createExtendTheme(theme);
var extendBaseTheme = createExtendTheme(baseTheme);
function mergeThemeOverride(...overrides) {
  return (0, import_lodash.default)({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction2(source) || isFunction2(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction2(source) ? source(...args) : source;
      const overrideValue = isFunction2(override) ? override(...args) : override;
      return (0, import_lodash.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-7FV6Z5GW.mjs
function withDefaultColorScheme({
  colorScheme,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withColorScheme = {
            defaultProps: {
              colorScheme
            }
          };
          return [componentName, withColorScheme];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-5IM46G4H.mjs
function withDefaultSize({
  size: size2,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withSize = {
            defaultProps: {
              size: size2
            }
          };
          return [componentName, withSize];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-5UFXUR4J.mjs
function withDefaultVariant({
  variant,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withVariant = {
            defaultProps: {
              variant
            }
          };
          return [componentName, withVariant];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-PE3QADR6.mjs
function pipe2(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size: size2 },
  components: components2
}) {
  const identity = (t) => t;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components: components2 }) : identity,
    size2 ? withDefaultSize({ size: size2, components: components2 }) : identity,
    variant ? withDefaultVariant({ variant, components: components2 }) : identity
  ];
  return (theme2) => mergeThemeOverride(pipe2(...fns)(theme2));
}

export {
  requiredChakraThemeKeys,
  isChakraTheme,
  theme,
  baseTheme,
  extendTheme,
  extendBaseTheme,
  mergeThemeOverride,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
  withDefaultProps
};
//# sourceMappingURL=chunk-E4WE6WPX.js.map
