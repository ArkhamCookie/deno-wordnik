import { build, emptyDir } from 'https://deno.land/x/dnt@0.38.1/mod.ts'

await emptyDir('./npm')

await build({
	entryPoints: ['./src/mod.js'],
	outDir: './npm',
	shims: {
		deno: true
	},
	packageManager: 'pnpm',
	importMap: 'deno.jsonc',
	package: {
		name: 'deno-wordnik',
		version: '0.0.0',
		description: "A Deno library/module for Wordnik's API",
		license: 'AGPL-3.0-or-later',
		repository: {
			type: 'git',
			url: 'git+https://github.com/ArkhamCookie/deno-wordnik.git'
		},
		bugs: {
			url: 'https://github.com/ArkhamCookie/deno-wordnik/issues'
			// 'https://github.com/ArkhamCookie/deno-wordnik/issues/new?assignees=&labels=bug&projects=&template=BUG_REPORT.yaml&title=%5BBUG%5D%3A+'
		}
	},
	postBuild() {
		Deno.copyFileSync('LICENSE', 'npm/LICENSE')
		Deno.copyFileSync('src/README.md', 'npm/README.md')
	}
})
