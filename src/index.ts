import { promises as fs } from "fs";
import theme from "./theme";
import colorsBase from "./colors/base.json";
import colorsMidnight from "./colors/midnight.json";

const themeBase = theme({
  name: "Cherry",
  colorScheme: colorsBase,
});

const themeMidnight = theme({
  name: "Cherry Midnight",
  colorScheme: colorsMidnight,
});

const dir = "./themes";

try {
  await fs.mkdir(dir, { recursive: true });
  fs.writeFile(`${dir}/base.json`, JSON.stringify(themeBase, null, 2));
  fs.writeFile(`${dir}/midnight.json`, JSON.stringify(themeMidnight, null, 2));
} catch (e) {
  process.exit(1);
}
