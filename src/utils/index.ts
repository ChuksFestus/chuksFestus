export const rem = (num: number) => `${num / 16}rem`;
export const em = (num: number) => `${num / 16}em`;

export const size = {
  mobileS: `${em(320)}`,
  mobileM: `${em(375)}`,
  mobileL: `${em(425)}`,
  tablet: `${em(768)}`,
  laptop: `${em(1024)}`,
  laptopL: `${em(1440)}`,
  desktop: `${em(2560)}`,
};

export const device = {
  mobileS: `(width >= ${size.mobileS})`,
  mobileM: `(width >= ${size.mobileM})`,
  mobileL: `(width >= ${size.mobileL})`,
  tablet: `(width >= ${size.tablet})`,
  laptop: `(width >= ${size.laptop})`,
  laptopL: `(width >= ${size.laptopL})`,
  desktop: `(width >= ${size.desktop})`,
  desktopL: `(width >= ${size.desktop})`,
};

type Needle = string | PropsFn;

type PropsFn = (props: Record<string, any>) => any;

export const prop =
  (path: string, defaultValue?: any): PropsFn =>
  (props = {}) => {
    if (typeof props[path] !== "undefined") {
      return props[path];
    }

    if (path && path.indexOf(".") > 0) {
      const paths = path.split(".");
      const { length } = paths;
      let object: any = props[paths[0]];
      let index = 1;

      while (object != null && index < length) {
        object = object ? object[paths[index]] : undefined;
        index += 1;
      }

      if (typeof object !== "undefined") {
        return object;
      }
    }

    return defaultValue;
  };

export const switchProp =
  (needle: Needle, cases: Object | PropsFn, defaultCase: any): PropsFn =>
  (props = {}) => {
    const value = typeof needle === "function" ? needle(props) : prop(needle)(props);
    const finalCases = typeof cases === "function" ? cases(props) : cases;
    if (value in finalCases) {
      return finalCases[value];
    }
    return defaultCase;
  };
