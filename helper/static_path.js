import pkg from "../package.json";
const path_map = {
    repo: function () {
        return `/${pkg.name}/`;
    },
    root: function () {
        return "/";
    },
};
export default function (key) {
    return path_map[key]();
}
