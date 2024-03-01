var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  nonce: () => nonce
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { customAlphabet } from "nanoid";
import dictionary from "nanoid-dictionary";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3, nanoid = customAlphabet(dictionary.alphanumeric, 24), nonce = nanoid();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 55,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), responseHeaders.set(
            "Content-Security-Policy",
            `default-src 'none'; script-src 'self' 'nonce-${nonce}' 'unsafe-inline'; img-src 'self'; style-src 'self' 'unsafe-inline' http://fonts.googleapis.com; font-src https://fonts.gstatic.com;base-uri 'self'; form-action 'self'; connect-src 'self' ws://localhost:8002;`
          ), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 109,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), responseHeaders.set(
            "Content-Security-Policy",
            `default-src 'none'; script-src 'self' 'nonce-${nonce}' 'unsafe-inline'; img-src 'self'; style-src 'self' 'unsafe-inline' http://fonts.googleapis.com; font-src https://fonts.gstatic.com;base-uri 'self'; form-action 'self'; connect-src 'self' ws://localhost:8002;`
          ), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/custom.css
var custom_default = "/build/_assets/custom-XVU7W7SZ.css";

// app/styles/main.css
var main_default = "/build/_assets/main-MNW4UUEN.css";

// app/context/ThemePreference.tsx
import * as React from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var THEME_PREFERENCE_KEY = "theme-preference", PREFERS_DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)", ThemePreferenceContext = React.createContext(null);
function ThemePreferenceProvider({ children }) {
  let [isThemeResolved, setIsThemeResolved] = React.useState(!1), [themePreference, setThemePreference] = React.useState(() => {
    if (!(typeof window > "u"))
      return document.documentElement.classList.contains("dark") ? "dark" : getThemePreference();
  }), [hasPreferenceChanged, setHasPreferenceChanged] = React.useState(!1);
  function watchSystemThemePreference(e) {
    setThemePreference(e.matches ? "dark" : "light");
  }
  function getThemePreference() {
    let userSetting = localStorage.getItem(THEME_PREFERENCE_KEY);
    if (isThemePreference(userSetting))
      return setIsThemeResolved(!0), userSetting === "dark" ? "dark" : "light";
    let themeMediaQuery = window.matchMedia(PREFERS_DARK_MEDIA_QUERY), isSystemDarkMode = themeMediaQuery.matches;
    if (isSystemDarkMode) {
      let preference = isSystemDarkMode ? "dark" : "light";
      return themeMediaQuery.addEventListener("change", watchSystemThemePreference), preference;
    }
    setIsThemeResolved(!0);
  }
  function updateThemePreference(newPreference) {
    localStorage.setItem(THEME_PREFERENCE_KEY, newPreference), setThemePreference(newPreference), setHasPreferenceChanged(!0);
  }
  function resetHasPreferenceChanged() {
    setHasPreferenceChanged(!1);
  }
  return /* @__PURE__ */ jsxDEV2(
    ThemePreferenceContext.Provider,
    {
      value: {
        themePreference,
        updateThemePreference,
        isThemeResolved,
        hasPreferenceChanged,
        resetHasPreferenceChanged
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/context/ThemePreference.tsx",
      lineNumber: 73,
      columnNumber: 3
    },
    this
  );
}
function useThemePreference() {
  let context = React.useContext(ThemePreferenceContext);
  if (!context)
    throw new Error(
      "useThemePreference can only be called from within a ThemePreferenceProvider."
    );
  return context;
}
function isThemePreference(preference) {
  return preference ? ["dark", "light", "system"].includes(preference) : !1;
}
var clientThemeCode = `
  const userSetting = localStorage.getItem(${JSON.stringify(
  THEME_PREFERENCE_KEY
)})

  if (userSetting !== 'light') {
    if (userSetting === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      const isSystemDarkMode = window.matchMedia(${JSON.stringify(
  PREFERS_DARK_MEDIA_QUERY
)}).matches
      if (isSystemDarkMode) {
        document.documentElement.classList.add('dark')
      }
    }
  }
`;
function AvoidFlashOfWrongTheme() {
  return /* @__PURE__ */ jsxDEV2(
    "script",
    {
      nonce,
      dangerouslySetInnerHTML: { __html: clientThemeCode }
    },
    void 0,
    !1,
    {
      fileName: "app/context/ThemePreference.tsx",
      lineNumber: 125,
      columnNumber: 3
    },
    this
  );
}

// app/components/common/navbar/Navbar.tsx
import { Link as Link2, useLocation } from "@remix-run/react";
import * as React5 from "react";

// app/components/common/navbar/components/ThemePicker.tsx
import * as React4 from "react";

// app/components/radix/Dropdown.tsx
var Dropdown_exports = {};
__export(Dropdown_exports, {
  CheckItem: () => CheckItem,
  Content: () => Content2,
  ItemIndicator: () => ItemIndicator2,
  Root: () => Root2,
  Trigger: () => Trigger2
});
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Root2 = DropdownPrimitive.Root, Trigger2 = DropdownPrimitive.Trigger, CheckItem = DropdownPrimitive.CheckboxItem, ItemIndicator2 = DropdownPrimitive.ItemIndicator, Content2 = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV3(
  DropdownPrimitive.Content,
  {
    className: clsx(
      "p-3 pr-4 rounded border border-gray-50 border-opacity-20 bg-gray-50 shadow-lg dark:bg-gray-800 dark:shadow-gray-900",
      className
    ),
    ...props,
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/radix/Dropdown.tsx",
    lineNumber: 14,
    columnNumber: 2
  },
  this
);

// app/components/radix/Dialog.tsx
var Dialog_exports = {};
__export(Dialog_exports, {
  Close: () => Close2,
  Content: () => Content4,
  Overlay: () => Overlay2,
  OverlayWithPortal: () => OverlayWithPortal,
  Root: () => Root4,
  Title: () => Title2,
  Trigger: () => Trigger4
});
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Root4 = DialogPrimitive.Root, Trigger4 = DialogPrimitive.Trigger, Title2 = DialogPrimitive.Title, Overlay2 = DialogPrimitive.Overlay, Close2 = DialogPrimitive.Close;
function OverlayWithPortal(props) {
  return /* @__PURE__ */ jsxDEV4(DialogPrimitive.Portal, { forceMount: !0, children: /* @__PURE__ */ jsxDEV4(DialogPrimitive.Overlay, { ...props }, void 0, !1, {
    fileName: "app/components/radix/Dialog.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/radix/Dialog.tsx",
    lineNumber: 16,
    columnNumber: 3
  }, this);
}
function Content4(props) {
  return /* @__PURE__ */ jsxDEV4(DialogPrimitive.Content, { ...props }, void 0, !1, {
    fileName: "app/components/radix/Dialog.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/radix/AccessibleIcon.ts
import * as AccessibleIconPrimitive from "@radix-ui/react-accessible-icon";
var AccessibleIcon = AccessibleIconPrimitive.Root;

// app/components/icons/GitHubIcon.tsx
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function GitHubIcon({
  label = "GitHub icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV5(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV5(GitHubLogoIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/GitHubIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/GitHubIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/GlobeIcon.tsx
import { GlobeIcon as RadixGlobeIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function GlobeIcon({
  label = "System theme setting icon",
  className
}) {
  return /* @__PURE__ */ jsxDEV6(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV6(RadixGlobeIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/GlobeIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/GlobeIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/MoonIcon.tsx
import { MoonIcon as RadixMoonIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function MoonIcon({
  label = "Dark mode icon",
  className
}) {
  return /* @__PURE__ */ jsxDEV7(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV7(RadixMoonIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/MoonIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/MoonIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/SunIcon.tsx
import { SunIcon as RadixSunIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function SunIcon({
  label = "Light mode icon",
  className
}) {
  return /* @__PURE__ */ jsxDEV8(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV8(RadixSunIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/SunIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/SunIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/LoadingIcon.tsx
import { UpdateIcon } from "@radix-ui/react-icons";
import clsx2 from "clsx";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function LoadingIcon({ label = "Loading", className }) {
  return /* @__PURE__ */ jsxDEV9(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV9(UpdateIcon, { className: clsx2("animate-spin", className) }, void 0, !1, {
    fileName: "app/components/icons/LoadingIcon.tsx",
    lineNumber: 13,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/LoadingIcon.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/components/icons/AboutIcon.tsx
import { PersonIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function AboutIcon({
  label = "About icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV10(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV10(PersonIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/AboutIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/AboutIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/BlogIcon.tsx
import { ReaderIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function BlogIcon({
  label = "Blog icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV11(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV11(ReaderIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/BlogIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/BlogIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/ContactIcon.tsx
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ContactIcon({
  label = "Contact icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV12(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV12(EnvelopeClosedIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/ContactIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/ContactIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/ProjectsIcon.tsx
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function ProjectsIcon({
  label = "Projects icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV13(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV13(LightningBoltIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/ProjectsIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/ProjectsIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/HomeIcon.tsx
import { HomeIcon as RadixHomeIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function HomeIcon({
  label = "Home icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV14(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV14(RadixHomeIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/HomeIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/HomeIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/HamburgerMenuIcon.tsx
import * as React2 from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var HamburgerMenuIcon = React2.forwardRef(
  ({
    color = "currentColor",
    label = "Hamburger menu icon",
    className = "scale-150 cursor-pointer",
    ...props
  }, forwardedRef) => /* @__PURE__ */ jsxDEV15(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV15(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      ...props,
      ref: forwardedRef,
      children: /* @__PURE__ */ jsxDEV15(
        "path",
        {
          d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
          fill: color,
          fillRule: "evenodd",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/HamburgerMenuIcon.tsx",
          lineNumber: 30,
          columnNumber: 6
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/HamburgerMenuIcon.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/icons/HamburgerMenuIcon.tsx",
    lineNumber: 19,
    columnNumber: 4
  }, this)
);
HamburgerMenuIcon.displayName = "HamburgerMenuIcon";

// app/components/icons/CloseIcon.tsx
import * as React3 from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var CloseIcon = React3.forwardRef(
  ({ color = "currentColor", label = "Close icon", ...props }, forwardedRef) => /* @__PURE__ */ jsxDEV16(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV16(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      ref: forwardedRef,
      children: /* @__PURE__ */ jsxDEV16(
        "path",
        {
          d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
          fill: color,
          fillRule: "evenodd",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/CloseIcon.tsx",
          lineNumber: 36,
          columnNumber: 6
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/CloseIcon.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/icons/CloseIcon.tsx",
    lineNumber: 26,
    columnNumber: 4
  }, this)
);
CloseIcon.displayName = "CloseIcon";

// app/components/icons/TestimonialsIcon.tsx
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function TestimonialsIcon({
  label = "Testimonials icon",
  className = "scale-125"
}) {
  return /* @__PURE__ */ jsxDEV17(AccessibleIcon, { label, children: /* @__PURE__ */ jsxDEV17(ChatBubbleIcon, { className }, void 0, !1, {
    fileName: "app/components/icons/TestimonialsIcon.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/TestimonialsIcon.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/icons/DoubleQuotes.tsx
import { QuoteIcon } from "@radix-ui/react-icons";
var DoubleQuotes = QuoteIcon;

// app/components/common/navbar/components/ThemePicker.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var themeOptions = ["dark", "light"];
function ThemePicker() {
  let [themeIcon, setThemeIcon] = React4.useState(
    /* @__PURE__ */ jsxDEV18(LoadingIcon, {}, void 0, !1, {
      fileName: "app/components/common/navbar/components/ThemePicker.tsx",
      lineNumber: 11,
      columnNumber: 3
    }, this)
  ), { themePreference, updateThemePreference } = useThemePreference();
  return React4.useEffect(() => {
    themePreference && setThemeIcon(
      themePreference === "light" ? /* @__PURE__ */ jsxDEV18(SunIcon, { className: "scale-150" }, void 0, !1, {
        fileName: "app/components/common/navbar/components/ThemePicker.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this) : /* @__PURE__ */ jsxDEV18(MoonIcon, { className: "scale-150" }, void 0, !1, {
        fileName: "app/components/common/navbar/components/ThemePicker.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    );
  }, [themePreference]), /* @__PURE__ */ jsxDEV18(Dropdown_exports.Root, { children: [
    /* @__PURE__ */ jsxDEV18(Dropdown_exports.Trigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV18("span", { className: "appearance-none cursor-pointer lg:scale-110 p-[5px]", children: themeIcon }, void 0, !1, {
      fileName: "app/components/common/navbar/components/ThemePicker.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/common/navbar/components/ThemePicker.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV18(
      Dropdown_exports.Content,
      {
        className: "pt-4 pr-6 pl-4 pb-3 flex flex-col gap-2",
        sideOffset: 10,
        children: themeOptions.map((option) => /* @__PURE__ */ jsxDEV18(
          Dropdown_exports.CheckItem,
          {
            className: "capitalize cursor-pointer flex gap-3 items-center text-lg pl-1",
            checked: themePreference === option,
            onCheckedChange: (checked) => {
              checked && updateThemePreference(option);
            },
            children: [
              themeIcons[option],
              /* @__PURE__ */ jsxDEV18("span", { className: "leading-[1.6]", children: option }, void 0, !1, {
                fileName: "app/components/common/navbar/components/ThemePicker.tsx",
                lineNumber: 47,
                columnNumber: 7
              }, this)
            ]
          },
          option,
          !0,
          {
            fileName: "app/components/common/navbar/components/ThemePicker.tsx",
            lineNumber: 38,
            columnNumber: 6
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/common/navbar/components/ThemePicker.tsx",
        lineNumber: 33,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/common/navbar/components/ThemePicker.tsx",
    lineNumber: 27,
    columnNumber: 3
  }, this);
}
var themeIcons = {
  light: /* @__PURE__ */ jsxDEV18(SunIcon, { className: "scale-125" }, void 0, !1, {
    fileName: "app/components/common/navbar/components/ThemePicker.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this),
  dark: /* @__PURE__ */ jsxDEV18(MoonIcon, { className: "scale-125" }, void 0, !1, {
    fileName: "app/components/common/navbar/components/ThemePicker.tsx",
    lineNumber: 57,
    columnNumber: 8
  }, this)
};

// app/components/common/navbar/components/NavLinks.tsx
import { Link } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function NavLinks({ isMobile = !1 }) {
  let pages = ["about", "projects", "testimonials", "contact"];
  return isMobile && (pages = ["home"].concat(pages)), /* @__PURE__ */ jsxDEV19(Fragment, { children: pages.map((page, index) => /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
    Link,
    {
      to: page === "home" ? "/" : `/${page}`,
      "data-index": index,
      className: "capitalize flex items-center gap-4",
      children: [
        /* @__PURE__ */ jsxDEV19("span", { className: "md:hidden", children: menuIcons[page] }, void 0, !1, {
          fileName: "app/components/common/navbar/components/NavLinks.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV19("span", { className: "lg:text-lg", children: page }, void 0, !1, {
          fileName: "app/components/common/navbar/components/NavLinks.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/common/navbar/components/NavLinks.tsx",
      lineNumber: 24,
      columnNumber: 6
    },
    this
  ) }, page, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this)) }, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}
var menuIcons = {
  home: /* @__PURE__ */ jsxDEV19(HomeIcon, {}, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 39,
    columnNumber: 8
  }, this),
  blog: /* @__PURE__ */ jsxDEV19(BlogIcon, {}, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 40,
    columnNumber: 8
  }, this),
  projects: /* @__PURE__ */ jsxDEV19(ProjectsIcon, {}, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 41,
    columnNumber: 12
  }, this),
  about: /* @__PURE__ */ jsxDEV19(AboutIcon, {}, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this),
  testimonials: /* @__PURE__ */ jsxDEV19(TestimonialsIcon, {}, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 43,
    columnNumber: 16
  }, this),
  contact: /* @__PURE__ */ jsxDEV19(ContactIcon, {}, void 0, !1, {
    fileName: "app/components/common/navbar/components/NavLinks.tsx",
    lineNumber: 44,
    columnNumber: 11
  }, this)
};

// app/components/common/navbar/components/MobileMenu.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function MobileMenu({ open, setOpen }) {
  return /* @__PURE__ */ jsxDEV20(Dialog_exports.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV20(Dialog_exports.Trigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV20(HamburgerMenuIcon, { className: "md:hidden scale-[1.75] cursor-pointer appearance-none" }, void 0, !1, {
      fileName: "app/components/common/navbar/components/MobileMenu.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/common/navbar/components/MobileMenu.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(
      Dialog_exports.Overlay,
      {
        className: `
        bg-black bg-opacity-50
        fixed top-0 left-0 bottom-0 right-0
        animate-fade-out data-[state=open]:animate-fade-in 
        `,
        children: [
          /* @__PURE__ */ jsxDEV20(
            Dialog_exports.Content,
            {
              className: `
          w-72 h-full p-8 
          bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-gray-800 
          animate-slide-out-left data-[state=open]:animate-slide-in-left
        `,
              children: [
                /* @__PURE__ */ jsxDEV20(Dialog_exports.Title, { className: "pb-8 leading-8 font-graphic text-xl", children: "AN" }, void 0, !1, {
                  fileName: "app/components/common/navbar/components/MobileMenu.tsx",
                  lineNumber: 31,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV20("nav", { children: /* @__PURE__ */ jsxDEV20("ul", { className: "flex flex-col gap-6 text-xl", children: /* @__PURE__ */ jsxDEV20(NavLinks, { isMobile: !0 }, void 0, !1, {
                  fileName: "app/components/common/navbar/components/MobileMenu.tsx",
                  lineNumber: 36,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/components/common/navbar/components/MobileMenu.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this) }, void 0, !1, {
                  fileName: "app/components/common/navbar/components/MobileMenu.tsx",
                  lineNumber: 34,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/common/navbar/components/MobileMenu.tsx",
              lineNumber: 24,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV20(Dialog_exports.Close, { asChild: !0, children: /* @__PURE__ */ jsxDEV20(CloseIcon, { className: "appearance-none absolute top-9 right-7 cursor-pointer data-[state=open]:animate-fade-in text-gray-50 scale-125" }, void 0, !1, {
            fileName: "app/components/common/navbar/components/MobileMenu.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/common/navbar/components/MobileMenu.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/common/navbar/components/MobileMenu.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/common/navbar/components/MobileMenu.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/common/navbar/Navbar.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function Navbar() {
  let location = useLocation(), [mobileMenuOpen, setMobileMenuOpen] = React5.useState(!1);
  return React5.useEffect(() => {
    setMobileMenuOpen(!1);
  }, [location]), /* @__PURE__ */ jsxDEV21("div", { className: "fixed top-0 z-10 w-full", children: [
    /* @__PURE__ */ jsxDEV21("header", { className: "pt-6 px-7 w-full bg-gray-50 dark:bg-gray-800", children: /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto max-w-6xl flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV21(MobileMenu, { open: mobileMenuOpen, setOpen: setMobileMenuOpen }, void 0, !1, {
        fileName: "app/components/common/navbar/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV21("nav", { className: "hidden md:block", children: /* @__PURE__ */ jsxDEV21("ul", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsxDEV21("li", { children: /* @__PURE__ */ jsxDEV21(
          Link2,
          {
            to: "/",
            className: "font-graphic text-xl lg:text-2xl md:mr-4 lg:mr-8",
            children: "AN"
          },
          void 0,
          !1,
          {
            fileName: "app/components/common/navbar/Navbar.tsx",
            lineNumber: 21,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/common/navbar/Navbar.tsx",
          lineNumber: 20,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV21(NavLinks, {}, void 0, !1, {
          fileName: "app/components/common/navbar/Navbar.tsx",
          lineNumber: 28,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/common/navbar/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/common/navbar/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 6
      }, this),
      mobileMenuOpen ? null : /* @__PURE__ */ jsxDEV21(Fragment2, { children: [
        location.pathname !== "/" && /* @__PURE__ */ jsxDEV21(
          Link2,
          {
            to: "/",
            className: "font-graphic text-2xl md:hidden leading-[normal] translate-y-[0.5px]",
            children: "AN"
          },
          void 0,
          !1,
          {
            fileName: "app/components/common/navbar/Navbar.tsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV21(ThemePicker, {}, void 0, !1, {
          fileName: "app/components/common/navbar/Navbar.tsx",
          lineNumber: 41,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/common/navbar/Navbar.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/common/navbar/Navbar.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/common/navbar/Navbar.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "h-7 w-full bg-gradient-to-b from-gray-50 via-gray-50 dark:from-gray-800 dark:via-gray-800" }, void 0, !1, {
      fileName: "app/components/common/navbar/Navbar.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/common/navbar/Navbar.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/components/common/project-card/ProjectCard.tsx
import { Link as Link3 } from "@remix-run/react";
import clsx5 from "clsx";

// app/components/ui/Button.tsx
import clsx3 from "clsx";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function Button({
  className = "",
  variant = "filled",
  defaultPadding = !0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV22(
    "button",
    {
      className: clsx3(
        "block font-sans rounded-sm font-bold",
        variant === "filled" && "bg-gray-800 dark:bg-gray-200 text-gray-50 dark:text-gray-800",
        variant === "filled" && defaultPadding && "py-1 px-3",
        variant === "outlined" && "border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-50",
        variant === "outlined" && defaultPadding && "py-3 px-6",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/Button.tsx",
      lineNumber: 16,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/HomepageIllustration.tsx
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function HomepageIllustration({ className }) {
  return /* @__PURE__ */ jsxDEV23(
    "svg",
    {
      viewBox: "0 0 1440 725",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsxDEV23(
        "path",
        {
          d: "M562.638 125.433C562.815 125.617 562.966 125.825 563.084 126.052C562.967 125.822 562.815 125.614 562.638 125.433ZM563.17 128.35C559.182 149.333 566.648 190.389 587.346 205.913C597.159 213.272 608.55 213.604 621.2 206.896C633.758 200.238 663.152 129.278 671.839 107.194C666.759 108.597 660.908 108.162 654.578 105.87C635.366 98.9171 616.128 77.4398 609.895 63.7611C605.066 69.4784 603.546 75.8971 601.951 82.6345C600.466 88.9105 598.928 95.4011 594.615 101.39C594.152 102.033 593.428 102.437 592.639 102.492C591.85 102.549 591.075 102.249 590.527 101.678C588.958 100.044 587.391 99.3558 585.731 99.5638C582.586 99.9691 578.584 103.749 575.539 109.197C575.191 109.818 574.61 110.276 573.923 110.466C573.236 110.656 572.503 110.562 571.884 110.208C571.099 109.757 568.586 107.733 566.472 105.933C564.512 109.941 561.432 116.42 558.43 123.878C559.051 124.098 559.702 124.297 560.38 124.47C560.623 124.441 560.871 124.444 561.122 124.485C561.84 124.601 562.479 125.006 562.891 125.605C563.135 125.958 563.286 126.361 563.34 126.777C563.407 127.117 563.407 127.477 563.332 127.838C563.294 128.017 563.239 128.188 563.17 128.35ZM351.086 226.113C353.591 227.316 356.376 228.933 359.347 230.878C383.79 210.658 414.123 186.046 425.027 179.734C442.403 169.674 456.226 163.708 475.454 162.977C480.594 162.78 486.083 163.03 491.894 163.294C493.323 163.36 494.758 163.425 496.192 163.484C494.695 163.076 493.216 162.658 491.76 162.249C483.398 159.894 475.502 157.658 468.6 157.904C425.711 159.358 366.662 209.876 351.086 226.113V226.113ZM533.728 163.408C521.75 172.744 536.048 208.353 542.412 218.676C552.6 235.204 562.522 249.258 580.808 253.854C602.286 259.245 619.583 243.694 633.674 227.765C639.007 221.736 648.536 200.842 653.22 190.176C651.783 188.258 650.79 186.218 650.23 184.04C647.756 174.436 654.416 164.321 660.858 154.54C661.504 153.557 662.152 152.573 662.792 151.588C670.56 139.634 673.167 128.637 675.927 116.993C677.17 111.752 678.454 106.332 680.252 100.548C680.683 99.1545 682.158 98.3665 683.554 98.7811C688.674 100.292 697.976 97.4145 701.135 92.0211C705.164 85.1425 702.979 82.4811 698.626 77.1785C697.658 76.0011 696.658 74.7824 695.638 73.4024C689.508 65.1158 684.923 56.3611 680.486 47.8944C677.37 41.9451 674.147 35.7945 670.447 29.9371C660.698 14.5105 640.812 4.42111 622.083 5.39711C608.027 6.13177 596.998 13.1864 591.027 25.2611C590.444 26.4424 589.088 27.0212 587.834 26.6225C580.276 24.2385 574.591 25.1972 570.447 29.5532C558.69 41.9145 562.312 78.4611 567.067 91.5238C567.092 91.5945 567.119 91.6651 567.146 91.7358C567.647 93.1171 566.938 94.6438 565.559 95.1505C564.182 95.6558 562.651 94.9531 562.139 93.5758C562.136 93.5705 562.135 93.5624 562.132 93.5584C562.131 93.5544 562.13 93.5504 562.128 93.5464C562.107 93.4904 562.086 93.4318 562.064 93.3744C560.019 87.8651 556.894 84.9651 553.47 85.4131C549.942 85.8744 545.847 90.2625 545.207 97.4865C544.811 101.954 544.558 114.873 553.672 121.417C557.359 112.318 561.106 104.742 562.82 101.276C562.851 100.86 562.979 100.448 563.208 100.074C563.914 98.9278 565.226 96.7971 567.486 98.0464C568.783 98.7638 569.01 99.7291 568.752 100.861C569.851 101.825 571.292 103.028 572.479 103.988C575.019 100.176 579.442 94.9944 585.054 94.2744C586.818 94.0491 589.254 94.2211 591.832 95.8705C594.399 91.3838 595.552 86.5144 596.76 81.4051C598.687 73.2691 600.676 64.8651 608.508 57.4851C608.71 57.1025 609.007 56.7665 609.384 56.5145C610.206 55.9665 611.25 55.9225 612.102 56.3705C612.844 56.7011 613.403 57.3598 613.603 58.1651C613.659 58.3945 613.684 58.6265 613.679 58.8558C617.499 70.7825 637.898 94.1625 656.392 100.856C663.975 103.601 670.282 103.25 675.138 99.8185C676.054 99.1718 677.279 99.1664 678.2 99.8078C679.12 100.448 679.542 101.597 679.255 102.681C679.008 103.606 641.12 202.37 623.699 211.608C609.268 219.256 595.592 218.764 584.146 210.178C562.106 193.648 554.023 152.453 557.61 129.221C557.235 129.102 556.867 128.977 556.504 128.844C555.826 130.662 555.166 132.516 554.539 134.386C549.19 150.354 541.903 159.073 533.728 163.408V163.408ZM456.572 254.11C457.948 254.632 459.228 255.374 460.424 256.286C461.979 254.974 463.39 253.693 464.618 252.457C467.584 249.477 468.582 245.69 468.014 243.642C467.97 243.484 467.806 242.96 467.547 242.894C466.918 242.732 464.85 243.342 461.551 246.78C459.355 249.065 457.715 251.454 456.572 254.11V254.11ZM455.032 259.238C454.94 259.728 454.862 260.226 454.794 260.733C455.224 260.412 455.654 260.089 456.072 259.769C455.731 259.568 455.384 259.392 455.032 259.238V259.238ZM408.383 278.105C410.427 281.113 412.084 283.961 413.24 286.55C419.504 283.126 435.704 274.065 449.167 264.765C449.204 262.561 449.394 260.49 449.742 258.534C442.982 259.029 434.296 263.482 428.167 266.624C427.062 267.19 426.032 267.718 425.102 268.178C419.291 271.053 413.75 274.473 408.383 278.105ZM713.92 270.133C713.903 270.136 710.247 270.285 702.287 289.34C697.702 300.318 694.038 312.014 693.376 314.322C693.172 315.033 692.964 315.772 692.754 316.536C694.004 314.964 695.3 313.362 696.612 311.742C707.132 298.756 719.056 284.034 715.894 273.873C714.871 270.589 713.93 270.136 713.92 270.133V270.133ZM691.791 359.745C701.938 363.632 720.196 360.468 733.263 358.152C720.924 355.961 703.743 355.513 691.791 359.745ZM345.676 374.364C351.23 375.861 356.911 377.412 362.251 379.092C382.364 385.424 401.992 392.706 421.02 399.833C417.896 397.186 414.682 394.676 411.334 392.58C396.363 383.204 373.232 373.197 355.303 371.973C350.815 371.67 347.644 372.45 345.676 374.364V374.364ZM682.756 364.865C680.442 381.525 679.727 397.18 682.86 405.292C691.186 390.853 701.396 390.38 721.308 389.454C722.786 389.386 724.324 389.314 725.926 389.234C730.72 388.994 736.12 388.745 742.006 388.49C743.08 380.356 743.706 371.065 743.936 361.201C743.467 361.725 742.892 361.944 742.398 362.025C742.262 362.049 742.126 362.06 741.99 362.061C739.758 362.417 737.306 362.852 734.707 363.312C718.447 366.192 696.814 370.028 685.754 362.597C684.658 363.284 683.654 364.04 682.756 364.865V364.865ZM741.199 393.864C735.73 394.102 730.694 394.337 726.192 394.561C724.584 394.641 723.039 394.713 721.555 394.782C703.355 395.626 695.068 396.01 688.394 406.406C688.804 406.276 689.216 406.141 689.627 406.005C689.858 405.929 690.098 405.885 690.342 405.873C692.952 405.752 712.392 404.849 739.078 403.636C739.891 400.704 740.596 397.425 741.199 393.864V393.864ZM464.242 260.042C467.762 264.321 470.451 269.949 472.802 274.872C473.739 276.833 474.624 278.686 475.454 280.214C499.902 325.278 523.819 364.628 569.04 389.796C584.218 398.242 599.219 404.348 613.98 408.105C623.392 395.461 630.239 381.545 636.883 368.038C638.008 365.75 639.135 363.461 640.274 361.177C644.619 352.456 649.728 343.782 654.668 335.394C661.671 323.505 668.911 311.21 674.072 298.618C681.552 280.376 689.202 259.098 689.222 239.612C689.247 216.166 682.65 208.521 664.06 198.742C661.408 197.348 659.136 195.873 657.232 194.308C652.207 205.652 643.187 225.06 637.668 231.298C622.515 248.429 603.754 265.12 579.508 259.026C559.276 253.944 548.682 239.012 537.871 221.474C532.483 212.732 519.628 183.282 525.219 166.834C515.064 169.686 503.21 169.145 491.651 168.622C485.955 168.364 480.574 168.118 475.658 168.306C457.443 168.998 444.75 174.478 427.699 184.35C417.274 190.386 387.996 214.113 363.916 234.021C378.026 244.166 394.855 260.082 405.262 273.776C410.831 270.001 416.611 266.429 422.736 263.397C423.647 262.949 424.652 262.432 425.734 261.878C432.758 258.278 442.84 253.156 451.199 253.174C452.598 249.466 454.74 246.172 457.703 243.085C461.895 238.72 465.646 236.917 468.852 237.724C470.94 238.252 472.508 239.889 473.154 242.218C474.331 246.465 472.375 252.224 468.399 256.22C467.166 257.46 465.767 258.738 464.242 260.042V260.042ZM675.472 388.477C673.234 395.841 670.648 403.929 668.047 411.174C671.643 410.634 675.214 409.941 678.768 409.093C676.368 404.16 675.444 396.869 675.472 388.477ZM619.622 409.428C634.027 412.52 648.196 413.353 662.091 411.928C669.352 392.302 677.008 363.838 677.102 363.494C677.211 363.085 677.416 362.708 677.7 362.394C677.706 362.389 677.71 362.385 677.715 362.378C678.171 359.258 678.676 356.145 679.212 353.089C677.944 347.66 679.02 340.733 682.443 332.146C682.924 330.937 683.562 329.666 684.326 328.34C686.476 319.189 688.186 313.074 688.25 312.853C688.967 310.349 692.611 298.689 697.322 287.393C705.64 267.442 710.539 264.84 713.879 264.802C717.046 264.77 719.428 267.285 720.986 272.286C724.996 285.173 712.119 301.073 700.756 315.1C696.212 320.71 691.866 326.077 689.222 330.524C687.627 337.382 686.038 345.006 684.674 352.749C685.072 354.029 685.664 355.153 686.451 356.117C686.459 356.129 686.468 356.14 686.478 356.15C703.075 348.393 729.996 350.989 742.871 354.932C743.146 354.998 743.412 355.108 743.66 355.262C743.795 355.346 743.916 355.437 744.026 355.533C744.338 317.785 739.239 273.466 731.615 253.072C729.798 248.212 728.532 243.23 727.307 238.416C723.979 225.318 721.103 214.008 708.746 207.422C696.34 200.812 675.998 192.217 659.987 187.986C659.834 188.346 659.662 188.745 659.475 189.181C661.268 190.877 663.619 192.484 666.543 194.022C685.936 204.224 694.583 213.228 694.555 239.617C694.534 260.026 686.683 281.918 679.008 300.642C673.7 313.588 666.362 326.049 659.264 338.1C654.37 346.409 649.31 355.002 645.047 363.556C643.912 365.833 642.79 368.113 641.668 370.394C635.234 383.47 628.614 396.929 619.622 409.428V409.428ZM353.536 366.577C354.224 366.577 354.934 366.602 355.666 366.653C375.808 368.026 399.767 379.044 414.164 388.06C420.234 391.861 425.703 396.762 430.992 401.502C438.546 408.272 445.682 414.665 453.827 417.37C454.482 417.589 455.027 418.052 455.347 418.662C455.51 418.97 456.08 419.956 456.935 421.381C456.82 418.882 457.191 416.288 458.055 413.641C461.026 404.536 472.86 398.384 484.307 392.433C492.548 388.148 501.875 383.298 502.251 379.278C500.092 375.658 476.948 370.805 467.014 368.722C459.587 367.165 453.72 365.936 451.304 364.894C441.796 360.801 432.415 354.854 423.342 349.105C414.556 343.536 405.471 337.777 396.396 333.797C394.047 332.766 391.33 331.698 388.454 330.568C376.01 325.676 361.904 320.133 361.13 311.29C360.703 306.42 364.259 301.749 371.998 297.01C378.851 292.816 385.532 287.94 391.994 283.224C394.938 281.074 397.914 278.902 400.942 276.766C390.67 263.276 373.496 247.184 359.706 237.505C352.738 243.281 346.359 248.604 341.202 252.906C337.66 255.861 334.69 258.34 332.49 260.164C328.102 263.8 323.627 267.39 319.299 270.861C307.75 280.126 296.842 288.88 286.602 299.078C275.094 310.542 269.651 320.736 270.423 329.378C270.975 335.552 274.838 341.161 281.906 346.05C291.764 352.869 306.403 362.016 320.16 366.861C326.475 369.085 333.319 371.016 340.095 372.857C342.691 368.684 347.206 366.577 353.536 366.577V366.577ZM508.256 438.198C508.91 438.198 509.619 438.242 510.396 438.34C512.519 438.609 514.278 439.968 515.98 441.282C518.092 442.914 519.58 443.966 521.056 443.67C523.071 443.27 524.336 441.83 525.802 440.164C529.266 436.221 533.094 433.1 541.562 437.881C544.578 437.005 546.398 435.54 547.11 433.418C548.587 429.018 546.563 419.258 528.535 397.746L528.22 397.372C525.914 394.616 524.016 391.408 522.182 388.305C519.506 383.781 516.978 379.505 513.376 376.677C506.211 371.048 495.895 367.786 487.606 365.169L487.038 364.989C484.574 364.209 481.079 363.364 477.379 362.468C468.663 360.357 458.784 357.966 453.356 354.533C452.618 354.065 452.155 353.266 452.118 352.393C452.092 351.798 449.752 296.645 449.243 271.178C432.851 282.184 414.219 292.097 413.091 292.696C412.39 293.065 411.56 293.108 410.826 292.805C410.092 292.502 409.531 291.889 409.295 291.13C408.395 288.236 406.564 284.817 404.056 281.097C401.04 283.224 398.074 285.389 395.138 287.53C388.591 292.309 381.82 297.252 374.783 301.561C369.1 305.038 366.216 308.242 366.443 310.825C366.93 316.378 380.498 321.71 390.404 325.604C393.33 326.753 396.094 327.84 398.539 328.912C407.983 333.056 417.243 338.925 426.196 344.6C435.094 350.238 444.294 356.07 453.414 359.997C455.338 360.825 461.54 362.125 468.108 363.504C496.108 369.373 507.783 372.86 507.592 379.266C507.378 386.449 497.826 391.414 486.766 397.165C476.76 402.366 465.42 408.262 463.126 415.294C461.418 420.53 462.21 425.253 465.48 429.333C471.94 437.386 487.316 441.736 497.631 440.734C499.668 440.538 500.967 440.036 502.342 439.504C504.002 438.86 505.708 438.198 508.256 438.198V438.198ZM616.095 414.117C615.652 414.681 615.204 415.24 614.75 415.798C599.462 434.577 580.803 451.424 568.099 462.461C567.18 463.26 566.178 464.121 565.108 465.042C563.57 466.365 561.88 467.818 560.092 469.382C591.53 466.349 640.558 459.113 657.688 422.681C658.419 421.13 659.174 419.384 659.94 417.493C645.579 418.681 630.943 417.554 616.095 414.117V414.117ZM468.132 438.69C469.668 440.836 471.118 442.713 472.324 444.032C478.759 451.069 483.166 454.869 492.266 458.778C514.127 468.166 532.332 471.701 551.146 470.194C554.868 466.816 558.475 463.713 561.63 461C562.692 460.085 563.688 459.228 564.6 458.436C577.098 447.578 595.414 431.046 610.402 412.69C595.935 408.784 581.267 402.704 566.447 394.456C519.972 368.59 495.619 328.566 470.766 282.758C469.871 281.109 468.958 279.196 467.99 277.17C465.768 272.521 463.207 267.16 460.107 263.394C458.336 264.77 456.458 266.157 454.514 267.541C454.816 288.838 456.988 341.266 457.384 350.704C462.403 353.354 471.342 355.518 478.634 357.284C482.426 358.202 486.007 359.069 488.646 359.902L489.212 360.082C497.915 362.833 508.743 366.253 516.671 372.484C521.059 375.93 523.963 380.84 526.772 385.59C528.578 388.642 530.283 391.526 532.31 393.948L532.623 394.321C542.811 406.477 555.92 423.933 552.166 435.116C550.758 439.309 547.255 442.074 541.756 443.337C541.076 443.494 540.364 443.378 539.768 443.012C533.671 439.286 532.379 440.756 529.807 443.684C528.059 445.673 525.883 448.149 522.095 448.901C518.135 449.68 515.004 447.269 512.719 445.504C511.636 444.666 510.408 443.718 509.728 443.632C507.258 443.317 506.067 443.78 504.267 444.476C502.772 445.056 500.911 445.777 498.144 446.045C489.007 446.921 476.856 444.372 468.132 438.69V438.69ZM533.22 479.648C534.167 481.196 535.166 482.728 536.146 484.232C536.271 484.424 536.398 484.617 536.523 484.81C538.028 483.1 539.595 481.414 541.195 479.765C538.523 479.646 535.86 479.6 533.22 479.648V479.648ZM444.718 419.022C455.186 433.928 466.592 448.748 479.836 461.354C494.514 475.326 512.512 490.05 526.994 497.644C528.683 494.769 530.703 491.904 532.94 489.086C532.524 488.442 532.103 487.794 531.678 487.145C529.848 484.338 527.956 481.436 526.372 478.398C525.956 477.6 525.971 476.644 526.414 475.858C526.679 475.386 527.079 475.012 527.551 474.778C515.775 473.101 503.622 469.458 490.162 463.678C480.219 459.408 475.219 455.101 468.388 447.63C462.803 441.522 453.534 426.149 451.167 422.09C448.947 421.277 446.802 420.233 444.718 419.022V419.022ZM531.819 499.96C534.558 501.141 537.12 501.996 539.454 502.458C538.739 499.508 537.47 496.721 535.922 493.966C534.402 495.964 533.018 497.968 531.819 499.96V499.96ZM531.616 512.009C531.18 512.074 530.85 512.244 530.66 512.373C530.87 512.278 531.168 512.188 531.63 512.1L531.616 512.009ZM527.112 512.869C528.019 513.872 528.876 514.908 529.694 515.965C529.671 515.926 529.65 515.888 529.63 515.846C529.111 514.82 529.312 513.574 530.126 512.761C530.24 512.645 530.346 512.541 530.522 512.442C530.62 512.292 530.734 512.153 530.863 512.024C531.603 511.284 532.707 511.045 533.687 511.413C533.919 511.501 534.132 511.617 534.324 511.76C539.63 511.268 552.287 510.661 583.775 509.356C617.166 507.973 629.264 507.58 633.784 507.526L647.834 466.141C638.062 466.278 627.646 470.182 617.535 473.973C608.995 477.173 600.163 480.485 591.531 481.649C580.338 483.158 568.634 482.061 557.315 481.005C554.338 480.726 551.328 480.445 548.311 480.21C545.263 483.198 542.258 486.338 539.512 489.538C542.384 494.324 544.794 499.408 545.311 505.282C545.378 506.042 545.118 506.793 544.595 507.346C544.071 507.901 543.318 508.208 542.576 508.182C538.608 508.065 534.1 506.782 529.323 504.704C528.079 507.504 527.292 510.246 527.112 512.869V512.869ZM546.179 516.364C568.374 524.58 614.338 540.917 625.534 544.814C636.552 519.786 669.986 436.866 677.962 415.922C678.127 415.488 678.292 415.062 678.458 414.642C674.307 415.582 670.13 416.322 665.93 416.861C664.767 419.861 663.619 422.606 662.515 424.952C642.794 466.889 585.48 472.493 553.763 475.32C555.119 475.444 556.468 475.568 557.812 475.694C569.339 476.773 580.227 477.793 590.819 476.362C598.855 475.28 607.399 472.076 615.663 468.978C627.527 464.53 639.8 459.945 651.736 460.944C652.554 461.012 653.294 461.453 653.743 462.14C654.192 462.828 654.3 463.681 654.036 464.457L638.239 510.993C638.008 511.674 637.51 512.234 636.86 512.544C636.428 512.748 635.954 512.832 635.487 512.793C633.679 512.824 573.815 515.004 546.179 516.364V516.364ZM792.41 541.386C794.027 544.002 795.855 546.573 797.78 549.108C837.65 546.368 872.978 543.941 886.795 542.988C888.183 540.326 891.246 535.181 897.655 524.412C909.444 504.609 927.259 474.681 942.219 447.837C966.952 403.453 968.042 395.534 967.787 394.165C965.312 387.314 950.795 387.434 943.827 387.498C943.08 387.504 942.391 387.506 941.791 387.508C941.739 387.508 941.683 387.508 941.627 387.508C929.159 387.508 812.086 390.869 746.651 393.629C746.083 397.134 745.422 400.402 744.663 403.382C811.61 400.345 917.194 395.704 925.11 396.062C926.687 396.141 928.247 396.192 929.77 396.241C938.398 396.518 945.848 396.76 949.702 401.517C951.859 404.181 952.492 407.8 951.638 412.58C948.272 431.388 887.828 529.728 885.258 533.904C884.806 534.637 884.028 535.108 883.168 535.166L792.41 541.386ZM536.111 525.652L637.804 560.096C644.986 559.602 723.428 554.216 791.464 549.541C789.303 546.537 787.303 543.453 785.618 540.261C785.196 539.462 785.207 538.505 785.647 537.718C786.086 536.93 786.894 536.417 787.794 536.356L881.434 529.94C903.222 494.488 943.866 425.742 946.387 411.64C946.954 408.476 946.682 406.264 945.556 404.874C943.239 402.01 936.612 401.797 929.598 401.57C928.044 401.521 926.455 401.469 924.847 401.392C917.108 401.009 807.742 405.86 741.215 408.881C739.154 409.036 693.83 412.589 684.79 413.297C684.176 414.692 683.564 416.196 682.946 417.821C674.727 439.402 639.508 526.713 629.506 549.009C629.41 549.285 629.271 549.538 629.098 549.762C628.748 550.232 628.248 550.578 627.672 550.738C626.962 550.933 626.203 550.829 625.576 550.449C619.314 548.32 584.846 536.028 579.007 533.938C549.403 523.338 537.963 519.169 533.414 517.126C533.131 517.156 532.908 517.181 532.747 517.206C532.634 517.24 532.519 517.266 532.406 517.282C531.55 517.417 530.712 517.118 530.126 516.533C532.34 519.472 534.264 522.573 536.111 525.652V525.652ZM549.347 543.716C557.242 550.648 567.887 554.824 578.206 558.87C581.222 560.054 584.071 561.172 586.863 562.36C610.974 572.62 638.542 575.56 676.25 571.901C691.836 570.388 706.84 567.785 722.724 565.03C728.11 564.096 733.523 563.157 738.987 562.258C743.704 561.482 748.624 560.43 753.835 559.317C758.38 558.344 762.976 557.362 767.58 556.528C702.96 560.966 637.638 565.452 637.638 565.452C637.286 565.474 636.934 565.432 636.599 565.318L540.391 532.73C541.731 534.857 543.114 536.889 544.623 538.772C546.194 540.404 547.771 542.052 549.347 543.716ZM343.324 379.253C341.491 389.457 349.839 408.266 356.723 419.681C369.842 441.44 383.448 461.777 399.544 483.682C404.518 490.45 409.264 497.718 413.854 504.744C432.528 533.333 450.166 560.336 485.591 563.87C492.18 564.528 498.848 564.534 505.298 564.542C518.062 564.556 531.26 564.568 544.606 569.578C546.368 570.24 548.047 570.876 549.663 571.486C557.452 574.433 563.758 576.817 570.695 578.862C566.879 571.821 561.548 565.272 556.274 559.206C552.82 555.234 549.231 551.348 545.624 547.541C544.979 546.969 544.351 546.381 543.74 545.773C542.643 544.681 541.616 543.526 540.643 542.326C539.779 541.428 538.916 540.532 538.058 539.641C534.078 535.51 530.319 531.61 526.808 527.784C525.984 526.888 525.874 525.546 526.538 524.525C526.967 523.866 527.648 523.449 528.388 523.341C526.755 520.861 524.999 518.465 523.018 516.292C522.426 515.932 522.003 515.357 521.828 514.697C521.651 514.201 521.622 513.656 521.758 513.13C521.902 509.618 522.899 506.02 524.522 502.401C506.47 493.006 485.967 474.554 476.159 465.217C458.828 448.721 444.696 428.696 431.719 409.534C428.74 408.421 425.764 407.306 422.791 406.192C402.694 398.661 381.912 390.873 360.648 384.18C355.104 382.434 349.128 380.817 343.324 379.253V379.253ZM825.198 601.402H835.854C835.592 600.085 835.25 598.765 834.818 597.441C831.056 585.9 821.923 573.014 811.039 565.756C811.743 566.684 812.428 567.616 813.091 568.545C821.19 579.928 825.42 591.465 825.198 601.402ZM380.683 580.805C376.988 580.805 373.358 580.972 369.783 581.386C358.602 582.684 349.118 590.036 346.72 599.262C344.727 606.938 347.911 614.248 355.686 619.845C367.504 628.353 387.392 628.601 404.939 628.82C409.716 628.88 414.228 628.936 418.466 629.15C425.259 629.493 432.196 629.594 439.539 629.702C458.072 629.976 477.175 630.257 494.415 634.585C490.814 629.296 483.374 624.377 476.635 619.92C471.375 616.441 466.407 613.156 462.862 609.632C454.482 601.305 450.067 591.321 445.815 581.657C442.779 582.181 439.723 582.525 436.747 582.829C425.586 583.97 413.987 582.998 402.77 582.06C395.144 581.421 387.795 580.805 380.683 580.805V580.805ZM577.606 580.725C581.084 581.576 584.839 582.37 589.079 583.129C612.244 587.277 628.531 601.242 644.282 614.75C657.087 625.729 670.327 637.084 687.19 642.98C701.303 647.913 716.78 650.468 731.748 652.94C737.452 653.881 742.84 654.77 748.15 655.782C765.788 659.153 788.496 661.554 807.702 650.112C823.431 640.74 837.046 624.428 836.464 606.736H822.343C821.582 606.736 820.856 606.41 820.35 605.841C819.844 605.272 819.606 604.513 819.695 603.757C820.787 594.505 816.899 583.097 808.744 571.636C806.176 568.028 803.299 564.498 800.251 560.764C799.248 560.505 798.24 560.308 797.23 560.172C783.8 558.358 769.134 561.501 754.95 564.532C749.676 565.66 744.695 566.725 739.852 567.521C734.404 568.417 729.006 569.353 723.635 570.284C707.65 573.058 692.551 575.676 676.766 577.209C638.122 580.964 609.751 577.897 584.774 567.266C582.052 566.109 579.238 565.005 576.258 563.836C571.719 562.056 566.934 560.178 562.259 557.984C568.178 564.933 573.943 572.478 577.606 580.725V580.725ZM634.163 634.729C635.282 634.729 636.416 634.806 637.576 634.964C638.455 635.084 639.218 635.632 639.61 636.429C640.683 638.613 641.336 641.576 641.311 644.162C641.302 645.097 640.803 645.96 639.996 646.434C623.17 656.328 612.922 667.389 604.623 684.613C599.284 695.696 594.079 714.498 598.072 718.729C599.543 720.285 602.862 719.371 605.387 718.329C617.83 713.197 635.442 686.293 643.079 660.756C647.12 647.241 647.46 636.592 644.014 631.537C636.744 620.877 609.979 606.088 597.363 607.9C588.715 609.142 581.62 614.354 575.616 621.446C575.135 622.717 574.652 623.978 574.174 625.229C568.528 639.981 563.195 653.914 565.052 670.598C565.858 677.841 570.188 692.531 576.994 695.322C579.095 696.185 580.69 696.338 581.871 695.793C584.299 694.672 585.754 690.225 587.159 685.924C588.174 682.821 589.222 679.613 590.798 676.883C591.44 675.766 592.115 674.577 592.82 673.335C601.632 657.789 614.708 634.729 634.163 634.729V634.729ZM600.37 724.896C597.836 724.896 595.771 724.061 594.195 722.392C585.522 713.201 599.672 682.602 599.819 682.297C608.384 664.517 618.902 652.937 635.898 642.669C635.798 641.796 635.608 640.909 635.348 640.104C618.363 639.116 605.824 661.21 597.459 675.964C596.747 677.221 596.067 678.42 595.418 679.547C594.119 681.797 593.158 684.737 592.228 687.58C590.467 692.967 588.646 698.54 584.108 700.636C581.543 701.821 578.467 701.69 574.968 700.257C564.72 696.052 560.442 677.393 559.751 671.188C558.555 660.438 560.155 650.68 562.839 641.43C562.075 642.905 561.332 644.386 560.607 645.861C555.204 656.854 551.602 661.228 547.314 662.002C542.671 662.844 538.731 659.121 533.284 653.976C530.586 651.425 527.526 648.536 523.718 645.477C523.096 644.978 463.992 596.728 454.515 579.554C454.476 579.545 454.438 579.536 454.398 579.524C453.326 579.894 452.238 580.222 451.139 580.512C455.059 589.406 459.234 598.508 466.62 605.848C469.791 609 474.544 612.142 479.576 615.47C489.564 622.077 499.894 628.908 501.684 638.149C501.863 639.07 501.544 640.017 500.846 640.644C500.146 641.27 499.167 641.482 498.274 641.202C480.403 635.638 459.59 635.332 439.462 635.036C432.068 634.926 425.086 634.825 418.196 634.476C414.06 634.268 409.598 634.212 404.872 634.153C386.536 633.924 365.754 633.665 352.57 624.173C343.023 617.301 339.01 607.733 341.559 597.922C344.543 586.433 355.639 577.66 369.168 576.089C380.151 574.813 391.876 575.794 403.215 576.744C414.19 577.661 425.536 578.613 436.204 577.524C438.634 577.276 441.116 577.001 443.575 576.618C443.318 576.054 443.059 575.49 442.798 574.93C432.98 573.63 423.454 569.582 413.398 565.309C399.502 559.402 385.131 553.297 369.72 554.877C357.015 556.18 346.843 561.83 339.486 571.67C327.671 587.473 327.023 608.816 327.326 611.364C327.559 612.006 327.539 612.728 327.247 613.374C326.815 614.328 325.866 614.94 324.818 614.94H2.66667C1.19373 614.94 0 613.745 0 612.273C0 610.8 1.19373 609.606 2.66667 609.606H321.95C321.839 603.449 323.619 592.32 327.356 582.81C332.767 569.049 344.414 552.112 369.176 549.572C385.956 547.848 400.966 554.229 415.483 560.4C425.674 564.73 435.298 568.821 444.85 569.802C445.772 569.897 446.58 570.465 446.982 571.302C447.654 572.706 448.31 574.136 448.951 575.565C450.57 575.169 452.15 574.693 453.668 574.116C454.171 573.926 454.708 573.894 455.211 574.01C455.279 573.99 455.35 573.97 455.422 573.953C456.776 573.613 458.158 574.384 458.594 575.709C461.986 586.013 508.311 626.268 527.056 641.318C531.034 644.51 534.312 647.61 536.947 650.1C541.094 654.017 544.371 657.116 546.367 656.753C549.598 656.172 554.282 646.641 555.82 643.509C560.084 634.833 564.966 625.984 570.946 618.718C572.228 615.306 573.486 611.838 574.592 608.361C577.202 600.161 576.38 592.45 573.635 585.224C564.674 582.866 557.318 580.084 547.776 576.474C546.164 575.865 544.488 575.23 542.731 574.57C530.29 569.9 518.147 569.889 505.292 569.876C498.714 569.868 491.912 569.861 485.062 569.177C447.096 565.389 427.927 536.042 409.388 507.661C404.839 500.694 400.134 493.492 395.247 486.841C379.052 464.8 365.359 444.336 352.155 422.436C350.224 419.234 335.046 393.398 338.176 377.862C331.476 376.038 324.708 374.117 318.388 371.893C304.074 366.85 288.998 357.442 278.871 350.436C270.44 344.602 265.811 337.677 265.111 329.852C264.191 319.56 270.155 307.933 282.838 295.3C293.28 284.898 304.811 275.648 315.962 266.702C320.274 263.242 324.731 259.666 329.087 256.057C331.283 254.237 334.25 251.761 337.786 248.812C342.642 244.76 348.58 239.804 355.074 234.418C351.532 232.196 348.339 230.537 345.703 229.632C344.871 229.345 344.234 228.666 344 227.818C343.766 226.969 343.966 226.06 344.535 225.388C351.63 216.998 417.816 154.289 468.419 152.573C476.134 152.321 484.431 154.645 493.206 157.116C505.412 160.552 517.255 163.886 527.506 160.429C528.939 159.848 530.311 159.172 531.607 158.386C531.927 158.192 532.272 158.073 532.62 158.025C539.203 153.958 544.951 146.217 549.482 132.693C550.187 130.589 550.931 128.506 551.696 126.473C543.114 120.99 538.708 110.406 539.895 97.0158C540.698 87.9571 545.995 81.0118 552.778 80.1251C554.988 79.8344 557.104 80.2278 559.044 81.2318C555.992 63.6998 555.668 37.3545 566.582 25.8785C571.762 20.4305 578.716 18.7665 587.283 20.9238C594.339 8.25046 606.515 0.869144 621.804 0.0704778C642.37 -0.994855 664.224 10.1065 674.955 27.0892C678.771 33.1278 682.044 39.3758 685.211 45.4185C689.552 53.7065 694.042 62.2758 699.926 70.2318C700.866 71.5038 701.822 72.6678 702.747 73.7944C707.323 79.3664 711.646 84.6305 705.736 94.7172C701.703 101.604 691.867 105.168 684.659 104.404C683.259 109.186 682.172 113.77 681.118 118.224C678.247 130.329 675.536 141.765 667.264 154.493C666.619 155.488 665.964 156.481 665.312 157.473C659.242 166.689 653.51 175.394 655.394 182.709C655.514 183.177 655.666 183.638 655.848 184.092C655.922 183.921 655.963 183.824 655.97 183.806C656.478 182.597 657.79 181.94 659.062 182.248C675.792 186.341 697.982 195.644 711.254 202.716C725.691 210.41 729.14 223.978 732.476 237.101C733.666 241.78 734.895 246.616 736.611 251.205C747.003 279.004 752.75 346.845 747.428 388.26C813.122 385.505 929.2 382.174 941.64 382.174C941.771 382.174 941.884 382.174 942.004 382.174C942.542 382.174 943.139 382.17 943.782 382.165C952.62 382.097 969.046 381.949 972.827 392.434C975.468 399.753 956.336 436.262 902.239 527.14C896.624 536.57 891.75 544.761 890.976 546.308C890.663 547.36 889.726 548.132 888.602 548.209C876.314 549.057 841.606 551.442 801.771 554.178C802.288 554.821 802.808 555.46 803.327 556.097C819.915 561.304 834.552 579.413 839.888 595.786C840.502 597.668 840.962 599.541 841.278 601.402H1502.59C1504.07 601.402 1505.25 602.597 1505.25 604.069C1505.25 605.542 1504.07 606.736 1502.59 606.736H841.808C842.378 626.51 827.588 644.472 810.43 654.693C789.687 667.054 765.714 664.565 747.148 661.022C741.906 660.021 736.55 659.137 730.879 658.201C715.688 655.693 699.979 653.1 685.43 648.013C667.619 641.786 653.99 630.101 640.811 618.798C624.9 605.157 609.874 592.27 588.139 588.38C585.159 587.845 582.414 587.296 579.835 586.724C581.982 593.944 582.315 601.674 579.675 609.978C579.66 610.021 579.647 610.064 579.634 610.108C584.588 606.24 590.188 603.542 596.604 602.621C611.318 600.505 640.052 616.262 648.42 628.532C654.087 636.841 651.422 651.472 648.19 662.282C640.914 686.612 622.796 716.917 607.42 723.259C604.772 724.35 602.418 724.896 600.37 724.896",
          fill: "currentColor"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/HomepageIllustration.tsx",
          lineNumber: 9,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/HomepageIllustration.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/Textarea.tsx
import * as React6 from "react";
import _ from "lodash";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function Textarea({
  label,
  errorMessage = `Please enter a valid ${_.lowerCase(label)}`,
  ...props
}) {
  let [isError, setIsError] = React6.useState(!1);
  return /* @__PURE__ */ jsxDEV24("div", { className: "flex flex-col gap-2 mb-6", children: [
    /* @__PURE__ */ jsxDEV24("label", { htmlFor: _.kebabCase(label), children: label }, void 0, !1, {
      fileName: "app/components/ui/Textarea.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(
      "textarea",
      {
        id: _.kebabCase(label),
        onErrorCapture: () => setIsError(!0),
        className: "rounded py-2 px-3 bg-transparent border border-gray-700 dark:border-gray-300",
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/Textarea.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    isError && /* @__PURE__ */ jsxDEV24("p", { className: "text-fuchsia-400", children: errorMessage }, void 0, !1, {
      fileName: "app/components/ui/Textarea.tsx",
      lineNumber: 25,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/Textarea.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/ui/TextInput.tsx
import * as React7 from "react";
import _2 from "lodash";
import { Fragment as Fragment3, jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function TextInput({
  label,
  type = "text",
  errorMessage = `Please enter a valid ${_2.lowerCase(label)}`,
  pattern,
  required,
  ...props
}) {
  let [isError, setIsError] = React7.useState(!1);
  return /* @__PURE__ */ jsxDEV25("div", { className: "flex flex-col gap-1 mb-1", children: [
    /* @__PURE__ */ jsxDEV25("label", { htmlFor: _2.kebabCase(label), className: "font-bold", children: label }, void 0, !1, {
      fileName: "app/components/ui/TextInput.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25(
      "input",
      {
        type,
        id: _2.kebabCase(label),
        onErrorCapture: () => setIsError(!0),
        pattern,
        required,
        onBlur: (e) => {
          if (required && !pattern) {
            setIsError(!e.target.value);
            return;
          }
          if (pattern) {
            let re = new RegExp(pattern);
            setIsError(!re.test(e.target.value));
          }
        },
        className: "rounded py-2 px-3 bg-transparent border border-gray-800 dark:border-gray-300",
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/TextInput.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV25("p", { role: isError ? "alert" : void 0, className: "text-red-500 text-sm", children: isError ? errorMessage : /* @__PURE__ */ jsxDEV25(Fragment3, { children: "\xA0" }, void 0, !1, {
      fileName: "app/components/ui/TextInput.tsx",
      lineNumber: 45,
      columnNumber: 35
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/TextInput.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/TextInput.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/ui/ExternalLink.tsx
import clsx4 from "clsx";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function ExternalLink({
  to,
  children,
  className,
  underlined = !0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV26(
    "a",
    {
      className: clsx4(
        "cursor-pointer",
        underlined && "underline underline-offset-2",
        className
      ),
      href: to,
      target: "_blank",
      rel: "noopener noreferrer",
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/ExternalLink.tsx",
      lineNumber: 19,
      columnNumber: 3
    },
    this
  );
}

// app/components/common/project-card/ProjectCard.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function ProjectCard({
  name,
  summary,
  slug,
  url,
  githubPrimary,
  thumbnail,
  responsive,
  className
}) {
  let resolvedUrl = name === "Portfolio Website" || !url ? githubPrimary : url;
  return /* @__PURE__ */ jsxDEV27(
    "div",
    {
      className: clsx5(
        "flex flex-col px-6 py-8 my-6 border rounded border-gray-300 dark:border-gray-600 max-w-[350px]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV27(
          Link3,
          {
            to: `/projects/${slug}`,
            className: "flex flex-col flex-1 gap-4 mb-6",
            children: [
              /* @__PURE__ */ jsxDEV27("h3", { className: "font-display text-xl mb-2 underline underline-offset-4", children: name }, void 0, !1, {
                fileName: "app/components/common/project-card/ProjectCard.tsx",
                lineNumber: 36,
                columnNumber: 5
              }, this),
              thumbnail ? /* @__PURE__ */ jsxDEV27(
                "img",
                {
                  src: thumbnail,
                  alt: name,
                  className: clsx5("rounded shadow aspect-video w-full")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/common/project-card/ProjectCard.tsx",
                  lineNumber: 40,
                  columnNumber: 6
                },
                this
              ) : /* @__PURE__ */ jsxDEV27("div", { className: "rounded border shadow border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-900 bg-opacity-20 flex justify-center items-center w-full aspect-video font-graphic text-3xl", children: name }, void 0, !1, {
                fileName: "app/components/common/project-card/ProjectCard.tsx",
                lineNumber: 46,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV27("p", { children: summary }, void 0, !1, {
                fileName: "app/components/common/project-card/ProjectCard.tsx",
                lineNumber: 50,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/common/project-card/ProjectCard.tsx",
            lineNumber: 32,
            columnNumber: 4
          },
          this
        ),
        /* @__PURE__ */ jsxDEV27("div", { className: "flex items-center pr-2", children: [
          /* @__PURE__ */ jsxDEV27(
            ExternalLink,
            {
              to: resolvedUrl,
              className: "underline underline-offset-2 mr-auto",
              children: resolvedUrl === githubPrimary ? "GitHub repository" : responsive ? "Deployment (responsive)" : "Deployment (desktop only)"
            },
            void 0,
            !1,
            {
              fileName: "app/components/common/project-card/ProjectCard.tsx",
              lineNumber: 54,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ jsxDEV27(ExternalLink, { to: githubPrimary, children: /* @__PURE__ */ jsxDEV27(GitHubIcon, { label: "GitHub repository link" }, void 0, !1, {
            fileName: "app/components/common/project-card/ProjectCard.tsx",
            lineNumber: 65,
            columnNumber: 6
          }, this) }, void 0, !1, {
            fileName: "app/components/common/project-card/ProjectCard.tsx",
            lineNumber: 64,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/common/project-card/ProjectCard.tsx",
          lineNumber: 53,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/common/project-card/ProjectCard.tsx",
      lineNumber: 26,
      columnNumber: 3
    },
    this
  );
}

// app/root.tsx
import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  Outlet,
  Link as Link4
} from "@remix-run/react";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "stylesheet", href: main_default },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Merriweather&family=Raleway:ital,wght@0,400;1,300&display=swap"
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }
], meta = () => [
  { title: "Alex Nicholas | Front-End Developer" },
  { property: "og:site_name", content: "Alex Nicholas Portfolio" },
  { property: "og:type", content: "website" },
  { property: "twitter:card", content: "summary" }
];
function Document({ children }) {
  let { themePreference } = useThemePreference();
  return /* @__PURE__ */ jsxDEV28("html", { lang: "en", className: themePreference === "dark" ? "dark" : "", children: [
    /* @__PURE__ */ jsxDEV28("head", { children: [
      /* @__PURE__ */ jsxDEV28("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(AvoidFlashOfWrongTheme, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("body", { className: "font-sans leading-relaxed bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-gray-800", children: [
      /* @__PURE__ */ jsxDEV28(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28("main", { className: "px-6 pt-32 max-w-6xl pb-8 container mx-auto", children }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(Scripts, { nonce }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV28(ThemePreferenceProvider, { children: /* @__PURE__ */ jsxDEV28(Document, { children: /* @__PURE__ */ jsxDEV28(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ jsxDEV28(ThemePreferenceProvider, { children: /* @__PURE__ */ jsxDEV28(Document, { children: /* @__PURE__ */ jsxDEV28("div", { children: [
    /* @__PURE__ */ jsxDEV28("h1", { className: "text-2xl", children: "This is not the page you're looking for" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV28(Link4, { to: "/", children: /* @__PURE__ */ jsxDEV28(Button, { variant: "outlined", className: "my-6", children: "Move along" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ jsxDEV28(ThemePreferenceProvider, { children: /* @__PURE__ */ jsxDEV28(Document, { children: /* @__PURE__ */ jsxDEV28("div", { children: [
    /* @__PURE__ */ jsxDEV28("h1", { className: "text-2xl mb-6", children: "Something went wrong." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV28("p", { className: "text-lg", children: [
      "If this issue persists, please let me know via the",
      " ",
      /* @__PURE__ */ jsxDEV28(Link4, { to: "/contact", children: "contact page" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV28(Link4, { to: "/", children: /* @__PURE__ */ jsxDEV28(Button, { variant: "outlined", className: "my-6", children: "Back to safety" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 108,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 107,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader
});

// app/lib/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
global.__db || (global.__db = new PrismaClient()), db = global.__db;

// app/routes/[sitemap.xml].tsx
var date = "2022-02-07T00:15:16+01:00", loader = async () => {
  let projects = await db.project.findMany({ select: { slug: !0 } }), content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://alexnicholas.dev/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>
      ${["about", "projects", "testimonials", "contact"].map((page) => `<url>
        <loc>https://alexnicholas.dev/${page}/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>`).join("")}
      ${projects.map((project) => `<url>
        <loc>https://alexnicholas.dev/projects/${project.slug}/</loc>
        <lastmod>${date}</lastmod>
        <priority>1.0</priority>
      </url>`).join("")}
    </urlset>
    `;
  return new Response(content, {
    status: 200,
    headers: { "Content-Type": "application/xml" }
  });
};

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader2
});
var loader2 = () => {
  let robots = `User-agent: Googlebot
  
User-agent: *
Allow: /

Sitemap: https://alexnicholas.dev/sitemap.xml`;
  return new Response(robots, {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
};

// app/routes/testimonials.tsx
var testimonials_exports = {};
__export(testimonials_exports, {
  default: () => TestimonialsRoute,
  loader: () => loader3,
  meta: () => meta2
});
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var loader3 = async () => (await db.testimonial.findMany({
  select: { value: !0 }
})).sort((a, b) => b.value.length - a.value.length), meta2 = () => [
  { title: "AN | Testimonials" },
  {
    name: "description",
    content: "Some of the nice things people have said about me from my time as a Teaching Assistant. No bribes were involved."
  },
  {
    property: "og:description",
    content: "Some of the nice things people have said about me from my time as a Teaching Assistant. No bribes were involved."
  },
  { property: "og:title", content: "Alex Nicholas | Testimonials" },
  { property: "og:url", content: "https://alexnicholas.dev/testimonials/" },
  {
    property: "og:image",
    content: "https://alexnicholas.dev/images/illustration.webp"
  }
];
function TestimonialsRoute() {
  let testimonials = useLoaderData();
  return /* @__PURE__ */ jsxDEV29("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV29("h1", { className: "text-3xl font-display mb-6", children: "Testimonials" }, void 0, !1, {
      fileName: "app/routes/testimonials.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV29("p", { className: "mb-6", children: "My time as a Teaching Assistant meant a lot to me, not least because I was helping to get people started in a world that I love. At the end of both courses on which I was a TA, the students were invited to provide feedback on the TAs. Below are some of the comments I received." }, void 0, !1, {
      fileName: "app/routes/testimonials.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((testimonial, i) => /* @__PURE__ */ jsxDEV29(
      "article",
      {
        className: "p-4 relative shadow dark:shadow-lg border rounded border-gray-300 dark:border-gray-600 flex justify-center items-center",
        children: [
          /* @__PURE__ */ jsxDEV29(DoubleQuotes, { className: "absolute rotate-180 scale-[5] top-6 left-7 text-gray-300 dark:text-gray-600 text-opacity-30 dark:text-opacity-20 z-[-1]" }, void 0, !1, {
            fileName: "app/routes/testimonials.tsx",
            lineNumber: 51,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV29("p", { children: testimonial.value }, void 0, !1, {
            fileName: "app/routes/testimonials.tsx",
            lineNumber: 52,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV29(DoubleQuotes, { className: "absolute scale-[4] bottom-6 right-8 text-gray-300 dark:text-gray-600 text-opacity-30 dark:text-opacity-20 z-[-1]" }, void 0, !1, {
            fileName: "app/routes/testimonials.tsx",
            lineNumber: 53,
            columnNumber: 7
          }, this)
        ]
      },
      i,
      !0,
      {
        fileName: "app/routes/testimonials.tsx",
        lineNumber: 47,
        columnNumber: 6
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/testimonials.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/testimonials.tsx",
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

// app/routes/thank-you.tsx
var thank_you_exports = {};
__export(thank_you_exports, {
  default: () => ThankYouRoute,
  meta: () => meta3
});
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "AN | Thank you!" },
  { name: "robots", content: "noindex" }
];
function ThankYouRoute() {
  return /* @__PURE__ */ jsxDEV30("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV30("p", { className: "mb-6 text-center md:text-left", children: "Thank you for your message. You should receive a confirmation email shortly." }, void 0, !1, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV30(Link5, { to: "/", children: /* @__PURE__ */ jsxDEV30(Button, { variant: "outlined", className: "mx-auto md:mx-0", children: "Back to the homepage" }, void 0, !1, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/thank-you.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => ProjectIndexRoute,
  loader: () => loader4,
  meta: () => meta4
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var loader4 = async () => await db.project.findMany({
  include: {
    technologies: !0
  },
  orderBy: {
    projectDate: "desc"
  }
}), meta4 = () => [
  { title: "AN | Projects" },
  {
    name: "description",
    content: "Here are some of my side projects. Like most devs, I love tinkering and have a number of works in progress. But these are the ones that got the most love."
  },
  {
    property: "og:description",
    content: "Here are some of my side projects. Like most devs, I love tinkering and have a number of works in progress. But these are the ones that got the most love."
  },
  { property: "og:title", content: "Alex Nicholas | Projects" },
  { property: "og:url", content: "https://alexnicholas.dev/projects/" },
  {
    property: "og:image",
    content: "https://alexnicholas.dev/images/illustration.webp"
  }
];
function ProjectIndexRoute() {
  let projects = useLoaderData2();
  return /* @__PURE__ */ jsxDEV31("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV31("h1", { className: "text-3xl font-display mb-6", children: "Projects" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV31("p", { children: "Here are some of my side projects. Like most devs, I love tinkering and have a number of works in progress. But these are the ones that got the most love. I'm a React developer first and foremost, so most of these use React. Having worked with TypeScript, I can't contemplate React without it, so my more recent work is properly typed." }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV31("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch", children: projects.map((project) => /* @__PURE__ */ jsxDEV31(
      ProjectCard,
      {
        ...project,
        projectDate: new Date(project.projectDate)
      },
      project.name,
      !1,
      {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 54,
        columnNumber: 6
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 43,
    columnNumber: 3
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => ContactRoute,
  meta: () => meta5
});
import { redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/lib/sendgrid.server.ts
var baseConfig = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    "Content-Type": "application/json"
  }
};
async function sendEmails({
  name,
  email,
  message,
  alertRecipient = "al.nicholas@gmail.com"
}) {
  await sendAlertEmail({ name, email, message, alertRecipient }), await sendConfirmationEmail({ name, email });
}
async function sendAlertEmail({
  name,
  email,
  message,
  alertRecipient
}) {
  await fetch("https://api.sendgrid.com/v3/mail/send", {
    ...baseConfig,
    body: JSON.stringify({
      from: {
        email: "me@alexnicholas.dev",
        name: "Alex Nicholas"
      },
      personalizations: [
        {
          to: [{ email: alertRecipient }],
          dynamic_template_data: { name, email, message }
        }
      ],
      template_id: "d-8776a89b59ee480e9d14a6d7449a140e"
    })
  }).then((res) => console.log("alert response:", res)).catch((err) => console.error(err));
}
async function sendConfirmationEmail({ name, email }) {
  console.log("sending confirmation email to", email), await fetch("https://api.sendgrid.com/v3/mail/send", {
    ...baseConfig,
    body: JSON.stringify({
      from: {
        email: "me@alexnicholas.dev",
        name: "Alex Nicholas"
      },
      personalizations: [
        {
          to: [{ email }],
          dynamic_template_data: { name }
        }
      ],
      template_id: "d-5d971a987fd04d4cb4f84fc62f78f11d"
    })
  }).then((res) => console.log("confirmation response:", res)).catch((err) => console.error(err));
}

// app/routes/contact.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
var action = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), message = formData.get("message"), honeypot = formData.get("phone-number");
  if (invariant(typeof name == "string"), invariant(typeof email == "string"), invariant(typeof message == "string"), honeypot)
    return {
      name,
      email,
      message,
      error: honeypot
    };
  try {
    await sendEmails({ name, email, message });
  } catch (error) {
    return console.error(error), {
      error,
      name,
      email,
      message
    };
  }
  return redirect("/thank-you");
}, meta5 = () => [
  { title: "AN | Contact" },
  {
    name: "description",
    content: "If you want to get in touch with me just send me a message using the form, or drop me an email."
  },
  {
    property: "og:description",
    content: "If you want to get in touch with me just send me a message using the form, or drop me an email."
  },
  { property: "og:title", content: "Alex Nicholas | Contact me" },
  { property: "og:url", content: "https://alexnicholas.dev/contact/" },
  {
    property: "og:image",
    content: "https://alexnicholas.dev/images/illustration.webp"
  }
];
function ContactRoute() {
  let actionData = useActionData(), navigation = useNavigation();
  return /* @__PURE__ */ jsxDEV32("section", { className: "mx-auto md:grid md:grid-cols-2 gap-8 lg:gap-20", children: [
    /* @__PURE__ */ jsxDEV32("div", { children: [
      /* @__PURE__ */ jsxDEV32("h1", { className: "text-3xl font-display mb-8", children: "Contact me" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV32(Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV32(
          TextInput,
          {
            label: "Name",
            name: "name",
            autoComplete: "name",
            defaultValue: actionData?.name,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 80,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV32(
          TextInput,
          {
            label: "Email",
            name: "email",
            autoComplete: "email",
            defaultValue: actionData?.email,
            pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 87,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV32(
          Textarea,
          {
            label: "Message",
            name: "message",
            defaultValue: actionData?.message,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 95,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV32(
          "input",
          {
            type: "tel",
            style: { position: "absolute", left: -9999, top: -9999 },
            name: "phone-number",
            id: "phone-number",
            tabIndex: -1,
            autoComplete: "false",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 103,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV32(
          Button,
          {
            variant: "outlined",
            type: "submit",
            className: "my-10 w-28 h-12",
            defaultPadding: !1,
            children: navigation.state === "submitting" ? /* @__PURE__ */ jsxDEV32(LoadingIcon, { className: "mx-auto" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 119,
              columnNumber: 8
            }, this) : "Submit"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 112,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 79,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 77,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV32("div", { className: "md:mt-20", children: actionData?.error ? /* @__PURE__ */ jsxDEV32("p", { className: "text-fuchsia-400", children: [
      "Sorry, there was an error, please try again or email me directly at",
      " ",
      /* @__PURE__ */ jsxDEV32(ExternalLink, { to: "mailto:me@alexnicholas.dev", children: "me@alexnicholas.dev" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 128,
      columnNumber: 6
    }, this) : /* @__PURE__ */ jsxDEV32("p", { children: [
      "Alternatively, you can email me directly at",
      " ",
      /* @__PURE__ */ jsxDEV32(ExternalLink, { to: "mailto:me@alexnicholas.dev", children: "me@alexnicholas.dev" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 138,
        columnNumber: 7
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 136,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 126,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 76,
    columnNumber: 3
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute,
  links: () => links2,
  meta: () => meta6
});
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
var links2 = () => [
  { rel: "preload", as: "image", href: "/images/profile-photo.webp" }
], meta6 = () => [
  {
    title: "AN | About",
    description: "Hi, I'm Alex. I came to coding later in life than I would have liked, but I'm making up for lost time.",
    "og:description": "Hi, I'm Alex. I came to coding later in life than I would have liked, but I'm making up for lost time.",
    "og:title": "Alex Nicholas | About Me",
    "og:url": "https://alexnicholas.dev/about/",
    "og:image": "https://alexnicholas.dev/images/profile-photo.webp"
  }
];
function AboutRoute() {
  return /* @__PURE__ */ jsxDEV33("article", { className: "container mt-4 mx-auto", children: [
    /* @__PURE__ */ jsxDEV33("section", { className: "md:grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxDEV33("div", { children: [
        /* @__PURE__ */ jsxDEV33("h1", { className: "text-3xl font-display mb-6 md:text-4xl", children: "Who am I?" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 27,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV33("p", { className: "mb-4", children: [
          "Hi, I'm ",
          /* @__PURE__ */ jsxDEV33("span", { className: "font-graphic text-lg", children: "Alex" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 29,
            columnNumber: 20
          }, this),
          ". I came to coding later in life than I would have liked, but I'm making up for lost time. This is me in a garden",
          /* @__PURE__ */ jsxDEV33("span", { className: "md:hidden", children: ":" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 32,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV33("span", { className: "mobile:hidden", children: " \u2192" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 33,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 28,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV33(
          "img",
          {
            src: "/images/profile-photo.webp",
            alt: "profile shot of Alex in a garden looking at the camera",
            className: "w-full mx-auto aspect-square rounded my-4 md:hidden shadow-md dark:shadow-gray-900"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 35,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV33("p", { className: "mb-2", children: "I have two core beliefs:" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 40,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV33("ol", { className: "list-decimal list-inside mb-4", children: [
          /* @__PURE__ */ jsxDEV33("li", { children: "That anything you want to do in software engineering is possible;" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 42,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV33("li", { children: "That a computer won't beat me if I work hard enough at a problem." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 45,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 41,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV33("p", { className: "mb-12", children: `So far, that's held true (though possible does not always mean practicable). My fortuitous cocktail of optimism, thirst for knowledge, stubborn grit, curiosity, and willingness to "dive in" have served me well and I am now comfortable tackling most front-end problems that come my way.` }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 50,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV33(
        "img",
        {
          src: "/images/profile-photo.webp",
          alt: "profile shot of Alex in a garden looking at the camera",
          className: "w-full mx-auto aspect-square rounded mobile:hidden md:block max-w-sm shadow-md dark:shadow-gray-900"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 58,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 25,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV33("section", { children: [
      /* @__PURE__ */ jsxDEV33("h2", { className: "text-3xl font-display mb-6", children: "Where did I come from?" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV33("p", { className: "mb-4", children: "Geographically speaking, I was brought up in Kent but then my family moved to France, and later Spain, so there's been a heavy European influence. I like a siesta and have an addiction to gazpacho." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 66,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV33("p", { className: "mb-4", children: "I studied law, which was great for my problem-solving side, but did nothing for my creativity. Fortunately, I realised this quite early on and moved into less constrained workplaces in luxury leisure and hospitality." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 71,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV33("p", { className: "mb-12", children: "Computers have always seemed to like me, or perhaps I'm lucky with them, but they often seem to do what I want them to do. And I like them. Because of this, every job I've been in has ended up having a heavy tech element. I wrote my first bit of code in 2019\u2014a Python script that interacted with the Apple News and HubSpot APIs\u2014and applied for a coding bootcamp shortly after, resolved to turn coding into a career." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 77,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV33("section", { children: [
      /* @__PURE__ */ jsxDEV33("h2", { className: "text-3xl font-display mb-6", children: "Where am I going?" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 88,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV33("p", { className: "mb-4", children: "This sounds artificial, but I want to be the best coder I can be. Someone another developer would be glad to work with. Someone who writes clean, well-documented, maintainable code that a newcomer could navigate with relative ease." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 89,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV33("p", { children: "I want to keep learning and to develop my skills in an environment where my coding knowledge and abilities are constantly pushed to their limits." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 95,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 87,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader5,
  meta: () => meta7
});
import { Link as Link6, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
var links3 = () => [
  "/images/shuttle-sm.png",
  "/images/trello-sm.png",
  "/images/portfolio-sm.webp"
].map((href) => ({
  rel: "preload",
  as: "image",
  href
})), meta7 = () => [
  { title: "Alex Nicholas | Front-End Developer" },
  { property: "og:title", content: "Alex Nicholas | Front-End Developer" },
  {
    name: "description",
    content: "Alex is a front-end developer working with React, TypeScript, Next.js, Remix, and any other tool he can get his hands on."
  },
  {
    property: "og:description",
    content: "Alex is a front-end developer working with React, TypeScript, Next.js, Remix, and any other tool he can get his hands on."
  },
  { property: "og:url", content: "https://alexnicholas.dev/" },
  {
    property: "og:image",
    content: "https://alexnicholas.dev/images/illustration.webp"
  }
], loader5 = async () => await db.project.findMany({
  where: { showOnHomePage: !0 },
  include: { technologies: !0 },
  orderBy: { projectDate: "desc" },
  take: 3
});
function Index() {
  let recentProjects = useLoaderData3();
  return /* @__PURE__ */ jsxDEV34("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxDEV34("section", { className: "md:grid grid-cols-5 gap-12 items-center md:my-16 lg:my-24", children: [
      /* @__PURE__ */ jsxDEV34("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxDEV34("h1", { className: "text-5xl font-graphic md:text-6xl", children: "Alex Nicholas" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV34("h2", { className: "text-xl font-sans md:mb-6 lg:text-2xl", children: "Front-End Web Developer" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV34(HomepageIllustration, { className: "py-8 md:hidden" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV34(ExternalLink, { to: "/assets/cv.pdf", underlined: !1, children: /* @__PURE__ */ jsxDEV34(
          Button,
          {
            variant: "outlined",
            className: "mx-auto mb-12 md:mx-0 md:mb-8",
            children: "View CV"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 65,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV34(HomepageIllustration, { className: "mobile:hidden md:block col-span-3" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV34("section", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV34("h2", { className: "mt-6 mb-8 font-display text-4xl", children: "Recent projects" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV34("div", { className: "grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch", children: recentProjects.map((project, index) => /* @__PURE__ */ jsxDEV34(
        ProjectCard,
        {
          className: index === 1 ? "mobile:hidden md:flex" : index === 2 ? "mobile:hidden md:hidden lg:flex" : "",
          ...project,
          projectDate: new Date(project.projectDate)
        },
        project.name,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 79,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV34(Link6, { to: "/projects", children: /* @__PURE__ */ jsxDEV34(Button, { variant: "outlined", className: "mx-auto my-6", children: "See more projects" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogRoute
});
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
function BlogRoute() {
  return /* @__PURE__ */ jsxDEV35("h1", { children: "Coming soon..." }, void 0, !1, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/projects/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => SingleProjectRoute,
  loader: () => loader6,
  meta: () => meta8
});
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import * as React8 from "react";
import invariant2 from "tiny-invariant";
import { Fragment as Fragment4, jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
var loader6 = async ({ params }) => {
  let { slug } = params;
  invariant2(slug, "Expected params.slug");
  let project = await db.project.findUnique({
    where: { slug },
    include: { technologies: !0 }
  });
  if (!project)
    throw new Error(`Could not find project with slug "${slug}"`);
  return project;
}, meta8 = ({ data }) => [
  { title: `AN | ${data?.name}` },
  { name: "description", content: data?.summary },
  { property: "og:description", content: data?.summary },
  { property: "og:title", content: `AN | Projects | ${data?.name}` },
  {
    property: "og:url",
    content: `https://alexnicholas.dev/projects/${data?.slug}/`
  },
  {
    property: "og:image",
    content: `https://alexnicholas.dev${data?.thumbnail ?? "/images/illustration.webp"}`
  }
];
function SingleProjectRoute() {
  let project = useLoaderData4();
  return /* @__PURE__ */ jsxDEV36("article", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV36("h1", { className: "text-4xl mb-6 md:text-5xl font-graphic md:mb-8", children: project.name }, void 0, !1, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this),
    project.image ? /* @__PURE__ */ jsxDEV36(
      "img",
      {
        src: project.image,
        alt: project.name,
        className: "w-full aspect-video rounded"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/$slug.tsx",
        lineNumber: 50,
        columnNumber: 5
      },
      this
    ) : null,
    /* @__PURE__ */ jsxDEV36("div", { className: "flex flex-wrap gap-x-3 gap-y-2 my-6", children: project.technologies.map((technology) => /* @__PURE__ */ jsxDEV36(
      ExternalLink,
      {
        to: technology.url,
        underlined: !1,
        className: "w-max inline-block px-2 py-[2px] text-sm border rounded",
        children: technology.name
      },
      technology.id,
      !1,
      {
        fileName: "app/routes/projects/$slug.tsx",
        lineNumber: 58,
        columnNumber: 6
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 56,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV36("div", { className: "my-6", children: project.description.split(`
`).map((paragraph) => /* @__PURE__ */ jsxDEV36("p", { className: "pb-4", children: paragraph }, paragraph, !1, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 70,
      columnNumber: 6
    }, this)) }, void 0, !1, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 68,
      columnNumber: 4
    }, this),
    project.url && /* @__PURE__ */ jsxDEV36(
      StyledExternalLink,
      {
        to: project.url,
        icon: /* @__PURE__ */ jsxDEV36(GlobeIcon, {}, void 0, !1, {
          fileName: "app/routes/projects/$slug.tsx",
          lineNumber: 78,
          columnNumber: 12
        }, this),
        label: "Deployment link",
        text: project.responsive ? "Deployment (responsive)" : "Deployment (desktop only)"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/$slug.tsx",
        lineNumber: 76,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ jsxDEV36("div", { children: project.githubSecondary ? /* @__PURE__ */ jsxDEV36(Fragment4, { children: [
      /* @__PURE__ */ jsxDEV36(
        StyledExternalLink,
        {
          to: project.githubPrimary,
          icon: /* @__PURE__ */ jsxDEV36(GitHubIcon, {}, void 0, !1, {
            fileName: "app/routes/projects/$slug.tsx",
            lineNumber: 92,
            columnNumber: 14
          }, this),
          label: "GitHub front-end repository link",
          text: "Front-end Repository"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects/$slug.tsx",
          lineNumber: 90,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV36("br", {}, void 0, !1, {
        fileName: "app/routes/projects/$slug.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV36(
        StyledExternalLink,
        {
          to: project.githubSecondary,
          icon: /* @__PURE__ */ jsxDEV36(GitHubIcon, {}, void 0, !1, {
            fileName: "app/routes/projects/$slug.tsx",
            lineNumber: 99,
            columnNumber: 14
          }, this),
          label: "GitHub back-end repository link",
          text: "Back-end Repository"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects/$slug.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 89,
      columnNumber: 6
    }, this) : /* @__PURE__ */ jsxDEV36(
      StyledExternalLink,
      {
        to: project.githubPrimary,
        icon: /* @__PURE__ */ jsxDEV36(GitHubIcon, {}, void 0, !1, {
          fileName: "app/routes/projects/$slug.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        label: "GitHub repository link",
        text: "GitHub Repository"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/$slug.tsx",
        lineNumber: 105,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 87,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/$slug.tsx",
    lineNumber: 45,
    columnNumber: 3
  }, this);
}
function StyledExternalLink({
  to,
  label,
  text,
  icon
}) {
  return /* @__PURE__ */ jsxDEV36(ExternalLink, { to, className: "inline-flex items-center gap-2", children: [
    React8.cloneElement(icon, {
      label,
      className: "scale-125 z-[-1]"
    }),
    /* @__PURE__ */ jsxDEV36("span", { children: text }, void 0, !1, {
      fileName: "app/routes/projects/$slug.tsx",
      lineNumber: 135,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/$slug.tsx",
    lineNumber: 130,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OUMCYJFJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-TEW5DMRM.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-54ZSY4AL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FNCHRRZH.js", imports: ["/build/_shared/chunk-EHXFH7DA.js", "/build/_shared/chunk-JKLOFMSO.js", "/build/_shared/chunk-LZMNKQM2.js", "/build/_shared/chunk-QMPBWRQM.js", "/build/_shared/chunk-5N4VCWXC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-XTGKYFIJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-MCEDME5I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-A3SO4MKG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/index-CQQFOW4Y.js", imports: ["/build/_shared/chunk-YT2D26AE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-CQQFOW4Y.js", imports: ["/build/_shared/chunk-YT2D26AE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-2U4Q6QLY.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-UOXYRIHU.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CDYZZOB2.js", imports: ["/build/_shared/chunk-V3DBHLEG.js", "/build/_shared/chunk-7H7MXX2X.js", "/build/_shared/chunk-LZWCCD6J.js", "/build/_shared/chunk-UOXYRIHU.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/index-7FBFVPIA.js", imports: ["/build/_shared/chunk-WJMUEOSO.js", "/build/_shared/chunk-V3DBHLEG.js", "/build/_shared/chunk-7H7MXX2X.js", "/build/_shared/chunk-LZWCCD6J.js", "/build/_shared/chunk-UOXYRIHU.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-7FBFVPIA.js", imports: ["/build/_shared/chunk-WJMUEOSO.js", "/build/_shared/chunk-V3DBHLEG.js", "/build/_shared/chunk-7H7MXX2X.js", "/build/_shared/chunk-LZWCCD6J.js", "/build/_shared/chunk-UOXYRIHU.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects/$slug": { id: "routes/projects/$slug", parentId: "root", path: "projects/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/$slug-RLD2Y432.js", imports: ["/build/_shared/chunk-7H7MXX2X.js", "/build/_shared/chunk-LZWCCD6J.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-UOXYRIHU.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/testimonials": { id: "routes/testimonials", parentId: "root", path: "testimonials", index: void 0, caseSensitive: void 0, module: "/build/routes/testimonials-WCKS4XYA.js", imports: ["/build/_shared/chunk-LZWCCD6J.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/thank-you": { id: "routes/thank-you", parentId: "root", path: "thank-you", index: void 0, caseSensitive: void 0, module: "/build/routes/thank-you-F3OMNGS6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "aa5a8cf1", hmr: { runtime: "/build/_shared/chunk-54ZSY4AL.js", timestamp: 1709329084375 }, url: "/build/manifest-AA5A8CF1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/testimonials": {
    id: "routes/testimonials",
    parentId: "root",
    path: "testimonials",
    index: void 0,
    caseSensitive: void 0,
    module: testimonials_exports
  },
  "routes/thank-you": {
    id: "routes/thank-you",
    parentId: "root",
    path: "thank-you",
    index: void 0,
    caseSensitive: void 0,
    module: thank_you_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/projects/$slug": {
    id: "routes/projects/$slug",
    parentId: "root",
    path: "projects/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
