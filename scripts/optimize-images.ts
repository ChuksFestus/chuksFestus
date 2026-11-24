import { mkdir, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

type Job = {
	name: string;
	src: string;
	widths: number[];
	outDir?: string;
	density?: number;
	quality?: number;
};

const workImages = ["edcentral", "suregifts", "swwipe", "busha", "secoura"];

const jobs: Job[] = [
	{ name: "hero", src: "assets/source/images/hero.png", widths: [800, 1600, 2000] },
	{ name: "portrait", src: "assets/source/images/portrait.png", widths: [575, 1150] },
	{ name: "avatar", src: "assets/source/images/avatar.png", widths: [136] },
	{ name: "mockup", src: "assets/source/images/mockup.webp", widths: [1600] },
	...workImages.map((name): Job => ({
		name,
		src: `assets/source/images/works/${name}.svg`,
		widths: [800, 1600],
		outDir: "works",
		density: 576,
	})),
];

const outputRoot = "public/img";

await rm(outputRoot, { recursive: true, force: true });
await mkdir(join(outputRoot, "works"), { recursive: true });

const formatBytes = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;
const rows: Array<Record<string, string>> = [];

for (const job of jobs) {
	const sourceSize = (await stat(job.src)).size;

	for (const width of job.widths) {
		const output = join(outputRoot, job.outDir ?? "", `${job.name}-${width}.webp`);
		await mkdir(dirname(output), { recursive: true });

		await sharp(job.src, job.density ? { density: job.density } : undefined)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: job.quality ?? 82, effort: 5 })
			.toFile(output);

		const outputSize = (await stat(output)).size;
		const metadata = await sharp(output).metadata();

		rows.push({
			output,
			dimensions: `${metadata.width}x${metadata.height}`,
			before: formatBytes(sourceSize),
			after: formatBytes(outputSize),
			saved: `${(100 - (outputSize / sourceSize) * 100).toFixed(0)}%`,
		});
	}
}

console.table(rows);
