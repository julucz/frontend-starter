import { Helmet } from "react-helmet";
import { useLocalStorage } from "react-use";

// should be the same as names of the files in /public/themes
const themes = ["light", "dark"] as const;
type SupportedThemes = (typeof themes)[number];

function ThemeSelector(): JSX.Element {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<SupportedThemes>("theme", "light");
  // TODO: sync with system preferences whether light or dark by default
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
