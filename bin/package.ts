import fs from "node:fs";
import slugify from "slugify";
import child_process from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync(`${import.meta.dirname}/../manifest.json`).toString('utf8'));

const name = slugify(manifest.name, { strict: true, replacement: "" });
const version = manifest.version.replaceAll(".", "_");

const packagePath = `build/${name}-${version}.zip`;
try {
  fs.mkdirSync(`${import.meta.dirname}/../build`, {recursive: true});
} catch {
  // do nothing as the folder already existing is fine.
}
child_process.execSync(`zip -r ${import.meta.dirname}/../${packagePath} .`, {
  cwd: `${import.meta.dirname}/../dist`,
});

console.info(`App package version ${manifest.version} created: ${packagePath}`);
