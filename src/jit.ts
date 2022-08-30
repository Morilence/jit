import { Repo } from "./repo";
import { git } from "./git";
import { assert, JitErrorMessageGenerator as JEMG } from "./error";

export class Jit {
    #repos: Map<string, Repo>;

    constructor() {
        assert(err => {
            const { status, stderr } = git("-v");
            if (status !== 0) err(stderr);
        });

        this.#repos = new Map();
    }

    repo(path: string): Repo {
        assert(path !== undefined, JEMG.notDefined("path"));
        assert(!!path, JEMG.notStr("path"));
        if (this.#repos.has(path)) {
            return this.#repos.get(path);
        } else {
            const repo = new Repo(path);
            this.#repos.set(path, repo);
            return repo;
        }
    }
}