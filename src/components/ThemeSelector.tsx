import { Helmet } from "react-helmet";
import { useLocalStorage } from "react-use";

// Should be the same as names of the files in /public/themes
const themes = ["light", "dark"] as const;
type SupportedThemes = (typeof themes)[number];

function ThemeSelector(): JSX.Element {
  const doesPreferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [selectedTheme, setSelectedTheme] = useLocalStorage<SupportedThemes>(
    "theme",
    doesPreferDark ? "dark" : "light"
  );

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={`themes/${selectedTheme}.css`} />
      </Helmet>
      <label htmlFor="themes">Theme:</label>
      <select
        name="themes"
        id="themes"
        onChange={(e) => setSelectedTheme(e.target.value as SupportedThemes)}
      >
        {themes.map((theme) => (
          <>
            {theme === selectedTheme ? (
              <option key={theme} selected>
                {theme}
              </option>
            ) : (
              <option key={theme}>{theme}</option>
            )}
          </>
        ))}
      </select>
    </>
  );
}

export default ThemeSelector;
