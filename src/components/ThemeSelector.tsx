import { useState } from "react";
import { Helmet } from "react-helmet";

// should be the same as names of the files in /public/themes
const themes = ["light", "dark"] as const;
type SupportedThemes = (typeof themes)[number];

function ThemeSelector(): JSX.Element {
  const [selectedTheme, setSelectedTheme] = useState<SupportedThemes>("light");
  console.log({ selectedTheme });
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={`themes/${selectedTheme}.css`} />
      </Helmet>
      <label htmlFor="themes">Theme:</label>
      <select
        name="themes"
        id="themes"
        // TODO: Change the entire toggle select component, the casting cannot stay :)
        onChange={(e) => setSelectedTheme(e.target.value as SupportedThemes)}
      >
        {themes.map((theme) => (
          <option key={theme}>{theme}</option>
        ))}
      </select>
    </>
  );
}

export default ThemeSelector;
