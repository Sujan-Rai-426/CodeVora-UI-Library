import dts from "rollup-plugin-dts";

export default {
    input: "src/index.d.ts", // your main barrel
    output: {
        file: "dist/index.d.ts",
        format: "es",
    },
    plugins: [dts()],
};
